import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../styles/AdminPage.css";
import firebase from "firebase";
import config from "../firebase/config";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TablePagination from "@material-ui/core/TablePagination";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class FindingJob extends React.Component {
  

  render() {
   

    return (
      <div className="AdminPage">
        <Jumbotron className="jumbotron-admin">
          <div className="header-admin">
            <h1 className="header-name">Admin</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        <Container className="pageBody">
          
        </Container>
      </div>
    );
  }
}
