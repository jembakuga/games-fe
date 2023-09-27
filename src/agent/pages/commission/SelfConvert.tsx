import React, { useEffect, useState } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import SabongComm from '../common/SabongCommission';
import TotalPoints from '../common/TotalPoints';
import Ez2Commission from '../common/Ez2Commission';
import Lotto3DCommission from '../common/Lotto3DCommission';
import Pick3Commission from '../common/Pick3Commission';
import GameEndingCommission from '../common/GameEndingCommission';
import WalletPoints from '../common/WalletPoints';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

type Props = {};

const commmissionTypes = [
  { value: '1', label: 'Sabong' },
  { value: '2', label: 'EZ2' },
  { value: '3', label: '3D Lotto' },
  { value: '4', label: 'Pick3' },
  { value: '5', label: 'Game Ending' }
];

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

interface Data {
  id: number,
  logDate: string,
  trasnsactionBy: string,
  transactionType: string,
  amount: number,
  transactionMovement: string,
  balance: number
}

const SelfConvert = (props: Props) => {

  const [sabongComm, setSabongComm] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalComm, setTotalComm] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);
  const [ez2Comm, setEz2Comm] = useState(0);
  const [lotto3dCurrentCommission, setLotto3dCurrentCommission] = useState(0);
  const [pick3CurrentCommission, setPick3CurrentCommission] = useState(0);
  const [gameEndingCurrentCommission, setGameEndingCurrentCommission] = useState(0);
  const [amount, setAmount] = useState('');
  const [agentId, setAgentId] = useState(0);
  const [selectedCommType, setSelectedCommType] = useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const token = localStorage.getItem('token');

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const rows = [
    createData(1, '01/01/2023', 'richard', 'withdraw', 100, 'movement', 400),
    createData(2, '01/01/2023', 'arman', 'withdraw', 100, 'movement', 11500),
    createData(3, '01/01/2023', 'aj', 'withdraw', 100, 'movement', 6500),
  ];

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'createdDateStr', headerName: 'Transaction Date', width: 200 },
    { field: 'typeString', headerName: 'Transaction Type', width: 200 },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 100 }
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/home/loadDashBoard", { headers })
      .then((res) => {
        console.log(res.data);
        setSabongComm(res.data.data.sabongCurrentCommission);
        setTotalComm(res.data.data.totalCommission);
        setWalletPoints(res.data.data.walletPoints);
        setEz2Comm(res.data.data.ez2CurrentCommission);
        setLotto3dCurrentCommission(res.data.data.lotto3dCurrentCommission);
        setPick3CurrentCommission(res.data.data.pick3CurrentCommission);
        setGameEndingCurrentCommission(res.data.data.gameEndingCurrentCommission);
        setAgentId(res.data.data.id);
        axios
          .get(`http://localhost:8080/commission/loadCommissionConverts/${res.data.data.id}/${paginationModel.page}/${paginationModel.pageSize}`, { headers })
          .then((resp) => {
            console.log(resp.data);
            setData(resp.data.data);
          });
      });
  }, [])

  const handleSubmitClick = () => {
    axios
      .post("http://localhost:8080/commission/createConvertCommission", {
        agentId: agentId,
        amount: amount,
        type: selectedCommType
      }, { headers })
      .then((res) => {
        console.log(res.data);
        setSabongComm(res.data.agent.sabongCurrentCommission);
        setTotalComm(res.data.agent.totalCommission);
        setWalletPoints(res.data.agent.walletPoints);
        setEz2Comm(res.data.agent.ez2CurrentCommission);
        setLotto3dCurrentCommission(res.data.agent.lotto3dCurrentCommission);
        setPick3CurrentCommission(res.data.agent.pick3CurrentCommission);
        setGameEndingCurrentCommission(res.data.agent.gameEndingCurrentCommission);
        setAgentId(res.data.agent.id);
        setData(res.data.comms);
      });
  };

  return (
    <>

      <div className="card">
        <h3>
          <div className="card-header">Commission Management</div>
        </h3>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col"><WalletPoints walletPoints={walletPoints} /></div>
              <div className="col"><SabongComm sabongCommission={sabongComm} /></div>
              <div className="col"><Ez2Commission ez2Commission={ez2Comm} /></div>
              <div className="col"><Lotto3DCommission lotto3DCommission={lotto3dCurrentCommission} /></div>
              <div className="col"><Pick3Commission pick3Commission={pick3CurrentCommission} /></div>
              <div className="col"><GameEndingCommission gameEndingCommission={gameEndingCurrentCommission} /></div>
            </div>
            <br />
            <div className="card">
              <h5>
                <div className="card-header">Commission Loading Station</div>
              </h5>
              <div className="row">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col"><h6>Self Commission Convert Form</h6></div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2">Amount</div>
                      <div className="col-sm-10">
                        <TextField
                          id="amount"
                          label="Amount"
                          type="number"
                          onChange={(event) => {
                            console.log(event);
                            setAmount(event.target.value);
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2">Commission Type</div>
                      <div className="col-sm-10">
                        <TextField
                          select
                          label="Select a transaction type"
                          variant="outlined"
                          fullWidth
                          value={selectedCommType}
                          onChange={(event) => {
                            setSelectedCommType(event.target.value);
                          }}
                          margin="normal"
                        >
                          {commmissionTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-1'>
                        <Button variant="contained" onClick={handleSubmitClick}>Submit</Button>
                      </div>
                      <div className='col-sm-1'>
                        <Button variant="contained">Cancel</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
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
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default SelfConvert;