import React from "react";
import Graph from './graph'

function Dashboard() {
  return (
    <>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu" />
      </div>
      <main className="main">
        <div className="row">
          <div className="col-sm">
            <div className="main-overview">
              <div className="card " style={{ maxWidth: "18rem" }}>
                <p>Total Sacco</p>
                <div className="row">
                  <div className="col-6">
                    <h5>246</h5>
                  </div>
                  <div className="col-6">
                    <img src="https://svgshare.com/i/G2T.svg" alt="..." />
                  </div>
                </div>
              </div>
              <div className="card " style={{ maxWidth: "18rem" }}>
                <p>Total Riders</p>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <h5>2453</h5>
                  </div>
                  <div className="col-6">
                    <img src="https://svgshare.com/i/G1v.svg" alt="..." />
                  </div>
                </div>
                <div className="bg-transparent "></div>
              </div>
              <div className="card " style={{ maxWidth: "18rem" }}>
                <p>SMS Usage</p>
                <div className="row">
                  <div className="col-6">
                    <h5>394</h5>
                  </div>
                  <div className="col-6">
                    <img src="https://svgshare.com/i/G1C.svg" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="bodycard">
              <h5>Least reported Saccos</h5>
              <div>
              <Graph />
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-container card-spacing">
              <div className="bodycard card2">Reports</div>
            </div>
          </div>
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
