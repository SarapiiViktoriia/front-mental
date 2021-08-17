import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Tile } from 'carbon-components-react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Home from './pages/home';
import About from './pages/about';
import SearchPage from './pages/search';
import { MyVis, YourVis} from './pages/visualization';
import { Hospitals, Hospital } from './pages/hospital';
import { Illnesses, Illness } from './pages/illness';
import { Charities, Charity } from './pages/charity';
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
    let search_path = <Route path='/search' component={SearchPage} />;
    if ("value" in parsed)
      search_path = <Route path="/search" 
        render={props => <SearchPage {...props} value={parsed.value}/>}/>;
    return (
      <div className="page">
        <div className="page-body">
          <Router>
            <div className="routes">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              {illness_path}
              {hospital_path}
              {charity_path}
              {search_path}
              <Route path="/myvis" component={MyVis} />
              <Route path="/yourvis" component={YourVis} />
            </div>
          </Router>
        </div>
        <div>
          <ScrollUpButton style={{backgroundColor: 'transparent', mixBlendMode: 'difference', fill: 'white'}}/>
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
                marginTop: "7px",
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
