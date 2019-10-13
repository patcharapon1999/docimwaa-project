import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  Collapse
} from "react-bootstrap";
import "../components/navbar.css";
import logo1 from "../assets/images/magnifying-glass.png";
import logo2 from "../assets/images/ambulance.png";
import logo3 from "../assets/images/doctor-suitcase.png";
import "../styles/Home.css";
import Modal from "react-responsive-modal";
import Login from "./Login";
import auth from '../firebase'

  
export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.txt = React.createRef();
    this.state = {
      open: false,
      open1: false, 
      open2: false, 
      open3: false,
    };
  };
  

  onOpenModal = (event) => {/////////////
    auth.onAuthStateChanged(user => {
      if (user) {
        // alert(bitly.shorten(this.txt.value.innerText))
        this.setState({ open: false });
        document.location.href = '/scanning'
      } else {
        this.setState({ open: true });
      }
    })
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
       
    return (
      <div>
        <Jumbotron className="jumbotron-home">
          <div className="header-home">
            <h1 className="header-name">
              Development of common in <br></br> mobile web application
              asthmagens.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br></br>
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
              <br></br>
              ad minim veniam, quis nostrud exercitation
            </p>
            <p>
              <div>
                <Button className="btnStyle" onClick={this.onOpenModal} ref={this.txt}>{/* disabled={currentUser}*/}
                  <label className="label">Log in</label>
                </Button>
                <Modal className="login-modal" 
                      onClose={this.onCloseModal} 
                      center={true} 
                      open={open} 
                      closeIconSize={20}>
                  <Login/>
                </Modal>
              </div>
            </p>
          </div>
        </Jumbotron>
        
        <div className="ad-bar">
          <Row className="text-center">
            <Col xs={12} sm={4} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body
                  onClick={() => this.setState({ open1: !open1 })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open1}
                >
                  <Card.Img
                    variant="top"
                    src={logo1}
                    style={{ width: "20%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                  <Card.Text>
                    <Collapse in={this.state.open1}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} sm={4} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body
                  onClick={() => this.setState({ open2: !open2 })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                >
                  <Card.Img
                    variant="top"
                    src={logo2}
                    style={{ width: "20%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                  <Card.Text>
                    <Collapse in={this.state.open2}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} sm={4} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body
                  onClick={() => this.setState({ open3: !open3 })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                >
                  <Card.Img
                    variant="top"
                    src={logo3}
                    style={{ width: "20%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                  <Card.Text>
                    <Collapse in={this.state.open3}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </div>
      </div>
    
    );
  }
}
