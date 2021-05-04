import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
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

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

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
          
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Features
            </Typography>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Enterprise
            </Typography>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Support
            </Typography>
          
          <Button href="#" style={{ textDecoration: 'none', color: '#FFF'}} variant="outlined" className={classes.typography}>
            Home
          </Button>
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
            {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Typography href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}