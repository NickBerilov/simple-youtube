import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './HomePage';


it('renders HomePage without crashing', () => {
  const div = document.createElement('div');
  render(<Router><HomePage/></Router>, div );
  unmountComponentAtNode(div);
})
