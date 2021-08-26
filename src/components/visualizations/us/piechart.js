import React, { Component } from "react";
import * as d3 from "d3";
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
              if(d.owner === "PROPRIETARY"){proprietary++;}
              if(d.owner === "NON-PROFIT"){nonprofit++;}
              if(d.owner === "GOVERNMENT - STATE"){state++;}
              if(d.owner === "NOT AVAILABLE"){notavail++;}
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
        <div id="area3"/>
      );
    }
  }
