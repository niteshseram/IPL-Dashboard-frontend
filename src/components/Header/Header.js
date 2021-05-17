import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="brand">IPL Dashboard</h1>
      </Link>
    </header>
  );
};
