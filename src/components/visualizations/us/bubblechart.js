import React, { Component } from "react";
import * as d3 from "d3";
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
        <div id="area2" className="vis-area"/>
      );
    }
  }
