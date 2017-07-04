import React, { Component } from 'react';

class VowelChoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      vowelChoices: [],
    }
    this.vowelChoiceToggle = this.vowelChoiceToggle.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.startClick = this.startClick.bind(this);
  }

vowelChoiceToggle(e) {
  let choice = e.target.innerHTML;                                //gets vowel from button
  let style = e.target.style;                                     // will be used for opacity
  let index = this.state.vowelChoices.indexOf(choice)             // does array already have vowel?
  if (index < 0 ) {
    console.log(index);
    style.opacity = 1;                                            // lights up button
    this.setState((prevState) => {
      return {
        vowelChoices: prevState.vowelChoices.concat(choice)       // setstate with vowel clicked
      }
    })
  } else {
    style.opacity = 0.5;                                           // dim button
    let index = this.state.vowelChoices.indexOf(choice);           
    let newArr = this.state.vowelChoices;
    newArr.splice(index, 1);
    this.setState((prevState) => {
      return {
        vowelChoices: newArr,
      }
    })
  }
}

selectAll() {
  let buttons = document.querySelectorAll('.vowel-choice');     //gets all buttons
  let vowels = [];                                              //array to push vowels
  console.log(buttons);
  buttons.forEach((val) => {          
    val.style.opacity = 1                                        // turns buttons 
    vowels.push(val.innerHTML)                                   // pushes vowels into array 
  })
  this.setState({vowelChoices: vowels});
}

startClick() {
  if (this.state.vowelChoices.length < 4) {
    let btn = document.getElementById('start-btn'); 
    btn.innerHTML = 'Please choose at least four vowels';
    let delay = setTimeout(()=> {
        btn.innerHTML = 'START'
      }, 1000);
  } else {
    this.props.gameStart(this.state.vowelChoices);
  };
};



  render() {
    return (
      <div id='pre-game-div'>
        <h1>Choose your vowels!</h1>
        <div id='vowel-choice-wrapper'>
          <div id='vowel-choice-row1'> 
            <div id='vowel-choice1' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>iy</div>
            <div id='vowel-choice2' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ɪ</div>
            <div id='vowel-choice3' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ey</div>
            <div id='vowel-choice4' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ɛ</div>
            <div id='vowel-choice5' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>æ</div>
            <div id='vowel-choice6' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ɑ</div>
          </div>
          <div id='vowel-choice-row2'>
            <div id='vowel-choice7' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ʊ</div>
            <div id='vowel-choice8' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ɔ</div>
            <div id='vowel-choice9' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ou</div>
            <div id='vowel-choice10' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>uw</div>
            <div id='vowel-choice11' className='vowel-choice button' onClick={(e) => {this.vowelChoiceToggle(e)}}>ə</div>
          </div>
          <div><div id='all-btn' className='button' onClick={this.selectAll}>Select All</div></div>
          <div id='start-btn' className='button' onClick={this.startClick}>START</div>
        </div>  
      </div>
    );
  }
}

export default VowelChoice;
