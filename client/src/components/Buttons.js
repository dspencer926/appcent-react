import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div id='activity-div'>
        <div id='play-button' className='button mainpage-button' onClick={() => {this.props.changeStatus('vowelGame')}}>PLAY!</div>
        <div className='button mainpage-button' onClick={() => {this.props.changeStatus('stats')}}>STATS!</div>
      </div>
    );
  }
}

export default Buttons;
