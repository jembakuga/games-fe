import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface ChildProps {
  amount: number;
  betType: string;
  totalBet: number;
  payout: number;
  type: number;
  onUpdateAmount: (newMessage: number, type: number, betOn: string) => void;
}

export default function BettingCard({ amount, onUpdateAmount, betType, totalBet, payout, type }: ChildProps) {

  const [newAmount, setNewAmount] = useState(0);
  const token = localStorage.getItem('token');
  const [totBet, setTotBet] = useState(0);

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(type, betType)
        axios
          .get(`http://localhost:8080/bet/loadTotalBet/${type}/${betType}`, { headers })
          .then((res) => {
            console.log(res.data.totalBets);
            setTotBet(res.data.totalBets);
          });
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

  const handleUpdateAmount = () => {
    onUpdateAmount(amount, type, betType);
    setNewAmount(amount);
    //setAmount(''); // Clear the input field after updating the message
  };


  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {betType}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {totBet}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          Payout = {payout}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {newAmount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size="small"
          onClick={handleUpdateAmount}
        >
          + Bet
        </Button>
      </CardActions>
    </Card>
  );
}