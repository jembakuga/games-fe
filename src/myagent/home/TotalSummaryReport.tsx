import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

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

interface Data {
  id: number,
  gameNo: string,
  eventName: string,
  winner: string
}

const TotalSummaryReport = (props: Props) => {

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState<Data[]>([]);
  const token = localStorage.getItem('token');
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [rowSelectionModel, setRowSelectionModel] =
  React.useState<GridRowSelectionModel>([]);

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'gameNo', headerName: 'Game Number', width: 200 },
    { field: 'eventName', headerName: 'Event Name', width: 200 },
    { field: 'winner', headerName: 'Winner', width: 100 }
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/home/loadRoomSummary`, { headers })
      .then((resp) => {
        console.log(resp.data.data);
        setData(resp.data.data);
      });
  }, [])

  return (
    <>
      <div>
        <div className="header">Game Summary</div>
      </div>
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

export default TotalSummaryReport;