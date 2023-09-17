import React, { useState, useEffect } from "react";
import SabongComm from '../common/SabongCommission';
import TotalCommission from '../common/TotalCommission';
import WalletPoints from '../common/WalletPoints';
import ReferraLink from '../common/ReferralLink';
import axios from "axios";
import { Grid } from "@mui/material";
import SabongCommission from "../common/SabongCommission";
import Ez2Commission from "../common/Ez2Commission";
import Lotto3DCommission from "../common/Lotto3DCommission";
import Pick3Commission from "../common/Pick3Commission";
import GameEndingCommission from "../common/GameEndingCommission";

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

  // Set the Authorization header in the Axios request
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    console.log("token", token)
    console.log("headers", headers)
    axios
      .get("http://localhost:8080/home/loadDashBoard", {headers})
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
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} xs={12}><h3>Dashboard</h3></Grid>
        <Grid item lg={2} md={4} xs={12}><SabongComm sabongCommission={sabongComm} /></Grid>
        <Grid item lg={2} md={4} xs={12}><Ez2Commission ez2Commission={ez2Comm} /></Grid>
        <Grid item lg={2} md={4} xs={12}><Lotto3DCommission lotto3DCommission={lotto3dCurrentCommission} /></Grid>
        <Grid item lg={2} md={4} xs={12}><Pick3Commission pick3Commission={pick3CurrentCommission} /></Grid>
        <Grid item lg={3} md={5} xs={12}><GameEndingCommission gameEndingCommission={gameEndingCurrentCommission} /></Grid>

        <Grid item lg={12} md={12} xs={12}><ReferraLink /></Grid>
        <Grid item lg={3} md={4} xs={12}><WalletPoints walletPoints={walletPoints} /></Grid>
        <Grid item lg={3} md={4} xs={12}><TotalCommission totalCommission={totalComm} /></Grid>
        <Grid item lg={6} md={4} xs={12}></Grid>
      </Grid>
    </>
  );
};

export default Dashboard;