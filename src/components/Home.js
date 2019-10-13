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
import "../styles/navbar.css";
import logo1 from "../assets/images/magnifying-glass.png";
import logo2 from "../assets/images/ambulance.png";
import logo3 from "../assets/images/doctor-suitcase.png";
import iconDown from "../assets/images/thin-arrowheads-pointing-down.png";
import iconUp from "../assets/images/thin-arrowheads-pointing-up.png";
import "../styles/Home.css";
import Modal from "react-responsive-modal";
import Login from "./Login";

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      open1: false,
      open2: false,
      open3: false,
      iconChange: iconDown
    };
  }

  changeIcon = () => {
    if (this.state.iconChange == iconDown) {
      this.setState({ open1: !this.state.open1 });
      this.setState({ iconChange: iconUp });
    } else if (this.state.iconChange == iconUp) {
      this.setState({ open1: !this.state.open1 });
      this.setState({ iconChange: iconDown });
    }
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  clicked() {
    document.documentElement.style.overflow = "hidden";
  }

  render() {
    const { open } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    const { iconChange } = this.state;

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
                <Button className="btnStyle" onClick={this.onOpenModal}>
                  Log in
                </Button>
                <Modal
                  className="login-modal"
                  onClose={this.onCloseModal}
                  center={true}
                  open={open}
                  closeIconSize={20}
                >
                  <Login />
                </Modal>
              </div>
            </p>
          </div>
        </Jumbotron>

        <div id="grad-line-home"></div>

        <div className="ad-bar">
          <div>
            <img
              class="img-fluid rounded mx-auto d-block img-down-up"
              src={this.state.iconChange}
              onClick={this.changeIcon}
            ></img>
          </div>
          <Container>
            <Row className="text-center">
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom overlay" text="white">
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
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </Collapse>
                    </Card.Text>
                    <h2></h2>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom" text="white">
                  <Card.Body
                    onClick={() => this.setState({ open1: !open1 })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
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
                      <Collapse in={this.state.open1}>
                        <div id="example-collapse-text">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </Collapse>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom" text="white">
                  <Card.Body
                    onClick={() => this.setState({ open1: !open1 })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
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
                      <Collapse in={this.state.open1}>
                        <div id="example-collapse-text">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </Collapse>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
