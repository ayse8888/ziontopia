import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../containers/About';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Wallet from '../containers/Wallet';
import WalletRates from "../containers/Wallet/WalletRates";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />}></Route>
      <Route path="wallet" element={<Wallet />}>
        {/* <Route index element={<WalletRates />} />
        <Route path="rates" element={<WalletRates />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
      <Route path="rates" element={<WalletRates />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;