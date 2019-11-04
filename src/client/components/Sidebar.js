import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="_sidebar">
      <ul className="sidebar">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/sacco">Sacco</Link>
        </li>
        <li>
          <Link to="/riders">Riders</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
