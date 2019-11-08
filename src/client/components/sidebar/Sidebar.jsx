import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close" />
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">
          <Link to="/app/dashboard">
            <i className="fas fa-chart-bar"></i> Dashboard
          </Link>
        </li>
        <li className="sidenav__list-item">
          <Link to="/sacco">
            <i className="fas fa-users"></i> Sacco
          </Link>
        </li>
        <li className="sidenav__list-item">
          <Link to="/riders">
            <i className="fas fa-user"></i> Riders
          </Link>
        </li>
        <li className="sidenav__list-item">
          <Link to="/messages">
            <i className="fas fa-envelope"></i> Messages
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
