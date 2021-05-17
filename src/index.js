import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Payment from './Payment'
import CreateRecord from './CreateRecord'
import ViewRecord from './ViewRecord'
import {BrowserRouter, Route, Switch} from "react-router-dom";


//render componenet when path is reached
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/payment" component={Payment}/>
    <Route exact path="/view" component={ViewRecord}/>
    <Route exact path="/create" component={CreateRecord}/>
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
