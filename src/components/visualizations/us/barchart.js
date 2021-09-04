import React, { Component } from "react";
import * as d3 from "d3";
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
        <div id="area1" className="vis-area"/>
      );
    }
  }
