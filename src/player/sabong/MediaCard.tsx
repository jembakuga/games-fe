import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './sabong.css'
import { CardActionArea } from '@mui/material';
import { useState } from 'react';

export interface MediaProps {
  title: string;
  url: string;
  image: string;
}

export default function MediaCard(props: MediaProps) {

  const navigate = useNavigate();
  const [date, setDate] = useState(new Date())
  const handleAboutClick = () => {
    let url = '/playerboard/sabongArena/' + props.title
    navigate(url);
  };
  return (
    <div className="arena-style">
      <Card >
        <div >
          <CardMedia
            component="img"
            image={props.image}
            alt="green iguana"
          />
          <center>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>          
          <Typography variant="body2" color="text.secondary">
            {date.toDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            International
          </Typography>
          </center>
        </div>
        <CardActions>
          <Button
            size="small"
            onClick={handleAboutClick}
          >
            Enter Arena
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}