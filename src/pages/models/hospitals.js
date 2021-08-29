import "../../css/basic.css";
import React, { Component } from "react";
import Plx from 'react-plx';
import { Card, Navigation } from "../../components";
import { modalProps, multiSelectProps, states, pagination_parallax, owners } from '../../static';
import { Tile, PaginationV2, ModalWrapper, MultiSelect, Select, SelectItem, Slider } from "carbon-components-react";
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
  handleSortOptions = evt => { this.sort_value = evt.target.value; };
  handleStates = evt => { this.state_filter_list = evt.selectedItems; };
  handleOwners = evt => { this.owner_filter_list = evt.selectedItems; };
  handleMinPop = evt => { this.min_pop = evt.value; };
  handleMaxPop = evt => { this.max_pop = evt.value; };
  handleSecondarySubmit = evt => {
    this.setState({ key: ~this.state.key  });
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
    query_object.filters.push({ name: "population", op: "ge", val: this.min_pop });
    query_object.filters.push({ name: "population", op: "le", val: this.max_pop });
    console.log("Here is the reloaded query: " + JSON.stringify(query_object));
    this.setState({ query: JSON.stringify(query_object) });
    return true;
  };
  render() {
    const { hospitals_slice } = this.state;
    return (
      <div>
        <div className="navbar">
          <Navigation selected={1} />
        </div>
        <div className="page-title">
          <h1>Hospitals</h1>
          <p style={{ fontSize: "25px", opacity: "0.75" }}>
            Find the hospital best suited to your needs
          </p>
        </div>
        <br />
        <Tile className="filter_pagination-bar round" >
          <Plx className="pagination" parallaxData={pagination_parallax}>
            <PaginationV2 className='lol'
              totalItems={this.state.hospital_count}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
              onChange={this.handlePageChange}
            />
          </Plx>  
          <div className="filter-modal">
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
          {hospitals_slice.map(hospital => (
            <Card className='grid-card'
              title={hospital.name}
              image={hospital.image_url}
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
