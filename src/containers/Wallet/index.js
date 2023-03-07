import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { walletFormValuesSelector } from "../../redux/slices/walletSlice/selectors";
import { setWalletFormValues } from "../../redux/slices/walletSlice/slice";

const Wallet = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walletFormValues = useSelector(walletFormValuesSelector);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      setWalletFormValues({
        ...walletFormValues,
        [name]: value,
      })
    );
  };

  const handleMoneySubmit = (e) => {
    e.preventDefault();
    dispatch(setWalletFormValues(walletFormValues));
    navigate("/");
    console.log("formValues", walletFormValues);
  };

  return (
    <div>
      <form className="walletForm" onSubmit={handleMoneySubmit}>
        <Input
          type="text"
          placeholder="Enter Start Amount"
          className="moneyInput"
          name="money"
          value={walletFormValues.moneyAmount}
          onChange={handleOnChange}
        />
        <Input type="submit" className="submitInput" />
      </form>{" "}
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{wallet}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </div>
  );
};

export default Wallet;
