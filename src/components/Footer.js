import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" style={{color: "#ebebeb"}} align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: 'black',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      {/* <CssBaseline /> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* <Typography variant="body1">aaaaaaaaaaaaaaaa</Typography> */}
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}