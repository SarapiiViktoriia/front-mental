import './basic.css'
import React, { Component } from 'react';
import { Card, Navigation } from '../custom';
import { Tile, FormLabel, PaginationV2, ModalWrapper, Toggle, MultiSelect, Slider } from "carbon-components-react";
const states = [
  {
      "name": "Alabama",
      "abbreviation": "AL"
  },
  {
      "name": "Alaska",
      "abbreviation": "AK"
  },
  {
      "name": "American Samoa",
      "abbreviation": "AS"
  },
  {
      "name": "Arizona",
      "abbreviation": "AZ"
  },
  {
      "name": "Arkansas",
      "abbreviation": "AR"
  },
  {
      "name": "California",
      "abbreviation": "CA"
  },
  {
      "name": "Colorado",
      "abbreviation": "CO"
  },
  {
      "name": "Connecticut",
      "abbreviation": "CT"
  },
  {
      "name": "Delaware",
      "abbreviation": "DE"
  },
  {
      "name": "District Of Columbia",
      "abbreviation": "DC"
  },
  {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
  },
  {
      "name": "Florida",
      "abbreviation": "FL"
  },
  {
      "name": "Georgia",
      "abbreviation": "GA"
  },
  {
      "name": "Guam",
      "abbreviation": "GU"
  },
  {
      "name": "Hawaii",
      "abbreviation": "HI"
  },
  {
      "name": "Idaho",
      "abbreviation": "ID"
  },
  {
      "name": "Illinois",
      "abbreviation": "IL"
  },
  {
      "name": "Indiana",
      "abbreviation": "IN"
  },
  {
      "name": "Iowa",
      "abbreviation": "IA"
  },
  {
      "name": "Kansas",
      "abbreviation": "KS"
  },
  {
      "name": "Kentucky",
      "abbreviation": "KY"
  },
  {
      "name": "Louisiana",
      "abbreviation": "LA"
  },
  {
      "name": "Maine",
      "abbreviation": "ME"
  },
  {
      "name": "Marshall Islands",
      "abbreviation": "MH"
  },
  {
      "name": "Maryland",
      "abbreviation": "MD"
  },
  {
      "name": "Massachusetts",
      "abbreviation": "MA"
  },
  {
      "name": "Michigan",
      "abbreviation": "MI"
  },
  {
      "name": "Minnesota",
      "abbreviation": "MN"
  },
  {
      "name": "Mississippi",
      "abbreviation": "MS"
  },
  {
      "name": "Missouri",
      "abbreviation": "MO"
  },
  {
      "name": "Montana",
      "abbreviation": "MT"
  },
  {
      "name": "Nebraska",
      "abbreviation": "NE"
  },
  {
      "name": "Nevada",
      "abbreviation": "NV"
  },
  {
      "name": "New Hampshire",
      "abbreviation": "NH"
  },
  {
      "name": "New Jersey",
      "abbreviation": "NJ"
  },
  {
      "name": "New Mexico",
      "abbreviation": "NM"
  },
  {
      "name": "New York",
      "abbreviation": "NY"
  },
  {
      "name": "North Carolina",
      "abbreviation": "NC"
  },
  {
      "name": "North Dakota",
      "abbreviation": "ND"
  },
  {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
  },
  {
      "name": "Ohio",
      "abbreviation": "OH"
  },
  {
      "name": "Oklahoma",
      "abbreviation": "OK"
  },
  {
      "name": "Oregon",
      "abbreviation": "OR"
  },
  {
      "name": "Palau",
      "abbreviation": "PW"
  },
  {
      "name": "Pennsylvania",
      "abbreviation": "PA"
  },
  {
      "name": "Puerto Rico",
      "abbreviation": "PR"
  },
  {
      "name": "Rhode Island",
      "abbreviation": "RI"
  },
  {
      "name": "South Carolina",
      "abbreviation": "SC"
  },
  {
      "name": "South Dakota",
      "abbreviation": "SD"
  },
  {
      "name": "Tennessee",
      "abbreviation": "TN"
  },
  {
      "name": "Texas",
      "abbreviation": "TX"
  },
  {
      "name": "Utah",
      "abbreviation": "UT"
  },
  {
      "name": "Vermont",
      "abbreviation": "VT"
  },
  {
      "name": "Virgin Islands",
      "abbreviation": "VI"
  },
  {
      "name": "Virginia",
      "abbreviation": "VA"
  },
  {
      "name": "Washington",
      "abbreviation": "WA"
  },
  {
      "name": "West Virginia",
      "abbreviation": "WV"
  },
  {
      "name": "Wisconsin",
      "abbreviation": "WI"
  },
  {
      "name": "Wyoming",
      "abbreviation": "WY"
  }
]
const multiSelectProps = () => ({
  filterable: true,
  disabled: false,
  light: false,
  useTitleInItem: false,
  label: "Choose States",
  invalid: false,
  invalidText: "Invalid selection",
});
const sliderProps = () => ({
  name: '',
  inputType: '',
  ariaLabelInput: '',
  disabled: false,
  light: false,
  hideTextInput: false,
  value: 50,
  min: 0,
  max: 150,
  step: 1,
  stepMuliplier: 4,
  labelText: 'Population (less than)',
  minLabel: '',
  maxLabel: '',
});
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
      <div className="navbar">
        <Navigation selected={3}/>
      </div>
        <div className="page-title">
          <h1>Charities</h1>
          <p style={{fontSize:"25px", opacity:"0.75"}} >Discover charities who are doing their part</p>
        </div>
        <br/>
        <Tile className='filter_pagination-bar'>
          <PaginationV2 className='pagination'
            totalItems={this.state.charity_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
          <div className="filter-button">
            <ModalWrapper id='input-modal' buttonTriggerClassName="modal-trigger" buttonTriggerText='Filter'>
              <div>
                <Toggle labelB="Sort A-Z" />
              </div>
              <div>
                <Toggle labelB="Sort by rating" />
              </div>
              <br/>
              <div>
                <MultiSelect.Filterable
                  {...multiSelectProps}
                  items={states}
                  itemToString={item => (item ? item.name : '')}
                  placeholder="States"
                />
              </div>
              <br/>
              <div>
                <FormLabel>Deductibility</FormLabel>
                <Toggle labelA="No" labelB="Yes" />
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Slider id="slider" {...sliderProps()} />
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
        <Navigation selected={3}/>
      </div>
        <div>
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "38px",
              opacity: ".8"
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
