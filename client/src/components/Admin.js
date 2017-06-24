import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <div>
        <div id='text-wrapper'>
          <h1>Welcome, {this.props.user}!</h1>
          <p>What would you like to do today?</p>
        </div>
        <div id='activity-div'>
          <a href=''><div id='play-button' className='button mainpage-button'>PLAY!</div></a>
          <a href=''><div className='button mainpage-button'>STATS!</div></a>
          <a href=''><div className='button mainpage-button'>VIEW/EDIT USERS</div></a>
          <a href=''><div className='button mainpage-button'>VIEW/EDIT WORDS</div></a>   
        </div>
      </div>
    );
  }
}

export default Admin;
