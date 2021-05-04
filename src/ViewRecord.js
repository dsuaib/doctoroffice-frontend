import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
}));

export default function CreateRecord() {
  const classes = useStyles();

  return (
 <div>     
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
      
      <Button href="#" color="primary" variant="outlined" className={classes.typography}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar style={{ backgroundColor: "#23395d"
}} className={classes.avatar}>
          <FindInPageRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Search For Patient Record
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="PatientID"
                name="PatientID"
                required
                fullWidth
                id="PatientID"
                label="PatientID"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000'}}
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Submit Search
          </Button>
        </form>
      </div>
    </Container>
</div>
  );
}