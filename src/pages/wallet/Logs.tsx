import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'createdDate', headerName: 'Log Date', width: 200 },
    { field: 'transactedByName', headerName: 'Transacted By', width: 200 },
    { field: 'type', headerName: 'Transaction Type', width: 200 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 200 },
    { field: 'transactionMovement', headerName: 'Transaction Movement', width: 200 },
    { field: 'balance', headerName: 'Balance', width: 200 },/*
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
      .get("http://localhost:8080/wallet/findWalletTxnListByAgent/1/0/10")
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

export default Logs;