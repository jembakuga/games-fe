import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Props = {};

interface Data {
  playerId: number;
  name: string;
  username: string;
  createdDate: string;
}


const token = localStorage.getItem('token');

// Set the Authorization header in the Axios request
const headers = {
  Authorization: `Bearer ${token}`,
};

const renderButtonCell = (params: { row: any; }) => {
  console.log("token", token)
  return (

    <Button variant="contained" onClick={() => handleButtonClick(params.row)}>Approve</Button>

  );
}

const handleButtonClick = async (row: any) => {
  console.log('Button clicked for row:', row);
  axios
    .post("http://localhost:8080/player/approvePlayer", {
      id: row.id,
    }, {headers})
    .then((res) => {
      console.log(res.data.result);

    });
}

const Approval = (props: Props) => {

  const [players, setPlayers] = useState<Data[]>([]);


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name' },
    { field: 'username', headerName: 'UserName' },
    { field: 'createdDate', headerName: 'Registered Date', width: 200 },
    { field: 'button', headerName: 'Action', width: 150, renderCell: renderButtonCell },
  ];



  useEffect(() => {
    axios
      .get("http://localhost:8080/player/loadApprovalPlayers/0/1000", {headers})
      .then((res) => {
        console.log(res.data.success);
        if(res.data.success){
          console.log(res.data.data)
          setPlayers(res.data.data);
        }
        
      });
  }, [])

  return (
    <>
      <div>For Approval Players</div>
      <div>
        <DataGrid
          rows={players}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />

      </div>
    </>

  );
};

export default Approval;


