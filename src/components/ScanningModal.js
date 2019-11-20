import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function ScanningModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Result Scanning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.msg}</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/optional">
          <Button>Next</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
