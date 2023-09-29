import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Dashboard from './home/Dashboard';
import TotalSummaryReport from './home/TotalSummaryReport';
import WalletStation from './wallet/WalletStation';
import WalletLogs from "./wallet/Logs";
import SelfConvert from './commission/SelfConvert';
import CommissionLogs from './commission/Logs'
import Approval from './player/Approval';
import Active from './player/Active';
import LandingPage from './landing/LandingPage';

const AgentMain = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/totalSummaryReport" element={<TotalSummaryReport />} />
        <Route path="/walletstation" element={<WalletStation />} />
        <Route path="/walletlogs" element={<WalletLogs />} />
        <Route path="/self" element={<SelfConvert />} />
        <Route path="/commissionlogs" element={<CommissionLogs />} />
        <Route path="/activeplayer" element={<Active />} />
        <Route path="/approveplayer" element={<Approval />} />
      </Routes>
    </>
  );
};

export default AgentMain;
