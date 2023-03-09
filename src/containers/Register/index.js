import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/Input";
import { registerFormValuesSelector } from "../../redux/slices/auth/selectors";
import { setRegisterFormValues } from "../../redux/slices/auth/slice";
import "./style.css";

export const Register = () => {

  const dispatch = useDispatch();
  const registerFormValues = useSelector(registerFormValuesSelector);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      setRegisterFormValues({
        ...registerFormValues,
        [name]: value,
      })
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(setRegisterFormValues(registerFormValues));
  };

  return (
    <div className="registerFormContainer">
      <h4>Kişisel Hesap Oluşturun</h4>
      <form className="registerForm" onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Full Name"
          className="nameInput"
          onChange={handleOnChange}
          value={registerFormValues?.name}
          name="name"
        />
        <Input
          type="email"
          placeholder="E-mail"
          className="emailInput"
          onChange={handleOnChange}
          value={registerFormValues?.email}
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          className="passwordInput"
          onChange={handleOnChange}
          value={registerFormValues?.password}
          name="password"
        />
        <Input type="submit" className="submitInput" />
      </form>
    </div>
  );
};
