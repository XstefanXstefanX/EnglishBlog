import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="body">
      <div className="header">
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                GreenRipple
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/essays" className="nav-link">
                Essays
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="body-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
