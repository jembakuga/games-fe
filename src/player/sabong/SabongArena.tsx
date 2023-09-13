import * as React from 'react';
import { Grid } from '@mui/material';
import MediaCard from './MediaCard';
import { useState } from 'react';
import CurrentPoints from '../common/CurrentPoints';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

const SabongArena = () => {
  const { title, url } = useParams();

  const [games, setGames] = useState([{ key: '1', label: 'test1' }, { key: '2', label: 'test2' }]);

  return (
    <Grid container spacing={1} sx={{ borderLeft: '10px solid #e0e0e0' }}>
      <Grid item lg={12}><br /></Grid>
      <Grid item lg={12} md={12} xs={12}>Title {title}</Grid>
      <Grid item lg={6} md={6} xs={12}>
        <VideoPlayer m3u8Url={url} />

      </Grid>
    </Grid>
  );
}
export default SabongArena;