import React from "react";
import { Button, Modal } from "react-bootstrap";

class ServiceModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <Button className="btn-primary" onClick={this.showModal}>
          Learn more
        </Button>
        <Modal show={this.state.show}>
          <Modal.Header>{this.props.title}</Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ServiceModal;
