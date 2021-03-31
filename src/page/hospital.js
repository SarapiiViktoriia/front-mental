import React, { Component } from 'react';
import { Card } from '../custom';
import { Tile, FormLabel, PaginationV2 } from "carbon-components-react";
export class Hospitals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 3,
      hospitals: [],
      hospitals_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({ hospitals: data.objects });
        this.setState({
          hospitals_slice: data.objects.slice(0, this.state.pageSize)
        });
        this.setState({hospital_count: data.num_results});
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
      hospitals_slice: this.state.hospitals.slice(slice1, slice2)
    });
  };
  render() {
    const { hospitals_slice } = this.state;
    return (
      <div>
        <div className="page-title">
          <h1>Hospitals</h1>
          <p style={{fontSize:"25px", opacity:"0.75"}} >Find the hospital best suited to your needs</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {}
          {hospitals_slice.map(hospital => (
            <Card
              title={hospital.name}
              image={hospital.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              label1_heading="City"
              label1={hospital.city}
              label2_heading="State"
              label2={hospital.state}
              label3_heading="Owner"
              label3={hospital.owner}
              label4_heading="Population"
              label4={hospital.population}
              href={`/hospitals?id=${hospital.id}`}
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={this.state.hospital_count}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
              onChange={this.handlePageChange}
              style={{
                opacity: "0.6",
                position: "relative",
                marginTop: "40px",
                marginBottom: "20px"
              }}
            />
          </center>
        </div>
      </div>
    );
  }
}
export class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      hospital: {}
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
    return (
      <div>
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
              flexWrap: "wrap"
            }}
          >
            <div style={{ justifyContent: "flex-start" }}>
              <img
                src={this.state.hospital.image_url}
                width="350"
                height="370"
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
          </Tile>
        </div>
      </div>
    );
  }
}
