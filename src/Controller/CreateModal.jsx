import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
class CreateModal extends React.Component{

  //Update creating deprecated warning when Modal is clicked
  // constructor(props) {
  //   super(props);
  // }
  state = {
      show: false,
  };
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});
  
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
                      value={this.props.input.requester} onChange={this.props.handleCreateChange}/>
                  </Form.Group>
                  <Form.Group controlId="department_names">
                      <Form.Label>Department Name</Form.Label>
                      <Form.Control type="text" name="department_names" 
                      value={this.props.input.department_names} onChange={this.props.handleCreateChange}/>
                  </Form.Group>
                  <Form.Group controlId="request_text">
                      <Form.Label>Request Text</Form.Label>
                      <Form.Control type="text" name="request_text" 
                      value={this.props.input.request_text} onChange={this.props.handleCreateChange}/>
                  </Form.Group>
                  <Form.Group controlId="request_due_date">
                      <Form.Label>Request Due Date</Form.Label>
                      <Form.Control type="date" name="request_due_date" 
                      value={this.props.input.request_due_date} onChange={this.props.handleCreateChange}/>
                  </Form.Group>
                  <Form.Group controlId="expiration_date">
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control type="date" name="expiration_date" 
                      value={this.props.input.expiration_date} onChange={this.props.handleCreateChange}/>
                  </Form.Group>
                  <Button variant="primary" onClick={this.props.handleCreate}>
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
  
export default CreateModal