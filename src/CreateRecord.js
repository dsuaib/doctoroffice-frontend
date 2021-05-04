import React, { useState }  from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
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
  const [dateInfo, setDateInfo] = useState('');
  const [diagnosisId, setDiagnosisId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [amountCharged, setAmountCharged] = useState('');
  
  
  

  const handleSubmit = e => {
    e.preventDefault();

    if (amountCharged < 0) {
        console.log('Amount Charged is a Negative Number. Payment not processed')
        alert('Amount Charged Cannot Be a Negative Number')
        return
    } 

    const record = {
      dateInfo,
      diagnosisId,
      employeeId,
      patientId,
      amountCharged
    }

    axios.post('http://localhost:8080/createrecord', record)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            // what now?
            console.log(err)
        });
    console.log(record)
  };

  return (
 <div>     
<AppBar position="static" style={{ backgroundColor: "#23395d"
}} elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        Doctor Office System Management
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
          <FileCopyRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Appointment Record
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Date"
                name="Date"
                variant="outlined"
                required
                fullWidth
                id="Date"
                label="Date (YYYY-MM-DD)"
                value={dateInfo}
                onChange={e => setDateInfo(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="DiagnosisID"
                label="DiagnosisID"
                name="DiagnosisID"
                autoComplete="DiagnosisID"
                value={diagnosisId}
                onChange={e => setDiagnosisId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="EmployeeID"
                label="EmployeeID"
                name="EmployeeID"
                autoComplete="EmployeeID"
                value={employeeId}
                onChange={e => setEmployeeId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="PatientID"
                label="PatientID"
                name="PatientID"
                autoComplete="PatientID"
                value={patientId}
                onChange={e => setPatientId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="amountCharged"
                label="Amount Charged"
                id="amountCharged"
                autoComplete="amountCharged"
                value={amountCharged}
                onChange={e => setAmountCharged(e.target.value)}
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
            Submit Patient Record
          </Button>
        </form>
      </div>
    </Container>
</div>
  );
}