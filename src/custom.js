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
    width = 1200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
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
export class BubbleChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
  drawChart() {
    fetch(`http:
      .then(results => results.json())
      .then(data => {
      var dataset = {
          "children": data.objects
      };
      console.log(dataset);
      var diameter = 1100;
      var bubble = d3.pack(dataset)
          .size([diameter, diameter])
          .padding(1.5);
      var svg = d3.select("#area2")
          .append("svg")
          .attr("width", diameter)
          .attr("height", diameter)
          .attr("class", "bubble");
      var nodes = d3.hierarchy(dataset)
          .sum(function(d) { return d.incomeAmount; });
      var node = svg.selectAll(".node")
          .data(bubble(nodes).descendants())
          .enter()
          .filter(function(d){
              return  !d.children
          })
          .append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
              return "translate(" + d.x + "," + d.y + ")";
          });
      node.append("title")
          .text(function(d) {
              return d.name + ": " + d.Count;
          });
      node.append("circle")
          .attr("r", function(d) {
              return d.r;
          })
          .style("fill", function(d,i) {
          });
      node.append("text")
          .attr("dy", ".2em")
          .style("text-anchor", "middle")
          .text(function(d) {
              return d.data.name.substring(0, d.r / 3);
          })
          .attr("font-family", "sans-serif")
          .attr("font-size", function(d){
              return d.r/10;
          })
          .attr("fill", "white");
      node.append("text")
          .attr("dy", "1.3em")
          .style("text-anchor", "middle")
          .text(function(d) {
              return d.data.incomeAmount;
          })
          .attr("font-family",  "Gill Sans", "Gill Sans MT")
          .attr("font-size", function(d){
              return d.r/5;
          })
          .attr("fill", "white");
      d3.select(window.frameElement)
          .style("height", diameter + "px");
      });
  }
  render() {
    return (
      <div id="area2">
      </div>
    );
  }
}
export class PieChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
  drawChart() {
    var w = 900,                        
    h = 900,                            
    r = 300;                            
    var colors = [];
    while (colors.length < 100) {
        do {
            var color = Math.floor((Math.random()*1000000)+1);
        } while (colors.indexOf(color) >= 0);
        colors.push("#" + ("000000" + color.toString(16)).slice(-6));
    }
    fetch(`http:
      .then(results => results.json())
      .then(dataset => {
        var proprietary = 0;
        var nonprofit = 0;
        var state = 0;
        var notavail = 0;
        dataset.objects.forEach(function(d) {
            if(d.owner == "PROPRIETARY"){proprietary++;}
            if(d.owner == "NON-PROFIT"){nonprofit++;}
            if(d.owner == "GOVERNMENT - STATE"){state++;}
            if(d.owner == "NOT AVAILABLE"){notavail++;}
        })
        var data = [{"label":"PROPRIETARY", "value":proprietary}, 
                {"label":"NON-PROFIT", "value":nonprofit}, 
                {"label":"GOVERNMENT - STATE", "value":state},
                {"label":"NOT AVAILABLE", "value":notavail}];
        console.log(data);
    var vis = d3.select("#area3")
        .append("svg:svg")              
        .data([data])                   
            .attr("width", w)           
            .attr("height", h)
        .append("svg:g")                
            .attr("transform", "translate(" + r + "," + r + ")")    
    var arc = d3.arc()              
        .outerRadius(r);
    var pie = d3.pie()           
        .value(function(d) { return d.value; });    
    var arcs = vis.selectAll("g.slice")     
        .data(pie)                          
        .enter()                            
            .append("svg:g")                
                .attr("class", "slice");    
        arcs.append("svg:path")
                .attr("fill", function(d, i) { return colors[i]; } ) 
                .attr("d", arc);                                    
        arcs.append("svg:text")                                     
                .attr("transform", function(d) {                    
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        
            })
            .attr("text-anchor", "middle")                          
            .text(function(d, i) { return data[i].label; });        
        arcs.append("svg:text")                                     
                .attr("dy", "1.3em")
                .attr("transform", function(d) {                    
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        
            })
            .attr("text-anchor", "middle")                          
            .text(function(d, i) { return data[i].value; });        
        });
  }
  render() {
    return (
      <div id="area3">
      </div>
    );
  }
}
