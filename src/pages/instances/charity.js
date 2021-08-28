import "../../css/basic.css";
import React, { Component } from "react";
import { TinyCard, Navigation } from "../../components";
import { Tile, FormLabel } from "carbon-components-react";
export class Charity extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        hospital: {},
        illness: {},
        charity: {}
      };
    }
    componentWillMount() {
      fetch(`http:
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ charity: data });
        });
    }
    render() {
      const { illness } = fetch(
        `http:
      )
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ illness: data });
        });
      const { hospital } = fetch(
        `http:
      )
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ hospital: data });
        });
      return (
        <div>
          <div className="navbar">
            <Navigation selected={2} />
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <div 
                >
                  {}
                  <img
                    src={this.state.charity.image_url}
                    width="500"
                    height="400"
                    alt="twitter-img"
                  />
                </div>
                <div
                  style={{
                    marginLeft: "50px"
                  }}
                >
                  <a 
                    class="twitter-timeline" 
                    data-width="350" data-height="500" 
                    data-theme="light" href={"https:
                  }
                  >
                    Tweets by {this.state.charity.twitter}
                  </a>
                  <script
                    async
                    src="https:
                    charset="utf-8"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  marginTop: "20px",
                  marginLeft: "20px"
                }}
              >
                <FormLabel
                  className="title"
                  style={{
                    fontSize: "1.475rem"
                  }}
                >
                  {this.state.charity.name}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    fontSize: "1.0rem"
                  }}
                >
                  Tagline: "{this.state.charity.tagLine}"
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    fontSize: "1.0rem"
                  }}
                >
                  Asset Amount: ${this.state.charity.assetAmount}
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    fontSize: "1.0rem"
                  }}
                >
                  <a style={{ color: "#000000" }}>URL: </a>
                  <a
                    href={this.state.charity.website_url}
                    style={{ color: "#000000" }}
                  >
                    {this.state.charity.website_url}
                  </a>
                </FormLabel>
                <br />
                <FormLabel
                  className="title"
                  style={{
                    fontSize: "1.0rem"
                  }}
                >
                  Mission:
                  <p
                    dangerouslySetInnerHTML={{
                      __html: this.state.charity.mission
                    }}
                    style={{
                      marginTop: "20px"
                    }}
                  />
                </FormLabel>
                {}
              </div>
              <center style={{ marginTop: "30px" }}>
                <h3>
                  If you are interested in this Charity, you may also be
                  interested in the following
                </h3>
                <div className="instance-grid" style={{marginBottom: '30px'}}>
                  <TinyCard
                    title={this.state.hospital.name}
                    image={this.state.hospital.image_url}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginTop: "30px",
                      maxWidth: "235px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                    href={`/hospitals?id=${this.state.hospital.id}`}
                  />
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
                </div>
              </center>
            </Tile>
          </div>
        </div>
      );
    }
  }
