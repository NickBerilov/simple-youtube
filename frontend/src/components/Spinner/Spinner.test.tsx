import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Spinner from './Spinner';


it('renders Spinner component without crashing', () => {
  const div = document.createElement('div');
  render(<Spinner />, div );
  unmountComponentAtNode(div);
})