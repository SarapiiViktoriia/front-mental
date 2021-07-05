import React, { Component } from 'react';
import { Card, Navigation } from '../custom';
import illnessesImage from "../assets/images/Mental-Illness-Prevalence-in-Adults.png";
import charitiesImage from "../assets/images/charities.png";
import hospitalsImage from "../assets/images/hospitals.png";
class Home extends Component {
  render() {
    return (
      <div className='home-page'> 
      {}
        <div className="navbar" style={{position: 'relative', zIndex: '1000'}}>
          <Navigation selected={0}/>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Card
            title="Illnesses"
            buttonTitle="Learn More"
            buttonHref="/illnesses"
            image={illnessesImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Charities"
            buttonTitle="Learn More"
            buttonHref="/charities"
            image={charitiesImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Hospitals"
            buttonTitle="Learn More"
            buttonHref="/hospitals"
            image={hospitalsImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
        </div>
      </div>
    );
  }
}
export default Home;
