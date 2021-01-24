import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <div className="main-header">
      <span>
        <img src="/faviconlogocolor.png" alt="Vinusian Logo" />
        <h1>Vinusian</h1>
      </span>
      <nav className="main-nav-links">
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/deflist">
            <li>Definitions</li>
          </Link>
          <Link to="/nistlist">
            <li>Checklist</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default MainHeader;
