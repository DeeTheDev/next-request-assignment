import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
let axios = require('axios');

export default class CreateModal extends React.Component{

      state = {
          show: false,
          requester: "",
          department_names: "",
          expiration_date: "",
          request_due_date: "",
          request_text: "",
      };

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

  SaveDataToLocalStorage = (data) => {
    var newData = [];
    newData = JSON.parse(localStorage.getItem('data')) || [];
    newData.push(data);
    localStorage.setItem('data', JSON.stringify(newData));
  }

    handleSubmit = () => {
      const info = {
          requester: this.state.requester,
          department_names: this.state.department_names,
          expiration_date: this.state.expiration_date,
          request_date: this.state.request_date,
          request_due_date: this.state.request_due_date,
          request_text: this.state.request_text,
      }
      let CREATE_ROUTE = 'https://603804c74e3a9b0017e92b01.mockapi.io​/requests/';

      axios.post(CREATE_ROUTE, info)
          .then((response) => {
              console.log(response.data);
              this.SaveDataToLocalStorage(response.data)
          })
    }
    handleInputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render(){
        
        return (
          <>
            <Button variant="primary" onClick={this.handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                    <Form.Group controlId="requester">
                        <Form.Label>Requester</Form.Label>
                        <Form.Control type="requester" name="requester" placeholder="Enter requester name or email" 
                        value={this.state.requester} onChange={this.handleInputChanged.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="department_names">
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control type="text" name="department_names" 
                        value={this.state.department_names} onChange={this.handleInputChanged.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="request_text">
                        <Form.Label>Request Text</Form.Label>
                        <Form.Control type="text" name="request_text" 
                        value={this.state.request_text} onChange={this.handleInputChanged.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="request_due_date">
                        <Form.Label>Request Due Date</Form.Label>
                        <Form.Control type="date" name="request_due_date" 
                        value={this.state.requester} onChange={this.handleInputChanged.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="expiration_date">
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="date" name="expiration_date" 
                        value={this.state.expiration_date} onChange={this.handleInputChanged.bind(this)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
  }
  
// export default CreateModal