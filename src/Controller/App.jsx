import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import DataTable from './DataTable.jsx';
import CreateModal from './CreateModal.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createModal = React.createRef();
    this.state = {
      data: [],
      input: {}
    };
  }
  // Get localStorage array
  localData = localStorage.getItem('data')
  componentDidMount() {
    if (!this.localData) {
      let API_ROUTE = 'https://603804c74e3a9b0017e92b01.mockapi.io​/requests';
      axios.get(API_ROUTE)
        .then(function (response) {
          // console.log(response);
          response = response.data;
          this.setState({data:response});
          localStorage.setItem('data', JSON.stringify(response));
        })
        .catch(function (error) {
          console.log(error);
        })
    }else {
      this.setState({data:JSON.parse(this.localData)});
    }
  }
  // Updates for Create modal
  handleCreateChange(event) {
    let {name, value} = event.target;
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        // update the value of specific key [name]
        [name]: value
      }
    }))
  }
  handleCreate(){
    console.log("hit the handleCreate")
    let CREATE_ROUTE = 'https://603804c74e3a9b0017e92b01.mockapi.io​/requests/';
    axios.post(CREATE_ROUTE, this.state.input)
      .then((response) => {
        this.saveDataLocalAndState(response.data)
        this.setState({input: {}})
      })
  }
  saveDataLocalAndState = (data) => {
    let newData = data;
    let newList = [];
    newList = JSON.parse(this.localData) || [];
    newList.push(newData);
    // Update new object to local storage array
    localStorage.setItem('data', JSON.stringify(newList));
    // Update data state
    this.setState({data:newList});
  }

  render () {
    console.log(this.state);
    return (
        <div className="App">
          <Container>
            <h1>API Calls</h1>
            <CreateModal 
              ref={ this.createModal }
              input={ this.state.input}
              handleCreate={ this.handleCreate.bind(this)}
              handleCreateChange={this.handleCreateChange.bind(this)}/>
            <DataTable data={ this.state.data }/>
          </Container>
        </div>
      );
  }  
}

export default App;
