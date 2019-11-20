import React, { Component } from "react";
import {
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
import auth from "../firebase";

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      open1: false,
      iconChange: iconDown,
      txt: "Log in",
      currentUser: null
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

  async componentDidMount() {
     const res = await auth.onAuthStateChanged(user => {
      if (user) {
        document.getElementsByClassName("btnStyle")[0].style.backgroundColor =
          "red";
        this.setState({ txt: "Scanning" });
      } else {
        document.getElementsByClassName("btnStyle")[0].style.backgroundColor =
          "#0062FF";
        this.setState({ txt: "Log in" });
      }
    });
  }

  onOpenModal = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });
        this.setState({ open: false });
        document.location.href = "/scanning";
      } else {
        this.setState({ open: true });
      }
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state; //open login modal
    const { open1 } = this.state;
    const { txt } = this.state;

    return (
      <div>
        <Jumbotron className="jumbotron-home">
          <div className="header-home">
            <h1 className="header-banner-name">
              Development of common in <br></br> mobile web application
              asthmagens.
            </h1>
            <p>
              web application that provides treatment guidelines and referral
              information <br></br>on work-related asthma and finding
              work-related asthma agents for medical graduates <br></br> to help
              diagnose work-related asthma
            </p>
        
            <div>
              <input
                className="btnStyle"
                type="submit"
                onClick={this.onOpenModal}
                value={txt}
              ></input>
              {/* <Button className="btnStyle" onClick={this.onOpenModal} value={this.state.txt}></Button> */}
              <Modal
                className="login-modal"
                onClose={this.onCloseModal}
                center={true}
                open={open}
                closeIconSize={20}
                closeOnOverlayClick
              >
                <Login />
              </Modal>
            </div>
            
          </div>
        </Jumbotron>
        <div id="grad-line-home"></div>

        <div className="ad-bar">
          {/* <div>
            <img
              class="img-fluid rounded mx-auto d-block img-down-up"
              src={this.state.iconChange}
              onClick={this.changeIcon}
            ></img>
          </div> */}
          <Container>
            <Row className="text-center">
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom-home" text="white">
                  <Card.Body
                    onClick={this.changeIcon}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                  >
                    <Card.Img
                      variant="top"
                      src={logo1}
                      style={{ width: "20%" }}
                    />
               <Card.Title className="txt-style-banner">Finding</Card.Title>
                    <Card.Text>
                      <Collapse in={this.state.open1}>
                        <label className="txt-style-banner">
                          Find the asthma agents by work and Find the asthma
                          agents by name
                        </label>
                      </Collapse>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

              </Col>
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom-home" text="white">
                  <Card.Body
                    onClick={this.changeIcon}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                  >
                    <Card.Img
                      variant="top"
                      src={logo2}
                      style={{ width: "20%" }}
                    />
                    <Card.Title className="txt-style-banner">
                      Referral information
                    </Card.Title>
                    <Card.Text>
                      <Collapse in={this.state.open1}>
                        <label className="txt-style-banner">
                          show the referral information <br></br> by using GPS
                        </label>
                      </Collapse>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

              </Col>
              <Col xs={12} sm={4} className="card-center">
                <Card className="card-body zoom-home" text="white">
                  <Card.Body
                    onClick={this.changeIcon}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                  >
                    <Card.Img
                      variant="top"
                      src={logo3}
                      style={{ width: "20%" }}
                    />
                    <Card.Title className="txt-style-banner">
                      Treatment guidelines
                    </Card.Title>
                    <Card.Text>
                      <Collapse in={this.state.open1}>
                        <label className="txt-style-banner">
                          Show the treatment <br></br> guidelines
                        </label>
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
