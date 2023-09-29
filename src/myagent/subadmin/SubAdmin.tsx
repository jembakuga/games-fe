import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';

type Props = {};

function createData(
  id: number,
  dateRegistered: string,
  userName: string,
  points: number,
  sabongCommission: number,
  sabongCommissoinPercentage: string,
  action: string
) {
  return { id, dateRegistered, userName, points, sabongCommission, sabongCommissoinPercentage, action };
}

const SubAdmin = (props: Props) => {

  const rows = [
    createData(1, '01/01/2023', 'Jhayr', 45, 53300, '6%', 'action'),
    createData(1, '01/01/2023', 'Mhae', 432, 4300, '67%', 'action'),
    createData(1, '01/01/2023', 'She', 76, 1400, '7%', 'action'),
    createData(1, '01/01/2023', 'Karen', 55, 16400, '54%', 'action'),
  ];

  return (
    <>
    <div>Active Sub Admin List </div>
    <br />
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date Registered</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Sabong Commission</TableCell>
            <TableCell align="right">Sabong Commission %</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dateRegistered}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.sabongCommission}</TableCell>
              <TableCell align="right">{row.sabongCommissoinPercentage}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
    
  );
};

export default SubAdmin;