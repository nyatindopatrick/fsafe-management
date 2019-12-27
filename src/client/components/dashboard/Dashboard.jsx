import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Dougnut from './dougnut';
import Reports from './Reports';
import Loading from '../Loading';
import { useStyles } from '../Classes/classes';
import Head from '../Head/DashHead';

function Dashboard() {
  const [UIData] = useState(UI.overViewHeader);
  const classes = useStyles();

  return (
    <>
      <div className='content-wrapper'>
        <Head info={HeadInfo} />
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

        <div className='row reportrow'>
          <div className='col-lg'>
            <h4>Reports</h4>
            <div id='overflowTest'>
              <div class='large-2'>
                <div class='force-overflow'>
                  <Reports />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg'>
            <h4>SMS Queries</h4>
            <div id='overflowTest'>
              <div class='large-2'>
                <div class='force-overflow'>
                  <Reports />
                </div>
              </div>
            </div>
          </div>
        </div>
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

const HeadInfo = {
  saccos: 340,
  riders: 47033,
  activeSaccos: 316,
  activeRiders: 42033
};
