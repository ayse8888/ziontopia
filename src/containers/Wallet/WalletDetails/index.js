import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const WalletDetail = () => {
  const { state } = useLocation();
  return (
    <>
      {state ? (
        <div className="rateContainer">
          <h3>Your Rate Plan</h3>
          <div className="ratePlanContainer">
            <p>Month: {state.month}</p>
            <p>Rate: {state.rate}</p>
          </div>
        </div>
      ) : (
        "You Have No Selected Rate Plan"
      )}
    </>
  );
};

export default WalletDetail;
