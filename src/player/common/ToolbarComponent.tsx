import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ToolbarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/sabong">
          Sabong1
        </Button>
        <Button color="inherit" component={Link} to="/ec2">
          Ec22
        </Button>
        <Button color="inherit" component={Link} to="/lotto3D">
          3D Lotto3
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
