import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../css/mystyle.css'

const ToolbarComponent = () => {
  return (
    <AppBar className='toolbar-style' position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
        </Typography>
        <Button color="inherit" component={Link} to="/playerboard/sabong">
          Sabong1
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/ec2">
          Ec22
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/lotto3D">
          3D Lotto3
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/lotto3D">
          Pick3
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/lotto3D">
          Game Ending
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/lotto3D">
          Bets
        </Button>
        <Button color="inherit" component={Link} to="/playerboard/lotto3D">
          Cash In/Out History
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
