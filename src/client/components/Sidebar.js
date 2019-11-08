import React from "react";
import '@fortawesome/fontawesome-free'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <h2>Fika Safe</h2>
        <ul>
            <li><a href="#"><i className="fas fa-chart-bar"></i>Dashboard</a></li>
            <li><a href="#"><i className="fas fa-users"></i>Sacco</a></li>
            <li><a href="#"><i className="fas fa-user"></i>Riders</a></li>
            <li><a href="#"><i className="fas fa-envelope"></i>Messages</a></li>
        </ul> 

    </div>
    </div>
  );
};

export default Sidebar;