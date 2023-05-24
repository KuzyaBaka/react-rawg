import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Header.scss";
import Input from "../Input/Input";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-item">
          <Link to={"/"}>
            <p className="item-link">RAWG</p>
          </Link>
        </div>
        <Input />
        <div className="header-item header-login">
          <div>
            <CgProfile />
          </div>
          <span>Login</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
