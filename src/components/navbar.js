import "../css/basic.css";
import React, { Component } from "react";
import { Tile, Tab, Tabs, FormLabel, Search, DropdownV2 } from "carbon-components-react";
import { Link } from "react-router-dom";
const visprops = () => ({
  items: [{text: "Our Site", route: "/myvis"},
          {text: "Their Site", route: "/yourvis"}],
  itemToString: item => (item? item.text: ''),
  label: 'Visualizations'
});
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
  handleVisClick = evt => {
    window.location.assign(evt.selectedItem.route);
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
          <DropdownV2 {...visprops()} onChange={this.handleVisClick}/>
        </div>
      </Tile>
    );
  }
}
