import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { walletFormValuesSelector } from "../../redux/slices/walletSlice/selectors";
import { setWalletFormValues } from "../../redux/slices/walletSlice/slice";
import "./style.css";

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
    navigate("/rates");
  };

  // useEffect(() => {
  //   dispatch(reset());
  // }, [dispatch])

  return (
    <div className="walletContainer">
      <form className="walletForm" onSubmit={handleMoneySubmit}>
        <Input
          type="number"
          placeholder="Enter Start Amount"
          className="moneyInput"
          name="money"
          value={walletFormValues?.money}
          onChange={handleOnChange}
        />
        <button className="submitInput" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Wallet;
