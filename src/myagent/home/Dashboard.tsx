import React, { useState, useEffect } from "react";

import axios from "axios";
import { Grid } from "@mui/material";
import Ez2Commission from "../common/Ez2Commission";
import Lotto3DCommission from "../common/Lotto3DCommission";
import WalletPoints from "../common/WalletPoints";
import SabongComm from "../common/TotalCommission";
import SabongCommission from "../common/SabongCommission";
import Pick3Commission from "../common/Pick3Commission";
import GameEndingCommission from "../common/GameEndingCommission";
import ReferraLink from "../common/ReferralLink";
import TotalCommission from "../common/TotalCommission";


type Props = {};

const Dashboard = (props: Props) => {
  const [sabongComm, setSabongComm] = useState(0);
  const [totalComm, setTotalComm] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);
  const [ez2Comm, setEz2Comm] = useState(0);
  const [lotto3dCurrentCommission, setLotto3dCurrentCommission] = useState(0);
  const [pick3CurrentCommission, setPick3CurrentCommission] = useState(0);
  const [gameEndingCurrentCommission, setGameEndingCurrentCommission] = useState(0);
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    console.log("token", token)
    console.log("headers", headers)
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
      });
  }, [])

  return (
    <>
      <div className="card">
        <h3>
          <div className="card-header">Dashboard</div>
        </h3>
        <div className="card-body">
        <div className="row">
            <div className="col"><ReferraLink /></div>
          </div>
          <br />
          <div className="row ">
            <div className="col-sm-2"><SabongCommission sabongCommission={sabongComm} /></div>
            <div className="col-sm-2"><Ez2Commission ez2Commission={ez2Comm} /></div>
            <div className="col-sm-2"><Lotto3DCommission lotto3DCommission={lotto3dCurrentCommission} /></div>
            <div className="col-sm-3"><Pick3Commission pick3Commission={pick3CurrentCommission} /></div>
            <div className="col-sm-3"><GameEndingCommission gameEndingCommission={gameEndingCurrentCommission} /></div>
          </div>
          <br />          
          <div className="row">
            <div className="col-sm-6"><WalletPoints walletPoints={walletPoints} /></div>
            <div className="col-sm-6"><TotalCommission totalCommission={totalComm} /></div>
          </div>
        </div>

      </div >
    </>
  );
};

export default Dashboard;