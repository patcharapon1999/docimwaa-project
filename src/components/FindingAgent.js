import React from "react";
import { Jumbotron, Container, Form } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import "../styles/FindingAgent.css";
import firebase from "firebase";
import config from "../firebase/config";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActionArea from '@material-ui/core/CardActionArea';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classNames from 'classnames/bind';
export default class FindingAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      defaultItems: [],
      expanded: false
    };
  }
  async componentWillMount() {
    await this.getData();
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
      agentsLst.push(doc.data());
    });
    agentsLst.sort((a, b) => a.agent.localeCompare(b.agent));
    this.setState({ items: agentsLst });
    this.setState({ defaultItems: agentsLst });
  }

  handleChange(e) {
    if (
      e.target.toString().includes("[object SVGPathElement]") ||
      e.target.toString().includes("[object SVGSVGElement]")
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
  handleExpandClick() {
    console.log(this.expanded)
    this.setState({expanded: !this.expanded})
  };

  render() {
    const { items, expanded } = this.state;
    const expand_ = classNames({
      'expand': true,
      'expandOpen': expanded
    });
    return (
      <div className="FindingAgent">
        <Jumbotron className="jumbotron-finding">
          <div className="header-finding">
            <h1 className="header-name">Finding Agents</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>
        <Container className="pageBody">
          <Autocomplete
            className="autocomplete"
            id="combo-box-agent-group"
            options={items}
            getOptionLabel={option => option.agent}
            onChange={this.handleChange.bind(this)}
            renderInput={params => (
              <TextField
                {...params}
                label="Find Agents"
                variant="outlined"
                fullWidth
                onChange={this.handleChangeTxtF}
              />
            )}
          />
        </Container>
        <Container>
          {items.map(item => {
            return (
              <Card className="card" key={item.agent}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.agent}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                    >
                      {("1." + item.jt1 + "\n 2." + item.jt2)
                        .split("\n")
                        .map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                  <IconButton
                    className={expand_}
                    onClick={this.handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        </Container>
        {/* <Container>
          <MaterialTableDemo />
        </Container> */}
      </div>
    );
  }
}
