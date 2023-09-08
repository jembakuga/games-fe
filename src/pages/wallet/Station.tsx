import React, { useEffect, useState } from 'react';
import WalletPoints from '../common/WalletPoints';
import axios from 'axios';

type Props = {};

const AlertPage = (props: Props) => {
  const [walletPoints, setWalletPoint] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/home/loadDashBoard/1")
      .then((res) => {
        console.log(res.data);
        setWalletPoint(res.data.data.sabongCurrentCommission);
      });
  }, [])
  
  return (
    <>
      <div>Wallet Mangement</div>
      <div className="card">
        <div className="row">
          <div className="col-sm-3"><WalletPoints walletPoints={walletPoints} /></div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">Wallet Loading Station</div>
        </div>
        <div>
          
        </div>
      </div>

    </>
  );
};

export default AlertPage;