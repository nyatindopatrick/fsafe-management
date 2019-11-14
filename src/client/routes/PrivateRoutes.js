import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { uniqBy } from "lodash";
import { rolesConfig } from "../config/roles";
import * as Routes from "./index";
import Navigation from "../components/header/Header";
import NotFound from "../components/NotFound";
import Sidebar from '../components/sidebar/Sidebar'

const PrivateRoutes = props => {
  const [allowedRoutes, setAllowed] = useState([]);

  useEffect(() => {
    let roles = JSON.parse(localStorage.getItem("roles"));
    if (roles) {
      roles = ["common", ...roles];

      let allowedRoutes = roles.reduce((acc, role) => {
        return [...acc, ...rolesConfig[role].routes];
      }, []);

      // For removing duplicate entries, compare with 'url'.
      allowedRoutes = uniqBy(allowedRoutes, "url");
      setAllowed([...allowedRoutes]);
    } else {
      props.history.push("/");
    }
  }, [props.history]);

  return (
    <div className="grid-container">
     <Sidebar />
      <Navigation routes={allowedRoutes} path={props.match.path} />
      <div className="main">
      <Switch >
        {allowedRoutes.map(route => (
          <Route
            exact
            key={route.url}
            component={Routes[route.component]}
            path={`${props.match.path}${route.url}`}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
      </div>

    </div>
  );
};

export default PrivateRoutes;
