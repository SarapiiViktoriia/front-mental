import "./css/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Tile } from 'carbon-components-react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Home from './pages/home';
import About from './pages/about';
import Search from './pages/search';
import { MyVis, YourVis} from './pages/visualization';
import { Illnesses, Charities } from './pages/models';
import { Hospitals, Hospital } from './pages/models/hospitals';
import { Illness } from './pages/models/illnesses';
import { Charity } from './pages/models/charities';
class App extends Component {
  render() {
    const queryString = require("query-string");
    const parsed = queryString.parse(window.location.search);
    let charity_path  = <Route path="/charities" component={Charities} />;
    let hospital_path = <Route path="/hospitals" component={Hospitals} />;
    let illness_path  = <Route path="/illnesses" component={Illnesses} />;
    let search_path = <Route path='/search' component={Search} />;
    if ("id" in parsed){
      charity_path = <Route path="/charities"
          render={props => <Charity {...props} id={parsed.id} />}/>;
      hospital_path = <Route path="/hospitals"
          render={props => <Hospital {...props} id={parsed.id} />}/>;
      illness_path = <Route path="/illnesses"
          render={props => <Illness {...props} id={parsed.id} />}/>;
    }
    if ("value" in parsed)
      search_path = <Route path="/search" 
        render={props => <Search {...props} value={parsed.value}/>}/>;
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
          <Tile style={{ paddingTop: '25px' }}>
            Mental Health Help
              &copy; {new Date().getFullYear()}: CS 373 Group 11am-9
          </Tile> 
        </div>
      </div>
    );
  }
}
export default App;
