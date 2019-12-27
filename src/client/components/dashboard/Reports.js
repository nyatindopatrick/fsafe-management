import React, { useState, useEffect } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom';
import mockData from './reportdata.json';
import Loading from '../Loading';
import Moment from 'react-moment';

const Reports = () => {
  const [data, getData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
    const renew = setInterval(loadData, 8000);
    return () => {
      clearInterval(renew);
    };
  }, []);
  const loadData = () => {
    !mockData ? setLoading(true) : getData([...mockData]);
  };
  return (
    <div style={{ overflow: 'visible', height: '12rem' }}>
      {isLoading ? (
        <div align='center'>
          <Loading />
        </div>
      ) : (
        data &&
        data.map((item, i) => {
          const { from, message, time } = item;
          return (
            <MDBListGroup key={i}>
              <div
                className='col-fluid report'
                style={{ background: '#ffff', height: '5rem' }}
              >
                <div className='d-flex w-100 justify-content-between'>
                  <Link to='/#'>
                    <h5 className='mb-1'>{from}</h5>
                  </Link>
                  <small>
                    <Moment fromNow>{time}</Moment>
                  </small>
                </div>
                <p className='mb-1'>{message}</p>
              </div>
            </MDBListGroup>
          );
        })
      )}
    </div>
  );
};

export default Reports;
