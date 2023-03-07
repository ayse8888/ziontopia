import React from "react";
import { useSelector } from "react-redux";
import { rateDatas } from "../../../datas";
import { walletFormValuesSelector } from "../../../redux/slices/walletSlice/selectors";
import "./style.css";

export const WalletRates = () => {
  const walletFormValues = useSelector(walletFormValuesSelector);

  return (
    <div className="walletRatesContainer">
      <div className="initialMoneyContainer">{walletFormValues.money}</div>
      <div className="ratesTableContainer">
        <div className="ratesTableHeader">
          <h4>Kitlenme Süresi</h4>
          <h4>Oranlar</h4>
          <h4>{}</h4>
        </div>
        {rateDatas.map((data) => {
          const totalRate = Number(
            (data.rateNumber * walletFormValues.money) / 100
          );
          const totalSum = Number(walletFormValues.money) + totalRate;
          console.log(totalSum);
          return (
            <div className="ratesTableRowContainer" key={data.id}>
              <div className="ratesTableRow">{data.month}</div>
              <div className="ratesTableRow">{data.rate}</div>
              <div className="ratesTableRow">
                {isNaN(totalSum) ? "" : totalSum}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WalletRates;
