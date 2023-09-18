import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './common/LoginForm';
import PlayerMain from './player/PlayerMain';
import MainLayout from './agent/components/layout/MainLayout';
import { routes } from "./agent/routes";
import GcMain from './gamecontroller/GcMain';

const App: React.FC = () => {
  return (
          <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/playerboard/*" element={<PlayerMain />} />
          <Route path="/gcboard/*" element={<GcMain />} />
          <Route path="/agentboard/" element={<MainLayout />}>
            {routes}
          </Route>

          {/* Add more routes for other pages */}
        </Routes>
      </Router>
      );
};

export default App;
