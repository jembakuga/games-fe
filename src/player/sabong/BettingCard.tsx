import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export interface ChildProps {
  amount: number;
  betType: string;
  totalBet: number;
  payout: number;
  onUpdateAmount: (newMessage: number) => void;
}

export default function BettingCard({ amount, onUpdateAmount, betType, totalBet, payout }: ChildProps) {

  const [newAmount, setNewAmount] = useState(0);

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

  const handleUpdateAmount = () => {
    onUpdateAmount(amount);
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
        {totalBet}
        </Typography>
        <Typography variant="h4" color="text.secondary">
        {payout}
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