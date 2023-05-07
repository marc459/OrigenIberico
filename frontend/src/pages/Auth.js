import './Auth.css';
import React, { useState } from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";

function Navbar(props) {
  const { onLoginClick, onRegisterClick } = props;

  return (
    <div className="navbar">
      <img src="/OrigenIberico/imgs/logo-svg.svg" alt="Logo" className="logo" />
      <div className="menu">
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onRegisterClick}>Register</button>
      </div>
    </div>
  );
}

export function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      {showLogin && <Login />}
      {showRegister && <Register />}
    </div>
  );
}
