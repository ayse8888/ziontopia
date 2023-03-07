import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { walletFormValuesSelector } from "../../redux/slices/walletSlice/selectors";
import { reset, setWalletFormValues } from "../../redux/slices/walletSlice/slice";

const Wallet = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walletFormValues = useSelector(walletFormValuesSelector);

  const [formDisabled, setFormDisabled] = useState(false)

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
    // walletFormValues.money && setFormDisabled(true);
    navigate("/rates");
  };

  return (
    <div>
      {/* <nav>
        <Link to="rates">Rates</Link>
      </nav>
      <Outlet context={walletFormValues.money} /> */}
      <form className="walletForm" onSubmit={handleMoneySubmit}>
        <Input
          type="number"
          placeholder="Enter Start Amount"
          className="moneyInput"
          name="money"
          value={walletFormValues.money}
          onChange={handleOnChange}
        />
        <button
          className="submitInput"
          type="submit"
          // disabled={formDisabled}
        >
          Submit form
        </button>
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
