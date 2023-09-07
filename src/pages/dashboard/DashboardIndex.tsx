import React from 'react';
import SabongComm from '../home/SabongComm';
import TotalCommission from '../home/TotalCommission';
import WalletPoints from '../home/WalletPoints';

type Props = {};

const DashboardIndex = (props: Props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">Area: </div>
          <div className="col-sm-4">
            <SabongComm />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-3">Collection Date:</div>
        <div className="col-sm-4">asdfasdf asf</div>
      </div>

      <br /> <br />


      <div className="card">
        <div className="card-body">
          <div className="container">
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

export default DashboardIndex;