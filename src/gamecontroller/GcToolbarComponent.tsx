import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const GcToolbarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/gcboard/create">
          Create Game
        </Button>
        <Button color="inherit" component={Link} to="/gcboard/updateGame/1">
          Close Game for Betting
        </Button>
        <Button color="inherit" component={Link} to="/gcboard/updateGame/2">
          Declare Winner
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default GcToolbarComponent;
