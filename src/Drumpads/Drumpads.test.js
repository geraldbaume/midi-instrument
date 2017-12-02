import React from 'react';
import ReactDOM from 'react-dom';
import Drumpads from './Drumpads';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Drumpads />, div);
});
