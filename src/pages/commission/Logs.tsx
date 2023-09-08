import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';

type Props = {};

function createData(
  id: number,
  event: string,
  fightNumber: string,
  from: string,
  amount: number
) {
  return { id, event, fightNumber, from, amount};
}

const Logs = (props: Props) => {

  const rows = [
    createData(1, 'event 1', '100', 'Richard', 1000),
    createData(1, 'event 2', '101', 'Aj', 5000),
    createData(1, 'event 3', '102', 'Arman', 13000),
  ];

  return (
    <>
    <div>Commission Logs</div>
    <br />
    <div>Summary Report for Sabong</div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell align="right">Fight Number</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell align="right">{row.fightNumber}</TableCell>
              <TableCell align="right">{row.from}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
    
  );
};

export default Logs;