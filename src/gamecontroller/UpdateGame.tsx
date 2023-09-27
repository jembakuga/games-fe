import * as React from 'react';
import { Grid, TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

type Props = {};

const gameTypes = [
  { value: '1', label: 'Sabong 1' },
  { value: '2', label: 'Sabong 2' },
  { value: '3', label: 'EZ2' },
  { value: '4', label: '3D Lotto' },
  { value: '5', label: 'Pick 3' },
  { value: '6', label: 'Game Ending' }
];

interface Data {
  id: number,
  gameNo: string,
  eventName: string,
  createdDate: string,
  typeStr: string,
  winner: string,
  statusStr: string
}

const UpdateGame = (props: Props) => {
  const { kind, url } = useParams();
  const [selectedGameType, setSelectedGameType] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = useState('')
  const [open, setOpen] = React.useState(false);
  const [gameId, setGameId] = useState(0);
  const [gameWinner, setGameWinner] = useState('');
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const renderButtonCell = (params: { row: any; }) => {
    console.log("row", params.row)
    if (params.row.status === 1 && kind === "1") {
      return (
        <Button variant="contained" onClick={() => handleCloseBet(params.row)}>Close Betting</Button>
      );
    } else if (params.row.status === 2 && kind === "2") {
      return (
        <Button variant="contained" onClick={() => handleClickOpen(params.row)}>Declare Winner</Button>
      );
    }
  }

  const handleClickOpen = (row: any) => {
    console.log("handleClickOpen", row.id)
    setGameId(row.id);
    setOpen(true);
  };

  const handleClose = () => {
    handleDeclareWinner();
    setOpen(false)
  };

  const handleDeclareWinner = () => {
    console.log('gameId:', gameId);
    axios
      .post("http://localhost:8080/game/updateGame", {
        id: gameId,
        status: 3,
        winner: gameWinner
      }, { headers })
      .then((res) => {
        console.log(res.data);
      });
  }

  const handleCloseBet = async (row: any) => {
    console.log('Button clicked for row:', row);
    axios
      .post("http://localhost:8080/game/updateGame", {
        id: row.id,
        status: 2
      }, { headers })
      .then((res) => {
        console.log(res.data.result);
      });
      
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'gameNo', headerName: 'Game Number', width: 200 },
    { field: 'eventName', headerName: 'Event Name', width: 200 },
    { field: 'createdDate', headerName: 'Bet Date', width: 200 },
    { field: 'typeStr', headerName: 'Type', width: 200 },
    { field: 'winner', headerName: 'Winner', width: 100 },
    { field: 'statusStr', headerName: 'Status', width: 150 },
    { field: 'button', headerName: 'Action', width: 150, renderCell: renderButtonCell },
  ];

  React.useEffect(() => {
    console.log("kind", kind)
    if (kind === "1") {
      setTitle("Close Betting")
    } else {
      setTitle("Declare Winner")
    }
  }, [])

  const handleGameTypeChange = (event: any) => {
    // Update the state with the selected option
    //this.setState({ selectedOption: event.target.value });
    console.log(event.target.value);
    setSelectedGameType(event.target.value)
    //setSelectedGameType({handleGameTypeChange});
    axios
      .get(`http://localhost:8080/game/findGamesByType/${event.target.value}/0/1000`, { headers })
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          console.log(res.data)
          setData(res.data.data)
        } else {
          console.log(res.data.message)
        }

      }).catch(error => {
        console.log("ERRORR")
        console.error('Error:', error);
      });;
  };

  return (
    <>
      <Grid container spacing={1} sx={{ borderLeft: '10px solid #e0e0e0' }}>
        <Grid item lg={12}><br /></Grid>
        <Grid item lg={12} md={12} xs={12}>{title}</Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField
            select
            label="Select Game type"
            variant="outlined"
            fullWidth
            value={selectedGameType}
            onChange={handleGameTypeChange}
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
        <Grid item lg={12} xs={12}>
          <DataGrid
            rows={data}
            columns={columns}
            pagination
            checkboxSelection
            paginationModel={paginationModel}
            pageSizeOptions={[5]}
            rowCount={100}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            loading={loading}
            keepNonExistentRowsSelected
          /*initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}*/
          />

        </Grid>
      </Grid>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Declare Game Winner</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select below who won the game
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={(event) => {
                console.log(event);
                setGameWinner(event.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Declare</Button>
          </DialogActions>
        </Dialog>
      </div>


    </ >
  );
}
export default UpdateGame;