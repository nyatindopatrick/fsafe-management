import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import axios from 'axios';
import './sms.css';
import Moment from 'react-moment';
import CsvDownload from 'react-json-to-csv';

export default function Sms({ Loading }) {
  const [sms, setSms] = useState(null);
  const [singlesms, setSinglesms] = useState();
  const [search, setSearch] = useState(null);
  useEffect(() => {
    axios
      .post('/api/admin/messages')
      .then(res => {
        setSms(res.data.reverse());
        setSearch(res.data.reverse());
      })
      .catch(err => console.log(err));
  }, []);

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

  console.log(search);
  return (
    <>
      {!sms ? (
        <Loading />
      ) : (
        <div className='content-wrapper'>
          <span>
            <h3 className=' text-center'>Messages</h3>
          </span>
          <CsvDownload
            className='btn btn-primary'
            data={sms}
            filename='messages.csv'
          >
            Download csv
          </CsvDownload>
          <div className='messaging'>
            <div className='inbox_msg'>
              <div className='inbox_people'>
                <div className='headind_srch'>
                  <div className='recent_heading'></div>
                  <div className='srch_bar'>
                    <div className='stylish-input-group'>
                      <input
                        type='text'
                        className='search-bar'
                        placeholder='Search'
                        onChange={handlesearch}
                      />
                      <span className='input-group-addon'>
                        <button type='button'>
                          {' '}
                          <i
                            className='fa fa-search'
                            aria-hidden='true'
                          ></i>{' '}
                        </button>
                      </span>{' '}
                    </div>
                  </div>
                </div>
                <div className='inbox_chat'>
                  {search &&
                    search.map((item, i) => {
                      return (
                        <div
                          className='chat_list '
                          key={i}
                          onClick={() => setSinglesms(item)}
                        >
                          <div className='chat_people'>
                            <div className='chat_img'>
                              {' '}
                              <Avatar style={{ background: '#4239bf' }}>
                                <Person />
                              </Avatar>
                            </div>
                            <div className='chat_ib'>
                              <h5>
                                {item.from}{' '}
                                <span className='chat_date'>
                                  <Moment fromNow>{item.time}</Moment>
                                </span>
                              </h5>
                              <p>{item.message}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className='mesgs'>
                {!singlesms ? (
                  ' '
                ) : (
                  <div className='msg_history'>
                    <div className='incoming_msg'>
                      <div className='incoming_msg_img'>
                        {' '}
                        <Avatar>
                          <Person />
                        </Avatar>
                      </div>
                      <div className='received_msg'>
                        <div className='received_withd_msg'>
                          <p>{singlesms.text}</p>
                          <span className='time_date'>
                            {' '}
                            <Moment fromNow>{singlesms.time}</Moment>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
