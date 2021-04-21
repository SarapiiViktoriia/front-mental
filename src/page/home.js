import React, { Component } from 'react';
import { Card, Navigation } from '../custom';
import Typing from 'react-typing-animation';
import illnessesImage from "../img/images/Mental-Illness-Prevalence-in-Adults.png";
import charitiesImage from "../img/images/charities.png";
import hospitalsImage from "../img/images/hospitals.png";
class Home extends Component {
  render() {
    return (
      <div 
        className='home-page'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="navbar">
          <Navigation selected={0}/>
        </div>
        <br/>
        <br/>
        <Typing>
          <span style={{fontSize:"50px"}}>Hello, it's me, I was wondering if after all these years you'd like to meet</span>
        </Typing>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Home;
