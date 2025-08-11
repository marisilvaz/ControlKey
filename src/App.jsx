import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Home from './pages/Home';
import User from './pages/User';
import Keys from './pages/Keys';
import Equipaments from './pages/Equipaments';
import Reservation from './pages/Reservation';
import Login from './pages/Login';


function App() {
  const Location = useLocation();
  return (
      <div className='app-container'>
        {Location.pathname !=='/login' && <Sidebar />}
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/Keys" element={<Keys />} />
            <Route path="/Equipaments" element={<Equipaments />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
