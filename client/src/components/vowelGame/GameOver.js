import React, { Component } from 'react';

class GameOver extends Component {
  render() {
    return (
        <div id='end-game-wrapper'>
          <div id='end-game-screen'>
            <h1>Game Over!</h1>
            <h2>Here are your stats for this session:</h2>
            <table id='final-table'>
              <tr>
                <th>Vowel</th>
                <th>Correct</th>
                <th>Total</th>
                <th>Percentage</th>
              </tr>
              {this.props.vowels.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val}</td>
                    <td>{this.props.stats.vowelCorrect[val]}</td>
                    <td>{this.props.stats.vowelCount[val]}</td>
                    <td>{Math.floor(this.props.stats.vowelCorrect[val] / this.props.stats.vowelCount[val] * 100)}%</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
    );
  }
}

export default GameOver;
