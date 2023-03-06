import React from "react";
import { Input } from "../../components/Input";
import "./style.css";

export const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="registerFormContainer">
      <h4>Kişisel Hesap Oluşturun</h4>
      <form className="registerForm" onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder="E-mail"
          className="emailInput"
          onChange={() => {}}
        />
        <Input
          type="password"
          placeholder="Password"
          className="passwordInput"
          onChange={() => {}}
        />
        <Input type="submit" className="submitInput" />
      </form>
    </div>
  );
};
