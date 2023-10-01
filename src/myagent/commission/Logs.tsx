import React from 'react';
import { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';

type Props = {};

interface Data {
  commissionId: number;
  event: string;
  fightNo: string;
  from: string;
  amount: number;
}

const renderButtonCell = (params: { row: any; }) => {
  return (
    <button onClick={() => handleButtonClick(params.row)}>
      Click Me
    </button>
  );
}

const handleButtonClick = (row: any) => {
  // Handle the button click here, you can access the row data as 'row'
  console.log('Button clicked for row:', row);
}

const Logs = (props: Props) => {

  const [sabong, setSabong] = useState<Data[]>([]);
  const [others, setOthers] = useState<Data[]>([]);
  const token = localStorage.getItem('token');

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'event', headerName: 'Event', width: 200 },
    { field: 'fightNo', headerName: 'Fight Number', width: 200 },
    { field: 'from', headerName: 'From', width: 100 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 150 },
    { field: 'createdDateStr', headerName: 'Date', type: 'number', width: 200 }/*,
    { field: 'button', headerName: 'Action', width: 150, renderCell: renderButtonCell },
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
      .get("http://localhost:8080/commission/loadLogs/0/1000", { headers })
      .then((res) => {
        console.log(res.data);
        setSabong(res.data.data.sabong);
        setOthers(res.data.data.others);
      });
  }, [])


  return (
    <>

      <div className="card">
        <h3>
          <div className="card-header">Commission Logs</div>
        </h3>
        <div className="card-body">
          <div className='row'>
            <div className='col'>
              <h5>Summary Report for Sabong</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <DataGrid
                rows={sabong}
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
          <br />
          <div className="row">
            <div className="col">
              <h5>Summary Report for EZ2/3D LOTTO/PICK3/GAME-ENDING</h5>
            </div>
            <div className="row">
              <div className="col">
                <DataGrid
                  rows={others}
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
      </div>
    </>
  );
};

export default Logs;