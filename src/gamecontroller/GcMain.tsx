import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToolbarComponent from './GcToolbarComponent';
import CreateGame from './CreateGame';
import UpdateGame from './UpdateGame';


const GcMain = () => {
  return (
    <>
      <ToolbarComponent />
      <Routes>
        <Route path="/create" element={<CreateGame />} />
        <Route path="/updateGame/:kind" element={<UpdateGame />} />
      </Routes>
      </>
  );
};

export default GcMain;
