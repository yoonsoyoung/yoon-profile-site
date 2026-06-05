import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import './index.css';

function App(): React.ReactElement {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
