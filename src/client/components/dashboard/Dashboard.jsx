import React, {useState} from 'react';
import Graph from './graph';
import Dougnut from './dougnut';
import Reports from './Reports';
import { greenChart, purpleChart, blueBar } from '../Icons';

function Dashboard() {
  const [UIData] = useState(UI.overViewHeader);
  return (
    <>
      <div className='main-overview' align='center'>
        <div className='card ' style={{ maxWidth: '14rem' }}>
          <p>Total Sacco</p>
          <div className='row'>
            <div className='col-6'>
              <h5>246</h5>
            </div>
            <div className='col-6'>
              <img src={blueBar} alt='...' />
            </div>
          </div>
        </div>
        <div className='card ' style={{ maxWidth: '14rem' }}>
          <p>Total Riders</p>
          <div className='row'>
            <div className='col-6'>
              {' '}
              <h5>2453</h5>
            </div>
            <div className='col-6'>
              <img src={purpleChart} alt='...' />
            </div>
          </div>
          <div className='bg-transparent '></div>
        </div>
        <div className='card ' style={{ maxWidth: '14rem' }}>
          <p>SMS Usage</p>
          <div className='row'>
            <div className='col-6'>
              <h5>394</h5>
            </div>
            <div className='col-6'>
              <img src={greenChart} alt='...' />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card-container'>
            <div className='bodycard'>
              <h5>Most reported Saccos</h5>
              <div>
                <Dougnut />
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card-container'>
            <div className='bodycard'>
              <h5>Least reported Saccos</h5>
              <Graph />
            </div>
          </div>
        </div>
      </div>
      <div className='card-container card-spacing'>
        <div className='bodycard card2'>
          <h2>Reports</h2>
          <Reports />
        </div>
      </div>

      <footer className='footer'>
        <div className='footer__copyright'>© 2019</div>
        <div className='footer__signature'>Fika Safe</div>
      </footer>
    </>
  );
}

export default Dashboard;

// UI specifics
const UI = {
  overViewHeader: ["Total Sacco", "Total Riders", "SMS Usage"]
};
