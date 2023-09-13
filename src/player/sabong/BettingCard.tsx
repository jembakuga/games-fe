import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export interface MediaProps {
  betType: string;
  totalBet: number;
  payout: number;
  betAmount: number;
}

export default function BettingCard(props: MediaProps) {

  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('http://localhost:8080/home/loadRoomSummary');
        //const result = await response.text();
        console.log("test");
        //setData(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Initially fetch data
    fetchData();

    // Set up a recurring timer to fetch data every 3 seconds
    const intervalId = setInterval(fetchData, 3000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.betType}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {props.totalBet}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {props.payout}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {props.betAmount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        variant='contained'
          size="small"
          //onClick={handleAboutClick}
        >
          + Bet {props.betType}
        </Button>
      </CardActions>
    </Card>
  );
}