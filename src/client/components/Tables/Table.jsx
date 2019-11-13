import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Table = ({ tableHeader, data }) => {
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData([...data]);
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((item, index) => (
            <th key={index} scope="col">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {newData &&
          newData.map((items, index) => {
            const {
              sacco,
              name,
              status,
              riders,
              ratings,
              location,
              reports,
              actions
            } = items;
            return (
              <tr key={index}>
                <td data-label="Sacco">{sacco || name}</td>
                <td data-label="Status">{status}</td>
                <td data-label="Riders">{riders || ratings}</td>
                <td data-label="Location">{location}</td>
                <td data-label="Reports">{reports}</td>
                <td data-label="Actions">{actions}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default Table;
