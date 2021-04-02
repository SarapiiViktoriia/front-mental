import React, { Component } from 'react';
import { Card, Navigation } from '../custom';
import Typing from 'react-typing-animation';
import illnessesImage from "../img/images/Mental-Illness-Prevalence-in-Adults.png";
import charitiesImage from "../img/images/charities.png";
import hospitalsImage from "../img/images/hospitals.png";
class Home extends Component {
  render() {
    return (
      <div className='home-page'>
      <div className="navbar">
        <Navigation selected={0}/>
      </div>
        <Typing>
          <span style={{fontSize:"50px"}}>Hello from the home page!</span>
        </Typing>
      </div>
    );
  }
}
export default Home;
