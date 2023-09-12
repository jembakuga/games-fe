import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

type Props = {};

function createData(
  id: number,
  dateCreated: string,
  eventName: string,
  noOfFights: number,
  status: string,
  totalPlasada: number,
) {
  return { id, dateCreated, eventName, noOfFights, status, totalPlasada };
}

const TotalSummaryReport = (props: Props) => {

  const rows = [
    createData(1, '01/01/2023', 'event 1', 11, 'open', 0.00),
    createData(2, '01/01/2023', 'event 2', 3, 'open', 0.0),
    createData(3, '01/01/2023', 'event 3', 32, 'open', 0.0),
    createData(4, '01/01/2023', 'event 4', 4, 'open', 0.0),
    createData(5, '01/01/2023', 'event 5', 13, 'open', 0.0),
  ];

  return (
    <>
    <div>
      <div className="header">Room Summary</div>
    </div>
    <br />
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date Created</TableCell>
            <TableCell align="right">Event Name</TableCell>
            <TableCell align="right"># of Fights</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Total Plasada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dateCreated}
              </TableCell>
              <TableCell align="right">{row.eventName}</TableCell>
              <TableCell align="right">{row.noOfFights}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.totalPlasada}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
    
  );
};

export default TotalSummaryReport;