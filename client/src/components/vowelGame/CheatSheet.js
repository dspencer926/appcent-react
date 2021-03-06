import React, { Component } from 'react';

class CheatSheet extends Component {

  playSound(vowel) {
    let audio = document.getElementById('vowel-audio');
    audio.src = `/static/audio/vowels/${vowel}.mp3`;
    audio.play();
  }

  render() {
    return (  // add onClicks
        <div id='cheat-sheet-div'>
          <div id='cheat-sheet-content-wrapper'>
            <div id='cheat-sheet-content'>
              <audio id='vowel-audio' />
              <table>
                <tr>
                  <td>iy</td>
                  <td><i id='i-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('i')}}></i></td>
                </tr>
                <tr>
                  <td>ɪ</td>
                  <td><i id='ɪ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ɪ')}}></i></td>
                </tr>
                <tr>
                  <td>ey</td>
                  <td><i id='ey-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ey')}}></i></td>
                </tr>
                <tr>
                  <td>ɛ</td>
                  <td><i id='ɛ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ɛ')}}></i></td>
                </tr>
                <tr>
                  <td>æ</td>
                  <td><i id='æ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('æ')}}></i></td>
                </tr>
                <tr>
                  <td>ɑ</td>
                  <td><i id='ɑ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ɑ')}}></i></td>
                </tr>
                <tr>
                  <td>ʊ</td>
                  <td><i id='ʊ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ʊ')}}></i></td>
                </tr>
                <tr>
                  <td>ɔ</td>
                  <td><i id='ɔ-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ɔ')}}></i></td>
                </tr>
                <tr>
                  <td>ou</td>
                  <td><i id='ou-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ou')}}></i></td>
                </tr>
                <tr>
                  <td>uw</td>
                  <td><i id='uw-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('uw')}}></i></td>
                </tr>
                <tr>
                  <td>ə</td>
                  <td><i id='ə-sound' className="fa fa-volume-up" aria-hidden="true" onClick={()=>{this.playSound('ə')}}></i></td>
                </tr>
              </table>
            </div>
          </div>
          <div id='cheat-sheet-text'><br/>C<br/><br/>H<br/><br/>E<br/><br/>A<br/><br/>T<br/><br/><br/><br/>S<br/><br/>H<br/><br/>E<br/><br/>E<br/><br/>T<br/>
          </div>
        </div>
    );
  }
}

export default CheatSheet;
