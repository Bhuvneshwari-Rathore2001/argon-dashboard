import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/about-us';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
