import React from 'react';
import SabongComm from '../common/SabongComm';
import TotalCommission from '../common/TotalCommission';
import WalletPoints from '../common/WalletPoints';
import ReferraLink from '../common/ReferralLink';

type Props = {};

const Dashboard = (props: Props) => {
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
              <div className="col-sm"><SabongComm /></div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-3"><TotalCommission /> <WalletPoints /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;