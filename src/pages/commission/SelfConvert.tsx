import React from 'react';
import SabongComm from '../common/TotalCommission';
import TotalPoints from '../common/TotalPoints';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type Props = {};

function createData(
  id: number,
  logDate: string,
  trasnsactionBy: string,
  transactionType: string,
  amount: number,
  transactionMovement: string,
  balance: number
) {
  return { id, logDate, trasnsactionBy, transactionType, amount, transactionMovement, balance };
}

const SelfConvert = (props: Props) => {

  const rows = [
    createData(1, '01/01/2023', 'richard', 'withdraw', 100, 'movement', 400),
    createData(1, '01/01/2023', 'arman', 'withdraw', 100, 'movement', 11500),
    createData(1, '01/01/2023', 'aj', 'withdraw', 100, 'movement', 6500),
  ];

  return (
    <>
      <div>Commission Mangement</div>
      <div className="card">
        <div className="row">
          <div className="col-sm-3"><SabongComm /></div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3"><TotalPoints /></div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">Commission Loading Station</div>
          <div className="col-sm-3">Self Commission Convert Station Form</div>
          <div className="col-sm-3">Amount</div>
          <div className="col-sm-3"><input type='text' /></div>
          <div className="col-sm-3">Commission Type</div>
          <div className="col-sm-3">
            <select>
              <option value="1" id="1">commission type 1</option>
              <option value="2" id="2">commission type 2</option>
            </select>
          </div>
        </div>
        <div>
          <br />
          <div className="row">
            <div className="col-sm-3">Commission Loading Transaction History</div>
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
                          {row.logDate}
                        </TableCell>
                        <TableCell align="right">{row.trasnsactionBy}</TableCell>
                        <TableCell align="right">{row.transactionType}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.transactionMovement}</TableCell>
                        <TableCell align="right">{row.balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SelfConvert;