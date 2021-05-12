// import { Container } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';
// import DataTable from './DataTable';
// const axios = require('axios');

import React from "react";

function TableList(props) {
  let data = props.element;
  let { id,
    department_names,
    expiration_date,
    request_date,
    request_due_date,
    request_text,
    requester
  } = data;

  return (
    <React.Fragment>
      <tr>
        <td>{id}</td>
        <td>{requester}</td>
        <td>{department_names}</td>
        <td>{request_text}</td>
        <td>{request_date}</td>
        <td>{request_due_date}</td>
        <td>{expiration_date}</td>
      </tr>
    </React.Fragment>
  );
}

export default TableList;
