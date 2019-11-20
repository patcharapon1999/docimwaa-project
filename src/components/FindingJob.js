import React from "react";
import { Jumbotron } from "react-bootstrap";
import "../styles/FindingJob.css";
import firebase from "firebase";
import config from "../firebase/config";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TablePagination from "@material-ui/core/TablePagination";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from '@material-ui/core/Container';

export default class FindingJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      defaultItems: [],
      jobLst: [],
      defaultJobLst: [],
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
    var lst = [];
    if (!firebase.apps.length) {
      app = firebase.initializeApp(config);
    }
    var db = firebase.firestore(app);
    const querySnapshot = await db
      .collection("agents")
      .where("query", "==", "true")
      .get();
    querySnapshot.forEach(function(doc) {
      const data = doc.data();
      lst.push(data);
    });
    const newLst = [];
    for (var i = 0; i < lst.length; i++) {
      const jtTxt = lst[i].jt.split("#");
      for (var j = 0; j < jtTxt.length; j++) {
        if (!newLst.includes(jtTxt[j])) {
          newLst.push(jtTxt[j])
        }
      }
    }
    newLst.sort((a, b) => a.localeCompare(b));
    lst.sort((a, b) => a.jt.localeCompare(b.jt));
    this.setState({ jobLst: newLst });
    this.setState({ defaultJobLst: newLst });
    this.setState({ items: lst });
    this.setState({ defaultItems: lst });
  }
  handleChange(e) {
    console.log(e.target.toString());
    if (
      e.target.toString().includes("[object SVGPathElement]") ||
      e.target.toString().includes("[object SVGSVGElement]") ||
      e.target.toString().includes("[object HTMLButtonElement]")
    ) {
      this.setState({ jobLst: this.state.defaultJobLst });
    } else {
      const select = [];
      const lst = this.state.jobLst;
      for (var i = 0; i < lst.length; i++) {
        if (lst[i] === e.target.innerHTML) {
          select.push(lst[i]);
          this.setState({ jobLst: select });
        }
      }
    }
  }
  handleChangeTxtF(e) {
    const select = [];
    if (e.target.value == "") {
      this.setState({ jobLst: this.state.defaultJobLst });
    } else {
      const lst = this.state.defaultJobLst;
      for (var i = 0; i < lst.length; i++) {
        if (
          lst[i].toLowerCase().substring(0, e.target.value.length) == e.target.value.toLowerCase()
        ) {
          select.push(lst[i]);
        }
      }
      this.setState({ jobLst: select });
    }
  }
  keyPress(e) {
    if (e.keyCode == 13) {
      this.handleChangeTxtF(e);
    }
  }
  matchData(item) {
    const dataLst = this.state.defaultItems;
    const lst = [];
    for (var i = 0; i < dataLst.length; i++ ) {
      if (dataLst[i].jt.includes(item)) {
        lst.push(dataLst[i])
      }
    }
    return lst
  }

  render() {
    const { jobLst } = this.state;
    const { page } = this.state;
    const { rowsPerPage } = this.state;
    const { query } = this.state;

    const filterOptions = createFilterOptions({
      matchFrom: "start",
      stringify: option => option
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
      <div className="FindingJob">
        <Jumbotron className="jumbotron-finding-job">
          <div className="header-finding">
            <h1 className="header-name">Finding by Jobs</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        <Container className="pageBody">
          <Autocomplete
            freeSolo
            className="autocomplete"
            id="combo-box-jobs"
            options={jobLst}
            getOptionLabel={option =>
              typeof option === "string" ? option : option
            }
            filterOptions={filterOptions}
            onChange={this.handleChange.bind(this)}
            renderInput={params => (
              <TextField
                {...params}
                value={this.state.textFieldValue}
                label="Find by Job"
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
            jobLst
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => {
                return (
                  <Card className="cardJ" key={item}>
                    <CardContent>
                      <h4 className="h4J">
                        <b>{item}</b>
                      </h4>
                   
                      <div className="divJ">
                        <b style={ulStyle}>Agents:</b>
                        <ul style={ulStyle}>
                          {this.matchData(item).map((item, i) => {
                            return <li key={i}>{item.agent} <ul><li><b>Group:</b> {item.group}</li> <li><b>Type:</b> {item.type}</li></ul></li>;
                          })}
                        </ul>
                      </div>
                      
                    </CardContent>
                  </Card>
                );
              })
          )}

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={jobLst.length}
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
