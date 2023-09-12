import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Lotto3DCommission({lotto3DCommission} : {lotto3DCommission : number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            3D Lotto Current Commission
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
          {lotto3DCommission}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
