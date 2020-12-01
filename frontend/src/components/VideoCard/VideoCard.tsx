import React from 'react';
import { Paper, Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { API_URL } from '../../const';
import { Video } from '../../pages/HomePage/HomePage';

import './VideoCard.scss';

type Props = {
  id: string;
  title: string,
  description: string,
  url: string,
  setActive: (value: Video | null) => void,
  isActive?: boolean,
}

function VideoCard({ id, title, description, url, setActive, isActive = false }: Props) {

  const changeActive = () => setActive({id, title, description, url});

  const closeActiveVideo = (event: any) => {
    event.stopPropagation();
    setActive(null);
  }

  return (
    <Grid item xs={isActive ? 12 : 3} onClick={changeActive} className={'video-card'}>
      <Paper className={'paper'}>
        <Card style={{height: (isActive ? 500 : 400)}} className={'card'}>
          { isActive && <CloseIcon className={'icon'} onClick={closeActiveVideo}/> }
          <CardMedia
            component="video"
            src={`${API_URL}/${url}`}
            title="Contemplative Reptile"
            height={isActive ? 350 : 250}
            className={'media'}
            controls={isActive}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}

export default VideoCard;
