import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about-us';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
