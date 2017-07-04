import React, { Component } from 'react';

class GameOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canClick: true,         //  for use in making it so you 1 second after answering question
      playSound: true,
    }
    this.choiceClick = this.choiceClick.bind(this);
  }

componentDidMount() {
  if (this.state.playSound) {
    document.getElementById('audio').play();
    this.setState({playSound: false});
  }
}

componentDidUpdate() {
  if (this.state.playSound) {
    document.getElementById('audio').play();
    this.setState({playSound: false});
  }
}

choiceClick(e) {
  this.setState({canClick: false})
  let vowel = e.target.innerHTML;
  let correct = true;
  console.log(vowel);
  if (vowel !== this.props.word.vowel) {
    e.target.style.background = 'red';
    correct = false;
  }
  let choices = document.querySelectorAll('.choice');
  choices.forEach((val, choice) => {
    if (val.innerHTML === this.props.word.vowel) {
      val.style.background = 'green';
    }
  });
  let newArray = this.props.wordArray;
  newArray.shift();
  console.log(newArray);
  console.log(`ct? ${correct}`);
  let delay = setTimeout(()=>{
    this.props.newRound(newArray, this.props.word.vowel, correct);
    this.resetOptionColor();
    this.setState({
      canClick: true,
      playSound: true
    })
  }, 1000);
}

resetOptionColor() {
  let options = document.querySelectorAll('.choice');
  options.forEach((val) => {
    val.style.background = '#FF6B35';
  })
}

  render() {
    return (
      <div id='game-wrapper'>
        <div id='game-div'>
          <div id='word-container'>
            <div id='speaker-div' onClick={() => {
              document.getElementById('audio').play()}}>
              <audio id='audio' src={this.props.word.sound_path}></audio>
              <i className="fa fa-volume-up fa-2x" aria-hidden="true"></i>
            </div>
            <div id='word-box'>{this.props.word.word}</div>
          </div>
          <div id='choice-div'>
          {this.props.vowelOptions.map((val, key) => {
            return (
              <div className='choice' key={key} onClick={this.state.canClick ? (e)=>{this.choiceClick(e)} : null}>{val}</div>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default GameOn;
