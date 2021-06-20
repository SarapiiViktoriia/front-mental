import './page/basic.css'
import React, { Component } from 'react';
import { Button, Tile, Tab, Tabs, ClickableTile, FormLabel, DataTable, Search } from "carbon-components-react";
var Highlight = require('react-highlighter');
export const modalProps = () => ({
  id: 'input-modal',
  primaryButtonText: 'Apply Filters',
  secondaryButtonText: 'Reset Filters',
  buttonTriggerText: 'Filter',
  buttonTriggerClassName: 'modal-trigger-btn',
  shouldCloseAfterSubmit: true,
  useTitleInItem: true
});
export const states = [
  {"name": "Alabama", "abbreviation": "AL"},
  {"name": "Alaska", "abbreviation": "AK"},
  {"name": "American Samoa", "abbreviation": "AS"},
  {"name": "Arizona", "abbreviation": "AZ"},
  {"name": "Arkansas", "abbreviation": "AR"},
  {"name": "California", "abbreviation": "CA"},
  {"name": "Colorado", "abbreviation": "CO"},
  {"name": "Connecticut", "abbreviation": "CT"},
  {"name": "Delaware", "abbreviation": "DE"},
  {"name": "District Of Columbia", "abbreviation": "DC"},
  {"name": "Federated States Of Micronesia", "abbreviation": "FM"},
  {"name": "Florida", "abbreviation": "FL"},
  {"name": "Georgia", "abbreviation": "GA"},
  {"name": "Guam", "abbreviation": "GU"}, 
  {"name": "Hawaii", "abbreviation": "HI"},
  {"name": "Idaho", "abbreviation": "ID"},
  {"name": "Illinois", "abbreviation": "IL"},
  {"name": "Indiana", "abbreviation": "IN"},
  {"name": "Iowa", "abbreviation": "IA"},
  {"name": "Kansas", "abbreviation": "KS"},
  {"name": "Kentucky", "abbreviation": "KY"},
  {"name": "Louisiana", "abbreviation": "LA"},
  {"name": "Maine", "abbreviation": "ME"},
  {"name": "Marshall Islands", "abbreviation": "MH"},
  {"name": "Maryland", "abbreviation": "MD"},
  {"name": "Massachusetts", "abbreviation": "MA"},
  {"name": "Michigan", "abbreviation": "MI"},
  {"name": "Minnesota", "abbreviation": "MN"},
  {"name": "Mississippi", "abbreviation": "MS"},
  {"name": "Missouri", "abbreviation": "MO"},
  {"name": "Montana", "abbreviation": "MT"},
  {"name": "Nebraska", "abbreviation": "NE"},
  {"name": "Nevada", "abbreviation": "NV"},
  {"name": "New Hampshire", "abbreviation": "NH"},
  {"name": "New Jersey", "abbreviation": "NJ"},
  {"name": "New Mexico", "abbreviation": "NM"},
  {"name": "New York", "abbreviation": "NY"},
  {"name": "North Carolina", "abbreviation": "NC"},
  {"name": "North Dakota", "abbreviation": "ND"},
  {"name": "Northern Mariana Islands", "abbreviation": "MP"},
  {"name": "Ohio", "abbreviation": "OH"},
  {"name": "Oklahoma", "abbreviation": "OK"},
  {"name": "Oregon", "abbreviation": "OR"},
  {"name": "Palau", "abbreviation": "PW"},
  {"name": "Pennsylvania", "abbreviation": "PA"},
  {"name": "Puerto Rico", "abbreviation": "PR"},
  {"name": "Rhode Island", "abbreviation": "RI"},
  {"name": "South Carolina", "abbreviation": "SC"},
  {"name": "South Dakota", "abbreviation": "SD"},
  {"name": "Tennessee", "abbreviation": "TN"},
  {"name": "Texas", "abbreviation": "TX"},
  {"name": "Utah", "abbreviation": "UT"},
  {"name": "Vermont", "abbreviation": "VT"},
  {"name": "Virgin Islands", "abbreviation": "VI"},
  {"name": "Virginia", "abbreviation": "VA"},
  {"name": "Washington", "abbreviation": "WA"},
  {"name": "West Virginia", "abbreviation": "WV"},
  {"name": "Wisconsin", "abbreviation": "WI"},
  {"name": "Wyoming", "abbreviation": "WY"}
];
export class Card extends Component {
  render() {
    return (
      <ClickableTile className="cards" href={this.props.href} style={this.props.style}>
        <div>
          <img src={this.props.image} width="350" height="370" alt='card-pic'/>
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ "marginTop": "20px", fontSize: "1.2rem" }}
            >
              <Highlight search={this.props.searchValue}>{this.props.title}</Highlight>
            </FormLabel>
          </center>
          <br />
          <center>
            {"buttonTitle" in this.props && (
              <Button kind="secondary" href={this.props.buttonHref}>
                {this.props.buttonTitle}
              </Button>
            )}
            {"description" in this.props && (
              <center>
                <FormLabel
                  className="title"
                  style={{ fontSize: "1.0rem", marginBottom: "20px" }}
                >
                  {this.props.description}
                </FormLabel>
              </center>
            )}
            {"label1" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label1_heading !== undefined
                    ? this.props.label1_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>{this.props.label1}</Highlight>
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label2_heading}: {this.props.label2}
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label3_heading}: {this.props.label3}
                </FormLabel>
              </center>
            )}
            {"label4" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label4_heading}: {this.props.label4}
                </FormLabel>
              </center>
            )}
          </center>
        </div>
      </ClickableTile>
    );
  }
}
export class Navigation extends Component {
  handleAboutTabClick = evt => { window.location.assign('/about'); }
  handleIllnessesTabClick = evt => { window.location.assign('/illnesses'); }
  handleHospitalsTabClick = evt => { window.location.assign('/hospitals'); }
  handleCharitiesTabClick = evt => { window.location.assign('/charities'); }
  handleHomeTabClick = evt => { window.location.assign('/'); }
  handleSearch = evt => { 
    if (evt.key === 'Enter')
      window.location.assign('/search?value='+evt.target.value) 
  }
  render(){
    return (
      <Tile className="navbar-top">
        <div style = {{ 'width': '20%' }}>
          <FormLabel className="navbar-title">Mental Health Help</FormLabel>
        </div>
        <div style={{ width: '30%', marginTop: '3px' }}>
          <Search onKeyPress={this.handleSearch} labelText='' placeHolderText="Search"/>
        </div>
        <div>
          <Tabs className="navbar-tabs" selected={this.props.selected}>
            <Tab className="navbar-tab"
              label={"Home"}
              onClick={this.handleHomeTabClick}
            />
            <Tab className="navbar-tab"
              label={"Illnesses"}
              onClick={this.handleIllnessesTabClick}
            />
            <Tab className="navbar-tab"
              label={"Hospitals"}
              onClick={this.handleHospitalsTabClick}
            />
            <Tab className="navbar-tab"
              label={"Charities"}
              onClick={this.handleCharitiesTabClick}
            />
            <Tab className="navbar-tab"
              label={"About"}
              onClick={this.handleAboutTabClick}
            />
          </Tabs>
        </div>
      </Tile>
    );
  }
}
