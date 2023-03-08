import React, { useState } from "react";
import { Input } from "../../components/Input";
import "./style.css";

export const Register = () => {

  const registerFormInitialValues = {
    name: "",
    email: "",
    password: ""
  }

  const [formValues, setFormValues] = useState(registerFormInitialValues);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setFormValues(formValues);
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
          value={formValues.name}
          name="name"
        />
        <Input
          type="email"
          placeholder="E-mail"
          className="emailInput"
          onChange={handleOnChange}
          value={formValues.email}
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          className="passwordInput"
          onChange={handleOnChange}
          value={formValues.password}
          name="password"
        />
        <Input type="submit" className="submitInput" />
      </form>
    </div>
  );
};
