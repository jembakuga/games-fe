import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./agent/components/layout/MainLayout";
import { routes } from "./agent/routes";
import PlayerMain from "./player/PlayerMain";


function App() {
  return (
    <BrowserRouter>
    <PlayerMain />
    </BrowserRouter>
    
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;
