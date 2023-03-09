import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';
import Wallet from '../containers/Wallet';
import WalletDetail from '../containers/Wallet/WalletDetails';
import WalletRates from "../containers/Wallet/WalletRates";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />}></Route>
      <Route path="wallet" element={<Wallet />} />
      <Route path="rates" element={<WalletRates />} />
      <Route path="details" element={<WalletDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;