import React, { Component } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'home',                 // app status / screen showing
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      logStatus: null,
    }
    this.logInClick = this.logInClick.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.goHome = this.goHome.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.logInSubmit = this.logInSubmit.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  goHome() {
    this.setState({
      status: 'home',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',      
    })
  }

  logInClick() {
    this.setState({
      status: 'logIn',
      logStatus: null,
    })

  }

  signUpClick() {
    this.setState({
      status: 'signUp',
    logStatus: null,
  })
  }

  handleInput(e) {
    let field = e.target.name;
    this.setState({[field]: e.target.value});
  }

  logInSubmit(e) {
    e.preventDefault();
    this.setState({logStatus: null});
    console.log('loggingin ')
    fetch('/auth/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      let user = json.user;
      if (json.message === 'noUser') {
        this.setState({logStatus: 'Username does not exist'});
        console.log('User does not exist');
      } else if (json.message === 'noPwd') {
        this.setState({logStatus: 'Incorrect password'});
        console.log('Invalid password');
      } else if (json.message.message === 'Missing credentials') {
        console.log('Please complete all fields');
        this.setState({logStatus: 'Please complete all fields'});
      } else if (json.message === 'ok') {
        console.log('logged in');
        this.props.logInSuccess(user.username, user.first_name, user.admin, false);
      }
      console.log(json); 
    })
  }

  signUpSubmit(e) {
    e.preventDefault();
    this.setState({logStatus: null});
    if (Object.values(this.state).indexOf('') === -1) {
      fetch('/auth/register', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,    
        })
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json);
        let user = json.user
        if (json.message === 'ok') {
          this.props.logInSuccess(user.username, user.first_name, false, true);
        }  //expand to DOM
      })
    } else {
      this.setState({logStatus: 'Please complete all fields'});
      console.log('fill all fields')
    } 
  }

  render() {
    let authBox;
    switch(this.state.status) {
      case 'home': authBox = 
        <div id='sign-log-div'>
          <div id='login' className='button' onClick={this.logInClick}>LOGIN</div>
          <div id='signup' className='button' onClick={this.signUpClick}>SIGN UP</div>
        </div>
        break;
      case 'logIn': authBox = 
        <div id='login-div'>
        <div className='back-button button' onClick={this.goHome}>←</div>
          <form id='login-form' onSubmit={(e) => {this.logInSubmit(e)}}>
            <input name='username' type='text' placeholder='Username' onChange={(e) => {this.handleInput(e)}}/>
            <input name='password' type='password' placeholder='Password' onChange={(e) => {this.handleInput(e)}}/>
            <input className='submit-button button' type='submit' value="Let's Go!"/>
            <br/>
            <p id='error'>{this.state.logStatus}</p>
          </form>
        </div>
        break;
      case 'signUp': authBox =
        <div id='signup-div'>
          <div className='back-button button' onClick={this.goHome}>←</div>
          <form onSubmit={(e) => {this.signUpSubmit(e)}}>
            <input name='username' type='text' placeholder='username' onChange={(e) => {this.handleInput(e)}}/>
            <input name='firstName' type='text' placeholder='first name' onChange={(e) => {this.handleInput(e)}}/>
            <input name='lastName' type='text' placeholder='last name' onChange={(e) => {this.handleInput(e)}}/>
            <input name='email' type='email' placeholder='email' onChange={(e) => {this.handleInput(e)}}/>
            <input name='password' type='password' placeholder='password' onChange={(e) => {this.handleInput(e)}}/>
            <input className='submit-button button' type='submit' value='Register!' />
            <br/>
            <p id='error'>{this.state.logStatus}</p>
          </form>
        </div>
    }

    return (
      <div id='entry-div'>
        <div id='welcome-div'><h1> Welcome to <span>Appcent</span>!</h1></div>
        <div className='background-block'><h2>The accent modification platform!</h2></div>
        {authBox}
      </div>
    );
  }
}

export default Entry;
