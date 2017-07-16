import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <h2 id='logo'>Appcent!</h2>
          <ul>
            <li onClick={()=>{this.props.changeStatus('home')}}>Home</li>
            <li onClick={()=>{this.props.changeStatus('vowelGame')}}>Games</li>
            <li onClick={this.props.logOut}>Logout</li>
            <li id='logged-as'>Logged in as: {this.props.username}</li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
