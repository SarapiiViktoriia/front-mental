import './basic.css'
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Card, Navigation } from '../custom';
import { Tile, FormLabel, PaginationV2, ModalWrapper } from "carbon-components-react";
export class Illnesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 3,
      illnesses: [],
      illnesses_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({ illnesses: data.objects });
        this.setState({
          illnesses_slice: data.objects.slice(0, this.state.pageSize)
        });
        this.setState({illness_count: data.num_results});
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
      illnesses_slice: this.state.illnesses.slice(slice1, slice2)
    });
  };
  render() {
    const { illnesses_slice } = this.state;
    return (
      <div>
      <div className="navbar">
        <Navigation selected={1}/>
      </div>
        <div className="page-title">
          <h1>Illnesses</h1>
          <p style={{fontSize:"25px", opacity:"0.75"}} >Explore the most common mental conditions</p>
        </div>
        <br/>
        <Tile className='filter_pagination-bar'>
          <PaginationV2 className='pagination'
            totalItems={this.state.illness_count}
            pageSize={3}
            pageSizes={[3, 6, 9, 10]}
            onChange={this.handlePageChange}
          />
          <div className="filter-button">
            <ModalWrapper id='input-modal' buttonTriggerClassName="modal-trigger" buttonTriggerText='Filter'/>
          </div>
        </Tile>
        <div className="instance-grid">
          {}
          {illnesses_slice.map(illness => (
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
  }
}
export class Illness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      illness: {}
    };
  }
  componentWillMount() {
    fetch(`http:
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ illness: data });
      });
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };
    return (
      <div>
      <div className="navbar">
        <Navigation selected={1}/>
      </div>
        <div> 
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "30px",
              marginBottom: "38px",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              opacity: ".8"
            }}
          >
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <div> {}
                <img src={this.state.illness.image_url} height="390" />
              </div>
              <div> {}
                <YouTube
                videoId={this.state.illness.videoId}
                opts={opts}
                onReady={this._onReady}
                />
              </div>
            </div>
            <br />
            <br />
            <div
              style={{
                justifyContent: "flex-start",
                flexDirection: "column",
                flexWrap: "wrap"
              }}
            >
              <p> {}
                <FormLabel 
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "40px",
                    fontSize: "1.475rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  {this.state.illness.name}
                </FormLabel>
                <br />
                <br /> {}
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Symptoms: {this.state.illness.symptoms}
                </FormLabel>
                <br />
                <br />
                <FormLabel
                  className="title"
                  style={{
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "0px",
                    fontSize: "1.0rem",
                    display: "inline-block",
                    "vertical-align": "top"
                  }}
                >
                  Treatments: {this.state.illness.treatments}
                </FormLabel>
                <br />
              </p>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}
