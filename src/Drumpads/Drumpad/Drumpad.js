import React, { Component } from 'react';
import './Drumpad.css'

class Drumpad extends Component {
  render() {
    return (
      <div className="DrumpadWrapper" onClick={() => alert('click')}>
        <div className="Drumpad"></div>
      </div>
    );
  }
}

export default Drumpad;
