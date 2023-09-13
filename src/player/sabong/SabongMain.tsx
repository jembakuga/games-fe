import * as React from 'react';
import { Grid } from '@mui/material';
import MediaCard from './MediaCard';
import { useState } from 'react';
import CurrentPoints from '../common/CurrentPoints';

type Props = {};

const SabongMain = (props: Props) => {

  const [games, setGames] = useState([{ key: '1', label: 'test1', url: 'https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8' }, { key: '2', label: 'test2', url: 'https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8' }]);

  return (
    <Grid container spacing={1} sx={{ borderLeft: '10px solid #e0e0e0' }}>
      <Grid item lg={12}><br /></Grid>
      <Grid item lg={12} md={12} xs={12}><CurrentPoints points={1000} /></Grid>
      
      {games.map((option) => (
        <Grid item lg={3} md={3} xs={12} key={option.key}>
              <MediaCard key={option.key} title={option.label} />
              </Grid>
            ))}  
      <Grid item lg={6} md={6} xs={12}>

      </Grid>
      <Grid item lg={6} md={6} xs={12}></Grid>
    </Grid>
  );
}
export default SabongMain;