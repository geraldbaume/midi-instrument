import React, { Component } from 'react';
import Drumpad from './Drumpad/Drumpad';
import './Drumpads.css';

class Drumpads extends Component {
  render() {
    return (
      <div className="Drumpads">
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
       <Drumpad></Drumpad>
      </div>
    );
  }
}

export default Drumpads;
