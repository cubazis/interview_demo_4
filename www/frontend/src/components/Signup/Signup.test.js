import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';

it('Welcome renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
});