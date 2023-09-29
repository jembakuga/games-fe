import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

export default function WalletPoints({walletPoints} : {walletPoints : number}) {
  const cardStyle = {
    maxWidth: '100%', // Set the maximum width to 100% to maximize the width
  };
  return (
    <Card sx={{ cardStyle }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Wallet Points
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
            {walletPoints}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
