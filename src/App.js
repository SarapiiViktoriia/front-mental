import React, { Component } from 'react';
import { Button } from "carbon-components-react";
import { Tile, Tabs, Tab, FormLabel } from "carbon-components-react";
import logo from './logo.svg';
import './App.css';
import illnessesImage from './Mental-Illness-Prevalence-in-Adults.png';
import charitiesImage from './charities.png';
import hospitalsImage from './hospitals.png';
import Caleb from './Caleb.jpg';
import Shreyas from './Shreyas.jpg';
import Taher from './Taher.jpg';
import Weihan from './Weihan.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Charities" label5="Hospitals" selected={0} />
        </div>
        <div>
          <Card title="Illnesses" buttonTitle="Learn More" image={illnessesImage} style={{'position': 'absolute', 'left': '38px', 'top': '130px'}} />
          <Card title="Charities" buttonTitle="Learn More" image={charitiesImage} style={{'position': 'absolute', 'left': '448px', 'top': '130px'}} />
          <Card title="Hospitals" buttonTitle="Learn More" image={hospitalsImage} style={{'position': 'absolute', 'left': '858px', 'top': '130px'}} />
        </div> 
      </div>
    );
  }
}
class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Charities" label5="Hospitals" selected={1} />
        </div>
        <div>
          <Card title="Caleb" buttonTitle="Learn More" image={Caleb} style={{'position': 'absolute', 'left': '38px', 'top': '130px'}} />
          <Card title="Shreyas" buttonTitle="Learn More" image={Shreyas} style={{'position': 'absolute', 'left': '448px', 'top': '130px'}} />
          <Card title="Taher" buttonTitle="Learn More" image={Taher} style={{'position': 'absolute', 'left': '858px', 'top': '130px'}} />
          <Card title="Weihan" buttonTitle="Learn More" image={Weihan} style={{'position': 'absolute', 'left': '448px', 'top': '675px'}} />
        </div>
      </div>
    );
  }
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};
  }
  render() {
    function handleAboutTabClick(e) {
      window.location.assign('/about');
      this.setState({
        selected: 1
      });
    }
    function handleHomeTabClick(e) {
      window.location.assign('/');
      this.setState({
        selected: 0
      });
    }
    return (
      <div className="header">
        <Tile>
          {}
          <Tabs className="some-class" selected={this.props.selected} style={{'margin-left': '750px', 'margin-top': '5px', 'margin-bottom': '0px'}}>
            <Tab className="another-class" label={this.props.label1} onClick={handleHomeTabClick} />
            <Tab className="another-class" label={this.props.label2} onClick={handleAboutTabClick} />
            <Tab className="another-class" label={this.props.label3} />
            <Tab className="another-class" label={this.props.label4} />
            <Tab className="another-class" label={this.props.label5} />
          </Tabs>
        </Tile>
      </div>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <div className="card">
        <Tile style={this.props.style}>
            <img src={this.props.image} width="350" height="370" />
            <br/>
            <span className="title">
              <center>
                <FormLabel className="title" style={{'margin-top': '20px', 'font-size': '1.2rem'}}>
                {this.props.title}
                </FormLabel>
              </center>
            </span>
            <br/>
            <center>
              <Button kind="secondary">
              {this.props.buttonTitle}
              </Button>
            </center>
          </Tile>
      </div>
    );
  }
}
export default App;
export {About};
