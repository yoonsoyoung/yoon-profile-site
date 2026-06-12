import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './pages/PortfolioPage';
import './index.css';

function App(): React.ReactElement {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
