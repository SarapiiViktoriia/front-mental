import './basic.css'
import React, { Component } from 'react';
import { Navigation, Card } from '../custom';
import Highlight from 'react-highlighter';
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
    var queries = this.props.value.replace(/ *, */g, ',').split(",");
    var ors = [];
    for (let i=0; i<queries.length; i++){
      ors.push({'name':'name', 'op':'like', 'val':'%'+queries[i]+'%'});
    }
    query_object.filters = [{'or': ors}];
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({illnesses: data.objects});
    })
    ors = [];
    for (let i=0; i<queries.length; i++){
      ors.push({'name':'name', 'op':'like', 'val':'%'+queries[i]+'%'});
      ors.push({'name':'state', 'op':'like', 'val':'%'+queries[i]+'%'});
    }
    query_object.filters = [{'or': ors}];
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({charities: data.objects});
    })
    ors = [];
    for (let i=0; i<queries.length; i++){
      ors.push({'name':'name', 'op':'like', 'val':'%'+queries[i]+'%'});
      ors.push({'name':'state', 'op':'like', 'val':'%'+queries[i]+'%'});
      ors.push({'name':'owner', 'op':'like', 'val':'%'+queries[i]+'%'});
      ors.push({'name':'city', 'op':'like', 'val':'%'+queries[i]+'%'});
    }
    query_object.filters = [{'or': ors}];
    fetch("http:
    .then(results => results.json())
    .then(data => {
      this.setState({hospitals: data.objects});
    })
  }
  render() {
    const { illnesses, hospitals, charities } = this.state;
    let noCharities = (charities === undefined || charities.length === 0)? null:
    (
      <div className='element-render'>
        <div className="page-title">
          <h1 style={{ fontSize: '1.5rem' }}>Charities</h1>
        </div>
        <div className="instance-grid">
          {}
          {charities.map(charity => (
            <Card
              title={charity.name}
              image={charity.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "30px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              searchValue={new RegExp(this.props.value.replace(/ *, */g, ',').replace(/,/g, "|"), 'i')}
              label1_heading="Rating"
              label1={String(charity.rating)}
              label2_heading="State"
              label2={charity.state}
              label3_heading="Deductible"
              label3={charity.deductible}
              label4_heading="Income"
              label4={charity.incomeAmount.toLocaleString("en")}
              href={`/charities?id=${charity.id}`}
            />
          ))}
        </div>
      </div>
    ); 
    let noHospitals = (hospitals === undefined || hospitals.length === 0)? null:
    (
      <div className='element-render'>
        <div className="page-title">
          <h1 style={{ fontSize: '1.5rem' }}>Hospitals</h1>
        </div>
        <div className="instance-grid">
          {}
          {hospitals.map(hospital => (
            <Card
              title={hospital.name}
              image={hospital.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "30px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              searchValue={new RegExp(this.props.value.replace(/ *, */g, ',').replace(/,/g, "|"), 'i')}
              label1_heading="City"
              label1={hospital.city}
              label2_heading="State"
              label2={hospital.state}
              label3_heading="Owner"
              label3={hospital.owner}
              label4_heading="Number of patients"
              label4={hospital.population}
              href={`/hospitals?id=${hospital.id}`}
            />
          ))}
        </div>
      </div>
    );
    let noIllnesses = (illnesses === undefined || illnesses.length === 0)? null:
    (
      <div className='element-render'>
        <div className="page-title">
          <h1 style={{ fontSize: '1.5rem' }}>Illnesses</h1>
        </div>
        <div className="instance-grid">
          {}
          {illnesses.map(illness => (
            <Card
              title={illness.name}
              image={illness.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              searchValue={new RegExp(this.props.value.replace(/ *, */g, ',').replace(/,/g, "|"), 'i')}
              label1_heading="Curable"
              label1={illness.curable}
              label2_heading="Chronic"
              label2={illness.chronic}
              label3_heading="Genetic"
              label3={illness.genetic}
              label4_heading="Average Age"
              label4={String(illness.average_age)}
              href={`/illnesses?id=${illness.id}`}
            />
          ))}
        </div>
      </div>
    );
    return (
      <div className='search-page'>
        <div className="navbar">
          <Navigation selected={-1}/>
        </div>
        <div className="page-title">
            <h1>Showing search results for "{(this.props.value.replace(/ *, */g, ',').replace(/,/g, ", "))}"</h1>
        </div><br/>
        {noCharities}
        {noHospitals}
        {noIllnesses}
      </div>
    );
  }
}
export default SearchPage;
