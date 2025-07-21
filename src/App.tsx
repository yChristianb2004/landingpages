import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SaasLanding from './pages/SaasLanding';
import AgencyLanding from './pages/AgencyLanding';
import EcommerceLanding from './pages/EcommerceLanding';
import PortfolioLanding from './pages/PortfolioLanding';
import StartupLanding from './pages/StartupLanding';
import FitnessLanding from './pages/FitnessLanding';
import CryptoLanding from './pages/CryptoLanding';
import FoodDeliveryLanding from './pages/FoodDeliveryLanding';
import TravelLanding from './pages/TravelLanding';
import GameLanding from './pages/GameLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saas" element={<SaasLanding />} />
        <Route path="/agency" element={<AgencyLanding />} />
        <Route path="/ecommerce" element={<EcommerceLanding />} />
        <Route path="/portfolio" element={<PortfolioLanding />} />
        <Route path="/startup" element={<StartupLanding />} />
        <Route path="/fitness" element={<FitnessLanding />} />
        <Route path="/crypto" element={<CryptoLanding />} />
        <Route path="/food-delivery" element={<FoodDeliveryLanding />} />
        <Route path="/travel" element={<TravelLanding />} />
        <Route path="/game" element={<GameLanding />} />
      </Routes>
    </Router>
  );
}

export default App;