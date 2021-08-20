import "./pages/basic.css";
import React, { Component } from "react";
import { Button, Tile, Tab, Tabs, ClickableTile, FormLabel, Search, DropdownV2 } from "carbon-components-react";
import { Link } from "react-router-dom";
import Highlight from 'react-highlighter';
import * as d3 from "d3";
const ddprops = () => ({
  items: [{text: "Our Site", route: "/myvis"},
          {text: "Their Site", route: "/yourvis"}],
  itemToString: item => (item? item.text: ''),
  label: 'Visualizations'
});
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
          <DropdownV2 {...ddprops()} onChange={this.handleVisClick}/>
        </div>
      </Tile>
    );
  }
}
export class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
  drawChart() {
    var margin = { top: 20, right: 20, bottom: 150, left: 60 },
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;
    var x = d3.scaleBand().rangeRound([0, width]).padding(0.05);
    var y = d3.scaleLinear().range([height, 0]);
    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y).ticks(10);
    const svg = d3
    .select("#area1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    fetch(`http:
      .then(results => results.json())
      .then(data => {
        data.objects.forEach(function(d) {
        d.name = d.name;
        d.population = d.population;
        });
        x.domain(
        data.objects.map(function(d) {
          return d.name;
        })
        );
        y.domain([
        0,
        d3.max(data.objects, function(d) {
          return d.population;
        })
        ]);
        svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)");
        svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");
        svg
        .selectAll("bar")
        .data(data.objects)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {
          return x(d.name);
        })
        .attr("width", x.bandwidth())
        .attr("y", function(d) {
          return y(d.population);
        })
        .attr("height", function(d) {
          return height - y(d.population);
        });
      });
  }
  render() {
    return (
      <div id="area1">
      </div>
    );
  }
}
