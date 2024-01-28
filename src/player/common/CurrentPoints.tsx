import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../../css/mystyle.css'
import MediaCard from '../sabong/MediaCard';
import cockfight from '../../img/cockfight.jpg'

export interface MediaProps {
    points: number;
  }

export default function CurrentPoints(props: MediaProps) {
  return (
    <Card className="card-style">      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Current Points {props.points}
        </Typography>
      </CardContent>
    </Card>
  );
}