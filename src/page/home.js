import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Typing speed={10}>
          <span style={{fontSize:"50px"}}>Hello, it's me, I was wondering if after all these years 
            you'd like to meet to go over everything...</span>
        </Typing>
        <br/><br/>
        <Typing speed={10}>
          <span style={{fontSize:"35px"}}>This page is currently under construction. In the meantime, check out 
            our <Link to='/illnesses'>illnesses</Link>, <Link to='/hospitals'>hospitals</Link>, 
            and <Link to='/charities'>charities</Link>.</span>
        </Typing>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Home;
