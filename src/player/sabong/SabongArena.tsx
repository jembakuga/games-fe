import * as React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import BettingArea from './BettingArea';

const SabongArena = () => {
  const { title, url } = useParams();
  console.log(title, url)
  
  return (
    <Grid container spacing={1} sx={{ borderLeft: '10px solid #e0e0e0' }}>
      <Grid item lg={12}><br /></Grid>
      <Grid item lg={6} md={12} xs={12}>
        <Typography gutterBottom variant="h6" component="div">
          Title {title}
        </Typography>
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <Typography gutterBottom variant="h6" component="div">
          Balance {title}
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <VideoPlayer m3u8Url="testste" />
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <BettingArea betType={'100'} walaTotalBet={123} walaPayout={32} meronTotalBet={444} meronPayout={788} betAmount={0} />
        </Grid>
    </Grid>
  );
}
export default SabongArena;