import "./pages/basic.css";
import React, { Component } from "react";
import {
  Button,
  Tile,
  Tab,
  Tabs,
  ClickableTile,
  FormLabel,
  DataTable,
  Search,
  Dropdown,
  DropdownItem
} from "carbon-components-react";
import { Link } from "react-router-dom";
import Highlight from 'react-highlighter';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;
export class Card extends Component {
  render() {
    return (
      <ClickableTile
        className="cards"
        href={this.props.href}
        style={this.props.style}
      >
        <div>
          <img src={this.props.image} width="350" height="370" alt="card-pic" />
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ marginTop: "20px", fontSize: "1.2rem" }}
            >
              <Highlight search={this.props.searchValue}>
                {this.props.title}
              </Highlight>
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
                  <Highlight search={this.props.searchValue}>
                    {this.props.label1}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                {this.props.label2_heading !== undefined
                    ? this.props.label2_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label2}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                {this.props.label3_heading !== undefined
                    ? this.props.label3_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label3}
                  </Highlight>
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
export class TinyCard extends Component {
  render() {
    return (
      <ClickableTile
        className="cards"
        href={this.props.href}
        style={this.props.style}
      >
        <div>
          <img src={this.props.image} width="200" height="190" alt=''/>
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ marginTop: "20px", fontSize: "1.2rem" }}
            >
              <Highlight search={this.props.searchValue}>
                {this.props.title}
              </Highlight>
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
                  <Highlight search={this.props.searchValue}>
                    {this.props.label1}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label2_heading !== undefined
                    ? this.props.label2_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label2}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label3_heading !== undefined
                    ? this.props.label3_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label3}
                  </Highlight>
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
  handleAboutTabClick = evt => {
    window.location.assign("/about");
  };
  handleIllnessesTabClick = evt => {
    window.location.assign("/illnesses");
  };
  handleHospitalsTabClick = evt => {
    window.location.assign("/hospitals");
  };
  handleCharitiesTabClick = evt => {
    window.location.assign("/charities");
  };
  handleMyVisClick = evt => {
    window.location.assign("/myvis");
  };
  handleYourVisClick = evt => {
    window.location.assign("/yourvis");
  };
  handleSearch = evt => {
    if (evt.key === "Enter")
      window.location.assign("/search?value=" + evt.target.value);
  };
  render() {
    return (
      <Tile className="navbar-top">
        <div style={{ marginRight: "20px" }}>
          <FormLabel className="navbar-title"><Link to='/'>Mental Health Help</Link></FormLabel>
        </div>
        <div style={{ width: "30%", marginTop: "3px" }}>
          <Search
            onKeyPress={this.handleSearch}
            labelText=""
            placeHolderText="Search"
          />
        </div>
        <div style={{marginLeft: 'auto'}}>
          <Tabs className="navbar-tabs" selected={this.props.selected}>
            <Tab
              className="navbar-tab"
              label={"Illnesses"}
              onClick={this.handleIllnessesTabClick}
            />
            <Tab
              className="navbar-tab"
              label={"Hospitals"}
              onClick={this.handleHospitalsTabClick}
            />
            <Tab
              className="navbar-tab"
              label={"Charities"}
              onClick={this.handleCharitiesTabClick}
            />
            <Tab
              className="navbar-tab"
              label={"About"}
              onClick={this.handleAboutTabClick}
            />
          </Tabs>
        </div>
        <div>
          <Dropdown className='vis-dropdown' defaultText='Visualizations'>
            <DropdownItem itemText="Our Site" value='us' onClick={this.handleMyVisClick}/>
            <DropdownItem itemText="Their Site" value='them' onClick={this.handleYourVisClick}/>
          </Dropdown>
        </div>
      </Tile>
    );
  }
}
