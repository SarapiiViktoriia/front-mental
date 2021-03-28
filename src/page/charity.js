import React, { Component } from 'react';
import { Card } from '../custom';
import { Tile, FormLabel, PaginationV2 } from "carbon-components-react";
export class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 3,
      charities: [],
      charities_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        console.log(data.objects.slice(0, 3));
        this.setState({ charities: data.objects });
        this.setState({
          charities_slice: data.objects.slice(0, this.state.pageSize)
        });
        this.setState({charity_count: data.num_results});
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
      charities_slice: this.state.charities.slice(slice1, slice2)
    });
  };
  render() {
    const { charities_slice } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {}
          {charities_slice.map(charity => (
            <Card
              title={charity.name}
              image={charity.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              label1_heading="Rating"
              label1={String(charity.rating)}
              label2_heading="State"
              label2={charity.state}
              label3_heading="Deductible"
              label3={charity.deductible}
              label4_heading="Income"
              label4={charity.incomeAmount.toLocaleString("en")}
              href={`/charities?id=${charity.id}`}
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={this.state.charity_count}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
              onChange={this.handlePageChange}
              style={{
                position: "relative",
                marginTop: "20px",
                marginBottom: "20px"
              }}
            />
          </center>
        </div>
      </div>
    );
  }
}
export class Charity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
    return (
      <div>
        <div>
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "38px"
            }}
          >
            <div>
              <span>
                <p>
                  <img
                    src={this.state.charity.image_url}
                    width="350"
                    height="370"
                    style={{ display: "inline-block", "vertical-align": "top" }}
                  />
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
                    {this.state.charity.name}
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "80px",
                      fontSize: "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    "{this.state.charity.tagLine}"
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "120px",
                      fontSize: "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    Asset Amount: {this.state.charity.assetAmount}
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "160px",
                      fontSize: "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    Mission: {this.state.charity.mission}
                  </FormLabel>
                </p>
                <p>
                  <a
                    href={this.state.charity.website_url}
                    style={{
                      position: "relative",
                      marginLeft: "405px",
                      marginRight: "40px",
                      marginTop: "20px",
                      fontSize: "1.0rem"
                    }}
                  >
                    {this.state.charity.website_url}
                  </a>
                </p>
              </span>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
}
