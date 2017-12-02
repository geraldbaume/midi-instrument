import React, { Component } from 'react';
import './App.css';
import Drumpads from './Drumpads/Drumpads'
import WebMidi from 'webmidi/webmidi.min.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midiEnabled: false
    }
    WebMidi.enable((err) => {
      if (!err) {
        this.state.midiEnabled = true;
      }
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.midiEnabled ? (
          <Drumpads></Drumpads>
        ) : (
          <div>Could not access the browsers MIDI Interface.</div>
        )}
      </div>
    );
  }
}

export default App;
