import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <div className="sideHeader">Fika Safe</div>
      <hr />
      <ul className="sidenav__list">
        <li className="sidenav__list-item">
          <NavLink activeClassName="active" to="/app/dashboard">
            <i className="fas fa-chart-bar"></i> Dashboard
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink activeClassName="active" to="/app/sacco">
            <i className="fas fa-users"></i> Sacco
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink activeClassName="active" to="/app/riders">
            <i className="fas fa-user"></i> Riders
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink activeClassName="active" to="/app/sms">
            <i className="fas fa-envelope"></i> Messages
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
