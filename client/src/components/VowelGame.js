import React, { Component } from 'react';

class VowelGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordData: null,
      counter: 0,             //# of rounds so far this game instance
      vowelsInUse: [],        //array of vowels for current game instance
      vowelCount: {
        iy: 0, ɪ: 0, ey: 0, ɛ: 0, æ: 0, ɑ: 0, ʊ: 0, ɔ: 0, ou: 0, uw: 0, ə: 0      //how many times user has answered
      },                                                                          //for each vowel this instance
      vowelCorrect: {
        iy: 0, ɪ: 0, ey: 0, ɛ: 0, æ: 0, ɑ: 0, ʊ: 0, ɔ: 0, ou: 0, uw: 0, ə: 0      //how many times user has answered correctly per vowel
      },
      vowelChoices: [],               //vowels user chose before game
      currentWords: [],               //array of words for current game instance
      vowelAnswers: [],               //three vowel choices for current round
      wdsThisGame: 0,                 //    number of rounds (words) this game. will be determined by how many vowels user
                                //    chooses pre-game ( * 5)

    }
  }

componentDidMount() {
  fetch('/api/words', {
    'method': 'POST',
    'credentials': 'same-origin',
    'headers': {
      'Content-Type': 'json/application',
    },
    'body': {
      'vowels': this.state.vowelChoices,
      'totalNum': this.state.wdsThisGame,
    }
  })
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    console.log(json);
  })
}



gameStart() {
  console.log('game start')               
  gameState.counter = 0;     
  newArray(data);
  console.log(`game start ${gameState.currentWords}`)     
  let choice1 = document.getElementById('choice1');
  choice1.addEventListener('click', choiceClick);
  let choice2 = document.getElementById('choice2');
  choice2.addEventListener('click', choiceClick);
  let choice3 = document.getElementById('choice3');
  choice3.addEventListener('click', choiceClick);
  console.log(`in gameStart: ${gameState.currentWords}`)
  newRound();
}

newRound() {                    //sets up for new round
  gameState.counter++;
  choice1.style.background = '#FF6B35';
  choice2.style.background = '#FF6B35';
  choice3.style.background = '#FF6B35';
  wordBox.innerHTML = gameState.currentWords[gameState.counter].word;
  document.getElementById('audio').setAttribute('src', gameState.currentWords[gameState.counter].sound)
  newAnswers(gameState.vowelsInUse, gameState.currentWords[gameState.counter].vowel);
  console.log(gameState.vowelAnswers)
  choice1.innerHTML = gameState.vowelAnswers[0];
  choice2.innerHTML = gameState.vowelAnswers[1];
  choice3.innerHTML = gameState.vowelAnswers[2];
  document.getElementById('audio').play()
}

newArray() {                                                         // creates new array of unique words
  gameState.currentWords = []
  while (gameState.currentWords.length < gameState.wdsThisGame) {    //<---- number of rounds per game
    let rando = Math.floor(Math.random() * wordData.length);
    for (let i = 0; i < gameState.vowelsInUse.length; i++) {
      if (gameState.vowelsInUse[i] === data[rando].vowel) {
        if (noDoubleWords(data[rando].word)) {
          gameState.currentWords.push(data[rando]);
          console.log(`newArray words: ${gameState.currentWords}`);
          if (noDoubleVowel(data[rando].vowel)) {
            gameState.vowelsInUse.push(data[rando].vowel);
            console.log(`newArray vowels: ${gameState.vowelsInUse}`);
          }
        }
      }
    }
  }
}


noDoubleWords(word) {                    // checks to make sure the word about to be pushed isn't already in array
  for (let i = 0; i < gameState.currentWords.length; i++) {
    if (gameState.currentWords[i].word === word){
      return false;
    } 
  }
  return true;
}

//_____________________SCRIPT FROM EJS VIEW BEGINS_________________________________________________________

const vowels = ['iy', 'ɪ', 'ey', 'ɛ', 'æ', 'ɑ', 'ʊ', 'ɔ', 'ou', 'uw', 'ə'];
const wordBox = document.getElementById('word-box');



          




