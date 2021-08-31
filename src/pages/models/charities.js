import "../../css/basic.css";
import React, { Component } from "react";
import Plx from 'react-plx';
import { Card, Navigation } from "../../components";
import { modalProps, multiSelectProps, selectProps, states, pagination_parallax } from '../../static';
import { Tile, PaginationV2, ModalWrapper, MultiSelect, Slider, Select, SelectItem, Search } from "carbon-components-react";
const sliderPropsIncome = () => ({
  light: false,
  hideTextInput: false,
  min: 5,
  max: 340,
  step: 1,
  stepMuliplier: 3,
  labelText: ""
});
const sliderPropsRating = () => ({
  light: false,
  hideTextInput: false,
  min: 80,
  max: 100,
  step: 0.1,
  stepMuliplier: 10,
  labelText: ""
});
const query_object = {
  order_by: [],
  filters: []
};
export class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 123,
      page: 1,
      pageSize: 3,
      charities: [],
      charities_slice: [],
      query: JSON.stringify(query_object)
    };
  }
  componentDidMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({
          charities: data.objects,
          charities_slice: data.objects.slice(0, this.state.pageSize),
          charity_count: data.num_results
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
            charities: data.objects,
            charities_slice: data.objects.slice(0, this.state.pageSize),
            charity_count: data.num_results
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
      charities_slice: this.state.charities.slice(slice1, slice2)
    });
  };
  handleSortOptions = evt => {
    this.sort_value = evt.target.value;
  };
  handleStates = evt => {
    this.state_filter_list = evt.selectedItems;
  };
  handleDeductible = evt => {
    this.deductible = evt.target.value;
  };
  handleMinRating = evt => {
    this.min_rating = evt.value;
  };
  handleMaxRating = evt => {
    this.max_rating = evt.value;
  };
  handleMinIncome = evt => {
    this.min_income = evt.value;
  };
  handleMaxIncome = evt => {
    this.max_income = evt.value;
  };
  handleSecondarySubmit = evt => {
    this.setState({
      key: ~this.state.key
    });
    this.sort_value = "no-sorting";
    this.deductible = "deductible-default";
    this.state_filter_list = [];
    this.min_rating = 80;
    this.max_rating = 100;
    this.min_income = 5;
    this.max_income = 340;
  };
  handleSubmit = evt => {
    query_object.filters = [];
    if (this.sort_value === "no-sorting") query_object.order_by = [];
    else if (this.sort_value === "name-asc")
      query_object.order_by = [{ field: "name", direction: "asc" }];
    else if (this.sort_value === "name-desc")
      query_object.order_by = [{ field: "name", direction: "desc" }];
    else if (this.sort_value === "rating-asc")
      query_object.order_by = [{ field: "rating", direction: "asc" }];
    else if (this.sort_value === "rating-desc")
      query_object.order_by = [{ field: "rating", direction: "desc" }];
    else if (this.sort_value === "income-asc")
      query_object.order_by = [{ field: "incomeAmount", direction: "asc" }];
    else if (this.sort_value === "income-desc")
      query_object.order_by = [{ field: "incomeAmount", direction: "desc" }];
    if (this.state_filter_list !== undefined && this.state_filter_list.length) {
      let temp = [];
      for (let i = 0; i < this.state_filter_list.length; i++)
        temp.push(this.state_filter_list[i].abbreviation);
      query_object.filters.push({ name: "state", op: "in", val: temp });
    }
    if (this.deductible === "deductible-default") query_object.filters = [];
    else if (this.deductible === "deductible-true")
      query_object.filters.push({ name: "deductible", op: "eq", val: "Yes" });
    else if (this.deductible === "deductible-false")
      query_object.filters.push({ name: "deductible", op: "eq", val: "No" });
    query_object.filters.push({ name: "rating", op: "ge", val: this.min_rating });
    query_object.filters.push({ name: "rating", op: "le", val: this.max_rating });
    query_object.filters.push({ name: "incomeAmount", op: "ge", val: this.min_income * 100000 });
    query_object.filters.push({ name: "incomeAmount", op: "le", val: this.max_income * 100000 });
    this.setState({ query: JSON.stringify(query_object) });
    return true;
  };
  handleSearch = evt => {
  };
  render() {
    const { charities_slice } = this.state;
    return (
      <div>
        <div className="navbar">
          <Navigation selected={2} />
        </div>
        <div className="page-title">
          <h1>Charities</h1>
          <p style={{ fontSize: "25px", opacity: "0.75" }}>
            Discover charities who are doing their part
          </p>
        </div>
        <br />
        <Tile className="filter_pagination-bar">
          <Plx className="pagination" parallaxData={pagination_parallax}>
            <PaginationV2
              totalItems={this.state.charity_count}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
              onChange={this.handlePageChange}
            />
          </Plx>
          <Plx className='instance-search' parallaxData={pagination_parallax}>
            <Search onKeyPress={this.handleSearch} labelText="" placeHolderText="Search Charities"/>
          </Plx>
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
                    <SelectItem value="rating-asc" text="Rating: Low to High" />
                    <SelectItem value="rating-desc" text="Rating: High to Low"/>
                    <SelectItem value="income-asc" text="Income: Low to High" />
                    <SelectItem value="income-desc" text="Income: High to Low"/>
                  </Select>
                </div>
                <br />
                <hr color="#3d70b2" />
                <br />
                <br />
                <div className="filter-options">
                  <h3 style={{ paddingBottom: "5px" }}>Filter By</h3>
                  <div className="select-filter">
                    <Select onChange={this.handleDeductible} labelText="Deductible" 
                            inline="true" defaultValue="deductible-default">
                      <SelectItem value="deductible-default" text="None" />
                      <SelectItem value="deductible-true" text="Yes" />
                      <SelectItem value="deductible-false" text="No" />
                    </Select>
                  </div>
                  <br />
                  <div className="multiselect-filter">
                    <MultiSelect.Filterable
                      id="charity-state"
                      {...multiSelectProps}
                      items={states}
                      placeholder="State"
                      itemToString={item => (item ? item.name : "")}
                      onChange={this.handleStates}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="slider-filter">
                    <h6>Rating</h6>
                    <div style={{ display: "inline" }}>
                      <text>min: </text>
                      <Slider id="min-slider"
                        value="80"
                        onChange={this.handleMinRating}
                        {...sliderPropsRating()}
                      />
                    </div>
                    <br />
                    <div style={{ display: "inline" }}>
                      <text>max: </text>
                      <Slider id="max-slider"
                        value="100"
                        onChange={this.handleMaxRating}
                        {...sliderPropsRating()}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="slider-filter">
                    <h6>Income ($100000s)</h6>
                    <div style={{ display: "inline" }}>
                      <text>min: </text>
                      <Slider id="min-slider"
                        value="5"
                        onChange={this.handleMinIncome}
                        {...sliderPropsIncome()}
                      />
                    </div>
                    <br />
                    <div style={{ display: "inline" }}>
                      <text>max: </text>
                      <Slider id="max-slider"
                        value="340"
                        onChange={this.handleMaxIncome}
                        {...sliderPropsIncome()}
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
          {charities_slice.map(charity => (
            <Card className='grid-card'
              title={charity.name}
              image={charity.image_url}
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
      </div>
    );
  }
}
