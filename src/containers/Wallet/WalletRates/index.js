import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import { rateDatas } from "../../../datas";
import { selectedRateSelector, walletFormValuesSelector } from "../../../redux/slices/walletSlice/selectors";
import { setSelectedRate } from "../../../redux/slices/walletSlice/slice";
import "./style.css";

export const WalletRates = () => {
  const walletFormValues = useSelector(walletFormValuesSelector);
  const selectedRate = useSelector(selectedRateSelector);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleModal = (id, data) => {
    if (isModalOpen) {
      handleModalClose(id);
      dispatch(setSelectedRate());
    } else {
      handleModalOpen(id);
      dispatch(setSelectedRate(data));
    }
  };

  return (
    <div className="walletRatesContainer">
      <p className="totalBalanceTitle">Total Balance</p>
      <div className="initialMoneyContainer">{walletFormValues?.money}</div>
      <div className="ratesTableContainer">
        <div className="ratesTableHeader">
          <h4>Kitlenme Süresi</h4>
          <h4>Oranlar</h4>
          <h4>{}</h4>
        </div>
        {rateDatas?.map((data) => {
          const totalRate = Number(
            (data.rateNumber * walletFormValues?.money) / 100
          );
          const totalSum = Number(walletFormValues?.money) + totalRate;
          return (
            <div
              className="ratesTableRowContainer"
              key={data.id}
              onClick={() => {
                toggleModal(data.id, data);
              }}
            >
              <div className="ratesTableRow">{data.month}</div>
              <div className="ratesTableRow">{data.rate}</div>
              <div className="ratesTableRow">
                {isNaN(totalSum) ? "" : totalSum}
              </div>
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <Modal
          closeModal={toggleModal}
          // modalContentText_1="Please be informed you cannot change your rate after selection."
          modalContentText_2="Do You Confirm The Selected Rate ?"
          confirmModal={() => navigate("/details", { state: selectedRate })}
        />
      )}
    </div>
  );
};

export default WalletRates;
