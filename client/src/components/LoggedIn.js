import React, { Component } from 'react';
import Buttons from './Buttons';
import VowelGame from './vowelGame/VowelGame';
import Stats from './Stats';
import Nav from './Nav';


class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'home',

    }
    this.changeStatus = this.changeStatus.bind(this);
  }

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

  componentDidUpdate() {
    console.log(this.state.status);
  }

  changeStatus(status) {
    console.log(status);
    this.setState({status: status});
  }

  render() {
    let toRender;
    switch (this.state.status) {
      case 'home': toRender = 
        <div id='main-page-div'>
          <Nav 
            username={this.props.username}
            isAdmin={this.props.isAdmin}
            changeStatus={this.changeStatus}
            logOut={this.props.logOut}
          />
          <div id='text-wrapper'>
            <h1>Welcome, {this.props.firstName}!</h1>
            <p>What would you like to do today?</p>
          </div>
          <Buttons 
            isAdmin={this.props.isAdmin}
            changeStatus={this.changeStatus}
          />
        </div>
        break;
      case 'vowelGame': toRender = 
        <div id='vowel-game'>
          <Nav
            username={this.props.username}
            isAdmin={this.props.isAdmin}
            changeStatus={this.changeStatus}
            logOut={this.props.logOut}
          />
          <VowelGame />
        </div>;
        break;      
      case 'stats': toRender =
        <div>
          <Nav
            username={this.props.username}
            isAdmin={this.props.isAdmin}
            changeStatus={this.changeStatus}
            logOut={this.props.logOut}
          />
          <Stats />
        </div>; 
    }

    return (
      <div id='loggedin-main-div'>
        {toRender}
      </div>
    );
  }
}

export default LoggedIn;
