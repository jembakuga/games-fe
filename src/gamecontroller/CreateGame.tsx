import * as React from 'react';
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

type Props = {};

const gameTypes = [
  { value: '1', label: 'Sabong 1' },
  { value: '2', label: 'Sabong 2' },
  { value: '3', label: 'EZ2' },
  { value: '4', label: '3D Lotto' },
  { value: '5', label: 'Pick 3' },
  { value: '6', label: 'Game Ending' }
];

const CreateGame = (props: Props) => {
  const [selectedGameType, setSelectedGameType] = useState<string>('');
  const [gameNo, setGameNo] = useState('');
  const [eventName, setEventName] = useState('');

  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  React.useEffect(() => {

  }, [])

  const handleSubmitClick = () => {
    axios
      .post("http://localhost:8080/game/createGame", {
        gameNo: gameNo,
        eventName: eventName,
        type: selectedGameType
      }, {headers})
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          console.log("game created")
        } else {
          console.log(res.data.message)
        }

      }).catch(error => {
        console.log("ERRORR")
        console.error('Error:', error);
      });;
  };

  return (
    <Grid container spacing={1} sx={{ borderLeft: '10px solid #e0e0e0' }}>
      <Grid item lg={12}><br /></Grid>
      <Grid item lg={12} md={12} xs={12}>Create Game</Grid>
      <Grid item lg={6} md={6} xs={12}>
        <TextField
          select
          label="Select Game Type"
          variant="outlined"
          fullWidth
          value={selectedGameType}
          onChange={(event) => {
            setSelectedGameType(event.target.value);
          }}
          margin="normal"
        >
          {gameTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item lg={6} md={6} xs={12}></Grid>
      <Grid item lg={6} md={6} xs={12}>
        <TextField
          label="Enter Game Number"
          variant="outlined"
          fullWidth
          value={gameNo}
          onChange={(event) => {
            setGameNo(event.target.value);
          }}
          margin="normal"
        >
        </TextField>
      </Grid>
      <Grid item lg={6} md={6} xs={12}></Grid>
      <Grid item lg={6} md={6} xs={12}>
        <TextField
          label="Enter Event Name"
          variant="outlined"
          fullWidth
          value={eventName}
          onChange={(event) => {
            setEventName(event.target.value);
          }}
          margin="normal"
        >
        </TextField>
      </Grid>
      <Grid item lg={6} md={6} xs={12}></Grid>
      <Grid item lg={2} xs={12}><Button variant="contained" onClick={handleSubmitClick}>Create Game</Button></Grid>
      <Grid item lg={1} xs={12}><Button variant="contained">Cancel</Button></Grid>
      <Grid item lg={9} xs={12}></Grid>
    </Grid>
  );
}
export default CreateGame;