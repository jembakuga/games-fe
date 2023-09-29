import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SabongComm({totalCommission} : {totalCommission : number}) {
  const cardStyle = {
    maxWidth: '100%', // Set the maximum width to 100% to maximize the width
  };
  return (
    <Card sx={{ cardStyle }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Total Commission (0%)
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
            {totalCommission}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
