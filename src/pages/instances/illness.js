import "../../css/basic.css";
import React, { Component } from "react";
import YouTube from "react-youtube";
import { TinyCard, Navigation } from "../../components";
import { Tile, FormLabel } from "carbon-components-react";
export class Illness extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        illness: {},
        charity: {},
        hospital: {}
      };
    }
    componentWillMount() {
      fetch(`http:
        .then(results => results.json())
        .then(data => {
          console.log(data);
          this.setState({ illness: data });
        });
    }
    render() {
      const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1
        }
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
          this.setState({ hospital: data });
        });
      return (
        <div>
          <div className="navbar">
            <Navigation selected={0} />
          </div>
          <div>
            <Tile
              style={{
                position: "relative",
                marginLeft: "32px",
                marginRight: "32px",
                marginTop: "30px",
                marginBottom: "38px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
                opacity: ".8"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flexWrap: "wrap"
                }}
              >
                <div>
                  {" "}
                  {}
                  <img src={this.state.illness.image_url} height="390" alt='card-pic'/>
                </div>
                <div>
                  {" "}
                  {}
                  <YouTube
                    videoId={this.state.illness.videoId}
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              </div>
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  marginLeft: "20px"
                }}
              >
                <p>
                  {" "}
                  {}
                  <FormLabel
                    className="title"
                    style={{
                      fontSize: "1.475rem"
                    }}
                  >
                    {this.state.illness.name}
                  </FormLabel>
                  <br />
                  <br /> {}
                  <FormLabel
                    className="title"
                    style={{
                      fontSize: "1.2rem"
                    }}
                  >
                    Symptoms:
                    <p
                      dangerouslySetInnerHTML={{
                        __html: this.state.illness.symptoms
                      }}
                      style={{
                        marginTop: "20px"
                      }}
                    />
                    {}
                  </FormLabel>
                  <br />
                  <br />
                  <FormLabel
                    className="title"
                    style={{
                      fontSize: "1.2rem"
                    }}
                  >
                    Treatments:
                    <p
                      dangerouslySetInnerHTML={{
                        __html: this.state.illness.treatments
                      }}
                      style={{
                        marginTop: "20px"
                      }}
                    />
                    {}
                  </FormLabel>
                  <br />
                  <br />
                </p>
              </div>
              <center>
                <h3>
                  If you are interested in this Illness, you may also be
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
    _onReady(event) {
      event.target.pauseVideo();
    }
  }
