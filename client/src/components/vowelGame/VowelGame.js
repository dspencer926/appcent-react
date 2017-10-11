import React, { Component } from 'react';

import CheatSheet from './CheatSheet';
import VowelChoice from './VowelChoice';
import GameOn from './GameOn';
import GameOver from './GameOver';

class VowelGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      wordData: null,
      counter: 0,             //# of rounds so far this game instance
      currentVowels: [],        //array of vowels for current game instance
      currentWords: [],       //array of words for current game instance
      stats: {
        vowelCount: {                 //how many times user has answered for each vowel this instance
          'iy': 0, 'ɪ': 0, ey: 0, 'ɛ': 0,
          'æ': 0, 'ɑ': 0, 'ʊ': 0, 'ɔ': 0, 
          'ou': 0, 'uw': 0, 'ə': 0,
        },                                                 
        vowelCorrect: {               //how many times user has answered correctly per vowel
          'iy': 0, 'ɪ': 0, ey: 0, 'ɛ': 0,          
          'æ': 0, 'ɑ': 0, 'ʊ': 0, 'ɔ': 0, 
          'ou': 0, 'uw': 0, 'ə': 0,    
        },
      },
      vowelChoices: [],      //vowels user chose before game
      vowelAnswers: [],      //three vowel choices for current round
      wdsThisGame: 0,        // number of rounds (words) this game. will be determined by how many vowels user chooses pre-game ( * 5)
      thisRound: {
        word: null,
        vowelOptions: [],
      }
    }

    this.gameStart = this.gameStart.bind(this);
    this.newArray = this.newArray.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.newVowels = this.newVowels.bind(this);
    this.newRound = this.newRound.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

componentDidMount() {
  this.setState({status: 'vowelChoice'});

  fetch('/api/words', {
    'method': 'GET',
    'credentials': 'same-origin',
    // 'headers': {
    //   'Content-Type': 'json/application',
    // },
    // 'body': {
    //   'vowels': this.state.vowelChoices,
    //   'totalNum': this.state.wdsThisGame,
    // }
  })
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    this.setState({currentWords: json.words})
  })
}



gameStart(vowels) {
  console.log('game start')
  console.log(vowels);
  this.setState({
    counter: 0,
    currentVowels: vowels,
  }, this.newArray);
}


newArray() {
  let vowels = this.state.currentVowels;
  let currentWords = [];
  console.log(vowels);
  console.log(this.state.currentWords);
  this.state.currentVowels.forEach((vowel) => {                                
    let newWords = this.state.currentWords.filter((val) => {       //  filter
      return val.vowel === vowel;                                 //  returns only words with chosen vowels
    })
    currentWords = currentWords.concat(newWords)
  });
  currentWords = this.shuffle(currentWords);
  this.newRound(currentWords);
}

shuffle(array) {  //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
 
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

newRound(array, vowel, correct, word) {
  console.log(`vowel: ${vowel}`)
  console.log(`correct: ${correct}`)
  if (vowel) {
    let stats = this.state.stats;
    stats.vowelCount[vowel]++;
    if (correct) {
      console.log(stats.vowelCorrect[vowel]);
      stats.vowelCorrect[vowel]++;
      console.log(stats.vowelCorrect[vowel]);
    }
    this.setState({
        stats: stats,
    }, ()=> {    console.log(`${vowel} correct: ${stats.vowelCorrect[vowel]}`);
    console.log(`${vowel} total: ${stats.vowelCount[vowel]}`);
    console.log(`${vowel} word: ${word}`);
  })
  }
  console.log(array);
  if (array.length > 0) {
    let newWord = array[0];                                                               // sets up for new round
    let vowelOptions = this.newVowels(newWord.vowel, this.state.currentVowels)            // vowel from new word 
    this.setState({
      currentWords: array,
      status: 'gameOn',
      thisRound: {
        word: newWord,
        vowelOptions: vowelOptions,
      }
    })
  } else {
    this.gameOver();
  }
}

newVowels(ctVowel, vowels) {
  vowels = vowels.filter((val) => {
    return val !== ctVowel
  });
  console.log(vowels);
  let counter = 0;
  let newVowelSet = [ctVowel];
  while (newVowelSet.length < 3) {
    let randomNumber = Math.floor(Math.random() * vowels.length);
    if (newVowelSet.indexOf(vowels[randomNumber]) === -1) {
      newVowelSet.push(vowels[randomNumber]);
    }
  }
  return this.shuffle(newVowelSet);
}

gameOver() {
  this.setState({
    status: 'gameOver',
  })
}

  render() {
    let toRender;
    switch (this.state.status) {
      case 'vowelChoice': toRender = <VowelChoice gameStart={this.gameStart}/>;
        break;
      case 'gameOn': toRender = 
        <GameOn
          word={this.state.thisRound.word}
          vowelOptions={this.state.thisRound.vowelOptions}
          newRound={this.newRound}
          wordArray={this.state.currentWords}
        />
        break;
      case 'gameOver': toRender = <GameOver 
        stats={this.state.stats} 
        vowels={this.state.currentVowels}
      />;
        break;
    }
    return (
      <div>{toRender}</div>
      )
  }
}

export default VowelGame;
