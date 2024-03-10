// NavBar.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainNavBar from './MainNavBar';
import Home from './Home';
import Contact from './Contact';
import DonorLogin from '../Donator/DonorLogin';
import Registration from '../Donator/Registration';
import AdminLogin from '../Admin/AdminLogin';
import Donate from '../Donator/Donate';

const NavBar = () => {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donorlogin" element={<DonorLogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default NavBar;
