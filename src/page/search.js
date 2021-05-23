import './basic.css'
import React, { Component } from 'react';
class SearchPage extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="page-title">
          <h1>Showing search results for {this.props.value}</h1>
      </div>
    );
  }
}
export default SearchPage;
