import React from 'react';
import WalletPoints from '../common/WalletPoints';

type Props = {};

const AlertPage = (props: Props) => {
  return (
    <>
      <div>Wallet Mangement</div>
      <div className="card">
        <div className="row">
          <div className="col-sm-3"><WalletPoints /></div>
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