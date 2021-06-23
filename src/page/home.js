import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Navigation } from '../custom';
import Typing from 'react-typing-animation';
import Plx from 'react-plx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import illnessesImage from "../assets/images/Mental-Illness-Prevalence-in-Adults.png";
import charitiesImage from "../assets/images/charities.png";
import hospitalsImage from "../assets/images/hospitals.png";
const parallaxData = [
  {
    start: 0,
    duration: 100,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity'
      }
    ]
  }
]
class Home extends Component {
  render() {
    return (
      <div className='home-page'> 
      {}
        <div className="navbar" style={{position: 'relative', zIndex: '1000'}}>
          <Navigation selected={0}/>
        </div>
        <div className='pics'>
          <Plx className='parallax' parallaxData={parallaxData} style={{position: 'relative', zIndex: '1'}}>
            <Typing speed={10}>
              <span style={{fontSize:"35px"}}>This page is currently under construction. In the meantime, check out 
                our <Link to='/illnesses'>illnesses</Link>, <Link to='/hospitals'>hospitals</Link>, 
                and <Link to='/charities'>charities</Link>.</span>
            </Typing>
          </Plx>
        </div>
        <div className="illness-image">
          <img src={illnessesImage} alt="illness image" width='100%' style={{position: 'relative', zIndex: 'auto'}}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Home;
