import React from 'react';
import moment from 'moment';

const Timestamp = ({ timestamp }) => {
  // Convert the PostgreSQL timestamp to JavaScript Date object
  const date = new Date(timestamp);

  // Format the date using Moment.js
  const formattedTime = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  return <div>{formattedTime}</div>;
};

export default Timestamp;