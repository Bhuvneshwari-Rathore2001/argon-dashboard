import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
