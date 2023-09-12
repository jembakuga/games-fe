import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Ez2Commission({ez2Commission} : {ez2Commission : number}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Ez2 Current Commission
          </Typography>   
          <Typography gutterBottom variant="h4" component="div">
          {ez2Commission}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
