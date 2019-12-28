import React from 'react';
import './sms.css';

export default function Sms() {
  console.log('Here');
  return (
    <>
      <div className='content-wrapper'>
        <h3 class=' text-center'>Messages</h3>
        <div class='messaging'>
          <div class='inbox_msg'>
            <div class='inbox_people'>
              <div class='headind_srch'>
                <div class='recent_heading'></div>
                <div class='srch_bar'>
                  <div class='stylish-input-group'>
                    <input
                      type='text'
                      class='search-bar'
                      placeholder='Search'
                    />
                    <span class='input-group-addon'>
                      <button type='button'>
                        {' '}
                        <i class='fa fa-search' aria-hidden='true'></i>{' '}
                      </button>
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div class='inbox_chat'>
                <div class='chat_list '>
                  <div class='chat_people'>
                    <div class='chat_img'>
                      {' '}
                      {/* <img
                        src='https://ptetutorials.com/images/user-profile.png'
                        alt='sunil'
                      />{' '} */}
                    </div>
                    <div class='chat_ib'>
                      <h5>
                        076434521 <span class='chat_date'>12 minutes ago</span>
                      </h5>
                      <p>KMEE744N</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='mesgs'>
              <div class='msg_history'>
                <div class='incoming_msg'>
                  <div class='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt='sunil'
                    />
                  </div>
                  <div class='received_msg'>
                    <div class='received_withd_msg'>
                      <p>KMEE744N</p>
                      <span class='time_date'> 11:01 AM | June 9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
