import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const WalletDetail = () => {
  const { state } = useLocation();
  return (
    <div className="walletDetailContainer">
      {state ? (
        <div className="rateContainer">
          <h3>Your Rate Plan</h3>
          <div className="ratePlanContainer">
            <p>
              <span className="monthTitle">Month:</span> {state.month}
            </p>
            <p>
              <span className="rateTitle">Rate:</span> {state.rate}
            </p>
          </div>
        </div>
      ) : (
        "You Have No Selected Rate Plan"
      )}
    </div>
  );
};

export default WalletDetail;
