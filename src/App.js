import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Tile } from 'carbon-components-react';
import Main from './page/main';
import Home from './page/home';
import About from './page/about';
import { Hospitals, Hospital } from './page/hospital';
import { Illnesses, Illness } from './page/illness';
import { Charities, Charity } from './page/charity';
import { Navigation } from './custom';
class App extends Component {
  render() {
    const queryString = require("query-string");
    const parsed = queryString.parse(window.location.search);
    let charity_path  = <Route path="/charities" component={Charities} />;
    let hospital_path = <Route path="/hospitals" component={Hospitals} />;
    let illness_path  = <Route path="/illnesses" component={Illnesses} />;
    if ("id" in parsed){
      charity_path = <Route path="/charities"
          render={props => <Charity {...props} id={parsed.id} />}/>;
      hospital_path = <Route path="/hospitals"
          render={props => <Hospital {...props} id={parsed.id} />}/>;
      illness_path = <Route path="/illnesses"
          render={props => <Illness {...props} id={parsed.id} />}/>;
    }
    return (
      <div className="page">
        <div className="page-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {illness_path}
            {hospital_path}
            {charity_path}
          </Switch>
        </div>
        <div className="footer">
          <Tile style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              maxHeight: "20px",
          }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
            }}>Mental Health Help
              &copy; {new Date().getFullYear()}: CS 373 Group 11am-9
            </div> 
          </Tile> 
        </div>
      </div>
    );
  }
}
export default App;
