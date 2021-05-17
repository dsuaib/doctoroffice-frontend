import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  typography: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "#23395d"
}} elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Doctor Office Management System
          </Typography>
            <Link to="/create" style={{ textDecoration:'none', color:'#FFF'}}>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Create Appointment Record
            </Typography>
            </Link>
            <Link to="/payment" style={{ textDecoration:'none', color:'#FFF'}}>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Submit Payment
            </Typography>
            </Link>
            <Link to="/view" style={{ textDecoration:'none', color:'#FFF'}}>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
            Search Record
            </Typography>
            </Link>

        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Select An Option
        </Typography>
 
      </Container>
      <div>
        <Container maxWidth="50%">
          <div>
            <Grid container justify="center">
              <Grid item>
              <Link to='/create' style={{ textDecoration: 'none', color: '#000'}}>
                <Fab variant="extended" size="large" color="inherit">
                  Create Appointment Record
                </Fab>
              </Link>
              <Link to='/view' style={{ textDecoration: 'none', color: '#000'}}>
                <Fab style={{ marginRight: '20px', marginLeft:'20px'}} variant="extended" size="large" color="inherit">
                  Search for a Paitent Record
                </Fab>
              </Link>
              <Link to='/payment' style={{ textDecoration: 'none', color: '#000'}}>
                <Fab variant="extended" size="large" color="inherit">
                  Enter a Payment Record
                </Fab>
                </Link>
              </Grid>
            </Grid>
            </div>

          </Container>
        </div>
      {/* End hero unit */}

    </React.Fragment>
  );
}