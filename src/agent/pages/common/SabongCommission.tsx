import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SabongCommission({sabongCommission} : {sabongCommission : number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Sabong Current Commission
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
          {sabongCommission}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
