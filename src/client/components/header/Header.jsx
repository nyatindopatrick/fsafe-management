import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Icons/avator.jpg";
import history from "../../util/history";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Nav,
  Media
} from "reactstrap";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("roles");
    history.push("/");
  };
  return (
    <header className="header">
      {/* Search Button */}
      <div className="header__search ">
        <i className="fas fa-search icon"></i>
        <input type="text" placeholder="Search..." name="search" />
      </div>

      {/* Messages */}
      <span className="icon">
        <i className="fas fa-comments"></i>
      </span>

      {/* notification bell */}
      <Notification />

      {/* username */}
      <ProfileDropdown logout={handleLogout} />

      {/* <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button> */}
    </header>
  );
};

export default Header;

const ProfileDropdown = ({ logout }) => (
  <Nav className="align-items-center d-none d-md-flex" navbar>
    <UncontrolledDropdown nav>
      <DropdownToggle className="pr-0" nav>
        <Media className="align-items-center">
          <span className="user_name">
            John Doe
            <img
              src="../../../../public/assets/images/avator.jpg"
              alt="Avatar"
              className="avatar_face"
            />
          </span>
        </Media>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-arrow dropdown_container" right>
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">
            <strong>Satus:</strong> online
          </h6>
        </DropdownItem>
        <hr />
        {/* <Link to="admin/admin-profile"> */}
        <DropdownItem to="/admin/admin-profile" tag={Link}>
          <i className="fas fa-user" />
          <span> profile</span>
        </DropdownItem>
        <hr />
        {/* </Link> */}
        <DropdownItem to="/admin/logs" tag={Link}>
          <i className="fas fa-folder" />
          <span> Logs</span>
        </DropdownItem>
        <hr />
        <DropdownItem onClick={logout}>
          <i className="fas fa-running" />
          <span> Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);
const Notification = () => (
  <Nav className="align-items-center d-none d-md-flex" navbar>
    <UncontrolledDropdown nav>
      <DropdownToggle className="pr-0" nav>
        <Media className="align-items-center">
          <span className="icon">
            <i className="fas fa-bell"></i>
            <span className="_badge">8</span>
          </span>
        </Media>
      </DropdownToggle>
      <DropdownMenu
        className="dropdown-menu-arrow notification_container"
        right
      >
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">Notifications</h6>
        </DropdownItem>
        <hr />
        {/* <Link to="admin/admin-profile"> */}olor:#707
        <DropdownItem to="/admin/admin-profile" tag={Link}>
          <img className="avatar_face" src={avatar} alt="avatar" />

          <span className="search-query">New search query.</span>
          <div className="mins-ago">4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to="/admin/admin-profile" tag={Link}>
          <img className="avatar_face" src={avatar} alt="avatar" />

          <span className="search-query">New search query.</span>
          <div className="mins-ago">4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to="/admin/admin-profile" tag={Link}>
          <img className="avatar_face" src={avatar} alt="avatar" />

          <span className="search-query">New search query.</span>
          <div className="mins-ago">4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to="/admin/admin-profile" tag={Link}>
          <img className="avatar_face" src={avatar} alt="avatar" />

          <span className="search-query">New search query.</span>
          <div className="mins-ago">4 mins ago</div>
        </DropdownItem>
        <hr />
        <div className="view_all">
          <Link to="/messages">View all notifications</Link>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);
