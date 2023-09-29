import React from 'react';
import ActionAreaCard from '../../common/ActionAreaCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IconButton, Typography } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WalletIcon from '@mui/icons-material/Wallet';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PasswordIcon from '@mui/icons-material/Password';
import { Link, useNavigate } from 'react-router-dom';
import LargeButton from '../../common/LargeButton';

type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useNavigate();

  const handleIconClick = (paramUrl: string) => {
    // Your click event logic here, using param1 and param2
    console.log(`Clicked with parameters: ${paramUrl}`);
    navigate(paramUrl);
  };
  return (
    <>
      <div>
        <div className="card mx-auto" >
          <div className="card-body">
            <br /><br /><br /><br />
            <div className="row">
              <div className="col">
                <LargeButton
                  title={"Dashboard"}
                  icon={
                    <DashboardIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/dashboard')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Summary Report"}
                  icon={
                    <SummarizeIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/totalSummaryReport')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Wallet Station"}
                  icon={
                    <WalletIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/walletstation')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Wallet Logs"}
                  icon={
                    <FormatListNumberedIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/walletlogs')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Sub Admin"}
                  icon={
                    <SupervisorAccountIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/walletlogs')}
                    />}
                />
              </div>
            </div>

            <br /><br /><br /><br />


            <div className="row">
              <div className="col">
                <LargeButton
                  title={"Convert Commission"}
                  icon={
                    <AttachMoneyIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/self')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Commission Logs"}
                  icon={
                    <ListAltIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/commissionlogs')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Active Players"}
                  icon={
                    <SportsHandballIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/activeplayer')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"For Approval"}
                  icon={
                    <DoneAllIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/approveplayer')}
                    />}
                />
              </div>
              <div className="col">
                <LargeButton
                  title={"Change Password"}
                  icon={
                    <PasswordIcon
                      style={{ fontSize: '140px' }}
                      onClick={() => handleIconClick('/myagentboard/approveplayer')}
                    />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;