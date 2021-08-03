import "./basic.css";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Card, TinyCard, Navigation, modalProps, states } from "../custom";
import {
  Tile,
  FormLabel,
  PaginationV2,
  ModalWrapper,
  MultiSelect,
  Select,
  SelectItem,
  Slider
} from "carbon-components-react";
const owners = [
  { text: "PROPRIETARY" },
  { text: "NON-PROFIT" },
  { text: "GOVERNMENT - STATE" },
  { text: "GOVERNMENT - DISTRICT/AUTHORITY" }
];
const multiSelectProps = () => ({
  filterable: true,
  disabled: false,
  light: false,
  useTitleInItem: false,
  label: "none",
  invalid: false,
  invalidText: "Invalid selection"
});
const selectProps = () => ({
  labelText: "Sort By",
  hideLabel: true,
  light: false,
  inline: false,
  helperText: "",
  defaultValue: "no-sorting"
});
const sliderProps = () => ({
  light: false,
  hideTextInput: false,
  min: 0,
  max: 500,
  step: 1,
  stepMuliplier: 4,
  labelText: ""
});
const query_object = {
  order_by: [],
  filters: []
};
export class Hospitals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 123,
      page: 1,
      pageSize: 3,
      hospitals: [],
      hospitals_slice: [],
      query: JSON.stringify(query_object)
    };
  }
  componentDidMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({
          hospitals: data.objects,
          hospitals_slice: data.objects.slice(0, this.state.pageSize),
          hospital_count: data.num_results
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
            hospitals: data.objects,
            hospitals_slice: data.objects.slice(0, this.state.pageSize),
            hospital_count: data.num_results
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
      hospitals_slice: this.state.hospitals.slice(slice1, slice2)
    });
  };
  handleSortOptions = evt => {
    this.sort_value = evt.target.value;
  };
  handleStates = evt => {
    this.state_filter_list = evt.selectedItems;
  };
  handleOwners = evt => {
    this.owner_filter_list = evt.selectedItems;
  };
  handleMinPop = evt => {
    this.min_pop = evt.value;
  };
  handleMaxPop = evt => {
    this.max_pop = evt.value;
  };
  handleSecondarySubmit = evt => {
    this.setState({
      key: ~this.state.key
    });
    this.sort_value = "no-sorting";
    this.owner_filter_list = [];
    this.state_filter_list = [];
    this.min_pop = 0;
    this.max_pop = 500;
  };
  handleSubmit = evt => {
    query_object.filters = [];
    console.log(
      "Here is the query string before I do shit: " +
        JSON.stringify(query_object)
    );
    if (this.sort_value === "no-sorting") query_object.order_by = [];
    else if (this.sort_value === "name-asc")
      query_object.order_by = [{ field: "name", direction: "asc" }];
    else if (this.sort_value === "name-desc")
      query_object.order_by = [{ field: "name", direction: "desc" }];
    else if (this.sort_value === "pop-asc")
      query_object.order_by = [{ field: "population", direction: "asc" }];
    else if (this.sort_value === "pop-desc")
      query_object.order_by = [{ field: "population", direction: "desc" }];
    if (this.state_filter_list !== undefined && this.state_filter_list.length) {
      let temp = [];
      for (let i = 0; i < this.state_filter_list.length; i++)
        temp.push(this.state_filter_list[i].abbreviation);
      query_object.filters.push({ name: "state", op: "in", val: temp });
    }
    if (this.owner_filter_list !== undefined && this.owner_filter_list.length) {
      let temp = [];
      for (let i = 0; i < this.owner_filter_list.length; i++)
        temp.push(this.owner_filter_list[i].text);
      query_object.filters.push({ name: "owner", op: "in", val: temp });
    }
    query_object.filters.push({
      name: "population",
      op: "ge",
      val: this.min_pop
    });
    query_object.filters.push({
      name: "population",
      op: "le",
      val: this.max_pop
    });
    console.log("Here is the reloaded query: " + JSON.stringify(query_object));
    this.setState({ query: JSON.stringify(query_object) });
    return true;
  };
  render() {
    const { hospitals_slice } = this.state;
    return (
      <div>
        <div className="navbar">
          <Navigation selected={2} />
        </div>
        <div className="page-title">
          <h1>Hospitals</h1>
          <p style={{ fontSize: "25px", opacity: "0.75" }}>
            Find the hospital best suited to your needs
          </p>
        </div>
        <br />
        <Tile className="filter_pagination-bar">
          <PaginationV2
            className="pagination"
            totalItems={this.state.hospital_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
          <div className="filter-button">
            <ModalWrapper
              handleSubmit={this.handleSubmit}
              onSecondarySubmit={this.handleSecondarySubmit}
              {...modalProps()}
            >
              <div key={this.state.key}>
                <div className="sort-options">
                  <h3 style={{ paddingBottom: "5px" }}>Sort By</h3>
                  <Select onChange={this.handleSortOptions} {...selectProps()}>
                    <SelectItem value="no-sorting" text="None" />
                    <SelectItem value="name-asc" text="Name: A to Z" />
                    <SelectItem value="name-desc" text="Name: Z to A" />
                    <SelectItem value="pop-asc" text="Size: Low to High" />
                    <SelectItem value="pop-desc" text="Size: High to Low" />
                  </Select>
                </div>
                <br />
                <hr color="#3d70b2" />
                <br />
                <br />
                <div className="filter-options">
                  <h3 style={{ paddingBottom: "5px" }}>Filter By</h3>
                  <div className="multiselect-filter">
                    <MultiSelect.Filterable
                      id="hospital-state"
                      {...multiSelectProps}
                      items={states}
                      placeholder="State"
                      itemToString={item => (item ? item.name : "")}
                      onChange={this.handleStates}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="multiselect-filter">
                    <MultiSelect.Filterable
                      id="hospital-owner"
                      {...multiSelectProps}
                      items={owners}
                      placeholder="Owner"
                      itemToString={item => (item ? item.text : "")}
                      onChange={this.handleOwners}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="slider-filter">
                    <h6>Hospital size</h6>
                    <div style={{ display: "inline" }}>
                      <span>min: </span>
                      <Slider
                        id="min-slider"
                        value="0"
                        onChange={this.handleMinPop}
                        {...sliderProps()}
                      />
                    </div>
                    <br />
                    <div style={{ display: "inline" }}>
                      <span>max: </span>
                      <Slider
                        id="max-slider"
                        value="500"
                        onChange={this.handleMaxPop}
                        {...sliderProps()}
                      />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </ModalWrapper>
          </div>
        </Tile>
        <div className="instance-grid">
          {}
          {hospitals_slice.map(hospital => (
            <Card
              title={hospital.name}
              image={hospital.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "30px",
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
              label4_heading="Number of patients"
              label4={hospital.population}
              href={`/hospitals?id=${hospital.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
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
    const { charity } = fetch(
      `http:
    )
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ charity: data });
      });
    const { illness } = fetch(
      `http:
    )
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ illness: data });
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
            <center>
              <h3>
                If you are interested in this Hospital, you may also be
                interested this Illness and Charity
              </h3>
            </center>
            <div className="instance-grid">
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
          </Tile>
        </div>
      </div>
    );
  }
}
