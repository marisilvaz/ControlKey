import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Home from './pages/Home';
import User from './pages/User';
import Keys from './pages/Keys';
import Equipaments from './pages/Equipaments';
import Reservation from './pages/Reservation';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <Sidebar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/Keys" element={<Keys />} />
            <Route path="/Equipaments" element={<Equipaments />} />
            <Route path="/Reservation" element={<Reservation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
