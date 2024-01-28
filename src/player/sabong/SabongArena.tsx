import * as React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import BettingArea from './BettingArea';
import axios from 'axios';
import StreamingPlayer from './StreamingPlayer';

const SabongArena = () => {
  const { title, url } = useParams();
  console.log(title, url)
  const [walletPoints, setWalletPoints] = useState(0);
  const token = localStorage.getItem('token');

  const updateBalance = (balance : number) => {
    setWalletPoints(balance);
  }

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  React.useEffect(() => {
    console.log("token", token)
    console.log("headers", headers)
    axios
      .get("http://localhost:8080/home/loadDashBoard", { headers })
      .then((res) => {
        console.log(res.data);
        setWalletPoints(res.data.data.walletPoints);
      });
  }, [])
  
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
          Balance {walletPoints}
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        {/*<VideoPlayer m3u8Url="testste" />*/}
        <StreamingPlayer />
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <BettingArea onBet={updateBalance} betType={'100'} walaTotalBet={123} walaPayout={32} meronTotalBet={444} meronPayout={788} betAmount={0} />
        </Grid>
    </Grid>
  );
}
export default SabongArena;