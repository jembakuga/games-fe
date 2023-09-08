import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TotalPoints({totalPoints} : {totalPoints : number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Total Points
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
            {totalPoints}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
