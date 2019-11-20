import React, { Component } from "react";
import firebase from "firebase";
import config from "../firebase/config";
import {
  Jumbotron,
  Row,
  Col,
  Card,
  Container,
  Form,
  Button,
  Image
} from "react-bootstrap";
import MapAPI from "./MapAPI";
import "../styles/ForwardGuideline.css";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ForwardGuidelineModal from "./ForwardGuidelineModal";
import fwd from "../assets/images/fwd.jpg";

export default class ForwardGuideline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      defaultItems: [],
      expanded: false,
      docInfoReg: [],
      docInfo: [],
      modalShow: false,
      name: "",
      lat: 0,
      lng: 0,
      hospital: "",
      address: "",
      cellPhone: "",
      region: ""
    };
    this.getDocReg = this.getDocReg.bind(this);
    this.getDocRegInfo = this.getDocRegInfo.bind(this);
  }
  async componentWillMount() {
    await this.getData();
  }
  async getData() {
    var app;
    var nameLst = [];
    if (!firebase.apps.length) {
      app = firebase.initializeApp(config);
    }
    var db = firebase.firestore(app);
    const querySnapshot = await db.collection("forwardInfo").get();
    querySnapshot.forEach(function(doc) {
      nameLst.push(doc.data());
    });
    console.log("get data complete");
    this.setState({ items: nameLst });
    console.log(this.state.items);
  }

  getDocReg(e) {
    const temp_docInfoReg = [];
    const selected_region = e.target.innerHTML;
    this.state.items.forEach(item => {
      var region = item.region;
      //console.log("region " + region);
      //console.log("selected " + selected_region);
      if (region === selected_region) {
        //console.log("this true");
        temp_docInfoReg.push(item);
      }
    });
    //console.log(temp_docInfoReg);
    this.setState({ docInfoReg: temp_docInfoReg });
    //console.log(this.state.docInfoReg);
  }

  getDocRegInfo(e) {
    const temp_docInfo = [];
    const selected_docInfo = e.target.innerHTML;
    this.state.docInfoReg.forEach(item => {
      const docName = item.name;
      //console.log("selected " + selected_docInfo);
      if (selected_docInfo.includes(docName)) {
        //console.log("this true");
        temp_docInfo.push(item);
      }
    });
    console.log(temp_docInfo[0].name);
    //update
    this.setState({ name: temp_docInfo[0].name });
    this.setState({ lat: temp_docInfo[0].lat });
    this.setState({ lng: temp_docInfo[0].lng });
    this.setState({ address: temp_docInfo[0].address });
    this.setState({ cellPhone: temp_docInfo[0].cellPhone });
    this.setState({ region: temp_docInfo[0].region });
    this.setState({ docInfo: temp_docInfo });
    //console.log(this.state.docInfo);
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    // console.log("this docInfo");
    // console.log(this.state.docInfo[0].name);
    // console.log(this.state.docInfo[0].lat);
    // console.log(this.state.docInfo[0].lng);
  };

  render() {
    const { docInfoReg } = this.state;
    const regionsLst = [
      { reg: "ภาคกลาง" },
      { reg: "ภาคเหนือ" },
      { reg: "ภาคอีสาน" },
      { reg: "ภาคตะวันออก" },
      { reg: "ภาคใต้" }
    ];
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-forGuide">
            <h1 className="header-name-fwg">Referral information</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        <Container>
          <Row>
            <Col sm={6}>
              <div style={{ marginTop: "100px" }}>
                <Image src={fwd} className="img-fwd" style={{ boxShadow: "0px 6px 20px #9E9E9E"}}/>
              </div>
            </Col>
            <Col sm={6}>
              <div style={{ margin: "100px 0 50px 0" }}>
                <Form onSubmit={this.handleFormSubmit}>
                  <div>
                    <h1>Searching information</h1>
                  </div>
                  <Form.Group as={Col} controlId="formGridState">
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={regionsLst.map(option => option.reg)}
                      onChange={this.getDocReg}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Region"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          InputProps={{ ...params.InputProps, type: "search" }}
                        />
                      )}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={docInfoReg.map(
                        option => option.name + "(" + option.hospital + ")"
                      )}
                      onChange={this.getDocRegInfo}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Specialist"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          InputProps={{ ...params.InputProps, type: "search" }}
                        />
                      )}
                    />
                  </Form.Group>
                  <Container>
                    <Button
                      className="submit-btn"
                      type="submit"
                      style={{ width: "50%", backgroundColor: "#0062FF"}}
                      onClick={() => this.setState({ modalShow: true })}
                    >
                      Search
                    </Button>
                  </Container>
                </Form>
              </div>
            </Col>
          </Row>
          <ForwardGuidelineModal
            show={this.state.modalShow}
            onHide={() =>
              this.setState({
                modalShow: false
              })
            }
            google={this.props.google}
            name={this.state.name}
            lat={this.state.lat}
            lng={this.state.lng}
            address={this.state.address}
            cellPhone={this.state.cellPhone}
            region={this.state.region}
          />
        </Container>
      </div>
    );
  }
}
