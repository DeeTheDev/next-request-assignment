// import { Container } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';
// import DataTable from './DataTable';
// const axios = require('axios');

import React from "react";

function TableList(props) {
  let data = props.element;
  let info = {
    id: data.id,
    department_names: data.department_names,
    expiration_date: data.expiration_date,
    request_date: data.request_date,
    request_due_date: data.request_due_date,
    request_text: data.request_text,
    requester: data.requester,
  }

  return (
    <React.Fragment>
      <tr>
        <td>{info.id}</td>
        <td>{info.requester}</td>
        <td>{info.department_names}</td>
        <td>{info.request_text}</td>
        <td>{info.request_date}</td>
        <td>{info.request_due_date}</td>
        <td>{info.expiration_date}</td>
      </tr>
    </React.Fragment>
  );
}

export default TableList;
