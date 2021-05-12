import './page/basic.css'
import React, { Component } from 'react';
import { Button, Tile, Tab, Tabs, ClickableTile, FormLabel, DataTable, Search, MultiSelect } from "carbon-components-react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;
export const modalProps = () => ({
  id: 'input-modal',
  primaryButtonText: 'Apply Filters',
  secondaryButtonText: 'Reset Filters',
  buttonTriggerText: 'Filter',
  buttonTriggerClassName: 'modal-trigger-btn',
  shouldCloseAfterSubmit: true
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
          <img src={this.props.image} width="350" height="370" />
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ "marginTop": "20px", fontSize: "1.2rem" }}
            >
              {this.props.title}
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
                  {this.props.label1}
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
export class MyTable extends Component {
  render() {
    function onChange() {}
    return (
      <DataTable
        rows={this.props.rows}
        headers={this.props.headers}
        render={({ rows, headers }) => (
          <TableContainer
            style={{
              "padding-top": "30px",
              "padding-left": "47px",
              "padding-right": "47px"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  }
}
export class Navigation extends Component {
  render() {
    function handleAboutTabClick(e) {
      window.location.assign("/about");
    }
    function handleIllnessesTabClick(e) {
      window.location.assign("/illnesses");
    }
    function handleHospitalsTabClick(e) {
      window.location.assign("/hospitals");
    }
    function handleCharitiesTabClick(e) {
      window.location.assign("/charities");
    }
    function handleHomeTabClick(e) {
      window.location.assign("/"); 
    }
    return (
      <Tile className="navbar-top">
        <div style = {{ 'width': '20%' }}>
          <FormLabel className="navbar-title">Mental Health Help</FormLabel>
        </div>
        <div style={{ width: '30%', marginTop: '3px' }} >
          <Search labelText='' placeHolderText="Search" />
        </div>
        <div>
          <Tabs className="navbar-tabs" selected={this.props.selected}>
            <Tab className="navbar-tab"
              label={"Home"}
              onClick={handleHomeTabClick}
            />
            <Tab className="navbar-tab"
              label={"Illnesses"}
              onClick={handleIllnessesTabClick}
            />
            <Tab className="navbar-tab"
              label={"Hospitals"}
              onClick={handleHospitalsTabClick}
            />
            <Tab className="navbar-tab"
              label={"Charities"}
              onClick={handleCharitiesTabClick}
            />
            <Tab className="navbar-tab"
              label={"About"}
              onClick={handleAboutTabClick}
            />
          </Tabs>
        </div>
      </Tile>
    );
  }
}
