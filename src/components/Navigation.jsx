import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="body background-cover">
      <div className="header">
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>
              <Link to="/EnglishBlog/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/EnglishBlog/articles" className="nav-link">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/EnglishBlog/poetry" className="nav-link">
                Poetry Contest
              </Link>
            </li>
            <li>Motivational Videos</li>
            <li>Essay Contest</li>
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
