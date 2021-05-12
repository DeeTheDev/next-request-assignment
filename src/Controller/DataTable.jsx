import React from 'react';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import TableList from './TableList.jsx';

function DataTable(props) {
  let data = props.data || [];
  const list = [];
  data.forEach((element, index) => {
    list.push(
      <TableList key={index} element={element}/>
    )
  })
  return (
  <Container>
      <Table striped bordered hover variant="dark">
          <thead>
              <tr>
                <th>ID</th>
                <th>Requester</th>
                <th>Department Name</th>
                <th>Requested Text</th>
                <th>Request Date</th>
                <th>Request Due Date</th>
                <th>Expiration Date</th>
              </tr>
          </thead>
          <tbody>
              { list }
          </tbody>
      </Table>
  </Container>
  );
}

export default DataTable;
