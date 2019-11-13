import React, { useState } from "react";
import Graph from "./graph";

import Overview from "../shared/Overview";

import { greenChart, purpleChart, blueBar } from "../Icons";

function Dashboard() {
  const [UIData] = useState(UI.overViewHeader);
  return (
    <>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu" />
      </div>
      <main className="main">
        <Overview overview={UIData} />
        <div className="card-container">
          <div className="bodycard">
            <h5>Least reported Saccos</h5>
            <div>
              <div className="row">
                <div className="col">
                  <Graph />
                </div>
                <div className="col">
                  <Graph />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container card-spacing">
          <div className="bodycard card2">Reports</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">© 2019</div>
        <div className="footer__signature">Fika Safe</div>
      </footer>
    </>
  );
}

export default Dashboard;

// UI specifics
const UI = {
  overViewHeader: ["Total Sacco", "Total Riders", "SMS Usage"]
};