function noDoubleVowel(vowel) {                   // checks to make sure the vowel about to be pushed isn't already in array
  for (let i = 0; i < gameState.vowelsInUse.length; i++) {
    if (gameState.vowelsInUse[i] === vowel){
      return false;
    } 
  }
  return true;
}   

function newAnswers(vowels, ctVowel) {
  console.log('in newanswers')
  let vowelAnswers = [];
  let rando;
  while (vowelAnswers.length < 3) {
    rando = Math.floor(Math.random() * vowels.length);
    console.log(`rando: ${rando}`);
    console.log(`before nodoubleans: vowel ${vowels[rando]} ctVowel ${ctVowel} vowelAnswers ${vowelAnswers}`)
    console.log(noDoubleAns(vowels[rando], ctVowel, vowelAnswers));
    if (noDoubleAns(vowels[rando], ctVowel, vowelAnswers)){
      vowelAnswers.push(vowels[rando]);
    }
  }
  rando = Math.floor(Math.random() * 3);
  console.log(`ctvowel in newanswers: ${ctVowel}`)
  vowelAnswers[rando] = ctVowel;
  gameState.vowelAnswers = vowelAnswers;
  console.log(vowelAnswers);
}

function noDoubleAns(vowel, ctVowel, arr) {
    for (let i = 0; i <= arr.length; i++) {
      console.log(`before test: array: ${arr} ctvowel: ${ctVowel} vowel: ${vowel}`)
      if ((arr[i] === vowel) || (vowel === ctVowel)){
        console.log(`false: array: ${arr} ctvowel: ${ctVowel} vowel: ${vowel}`)
        return false;
      } 
    }
    return true;
  }  

function choiceClick() {
  if (this.innerHTML === gameState.currentWords[gameState.counter].vowel){
    this.style.background = 'green';
    gameState.vowelCorrect[gameState.currentWords[gameState.counter].vowel]++
    console.log(`Vowelcorrect: ${gameState.vowelCorrect[gameState.currentWords[gameState.counter].vowel]}`);
  } else {
    this.style.background = 'red';
    let choices = document.querySelectorAll('.choice');
    for (let i = 0; i < 3; i++) {
      if (choices[i].innerHTML === gameState.currentWords[gameState.counter].vowel) {
        choices[i].style.background = 'green';
      }
    }
  }
  gameState.vowelCount[gameState.currentWords[gameState.counter].vowel]++ 
  console.log(`Vowelcount: ${gameState.vowelCount[gameState.currentWords[gameState.counter].vowel]}`);
  if (gameState.counter === (gameState.wdsThisGame - 1)) {
    let end = setTimeout(endScreen, 1000);
  }
  let delay = setTimeout(newRound, 1000);
}




function vowelChoice(e) {
  let newVowel = this.innerHTML;
  gameState.vowelsInUse.push(newVowel);
  $('<div/>').attr('class', 'vowel-chosen').appendTo('#vowel-choice-div').html(newVowel);
  console.log(gameState.vowelsInUse);
  this.remove();

}

function firstClick() {                    // start button clicked
  if (gameState.vowelsInUse.length < 4) {
      $('#start-btn').html('Please choose at least four vowels');
      let delay = setTimeout(()=> {
        $('#start-btn').html('START')}, 1000);
  } else {
    console.log(`gameState.wdsThisGame${gameState.wdsThisGame}`);
    console.log(`gameState.vowelsInUse${gameState.vowelsInUse.length}`);
    gameState.wdsThisGame = gameState.vowelsInUse.length * 5;
    console.log(`gameState.wdsThisGame${gameState.wdsThisGame}`);
    $('#pre-game-div').attr('class', 'hidden');
    $('#start-btn').attr('class', 'hidden');
    $('#game-div').css('display', 'flex');
    gameStart(wordData, gameState);
  }
}


