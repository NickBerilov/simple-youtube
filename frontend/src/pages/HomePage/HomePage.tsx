import React, { useEffect, useState } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import VideoCard from '../../components/VideoCard/VideoCard';
import { API_URL } from '../../const';

import './HomePage.scss';

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
}

function HomePage() {
  const [videoData, setVideoData] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  useEffect(() => {
    axios.get(`${API_URL}/video`).then(res => {
      setVideoData(res.data);
    });
  }, []);

  return (
    <div className={'home-page'}>
      {
        videoData.length
          ? <Grid container spacing={3}>
            {
              activeVideo !== null && <VideoCard id={activeVideo.id}
                                        title={activeVideo.title}
                                        description={activeVideo.description}
                                        url={activeVideo.url}
                                        isActive
                                        setActive={setActiveVideo}/>
            }
            {
              videoData.map((video: Video) => {
                return video.id !==  activeVideo?.id && (
                  <VideoCard id={video.id}
                             key={video.id}
                             title={video.title}
                             description={video.description}
                             url={video.url}
                             setActive={setActiveVideo}/>
                )
              })
            }
          </Grid>
          : (
            <>
              <Typography variant="h2" className={'text'}>There are no videos yet</Typography>
              <Typography variant="body1" className={'text'}>You can upload any video that you want by click the
                button</Typography>
            </>
          )
      }

      <Button className={'button'} variant="outlined" color="primary" component={NavLink}
              to="/upload">Upload video</Button>
    </div>
  )
}

export default HomePage;