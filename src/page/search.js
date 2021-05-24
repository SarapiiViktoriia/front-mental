import './basic.css'
import React, { Component } from 'react';
import { Navigation } from '../custom';
import { Tile, PaginationV2 } from 'carbon-components-react';
const query_object = {
  filters: []
};
class SearchPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      illnesses: [],
      hospitals: [],
      charities: []
    };
  }
  componentDidMount() {
    query_object.filters = {'name':'name', 'op':'like', 'val':'%'+this.props.value+'%'};
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({illnesses: data.objects});
    })
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({charities: data.objects});
    })
    query_object.filter.push({'name':'city', 'op':'like', 'val':'%'+this.props.value+'%'});
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({hospitals: data.objects});
    })
  }
  render() {
    return (
      <div className='search-page'>
        <div className="navbar">
          <Navigation selected={-1}/>
        </div>
        <div className="page-title">
            <h1>Showing search results for {this.props.value}</h1>
        </div>
        <br/>
        <Tile className='filter_pagination-bar'>
          <PaginationV2 className='pagination'
            totalItems={this.state.illness_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
        </Tile>
      </div>
    );
  }
}
export default SearchPage;
