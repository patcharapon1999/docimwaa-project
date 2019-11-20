import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Row, Col, Image, Container } from "react-bootstrap";
import MapAPI from "./MapAPI";
import temp_img from "../assets/images/avatar.png";

export default function ForwardGuidelineModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ margin: "30px" }}>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <tr>
                <td>ชื่อ: </td>
                <td>{props.name}</td>
              </tr>
              <tr>
                <td>ที่อยู่: </td>
                <td>{props.address}</td>
              </tr>
              <tr>
                <td>เบอร์ติดต่อ: </td>
                <td>{props.cellPhone}</td>
              </tr>
              <tr>
                <td>ที่อยู่: </td>
                <td>{props.address}</td>
              </tr>
            </Col>
            <Col xs={6} md={4}>
                <Image src={temp_img} rounded />
            </Col>
          </Row>
        </div>
        <MapAPI
          google={props.google}
          center={{ lat: props.lat, lng: props.lng }}
          height="300px"
          zoom={15}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
