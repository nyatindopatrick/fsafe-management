import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonToggle, Button } from 'reactstrap';
import EditModal from './EditModal';
import Loading from '../Loading';
import PaginationComponent from 'react-js-pagination';

const Table = ({ tableHeader, data, UI }) => {
  const [newData, setNewData] = useState();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setNewData({ ...data });
  }, [data]);

  const pageSize = 50;

  const handlePageChange = pageNumber => {
    console.log(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <>
      {!newData ? (
        <div align='center'>
          <Loading />
        </div>
      ) : (
        <table>
          <thead>
            <tr style={{ backgroundColor: '#E2E7FF' }}>
              {tableHeader.map((item, index) => (
                <th key={index} scope='col'>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newData.sacco &&
              newData.sacco
                .slice(activePage * pageSize, (activePage + 1) * pageSize)
                .map((items, index) => {
                  const {
                    _id,
                    sacco,
                    name,
                    status,
                    riders,
                    ratings,
                    location,
                    reports,
                    actions,
                    operationStatus
                  } = items;
                  return (
                    <tr key={index}>
                      <td data-label='No.'>{index + 1}</td>
                      <td data-label='Sacco'>{sacco || name}</td>
                      <td data-label='Status'>{status}</td>
                      <td data-label='Riders'>
                        {
                          newData.rider.filter(({ sacco }) => {
                            sacco == _id;
                          }).length
                        }
                      </td>
                      <td data-label='Location'>{location}</td>
                      <td data-label='Reports'>{reports}</td>
                      <td data-label='Actions'>
                        <Button
                          className='deactivate_activate action_btn'
                          outline
                          color={status === 'Active' ? 'success' : 'danger'}
                          value={status}
                        >
                          {status}
                        </Button>
                        <EditModal modalTitle={UI.modal} />

                        <Button className=' action_btn' outline color='danger'>
                          <i className='fas fa-trash-alt'></i>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      )}
      <PaginationComponent
        totalItemsCount={data.sacco.length}
        itemsCountPerPage={pageSize}
        maxPaginationNumbers={9}
        activePage={activePage}
        onChange={handlePageChange}
      />
    </>
  );
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  saccoUI: PropTypes.object,
  riderUI: PropTypes.object
};

export default Table;
