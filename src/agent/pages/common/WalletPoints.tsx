import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

export default function WalletPoints({walletPoints} : {walletPoints : number}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
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
