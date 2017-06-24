import React, { Component } from 'react';

class AuthBox extends Component {
  render() {
    return (
      <div>
        <div id='sign-log-div'>
          <div id='login' className='button'>LOGIN</div>
          <div id='signup' className='button'>SIGN UP</div>
        </div>

      </div>
    );
  }
}

export default AuthBox;
