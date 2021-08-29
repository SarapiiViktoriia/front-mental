import "../../css/basic.css";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { TinyCard, Navigation } from "../../components";
import { Tile, FormLabel } from "carbon-components-react";
export class Hospital extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hospital: {},
        charity: {},
        illness: {}
      };
    }
    componentWillMount() {
      fetch(`http:
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ hospital: data });
        });
    }
    render() {
      const Marker = ({ text }) => {
        return (
          <div>
            <b>{text}</b>
          </div>
        );
      };
      fetch(`http:
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ charity: data });
        });
      fetch(`http:
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ illness: data });
        });
      return (
        <div>
          <div className="navbar">
            <Navigation selected={1} />
          </div>
          <div>
            <Tile
              style={{
                position: "relative",
                marginLeft: "32px",
                marginRight: "32px",
                marginTop: "38px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                opacity: ".8"
              }}
            >
              <div style={{ justifyContent: "flex-start" }}>
                <img
                  src={this.state.hospital.image_url}
                  height="280"
                  alt="hospital-pic"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.475rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  {this.state.hospital.name}
                </FormLabel>
                <br />
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Street Address: {this.state.hospital.address}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  City: {this.state.hospital.city}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  State: {this.state.hospital.state}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Zip Code: {this.state.hospital.zip_code}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Owner: {this.state.hospital.owner}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Population: {this.state.hospital.population}
                </FormLabel>
                <br />
                <a
                  href={this.state.hospital.website_url}
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem"
                  }}
                >
                  {this.state.hospital.website_url}
                </a>
              </div>
              <div
                style={{
                  height: "60vh",
                  width: "100vh" ,
                  marginLeft: "2%",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyBkcDQD1qCPhHLYbl8yjsdaeydLNsW4C5U"
                  }}
                  center={{
                    lat: this.state.hospital.latitude,
                    lng: this.state.hospital.longitude
                  }}
                  defaultZoom={18}
                >
                  <Marker
                    lat={this.state.hospital.latitude}
                    lng={this.state.hospital.longitude}
                    text={this.state.hospital.name}
                  />
                </GoogleMapReact>
              </div>
              <center style={{ marginTop: '30px' }}>
                <h3>
                  If you are interested in this Hospital, you may also be
                  interested in the following
                </h3>
                <div className="instance-grid" style={{marginBottom: '30px'}}>
                  <TinyCard
                    title={this.state.illness.name}
                    image={this.state.illness.image_url}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "30px",
                      maxWidth: "235px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    href={`/illnesses?id=${this.state.illness.id}`}
                  />
                  <TinyCard
                    title={this.state.charity.name}
                    image={this.state.charity.image_url}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "30px",
                      maxWidth: "235px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    href={`/charities?id=${this.state.charity.id}`}
                  />
                </div>
              </center>
            </Tile>
          </div>
        </div>
      );
    }
  }
