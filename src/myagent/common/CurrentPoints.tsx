import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface MediaProps {
    points: number;
  }

export default function CurrentPoints(props: MediaProps) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Current Points {props.points}
        </Typography>
      </CardContent>
    </Card>
  );
}