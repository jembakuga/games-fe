import React, { useEffect, useState } from 'react';
import WalletPoints from '../common/WalletPoints';
import axios from 'axios';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, useMediaQuery, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';

type Props = {};

const AlertPage = (props: Props) => {
  const [walletPoints, setWalletPoint] = useState(0);
  const [transactionType, setTransactionType] = useState(""); // State to track the selected option
  const [players, setPlayers] = useState([{ key: "", label: " " }]); // Initial options
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8080/home/loadDashBoard/1")
      .then((res) => {
        console.log(res.data);
        setWalletPoint(res.data.data.sabongCurrentCommission);
      });

    axios
      .get("http://localhost:8080/player/findAgentPlayers/1")
      .then((res) => {
        console.log(res.data.data);
        setPlayers(res.data.data);
      });
  }, [])

  const handleSubmitClick = () => {
    axios
      .post("http://localhost:8080/wallet/addWalletPointsToPlayer", {
        playerId: playerId,
        amount: amount,
        details: details
      })
      .then((res) => {
        console.log(res.data);
        if(!res.data.success){          
          setMessage(res.data.message);
        }else{
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
        <Grid item lg={12} xs={12}><h3>Wallet Mangement</h3></Grid>
        <Grid item lg={12} xs={12}><WalletPoints walletPoints={walletPoints} /></Grid>
        <Grid item lg={12}><br /></Grid>
        <Grid item lg={12} xs={12}><h3>Wallet Loading Station</h3></Grid>
        <Grid item lg={6} xs={6}>
          <TextField
            id="transactionType"
            select
            label="Select transaction type"
            onChange={(event) => {
              setTransactionType(event.target.value);
            }}
            fullWidth
          >
            <MenuItem key={""} value={""}>

            </MenuItem>
            <MenuItem key={"1"} value={"Deposit"}>
              Deposit
            </MenuItem>
            <MenuItem key={"2"} value={"Withdraw"}>
              Withdraw
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item lg={12}><br /></Grid>
        <Grid item lg={4} xs={4}>
          <TextField
            id="player"
            select
            label="Select Player"
            fullWidth
            onChange={(event) => {
              setPlayerId(event.target.value);
            }}
          >
            <MenuItem key={""} value={""}>
            </MenuItem>
            {players.map((option) => (
              <MenuItem key={option.key} value={option.key}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item lg={2} xs={2}>
          <TextField
            id="amount"
            label="Amount"
            type="number"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item lg={12}><br /></Grid>
        <Grid item lg={6} xs={6}>
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
        <Grid item lg={12}><br /></Grid>
        <Grid item lg={1} xs={12}><Button variant="contained" onClick={handleSubmitClick}>Submit</Button></Grid>
        <Grid item lg={1} xs={12}><Button variant="contained">Cancel</Button></Grid>
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

export default AlertPage;