import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel, GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Props = {};

interface Data {
  id: number,
  logDate: string,
  trasnsactionBy: string,
  transactionType: string,
  amount: number,
  transactionMovement: string,
  balance: number
}

const Logs = (props: Props) => {

  const [data, setData] = useState<Data[]>([]);
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [loading, setLoading] = React.useState(false);
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const token = localStorage.getItem('token');

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'createdDateStr', headerName: 'Log Date', width: 200 },
    { field: 'loadToName', headerName: 'Loaded To', width: 200 },
    { field: 'transactedByName', headerName: 'Transacted By', width: 200 },
    { field: 'type', headerName: 'Transaction Type', width: 200 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 100 },
    { field: 'transactionMovement', headerName: 'Txn Movement', width: 150 }/*,
    { field: 'balance', headerName: 'Balance', width: 80 }
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
      .get(`http://localhost:8080/wallet/findWalletTxnListByAgent/${paginationModel.page}/${paginationModel.pageSize}`, {headers})
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      });
  }, [])




  return (
    <>
      <div>Wallet Transaction Logs</div>
      <br />
      <div>
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


      </div>
    </>

  );
};

export default Logs;