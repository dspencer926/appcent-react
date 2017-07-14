import React, { Component } from 'react';
import Buttons from './Buttons';
import VowelGame from './vowelGame/VowelGame';
import Stats from './Stats';


class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'welcome',

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
      case 'welcome': toRender = 
        <div id='main-page-div'>
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
      case 'vowelGame': toRender = <VowelGame />;
        break;      
      case 'stats': toRender = <Stats />
    }

    return (
      <div id='loggedin-main-div'>
        {toRender}
      </div>
    );
  }
}

export default LoggedIn;
