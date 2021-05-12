import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import DataTable from './DataTable.jsx';
const axios = require('axios');

function App() {
  // array of objects (data)
  let localData = localStorage.getItem('data')
  let [data, setData] = useState(JSON.parse(localData));

  useEffect(() => {
    if (!localStorage.getItem('data')) {
      let API_ROUTE = 'https://603804c74e3a9b0017e92b01.mockapi.io​/requests';
      axios.get(API_ROUTE)
        .then(function (response) {
          // console.log(response);
          response = response.data;
          setData(response);
          localStorage.setItem('data',JSON.stringify(response));
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [setData])


  return (
    <div className="App">
      <Container>
        <h1>API Calls</h1>
        <DataTable data={data}/>
      </Container>
    </div>
  );
}

export default App;
