import React from "react";
import history from "../../util/history";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };
  return (
    <header className="header">
      <div className="header__search ">
        <i className="fas fa-search icon"></i>
        <input type="text" placeholder="Search..." name="search" />
      </div>
      <div className="header_generic_items">
        {/* icon */}
        <span className="icon">
          <i className="fas fa-comments"></i>
        </span>
        {/* notification bell */}
        <div className="__dropdown">
          <span className="icon">
            <i className="fas fa-bell"></i>
            <input type="text" placeholder="9" className="notify_icon" />
          </span>
          <div className="dropdown__content">
            <p>Hello World!</p>
          </div>
        </div>

        {/* username */}

        <div className="__dropdown">
          <span className="user_name">
            John Doe
            <img
              src="../../../../public/assets/images/avator.jpg"
              alt="Avatar"
              className="avatar_face"
            />
          </span>
          <div className="dropdown__content">
            <p>Hello World!</p>
          </div>
        </div>
      </div>

      {/* <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button> */}
    </header>
  );
};

export default Header;
