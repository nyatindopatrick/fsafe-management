import React from "react";
import {Link} from 'react-router-dom'
import avatar from '../Icons/avator.jpg'
import history from "../../util/history";


const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };
  return (
    <header className="header">
      <div className="header__search">Search...</div>
      <div className="header__avatar">Your face</div>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
