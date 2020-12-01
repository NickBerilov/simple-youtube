import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header';

it('renders Header component without crashing', () => {
  const div = document.createElement('div');
  render(<Router><Header/></Router>, div);
  unmountComponentAtNode(div);
})