import "./basic.css";
import React, { Component } from "react";
import YouTube from "react-youtube";
import { Card, Navigation, modalProps } from "../custom";
import {
  Tile,
  FormLabel,
  PaginationV2,
  ModalWrapper,
  Slider,
  Select,
  SelectItem
} from "carbon-components-react";
const sliderProps = () => ({
  light: false,
  hideTextInput: false,
  min: 0,
  max: 50,
  step: 1,
  stepMuliplier: 2,
  labelText: ""
});
const query_object = {
  order_by: [],
  filters: []
};
export class Illnesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 3,
      illnesses: [],
      illnesses_slice: [],
      query: JSON.stringify(query_object)
    };
  }
  componentDidMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({
          illnesses: data.objects,
          illnesses_slice: data.objects.slice(0, this.state.pageSize),
          illness_count: data.num_results
        });
      });
  }
  componentDidUpdate(_, prevState) {
    console.log("The state contains this q-string now: " + this.state.query);
    if (prevState.query !== this.state.query)
      fetch("http:
        .then(results => results.json())
        .then(data => {
          this.setState({
            illnesses: data.objects,
            illnesses_slice: data.objects.slice(0, this.state.pageSize),
            illness_count: data.num_results
          });
        });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
      illnesses_slice: this.state.illnesses.slice(slice1, slice2)
    });
  };
  handleSortOptions = evt => {
    this.sort_value = evt.target.value;
  };
  handleCurable = evt => {
    this.curable = evt.target.value;
  };
  handleGenetic = evt => {
    this.genetic = evt.target.value;
  };
  handleChronic = evt => {
    this.chronic = evt.target.value;
  };
  handleMinAge = evt => {
    this.min_age = evt.value;
  };
  handleMaxAge = evt => {
    this.max_age = evt.value;
  };
  handleSubmit = evt => {
    console.log(
      "Here is the query string before I do shit: " +
        JSON.stringify(query_object)
    );
    if (this.sort_value === "no-sorting") query_object.order_by = [];
    else if (this.sort_value === "name-asc")
      query_object.order_by = [{ field: "name", direction: "asc" }];
    else if (this.sort_value === "name-desc")
      query_object.order_by = [{ field: "name", direction: "desc" }];
    else if (this.sort_value === "age-asc")
      query_object.order_by = [{ field: "average_age", direction: "asc" }];
    else if (this.sort_value === "age-desc")
      query_object.order_by = [{ field: "average_age", direction: "desc" }];
    if (this.curable === "curable-true")
      query_object.filters.push({ name: "curable", op: "eq", val: "Yes" });
    else if (this.curable === "curable-false")
      query_object.filters.push({ name: "curable", op: "eq", val: "No" });
    if (this.chronic === "chronic-true")
      query_object.filters.push({ name: "chronic", op: "eq", val: "Yes" });
    else if (this.chronic === "chronic-false")
      query_object.filters.push({ name: "chronic", op: "eq", val: "No" });
    if (this.genetic === "genetic-true")
      query_object.filters.push({ name: "genetic", op: "eq", val: "Yes" });
    else if (this.genetic === "genetic-false")
      query_object.filters.push({ name: "genetic", op: "eq", val: "No" });
    query_object.filters.push({
      name: "average_age",
      op: "ge",
      val: this.min_age
    });
    query_object.filters.push({
      name: "average_age",
      op: "le",
      val: this.max_age
    });
    console.log("Here is the reloaded query: " + JSON.stringify(query_object));
    this.setState({ query: JSON.stringify(query_object) });
    return true;
  };
  render() {
    const { illnesses_slice } = this.state;
    return (
      <div>
        <div className="navbar">
          <Navigation selected={1} />
        </div>
        <div className="page-title">
          <h1>Illnesses</h1>
          <p style={{ fontSize: "25px", opacity: "0.75" }}>
            Explore the most common mental conditions
          </p>
        </div>
        <br />
        <Tile className="filter_pagination-bar">
          <PaginationV2
            className="pagination"
            totalItems={this.state.illness_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
          <div className="filter-button">
            <ModalWrapper handleSubmit={this.handleSubmit} {...modalProps()}>
              <div className="sort-options">
                <h3 style={{ paddingBottom: "5px" }}>Sort By</h3>
                <Select onChange={this.handleSortOptions} hideLabel="true">
                  <SelectItem value="no-sorting" text="None" />
                  <SelectItem value="name-asc" text="Name: A to Z" />
                  <SelectItem value="name-desc" text="Name: Z to A" />
                  <SelectItem value="age-asc" text="Average Age: Low to High" />
                  <SelectItem
                    value="age-desc"
                    text="Average Age: High to Low"
                  />
                </Select>
              </div>
              <br />
              <hr color="#3d70b2" />
              <br />
              <br />
              <div className="filter-options">
                <h3 style={{ paddingBottom: "5px" }}>Filter By</h3>
                <div className="select-filter">
                  <Select
                    onChange={this.handleCurable}
                    labelText="Curable"
                    inline="true"
                    defaultValue="curable-default"
                  >
                    <SelectItem value="curable-default" text="None" />
                    <SelectItem value="curable-true" text="Yes" />
                    <SelectItem value="curable-false" text="No" />
                  </Select>
                </div>
                <div className="select-filter">
                  <Select
                    onChange={this.handleChronic}
                    labelText="Chronic"
                    inline="true"
                    defaultValue="chronic-default"
                  >
                    <SelectItem value="chronic-default" text="None" />
                    <SelectItem value="chronic-true" text="Yes" />
                    <SelectItem value="chronic-false" text="No" />
                  </Select>
                </div>
                <div className="select-filter">
                  <Select
                    onChange={this.handleGenetic}
                    labelText="Genetic"
                    inline="true"
                    defaultValue="genetic-default"
                  >
                    <SelectItem value="genetic-default" text="None" />
                    <SelectItem value="genetic-true" text="Yes" />
                    <SelectItem value="genetic-false" text="No" />
                  </Select>
                </div>
                <br />
                <div className="slider-filter">
                  <h6>Average Age</h6>
                  <div style={{ display: "inline" }}>
                    <text>min: </text>
                    <Slider
                      id="min-slider"
                      value="0"
                      onChange={this.handleMinAge}
                      {...sliderProps()}
                    />
                  </div>
                  <br />
                  <div style={{ display: "inline" }}>
                    <text>max: </text>
                    <Slider
                      id="max-slider"
                      value="50"
                      onChange={this.handleMaxAge}
                      {...sliderProps()}
                    />
                  </div>
                </div>
                <br />
              </div>
            </ModalWrapper>
          </div>
        </Tile>
        <div className="instance-grid">
          {}
          {illnesses_slice.map(illness => (
            <Card
              title={illness.name}
              image={illness.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              label1_heading="Curable"
              label1={illness.curable}
              label2_heading="Chronic"
              label2={illness.chronic}
              label3_heading="Genetic"
              label3={illness.genetic}
              label4_heading="Average Age"
              label4={String(illness.average_age)}
              href={`/illnesses?id=${illness.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
export class Illness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      illness: {}
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
              marginTop: "30px",
              marginBottom: "38px",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              opacity: ".8"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <div>
                {" "}
                {}
                <img src={this.state.illness.image_url} height="390" />
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
                justifyContent: "flex-start",
                flexDirection: "column",
                flexWrap: "wrap"
              }}
            >
              <p>
                {" "}
                {}
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "40px",
                    fontSize: "1.475rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  {this.state.illness.name}
                </FormLabel>
                <br />
                <br /> {}
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
                  Symptoms:
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.illness.symptoms
                    }}
                  />
                  {}
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
                  Treatments:
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.illness.treatments
                    }}
                  />
                  {}
                </FormLabel>
                <br />
              </p>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
