import React from "react";
import { NavLink } from "react-router-dom";

import "./IndexModal.css";

const Header = () => {
  return (
    <header>
      <nav className="container  nav-header">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/debts">Debts</NavLink>
        <NavLink to="/transaction">Transaction</NavLink>
      </nav>
    </header>
  );
};

export default Header;
