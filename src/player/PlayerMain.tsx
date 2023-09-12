import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SabongMain from './sabong/SabongMain';
import ToolbarComponent from './common/ToolbarComponent';
import Lotto3DMain from './lotto3d/Lotto3DMain';
import Ec2Main from './ec2/Ec2GameMain';


const PlayerMain = () => {
  return (
    <>
      <ToolbarComponent />
      <Routes>
        <Route path="/sabong" element={<SabongMain />} />
        <Route path="/ec2" element={<Ec2Main />} />
        <Route path="/lotto3D" element={<Lotto3DMain />} />
      </Routes>
      </>
  );
};

export default PlayerMain;
