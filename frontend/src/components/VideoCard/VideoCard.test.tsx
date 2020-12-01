import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import VideoCard from './VideoCard';

const videoData = {
  id: '55fd6d0a-2d16-4a6e-9114-a576bd68d375',
  url: '55fd6d0a-2d16-4a6e-9114-a576bd68d375.mp4',
  title: 'My title',
  description: 'My description'
}


it('renders VideoCard component without crashing', () => {
  const div = document.createElement('div');
  render(
    <VideoCard
      id={videoData.id}
      description={videoData.description}
      title={videoData.description}
      url={videoData.url}
      setActive={() => {}}
    />, div);
  unmountComponentAtNode(div);
})

it('renders VideoCard component without crashing (active)', () => {
  const div = document.createElement('div');
  render(
    <VideoCard
      id={videoData.id}
      description={videoData.description}
      title={videoData.description}
      url={videoData.url}
      setActive={() => {}}
      isActive
    />, div);
  unmountComponentAtNode(div);
})