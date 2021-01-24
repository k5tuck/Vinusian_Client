import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="lheader">
      <span>
        <h1>Vinusian</h1>
      </span>
      <nav className="nav-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>Who We Are</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default LoginHeader;
