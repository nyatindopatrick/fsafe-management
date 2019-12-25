import React, { useState, useEffect } from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
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
    <div>
      {isLoading ? (
        <div align='center'>
          <Loading />
        </div>
      ) : (
        data &&
        data.map((item, i) => {
          const { from, message, time } = item;
          return (
            <ListGroup key={i}>
              <ListGroupItem>
                <div className='row'>
                  <div className='col-md-2'>
                    <ListGroupItemHeading>
                      <b>{from}</b>
                    </ListGroupItemHeading>
                  </div>
                  <em>
                    <Moment fromNow>{time}</Moment>
                  </em>
                </div>
                <ListGroupItemText>{message}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          );
        })
      )}
    </div>
  );
};

export default Reports;
