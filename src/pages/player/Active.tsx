import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';

type Props = {};

function createData(
  id: number,
  name: string,
  balance: number,
  totalCommission: number
) {
  return { id, name, balance, totalCommission };
}

const Active = (props: Props) => {

  const rows = [
    createData(1, 'Duero', 10000,  40800),
    createData(1, 'Jem', 3000, 11500),
    createData(1, 'Arpee', 400400,  68500),
  ];

  return (
    <>
    <div>Active Players</div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Total Commission</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right">{row.totalCommission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
    
  );
};

export default Active;