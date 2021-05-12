import React from 'react';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import TableList from './TableList.jsx';
import CreateModal from './CreateModal.jsx';

function DataTable(props) {
  let data = props.data || [];
  return (
  <Container>
      <CreateModal />
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
              {
                data.map((element, index) => {
                  return (<TableList key={index} element={element}/>)
                })
              }
          </tbody>
      </Table>
  </Container>
  );
}

export default DataTable;
