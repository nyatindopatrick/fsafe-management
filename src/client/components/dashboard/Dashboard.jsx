import React from "react";

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
                <div className="overviewcard">
                  <div className="overviewcard__icon">Total Sacco</div>
                  <div className="overviewcard__info">246</div>
                </div>
                <div className="overviewcard">
                  <div className="overviewcard__icon">Total Riders</div>
                  <div className="overviewcard__info">2453</div>
                </div>
                <div className="overviewcard">
                  <div className="overviewcard__icon">SMS Usage</div>
                  <div className="overviewcard__info">394</div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">Least reported Saccos</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-container card-spacing">
                <div className="card card2">Reports</div>
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
