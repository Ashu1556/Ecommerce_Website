import React from "react";
import "./Nav.css";

import { Authoentication } from "./Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const { setIsLoggedIn, user } = useContext(Authoentication);
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <div className="navbar1">
          <h2>Ecommerce Website</h2>
        </div>
        <div className="navbar2">
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/about">About us</Link>

          <button
            className="btn4"
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/");
            }}
          >
            Log Out
          </button>
          {user}
        </div>
      </div>
    </div>
  );
};

export default Nav;
