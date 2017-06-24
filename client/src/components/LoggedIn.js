import React, { Component } from 'react';

class LoggedIn extends Component {

//   componentDidMount() {
//   fetch('/api/words', {
//     'method': 'GET',
//     'credentials': 'same-origin',
//   })
//   .then((response) => {
//     return response.json()
//   })
//   .then((json) => {
//     console.log(json);
//   })
// }

  render() {
    return (
      <div id='main-page-div'>
        <div id='text-wrapper'>
          <h1>Welcome, {this.props.firstName}!</h1>
          <p>What would you like to do today?</p>
        </div>
        <div id='activity-div'>
          <a href=''><div id='play-button' className='button mainpage-button'>PLAY!</div></a>
          <a href=''><div className='button mainpage-button'>STATS!</div></a>
        </div>
      </div>
    );
  }
}

export default LoggedIn;
