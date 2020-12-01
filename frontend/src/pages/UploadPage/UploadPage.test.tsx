import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import UploadPage from './UploadPage';

it('renders UploadPage without crashing', () => {
  const div = document.createElement('div');
  render(<UploadPage/>, div );
  unmountComponentAtNode(div);
})
