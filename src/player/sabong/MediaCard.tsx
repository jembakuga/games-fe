import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export interface MediaProps {
  title: string;
  url: string;
}

export default function MediaCard(props: MediaProps) {

  const navigate = useNavigate();
  const handleAboutClick = () => {    
    let url = '/playerboard/sabongArena/' + props.title
    navigate(url);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/img/COCK_FIGHT.JPG"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleAboutClick}
        >
          Enter Arena
        </Button>
      </CardActions>
    </Card>
  );
}