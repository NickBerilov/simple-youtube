import React, { memo, useCallback, useRef } from 'react';
import { Box, Button, Card, CardMedia, Grid, TextField } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { API_URL } from '../../const';

type PropsType = {
  localFile: any;
};

const CustomTextField = withStyles({
  root: {
    color: '#573e8c',
    '& .MuiFormLabel-root': {
      color: '#573e8c'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#573e8c'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#573e8c'
    }
  },
})(TextField);

const inputProps = {
  style: {
    color: '#573e8c'
  }
}

function UploadForm({localFile}: PropsType) {
  const refTitle = useRef<any>('');
  const refDescription = useRef<any>('');
  const history = useHistory();

  const saveVideo = useCallback(() => {
    const formData = new FormData();
    formData.append('file', localFile);
    formData.append('videoTitle', refTitle.current.value);
    formData.append('videoDesc', refDescription.current.value);
    console.log(formData);
    axios.post(`${API_URL}/upload`, formData).then(() => history.push('/'));
  }, [localFile]);

  return (
    <Grid container spacing={3} alignContent="center" justify="center" direction="column">
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Card>
          <CardMedia component="video" src={URL.createObjectURL(localFile)} height="300" controls/>
        </Card>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <CustomTextField
            inputRef={refTitle}
            label="Title of your video"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={inputProps}
          />
          <CustomTextField
            inputRef={refDescription}
            rows={4}
            multiline
            label="Description of your video"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={inputProps}
          />

          <Button onClick={saveVideo} variant="contained" color="primary" disabled={!localFile}>Upload Video</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default memo(UploadForm);
