import React, { Component } from 'react';
import './App.css';
import Entry from './components/Entry';
import Nav from './components/Nav';
import LoggedIn from './components/LoggedIn';
import Admin from './components/Admin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      firstTimeUser: false,
      isAdmin: false,
      firstName: null,
    }
    this.logInSuccess = this.logInSuccess.bind(this);
  }

  logInSuccess(username, firstName, isAdmin, isFirstTimeUser) {
    this.setState({
      loggedIn: true,
      username: username,
      firstTimeUser: isFirstTimeUser,
      isAdmin: isAdmin,
      firstName: firstName,
    }, () => {console.log(this.state)})
  }

  render() {
    let toRender;
    if (this.state.loggedIn) {
      if (this.state.isAdmin) {
        toRender = 
          <div>
            <Nav 
              username={this.state.username}
              isAdmin={this.state.isAdmin}
            />
            <Admin />
          </div>
      } else {
      toRender = 
        <div>
          <Nav 
              username={this.state.username}
              isAdmin={this.state.isAdmin}
          />
          <LoggedIn 
            firstTimeUser={this.state.firstTimeUser} 
            username={this.state.username}
            firstName={this.state.firstName}
          />
        </div>
      }
    } else {
      toRender = <Entry logInSuccess={this.logInSuccess}/>
    }
    return (
      <div id='app'>
        {toRender}
      </div>
    );
  }
}

export default App;
