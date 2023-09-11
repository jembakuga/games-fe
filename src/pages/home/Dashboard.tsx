import React, { useState, useEffect } from "react";
import SabongComm from '../common/SabongComm';
import TotalCommission from '../common/TotalCommission';
import WalletPoints from '../common/WalletPoints';
import ReferraLink from '../common/ReferralLink';
import axios from "axios";

type Props = {};

const Dashboard = (props: Props) => {
  const [sabongComm, setSabongComm] = useState(0);
  const [totalComm, setTotalComm] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/home/loadDashBoard/1")
      .then((res) => {
        console.log(res.data);
        setSabongComm(res.data.data.sabongCurrentCommission);
        setTotalComm(res.data.data.totalCommission);
        setWalletPoints(res.data.data.walletPoints);
      });
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container">
          <div className="row">
              <div className="col-sm"><ReferraLink /></div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm"><SabongComm sabongCurrentCommission={sabongComm} /></div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-3"><TotalCommission totalCommission={totalComm} /> <WalletPoints walletPoints={walletPoints}/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;