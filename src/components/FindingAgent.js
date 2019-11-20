import React from "react";
import { Jumbotron } from "react-bootstrap";
import "../styles/FindingAgent.css";
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
import Container from '@material-ui/core/Container';

export default class FindingAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      defaultItems: [],
      expanded: false,
      textFieldValue: "",
      page: 0,
      rowsPerPage: 10,
      query: "loading"
    };
  }
  async componentWillMount() {
    await this.getData();
    this.setState({ query: "success" });
  }
  async getData() {
    var app;
    var agentsLst = [];
    if (!firebase.apps.length) {
      app = firebase.initializeApp(config);
    }
    var db = firebase.firestore(app);
    const querySnapshot = await db
      .collection("agents")
      .where("type", "==", "LMW")
      .get();
    querySnapshot.forEach(function(doc) {
      const data = doc.data();
      data.expanded = false;
      agentsLst.push(data);
    });
    agentsLst.sort((a, b) => a.agent.localeCompare(b.agent));
    console.log(agentsLst.sort((a, b) => a.agent.localeCompare(b.agent)))
    this.setState({ items: agentsLst });
    this.setState({ defaultItems: agentsLst });
  }
  handleChange(e) {
    console.log(e.target.toString());
    if (
      e.target.toString().includes("[object SVGPathElement]") ||
      e.target.toString().includes("[object SVGSVGElement]") ||
      e.target.toString().includes("[object HTMLButtonElement]")
    ) {
      this.setState({ items: this.state.defaultItems });
    } else {
      const select = [];
      const lst = this.state.items;
      for (var i = 0; i < lst.length; i++) {
        if (lst[i]["agent"] === e.target.innerHTML) {
          select.push(lst[i]);
          this.setState({ items: select });
        }
      }
    }
  }
  handleExpandClick(e, item) {
    if (item.expanded) {
      item.expanded = false;
      this.setState(item);
    } else {
      item.expanded = true;
      this.setState(item);
    }
  }
  handleChangeTxtF(e) {
    const select = [];
    if (e.target.value == "") {
      this.setState({ items: this.state.defaultItems });
    } else if (
      this.state.defaultItems.some(item =>
        item.agent.toLowerCase().includes(e.target.value.toLowerCase())
      )
    ) {
      const lst = this.state.defaultItems;
      for (var i = 0; i < lst.length; i++) {
        if (
          lst[i]["agent"].toLowerCase().substring(0, e.target.value.length) ==
          e.target.value.toLowerCase()
        ) {
          console.log(lst[i]);
          select.push(lst[i]);
        }
      }
      this.setState({ items: select });
    }
  }
  keyPress(e) {
    if (e.keyCode == 13) {
      this.handleChangeTxtF(e);
    }
  }

  render() {
    const { items } = this.state;
    const { page } = this.state;
    const { rowsPerPage } = this.state;
    const { query } = this.state;

    const filterOptions = createFilterOptions({
      matchFrom: "start",
      stringify: option => option.agent
    });
    const handleChangePage = (event, newPage) => {
      this.setState({ page: newPage });
    };
    const handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: +event.target.value });
      this.setState({ page: 0 });
    };
    const ulStyle = {
      marginBottom: "0px",
      fontSize: "16px"
    };


    return (
      <div className="FindingAgent">
        <Jumbotron className="jumbotron-finding-agent">
          <div className="header-finding">
            <h1 className="header-name-agent">Finding Agents</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        <Container className="pageBody">
          <Autocomplete
            freeSolo
            className="autocomplete"
            id="combo-box-agent-group"
            disableClearable
            // options={items}
            // getOptionLabel={option =>
            //   typeof option === "string" ? option : option.agent
            // }
            filterOptions={filterOptions}
            onChange={this.handleChange.bind(this)}
            renderInput={params => (
              <TextField
                {...params}
                value={this.state.textFieldValue}
                label="Find Agents"
                variant="outlined"
                fullWidth
                onKeyDown={this.keyPress.bind(this)}
                onChange={this.handleChangeTxtF.bind(this)}
              />
            )}
          />
        </Container>
        <Container>
          {query === "loading" ? (
            <div className="circleProgress">
              <CircularProgress />
            </div>
          ) : (
            items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => {
                return (
                  <Card className="cardA" key={item.agent}>
                    <CardContent>
                      <h4 className="h4A">
                        <b>{item.agent}</b>
                      </h4>
                      
                      <div className="divA">
                        <b style={ulStyle}>Job Task:</b>
                        <ul style={ulStyle}>
                          {item.jt.split("#").map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      </div>
                      
                    </CardContent>
                    <div className="iconDownButton-div">
                      <IconButton
                        className="iconDownButton"
                        onClick={() => {
                          this.handleExpandClick(this, item);
                        }}
                        aria-expanded={item.expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </div>
                    <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography className="pA">
                          <b>Type:</b> {item.type}
                        </Typography>
                        <Typography className="pA">
                          <b>Group:</b> {item.group}
                        </Typography>
                        <Typography className="pA">
                          <b>Agent:</b> {item.agent}
                        </Typography>
                        <div className="divA">
                          <b>Job Task:</b>
                          <ul>
                            {item.jt.split("#").map((item, i) => {
                              return <li key={i}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      </CardContent>
                    </Collapse>
                  </Card>
                );
              })
          )}

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Container>
      </div>
    );
  }
}
