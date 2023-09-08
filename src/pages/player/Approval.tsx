import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';

type Props = {};

function createData(
  id: number,
  name: string
) {
  return { id, name };
}

const Approval = (props: Props) => {

  const rows = [
    createData(1, 'Anthony'),
    createData(1, 'Jason'),
    createData(1, 'W'),
  ];
  return (
    <>
    <div>For Approval Players</div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </>
    
  );
};

export default Approval;