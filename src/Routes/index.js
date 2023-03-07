import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../containers/About';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Wallet from '../containers/Wallet';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="wallet" element={<Wallet />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;