import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../util/history";

const Navigation = props => {
  const handleLogout = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };
  return (
    <div className=" _header ">
      <nav className="navbar nav">
        <div className="nav-link">
          <Link to="/app" style={{ color: "#fff" }}>
            Fika safe
          </Link>
        </div>
        {props.routes.map(route => (
          <Link
            key={route.url}
            className="nav-link"
            to={`${props.path}${route.url}`}
          >
            {route.title}
          </Link>
        ))}
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};


export default Navigation;
