import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

type Props = {};

interface Data {
  playerId: number;
  name: string;
  username: string;
  sabongCurrentCommission: number;
  ez2CurrentCommission: number;
  lotto3dCurrentCommission: number;
  pick3CurrentCommission: number;
  gameEndingCurrentCommission: number;
  walletPoints: number,
  createdDate: string;
}

const Active = (props: Props) => {

  const [players, setPlayers] = useState<Data[]>([]);
  const token = localStorage.getItem('token');

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'UserName', width: 150 },
    { field: 'walletPoints', headerName: 'Wallet Points', type: 'number', width: 100 },
    { field: 'sabongCurrentCommission', headerName: 'Sabong', type: 'number', width: 120 },
    { field: 'ez2CurrentCommission', headerName: 'Ez2', type: 'number', width: 120 },
    { field: 'lotto3dCurrentCommission', headerName: 'Lotto 3D', type: 'number', width: 120 },
    { field: 'pick3CurrentCommission', headerName: 'Pick3', type: 'number', width: 120 },
    { field: 'gameEndingCurrentCommission', headerName: 'Game Ending', type: 'number', width: 120 },
    { field: 'createdDateStr', headerName: 'Registered Date', width: 200 },
    /*
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },*/
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/player/findPaginatedAgentPlayers/0/11", { headers })
      .then((res) => {
        console.log(res.data.data);
        setPlayers(res.data.data);
      });
  }, [])


  return (
    <>

      <div className="card">
        <h3>
          <div className="card-header">Active Players</div>
        </h3>
        <div className="card-body">
          <div className="row">
            <div className="col">
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
          </div>
        </div>
      </div>
    </>

  );
};

export default Active;