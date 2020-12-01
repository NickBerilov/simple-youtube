import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import NotFoundPage from './NotFoundPage';

it('renders NotFoundPage without crashing', () => {
  const div = document.createElement('div');
  render(<NotFoundPage/>, div );
  unmountComponentAtNode(div);
})
