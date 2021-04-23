import React, { Component } from 'react';
import { Button, Tile, Tab, Tabs, ClickableTile, FormLabel, DataTable, Search, Modal, MultiSelect } from "carbon-components-react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './page/basic.css'
const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;
const filterModalProps = () => ({
  className: 'some-class',
  passiveModal: false,
  danger: false,
  shouldSubmitOnEnter: true,
  modalHeading: "Choose Filters",
  primaryButtonText: "Apply",
  secondaryButtonText: "Reset",
  iconDescription: "Close",
});
const searchProps = () => ({
  className: 'some-class',
  small: false,
  light: false,
  labelText: 'Search',
  placeHolderText: 'Search',
});
const items = [
  {
    id: 'item-1',
    text: 'Item 1',
  },
  {
    id: 'item-2',
    text: 'Item 2',
  },
];
export class FilterModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: this.props.open
    }
  }
  componentWillReceiveProps() {
    console.log(this.props.open);
    this.setState({ open: this.props.open });
  }
  onChange = evt => {
    console.log(evt);
  }
  toggleModal = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div className="filter-modal">
        <Modal {...filterModalProps()} open={this.state.open} onRequestClose={this.toggleModal}>
          <div>
            <MultiSelect.Filterable
              items={items}
              placeholder={"States"}
              useTitleInItem={true}
              label="State"
              invalid={true}
              invalidText="Invalid Selection"
              onChange={this.onChange}
              itemToString={item => (item ? item.text : '')}
              placeholder="State"
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export class Card extends Component {
  render() {
    return (
      <ClickableTile className="cards" href={this.props.href} style={this.props.style}>
        <div>
          <img src={this.props.image} width="350" height="370" />
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ "margin-top": "20px", fontSize: "1.2rem" }}
            >
              {this.props.title}
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
                  {this.props.label1}
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label2_heading}: {this.props.label2}
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label3_heading}: {this.props.label3}
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
export class MyTable extends Component {
  render() {
    function onChange() {}
    return (
      <DataTable
        rows={this.props.rows}
        headers={this.props.headers}
        render={({ rows, headers }) => (
          <TableContainer
            style={{
              "padding-top": "30px",
              "padding-left": "47px",
              "padding-right": "47px"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  }
}
export class Navigation extends Component {
  render() {
    function handleAboutTabClick(e) {
      window.location.assign("/about");
    }
    function handleIllnessesTabClick(e) {
      window.location.assign("/illnesses");
    }
    function handleHospitalsTabClick(e) {
      window.location.assign("/hospitals");
    }
    function handleCharitiesTabClick(e) {
      window.location.assign("/charities");
    }
    function handleHomeTabClick(e) {
      window.location.assign("/"); 
    }
    return (
      <Tile className="navbar-top">
        <div style = {{ 'width': '20%' }}>
          <FormLabel className="navbar-title">Mental Health Help</FormLabel>
        </div>
        <div style={{ width: '30%', marginTop: '3px' }} >
          <Search {...searchProps()} />
        </div>
        <div>
          <Tabs className="navbar-tabs" selected={this.props.selected}>
            <Tab className="navbar-tab"
              label={"Home"}
              onClick={handleHomeTabClick}
            />
            <Tab className="navbar-tab"
              label={"Illnesses"}
              onClick={handleIllnessesTabClick}
            />
            <Tab className="navbar-tab"
              label={"Hospitals"}
              onClick={handleHospitalsTabClick}
            />
            <Tab className="navbar-tab"
              label={"Charities"}
              onClick={handleCharitiesTabClick}
            />
            <Tab className="navbar-tab"
              label={"About"}
              onClick={handleAboutTabClick}
            />
          </Tabs>
        </div>
      </Tile>
    );
  }
}
