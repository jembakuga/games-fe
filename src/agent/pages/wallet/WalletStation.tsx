import React, { useEffect, useState } from 'react';
import WalletPoints from '../common/WalletPoints';
import axios from 'axios';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, useMediaQuery, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';

type Props = {};

const transactionTypes = [
  { value: '1', label: 'Deposit' },
  { value: '2', label: 'Withdraw' }
];

const WalletStation = (props: Props) => {
  const [walletPoints, setWalletPoint] = useState(0);
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [message, setMessage] = useState('');
  const [selectedTransactionType, setSelectedTransactionType] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');
  const [players, setPlayers] = useState([{ key: '', label: '' }]);

  const token = localStorage.getItem('token');
  
  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const playerList = [
    { value: '', label: '' }
  ];

  useEffect(() => {
    console.log("token", token)
    

    axios
      .get("http://localhost:8080/player/findAgentPlayers", {headers})
      .then((res) => {
        console.log(res.data.success)
        if(res.data.success){
          setPlayers(res.data.data);
          console.log(res.data.data)
          for (var i = 0; i < res.data.data.length; i++) {
            console.log("i");
            playerList.push({ value: res.data.data[i].key, label: res.data.data[i].label })
          }
        }else{
          console.log(res.data.data.message)
        }
        
      }).catch(error => {
        console.log("ERRORR")
        setOpen(true);
        console.error('Error:', error);
      });

      axios
      .get("http://localhost:8080/home/loadDashBoard", {headers})
      .then((res) => {
        setWalletPoint(res.data.data.walletPoints);
      }).catch(error => {
        console.log("ERRORR")
        setOpen(true);
        console.error('Error:', error);
      });
  }, [])

  const handleSubmitClick = () => {
    axios
      .post("http://localhost:8080/wallet/addWalletPointsToPlayer", {
        playerId: selectedPlayer,
        amount: amount,
        details: details,
        type: selectedTransactionType
      }, {headers})
      .then((res) => {
        console.log(res.data.data);
        if (!res.data.data.success) {
          setMessage(res.data.data.message);
        } else {
          setMessage("Load done");
        }
        setOpen(true);

      });
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} xs={12}><h3>Wallet Mangement</h3></Grid>
        <Grid item lg={12} md={12} xs={12}><WalletPoints walletPoints={walletPoints} /></Grid>
        <Grid item lg={12} md={12} xs={12}><h3>Wallet Loading Station</h3></Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField
            select
            label="Select a transaction type"
            variant="outlined"
            fullWidth
            value={selectedTransactionType}
            onChange={(event) => {
              setSelectedTransactionType(event.target.value);
            }}
            margin="normal"
          >
            {transactionTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item lg={6} md={6} xs={12}></Grid>

        <Grid item lg={4} md={6} xs={12}>
          <TextField
            id="player"
            select
            label="Select an agent/player"
            fullWidth
            value={selectedPlayer}
            onChange={(event) => {
              setSelectedPlayer(event.target.value);
            }}
            margin="normal"
          >
            {players.map((item) => (
              <MenuItem key={item.key} value={item.key}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>

        </Grid>
        <Grid item lg={2} xs={12}>
          <TextField
            id="amount"
            label="Amount"
            type="number"
            onChange={(event) => {
              console.log(event);
              setAmount(event.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}></Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField
            fullWidth
            id="outlined-number"
            label="Details"
            onChange={(event) => {
              setDetails(event.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}></Grid>

        <Grid item lg={1} xs={12}><Button variant="contained" onClick={handleSubmitClick}>Submit</Button></Grid>
        <Grid item lg={1} xs={12}><Button variant="contained">Cancel</Button></Grid>
        <Grid item lg={10} xs={12}></Grid>
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WalletStation;