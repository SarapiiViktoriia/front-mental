import "./basic.css";
import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
import { Timeline } from 'react-twitter-widgets'
import { Card, Navigation, modalProps, states } from "../custom";
import {
  Tile,
  FormLabel,
  PaginationV2,
  ModalWrapper,
  MultiSelect,
  Slider,
  Select,
  SelectItem
} from "carbon-components-react";
const multiSelectProps = () => ({
  filterable: true,
  disabled: false,
  light: false,
  useTitleInItem: false,
  label: "",
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
      key: ~this.state.key,
    })
    this.sort_value = 'no-sorting';
    this.deductible = 'deductible-default';
    this.state_filter_list = [];
    this.min_rating = 80;
    this.max_rating = 100;
    this.min_income = 5;
    this.max_income = 340;
  }
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
    if (this.deductible === "deductible-true")
      query_object.filters.push({ name: "deductible", op: "eq", val: "Yes" });
    else if (this.deductible === "deductible-false")
      query_object.filters.push({ name: "deductible", op: "eq", val: "No" });
    query_object.filters.push({
      name: "rating",
      op: "ge",
      val: this.min_rating
    });
    query_object.filters.push({
      name: "rating",
      op: "le",
      val: this.max_rating
    });
    query_object.filters.push({
      name: "incomeAmount",
      op: "ge",
      val: this.min_income * 100000
    });
    query_object.filters.push({
      name: "incomeAmount",
      op: "le",
      val: this.max_income * 100000
    });
    console.log("Here is the reloaded query: " + JSON.stringify(query_object));
    this.setState({ query: JSON.stringify(query_object) });
    return true;
  };
  render() {
    const { charities_slice } = this.state;
    return (
      <div>
        <div className="navbar">
          <Navigation selected={3} />
        </div>
        <div className="page-title">
          <h1>Charities</h1>
          <p style={{ fontSize: "25px", opacity: "0.75" }}>
            Discover charities who are doing their part
          </p>
        </div>
        <br />
        <Tile className="filter_pagination-bar">
          <PaginationV2
            className="pagination"
            totalItems={this.state.charity_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
          <div className="filter-button">
            <ModalWrapper handleSubmit={this.handleSubmit} onSecondarySubmit={this.handleSecondarySubmit} {...modalProps()}>
              <div key={this.state.key}>
                <div className="sort-options">
                  <h3 style={{ paddingBottom: "5px" }}>Sort By</h3>
                  <Select onChange={this.handleSortOptions} {...selectProps()}>
                    <SelectItem value="no-sorting" text="None" />
                    <SelectItem value="name-asc" text="Name: A to Z" />
                    <SelectItem value="name-desc" text="Name: Z to A" />
                    <SelectItem value="rating-asc" text="Rating: Low to High" />
                    <SelectItem value="rating-desc" text="Rating: High to Low" />
                    <SelectItem value="income-asc" text="Income: Low to High" />
                    <SelectItem value="income-desc" text="Income: High to Low" />
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
                      onChange={this.handleDeductible}
                      labelText="Deductible"
                      inline="true"
                      defaultValue="deductible-default"
                    >
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
                      <Slider
                        id="min-slider"
                        value="80"
                        onChange={this.handleMinRating}
                        {...sliderPropsRating()}
                      />
                    </div>
                    <br />
                    <div style={{ display: "inline" }}>
                      <text>max: </text>
                      <Slider
                        id="max-slider"
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
                      <Slider
                        id="min-slider"
                        value="5"
                        onChange={this.handleMinIncome}
                        {...sliderPropsIncome()}
                      />
                    </div>
                    <br />
                    <div style={{ display: "inline" }}>
                      <text>max: </text>
                      <Slider
                        id="max-slider"
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
          {}
          {charities_slice.map(charity => (
            <Card
              title={charity.name}
              image={charity.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "30px",
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
        <div className="navbar">
          <Navigation selected={3} />
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
              <div>
                <img
                  src={this.state.charity.image_url}
                  width="500"
                  height="500"
                />
              </div>
              <div
                style={{
                  marginLeft: "50px",
                }}
              >
                <a 
                  class="twitter-timeline" 
                  data-width="350" data-height="500" 
                  data-theme="light" href="https:
                >
                  Tweets by afspnational
                </a>
                <script async src="https:
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
                  fontSize: "1.475rem",
                }}
              >
                {this.state.charity.name}
              </FormLabel>
              <br />
              <FormLabel
                className="title"
                style={{
                  fontSize: "1.0rem",
                }}
              >
                Tagline: "{this.state.charity.tagLine}"
              </FormLabel>
              <br />
              <FormLabel
                className="title"
                style={{
                  fontSize: "1.0rem",
                }}
              >
                Asset Amount: ${this.state.charity.assetAmount}
              </FormLabel>
              <br />
              <FormLabel
                className="title"
                style={{
                  fontSize: "1.0rem",
                }}
              >
                <a style={{ color: "#000000" }} >URL: </a>
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
                  fontSize: "1.0rem",
                }}
              >
                Mission:
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.state.charity.mission
                  }}
                  style={{
                    marginTop: "20px",
                  }}
                />
              </FormLabel>
               {}
            </div>
          </Tile>
        </div>
      </div>
    );
  }
}
