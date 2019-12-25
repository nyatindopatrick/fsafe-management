import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dougnut from './dougnut';
import Reports from './Reports';
import { greenChart, purpleChart, blueBar } from '../Icons';
import { useStyles } from '../Classes/classes';

function Dashboard() {
  const [UIData] = useState(UI.overViewHeader);
  const classes = useStyles();

  return (
    <>
      <div className='content-wrapper'>
        <div className='row'>
          <div className='col-md-3 grid-margin stretch-card'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-title text-md-center text-xl-left'>Saccos</p>
                <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                  <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                    340
                  </h3>
                  <i className='ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
                </div>
                <p className='mb-0 mt-2 text-danger'>
                  100%{' '}
                  <span className='text-black ml-1'>
                    <small>(30 days)</small>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 grid-margin stretch-card'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-title text-md-center text-xl-left'>Riders</p>
                <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                  <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                    47033
                  </h3>
                  <i className='ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
                </div>
                <p className='mb-0 mt-2 text-danger'>
                  100%{' '}
                  <span className='text-black ml-1'>
                    <small>(30 days)</small>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 grid-margin stretch-card'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-title text-md-center text-xl-left'>
                  Active saccos
                </p>
                <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                  <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                    316
                  </h3>
                  <i className='ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
                </div>
                <p className='mb-0 mt-2 text-success'>
                  92.94%
                  <span className='text-black ml-1'>
                    <small>(30 days)</small>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 grid-margin stretch-card'>
            <div className='card'>
              <div className='card-body'>
                <p className='card-title text-md-center text-xl-left'>
                  Active Riders
                </p>
                <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                  <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                    42033
                  </h3>
                  <i className='ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
                </div>
                <p className='mb-0 mt-2 text-success'>
                  89.37%
                  <span className='text-black ml-1'>
                    <small>(30 days)</small>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <Grid item lg={12}>
          <div className='row'>
            <div className='col-md-12 grid-margin stretch-card'>
              <div className='card position-relative'>
                <div className='card-body'>
                  <p className='card-title'>Most reported Saccos</p>
                  <div className='row'>
                    <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-center'>
                      <div className='ml-xl-4'>
                        <h1>3500</h1>
                        <h3 className='font-weight-light mb-xl-4'>Reports</h3>
                        <p className='text-muted mb-2 mb-xl-0'>
                          The following Saccos have a total number of 3500
                          reports.
                        </p>
                      </div>
                    </div>
                    <div className='col-md-12 col-xl-9'>
                      <div className='row'>
                        <div className='col-md-4 mt-3 col-xl-5'>
                          <Dougnut data={data} />
                        </div>
                        <div className='col-md-6 col-xl-7'>
                          <div className='table-responsive mb-3 mb-md-0'>
                            <table className='table table-borderless report-table'>
                              <thead>
                                {data.map(({ label, value }) => (
                                  <tr key={label}>
                                    <td className='text-muted'>{label}</td>
                                    <td className='w-100 px-0'>
                                      <div className='progress progress-md mx-4'>
                                        <div
                                          className='progress-bar bg-primary'
                                          role='progressbar'
                                          style={{
                                            width: `${value.toString()}%`
                                          }}
                                          aria-valuenow='70'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      <h5 className='font-weight-bold mb-0'>
                                        {value}
                                      </h5>
                                    </td>
                                  </tr>
                                ))}
                              </thead>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={12}>
          <Reports />
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;

// UI specifics
const UI = {
  overViewHeader: ['Total Sacco', 'Total Riders', 'SMS Usage']
};

const data = [
  {
    label: 'Kondele sacco',
    value: 25
  },
  {
    label: 'Masaba Sacco',
    value: 75
  },
  {
    label: 'Milimani Sacco',
    value: 22
  },
  {
    label: 'Makoma Sacco',
    value: 45
  }
];
