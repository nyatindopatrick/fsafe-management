import React, { useState, useEffect } from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import axios from 'axios';
import './filter.css';
import Moment from 'react-moment';
import CsvDownload from 'react-json-to-csv';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Sms({ Loading }) {
  const [sms, setSms] = useState(null);
  const [singlesms, setSinglesms] = useState();
  const [search, setSearch] = useState(null);
  const [lazy, setLazy] = useState([]);
  useEffect(() => {
    axios
      .post('/api/admin/messages')
      .then(res => {
        setSms(res.data.reverse());
        setSearch(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(lazy);
  // useEffect(() => {
  //   LoadLazy()
  // });
// const LoadLazy = ()=>setLazy([...(search && search.splice(0, 20))]);

  const handlesearch = e => {
    const { value } = e.target;
    let results = [];
    sms.map(item => {
      if (
        Object.values(item)
          .join('')
          .includes(value)
      ) {
        results.push(item);
      }
    });

    setSearch(results);
  };

  // const fetchMoreData = () => {
  //   return setTimeout(() => {
  //     setLazy([
  //       ...lazy,
  //       ...(search && search.splice(lazy.length, lazy.length + 20))
  //     ]);
  //   }, 1500);
  // };
  return (
    <>
      {!sms ? (
        <Loading />
      ) : (
        <div className='row'>
          <div className='col-md-12'>
            <div className='x_panel'>
              <div className='x_title'>
                <div className='clearfix'></div>
              </div>

              {/* grid */}
              <div className='row'>
                <div className='col'>
                  <button
                    id='compose'
                    className='btn btn-sm btn-success '
                    type='button'
                  >
                    COMPOSE
                  </button>
                </div>
                <div className='col-lg-2'>
                  <form className='form-inline '>
                    <MDBIcon icon='search' />
                    <input
                      className='form-control form-control-sm ml-3 w-75'
                      type='text'
                      placeholder='Search'
                      aria-label='Search'
                      onChange={handlesearch}
                    />
                  </form>
                </div>
                <div className='col col-lg-2'>
                  <CsvDownload
                    className='btn btn-primary'
                    data={sms}
                    filename='messages.csv'
                  >
                    Download csv
                  </CsvDownload>
                </div>
              </div>

              <div className='x_content'>
                <div className='row'>
                  <div className='col-sm-3 mail_list_column'>
                    {/* <InfiniteScroll
                      dataLength={sms.length}
                      next={fetchMoreData}
                      hasMore={true}
                      loader={<h4>Loading...</h4>}
                    > */}
                      {lazy &&
                        lazy.map((item, i) => {
                          return (
                            <a href='#' onClick={() => setSinglesms(item)}>
                              <div className='mail_list'>
                                <div className='.smsleft'></div>
                                <div className='.smsright'>
                                  <h3>
                                    {item.from}
                                    <small>
                                      <Moment fromNow>{item.time}</Moment>
                                    </small>
                                  </h3>
                                  <p>{item.message}</p>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                    {/* </InfiniteScroll> */}
                  </div>
                  {!singlesms ? (
                    ' '
                  ) : (
                    <div className='col-sm-9 mail_view'>
                      <div className='inbox-body'>
                        <div className='mail_heading row'>
                          <div className='col-md-8'></div>
                          <div className='col-md-4 text-.smsright'>
                            <p className='date'>
                              {' '}
                              <Moment>{singlesms.time}</Moment>
                            </p>
                          </div>
                          <div className='col-md-12'>
                            <h4>{singlesms.from}</h4>
                          </div>
                        </div>

                        <div className='view-mail'>
                          <p>{singlesms.text}</p>
                        </div>

                        <div className='btn-group'>
                          <button
                            className='btn btn-sm btn-default'
                            type='button'
                            data-placement='top'
                            data-toggle='tooltip'
                            data-original-title='Print'
                          >
                            <i className='fa fa-print'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
