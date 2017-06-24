import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <h2 id='logo'>Appcent!</h2>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Games</a></li>
            <li><a href=''>User</a></li>
            <li><a href=''>Logout</a></li>
            <li id='logged-as'>Logged in as: {this.props.username}</li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