function endScreen() {                        // screen that shows when game ends
  $('#game-div').css('display', 'none');
  $('#end-game-screen').removeClass('hidden');
  for (let i = 0; i < gameState.vowelsInUse.length; i++) {
    let $newRow = $('<tr/>')
    $('<td/>').html(gameState.vowelsInUse[i]).appendTo($newRow);
    $('<td/>').html(gameState.vowelCorrect[gameState.vowelsInUse[i]]).appendTo($newRow);
    $('<td/>').html(gameState.vowelCount[gameState.vowelsInUse[i]]).appendTo($newRow);
    $('<td/>').html((Math.floor((gameState.vowelCorrect[gameState.vowelsInUse[i]])/(gameState.vowelCount[gameState.vowelsInUse[i]])* 100)) + '%').appendTo($newRow);
    $newRow.appendTo('#final-table');
  }
    $('#start-btn').removeClass('hidden').html('Play Again').bind('click', function(){
    $('#end-game-screen').attr('class', 'hidden');
    $('#game-div').attr('class', 'hidden');
    location.reload()
  });
}

document.getElementById('vowel-choice1').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice2').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice3').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice4').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice5').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice6').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice7').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice8').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice9').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice10').addEventListener('click', vowelChoice);
document.getElementById('vowel-choice11').addEventListener('click', vowelChoice);
document.getElementById('start-btn').addEventListener('click', firstClick);
document.getElementById('speaker-div').addEventListener('click', function(){
  document.getElementById('audio').play()
});





  render() {
    return (
      <div>
        <div id='cheat-sheet-div'>
  <div id='cheat-sheet-content-wrapper'>
    <div id='cheat-sheet-content'>
      <table>
        <tr>
          <td>iy</td>
          <td><i id='-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ɪ</td>
          <td><i id='ɪ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ey</td>
          <td><i id='ey-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ɛ</td>
          <td><i id='ɛ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>æ</td>
          <td><i id='æ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ɑ</td>
          <td><i id='ɑ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ʊ</td>
          <td><i id='ʊ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ɔ</td>
          <td><i id='ɔ-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ou</td>
          <td><i id='ou-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>uw</td>
          <td><i id='uw-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>ə</td>
          <td><i id='ə-sound' class="fa fa-volume-up" aria-hidden="true"></i></td>
        </tr>
      </table>
    </div>
    </div>
  <div id='cheat-sheet-text'><br>C<br><br>H<br><br>E<br><br>A<br><br>T<br><br><br><br>S<br><br>H<br><br>E<br><br>E<br><br>T<br>
  </div>
  </div>
</div>
<div id='pre-game-div'>
  <h1>Choose your vowels!</h1>
  <div id=vowel-choice-wrapper>
    <div id='vowel-choice-row1'> 
      <div id='vowel-choice1' class='vowel-choice button'>iy</div>
      <div id='vowel-choice2' class='vowel-choice button'>ɪ</div>
      <div id='vowel-choice3' class='vowel-choice button'>ey</div>
      <div id='vowel-choice4' class='vowel-choice button'>ɛ</div>
      <div id='vowel-choice5' class='vowel-choice button'>æ</div>
      <div id='vowel-choice6' class='vowel-choice button'>ɑ</div>
    </div>
    <div id='vowel-choice-row2'>
      <div id='vowel-choice7' class='vowel-choice button'>ʊ</div>
      <div id='vowel-choice8' class='vowel-choice button'>ɔ</div>
      <div id='vowel-choice9' class='vowel-choice button'>ou</div>
      <div id='vowel-choice10' class='vowel-choice button'>uw</div>
      <div id='vowel-choice11' class='vowel-choice button'>ə</div>  
    </div>
  </div>
  <div id='vowel-choice-div'></div>
</div>

<div id='game-wrapper' class='hidden'>
<div id='game-div' class='hidden'>
  <div id='word-container'>
    <div id='speaker-div'><audio id='audio' src='/static/audio/x.mp3'></audio><i class="fa fa-volume-up fa-2x" aria-hidden="true"></i></div>
    <div id='word-box'></div>
  </div>
  <div id='choice-div'>
    <div id='choice1' class='choice'></div>
    <div id='choice2' class='choice'></div>
    <div id='choice3' class='choice'></div>
  </div>
</div>
<div id='end-game-screen' class='hidden'>
  <h1>Game Over!</h1>
  <h2>Here are your stats for this session:</h2>
  <table id='final-table'>
    <tr>
      <th>Vowel</th>
      <th>Correct</th>
      <th>Total</th>
      <th>Percentage</th>
    </tr>
  </table>
</div>
<div id='start-btn' class='button' >START</div>
</div>








      </div>
    );
  }
}

export default VowelGame;
