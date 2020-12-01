import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import DragAndDrop from './DragAndDrop';

it('renders DragAndDrop component without crashing', () => {
  const div = document.createElement('div');
  render(<DragAndDrop handleFileChange={() => {}} />, div );
  unmountComponentAtNode(div);
})