import React, {useState, useEffect} from 'react';
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

//Material UI styling
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
    width: '100%', 
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

export default function ViewRecord() {
  const classes = useStyles();
  //useState to capture data in form
  const [recordId, setRecordId] = useState('');
  const [record, setRecord] = useState([]);


  //function to send info from form into to server
  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      recordId
    }
    axios.post('http://localhost:8080/patient', payload)
    .then(res => {
      setRecord([res.data.RecordID, res.data.Date, res.data.AmountCharged, res.data.DiagnosisID, res.data.EmployeeID, res.data.PatientID])
      console.log(res.data)
      alert('Search Submitted!')
      if (typeof(res.data.RecordID) === "undefined") {
        alert('Not a valid recordID')
        console.log(typeof(res.data.RecordID))
      }
   })
    .catch(err => {
        alert(err)
    });  
  };

/*display frontend interface styling*/  
  return (
 <div>   
   
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
            <Link to="/" style={{ textDecoration:'none', color:'#FFF'}}>
            <Typography variant="button" color="inherit" href="#" className={classes.typography}>
              Home
            </Typography>
            </Link>
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
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="RecordID"
                name="RecordID"
                required
                fullWidth
                id="RecordID"
                label="RecordID"
                autoFocus
                value={recordId}
                onChange={e => setRecordId(e.target.value)}

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Search Results Will Show Below:
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
            <Typography component="h1" variant="h5">
            ID of Record: {record[0]}
        </Typography>
            </Grid>
            <Grid item xs={12} >
            <Typography component="h1" variant="h5">
            Amount Charged (USD): {record[2]}
        </Typography>
            </Grid>
            <Grid item xs={12} >
            <Typography component="h1" variant="h5">
            ID of Patient: {record[5]}
        </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5">
            ID of Employee: {record[3]}
        </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography component="h1" variant="h5">
            ID of Diagnosis: {record[4]}
        </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>



    
    
</div>
  );
}