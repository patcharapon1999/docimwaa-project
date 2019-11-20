import React, { Component } from "react";
import { Button, Jumbotron, Container, Card, Form } from "react-bootstrap";
import "../styles/Scanning.css";
import ScanningModal from "./ScanningModal";

export default class Scanning extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption1: "",
      selectedOption2: "",
      selectedOption3: "",
      selectedOption4: "",
      modalShow: false,
      msgResult: ""
    };
    this.radioChange1 = this.radioChange1.bind(this);
    this.radioChange2 = this.radioChange2.bind(this);
    this.radioChange3 = this.radioChange3.bind(this);
    this.radioChange4 = this.radioChange4.bind(this);
  }

  radioChange1(e) {
    this.setState({
      selectedOption1: e.currentTarget.value
    });
  }
  radioChange2(e) {
    this.setState({
      selectedOption2: e.currentTarget.value
    });
  }
  radioChange3(e) {
    this.setState({
      selectedOption3: e.currentTarget.value
    });
  }
  radioChange4(e) {
    this.setState({
      selectedOption4: e.currentTarget.value
    });
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log(this.state.selectedOption1);
    console.log(this.state.selectedOption2);
    console.log(this.state.selectedOption3);
    console.log(this.state.selectedOption4);
    if (
      this.state.selectedOption1 === "" ||
      this.state.selectedOption2 === "" ||
      this.state.selectedOption3 === "" ||
      this.state.selectedOption4 === ""
    ) {
      console.log("invalid");
      alert("invalid");
      //this.setState({ modalShow: false });
    } 
    else if (
      this.state.selectedOption1 === "1" &&
      this.state.selectedOption2 === "1" &&
      this.state.selectedOption3 === "1" &&
      this.state.selectedOption4 === "1"
    ) {
      this.setState({msgResult: "ท่านมีความเสี่ยงที่จะเป็นโรคหอมหืด"});
      console.log("collect");
    }else{
      this.setState({msgResult: "ยินดีตอนรับหน้าถัดไป"})
    }
  };

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-scanning">
          <div className="header-scanning">
            <h1 className="header-name-scan">Scanning</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>
        <Container className="qs-div">
          <Form onSubmit={this.handleFormSubmit}>
            <Card className="cardS">
              <Form.Group>
                <Form.Label>Worse at home</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="q1"
                  id="rad1-1"
                  value="1"
                  checked={this.state.selectedOption1 === "1"}
                  onChange={this.radioChange1}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="q1"
                  id="rad1-2"
                  value="0"
                  checked={this.state.selectedOption1 === "0"}
                  onChange={this.radioChange1}
                />
              </Form.Group>
            </Card>

            <Card className="cardS">
              <Form.Group>
                <Form.Label>Better when away from home</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="q2"
                  id="rad2-1"
                  value="1"
                  checked={this.state.selectedOption2 === "1"}
                  onChange={this.radioChange2}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="q2"
                  id="rad2-1"
                  value="0"
                  checked={this.state.selectedOption2 === "0"}
                  onChange={this.radioChange2}
                />
              </Form.Group>
            </Card>

            <Card className="cardS">
              <Form.Group>
                <Form.Label>
                  Evidence of having known agent in the workplace
                </Form.Label>
                <br></br>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="q3"
                  id="rad3-1"
                  value="1"
                  checked={this.state.selectedOption3 === "1"}
                  onChange={this.radioChange3}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="q3"
                  id="rad3-2"
                  value="0"
                  checked={this.state.selectedOption3 === "0"}
                  onChange={this.radioChange3}
                />
              </Form.Group>
            </Card>

            <Card className="cardS">
              <Form.Group>
                <Form.Label>
                  Evidence of having known agent in the workplace
                </Form.Label>
                <br></br>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="q4"
                  id="rad4-1"
                  value="1"
                  checked={this.state.selectedOption4 === "1"}
                  onChange={this.radioChange4}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="q4"
                  id="rad4-2"
                  value="0"
                  checked={this.state.selectedOption4 === "0"}
                  onChange={this.radioChange4}
                />
              </Form.Group>
            </Card>

            <Button
              className="submit-btn"
              type="submit"
              onClick={() => this.setState({ modalShow: true })}
            >
              Submit
            </Button>
          </Form>
          <ScanningModal
            show={this.state.modalShow}
            onHide={() =>
              this.setState({
                modalShow: false
              })
            }
            msg={this.state.msgResult}
          />
        </Container>
      </div>
    );
  }
}
