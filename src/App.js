import React, { Component } from "react";
import { Button } from "carbon-components-react";
import {
  DataTable,
  ClickableTile,
  Tile,
  Tabs,
  Tab,
  FormLabel,
  PaginationV2
} from "carbon-components-react";
import logo from "./logo.svg";
import "./App.css";
import illnessesImage from "./Mental-Illness-Prevalence-in-Adults.png";
import charitiesImage from "./charities.png";
import hospitalsImage from "./hospitals.png";
import Caleb from "./Caleb.jpg";
import Shreyas from "./Shreyas.jpg";
import Taher from "./Taher.jpg";
import Weihan from "./Weihan.jpg";
import Jason from "./Jason.JPG"
import { BrowserRouter as Router, Route } from "react-router-dom";
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;
class App extends Component {
  render() {
    const queryString = require("query-string");
    const parsed = queryString.parse(window.location.search);
    let charities;
    let hospitals;
    if ("id" in parsed) {
      charities = (
        <Route
          path="/charities"
          render={props => <Charity {...props} id={parsed.id} />}
        />
      );
    } else {
      charities = <Route path="/charities" component={Charities} />;
    }
    if ("id" in parsed) {
      hospitals = (
        <Route
          path="/hospitals"
          render={props => <Hospital {...props} id={parsed.id} />}
        />
      );
    } else {
      hospitals = <Route path="/hospitals" component={Hospitals} />;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/illnesses" component={Illnesses} />
          {hospitals}
          {charities}
        </div>
      </Router>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={0}
          />
        </div>
        <div>
          <Card
            title="Illnesses"
            buttonTitle="Learn More"
            image={illnessesImage}
            style={{ position: "absolute", left: "38px", top: "130px" }}
          />
          <Card
            title="Charities"
            buttonTitle="Learn More"
            image={charitiesImage}
            style={{ position: "absolute", left: "448px", top: "130px" }}
          />
          <Card
            title="Hospitals"
            buttonTitle="Learn More"
            image={hospitalsImage}
            style={{ position: "absolute", left: "858px", top: "130px" }}
          />
        </div>
      </div>
    );
  }
}
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shreyas_c: 0,
      caleb_c: 0,
      taher_c: 0,
      weihan_c: 0,
      jason_c: 0,
      shreyas_i: 0,
      caleb_i: 0,
      taher_i: 0,
      weihan_i: 0,
      jason_i: 0
    };
  }
  componentDidMount() {
    fetch('https:
    .then(results => {
      return results.json();
    }).then((data) => {
      var shreyas = 0;
      var caleb = 0;
      var taher = 0;
      var weihan = 0;
      data.forEach(element => {
        if (element.committer_name === "Shreyas Tawre" || element.committer_name === "stawre") {
          shreyas = shreyas + 1;
        } else if (element.committer_name === "Caleb Hamada") {
          caleb = caleb + 1;
        } else if (element.committer_name === "Taher Naeem" || element.author_email === "tahern52@cs.utexas.edu") {
          taher = taher + 1;
        } else if (element.committer_name === "Weihan He") {
          weihan = weihan + 1;
        }
      });
      this.setState({shreyas_c : shreyas, caleb_c : caleb, taher_c : taher, weihan_c : weihan});
    })
    fetch('https:
    .then(results => {
      return results.json();
    }).then((data) => {
      var shreyas = this.state.shreyas_c;
      var caleb = this.state.caleb_c;
      var taher = this.state.taher_c;
      var weihan = this.state.weihan_c;
      data.forEach(element => {
        if (element.committer_name === "Shreyas Tawre" || element.committer_email === "tawre.shreyas@gmail.com") {
          shreyas = shreyas + 1;
        } else if (element.committer_name === "Caleb Hamada") {
          caleb = caleb + 1;
        } else if (element.committer_name === "Taher Naeem") {
          taher = taher + 1;
        } else if (element.committer_name === "Weihan He") {
          weihan = weihan + 1;
        }
      });
      this.setState({shreyas_c : shreyas, caleb_c : caleb, taher_c : taher, weihan_c : weihan});
    })
    fetch("https:
      .then(results => {
        return results.json();
      })
      .then(data => {
        var shreyas = 0;
        var caleb = 0;
        var taher = 0;
        var weihan = 0;
        var jason = 0;
        data.forEach(element => {
          if (element.author.name === "Shreyas Tawre") {
            shreyas += 1;
          } else if (element.author.name === "Caleb Hamada") {
            caleb += 1;
          } else if (element.author.name === "Taher Naeem") {
            taher += 1;
          } else if (element.author.name === "Weihan He") {
            weihan += 1;
          } else if (element.committer_name === "Jason Cheng") {
            jason = jason + 1;
          }
        });
        this.setState({
          shreyas_i: shreyas,
          caleb_i: caleb,
          taher_i: taher,
          weihan_i: weihan,
          jason_i: jason
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={1}
          />
        </div>
        <div className="title">
          <br />
          <br />
          <br />
          <h1>Group Members</h1>
        </div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'flexWrap': 'wrap' }} >
          <Card
            title="Caleb"
            label1_heading="Commits"
            label1={this.state.caleb_c}
            label2_heading="Issues"
            label2={this.state.caleb_i}
            image={Caleb}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px",
            }}
          />
          <Card
            title="Shreyas"
            label1_heading="Commits"
            label1={this.state.shreyas_c}
            label2_heading="Issues"
            label2={this.state.shreyas_i}
            image={Shreyas}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px",
            }}
          />
          <Card
            title="Taher"
            label1_heading="Commits"
            label1={this.state.taher_c}
            label2_heading="Issues"
            label2={this.state.taher_i}
            image={Taher}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px",
            }}
          />
        </div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'flexWrap': 'wrap' }} >
          <Card
            title="Weihan"
            label1_heading="Commits"
            label1={this.state.weihan_c}
            label2_heading="Issues"
            label2={this.state.weihan_i}
            image={Weihan}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px",
            }}
          />
          <Card
            title="Jason"
            label1_heading="Commits"
            label1={this.state.jason_c}
            label2_heading="Issues"
            label2={this.state.jason_i}
            image={Jason}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px",
            }}
          />
        </div>
        <div>
          <div className="title">
            <br />
            <br />
            <br />
            <h1>Repository Stats</h1>
          </div>
          <div className="title">
            <br />
            <br />
            <br />
            <h1>Data Sources</h1>
          </div>
          <div className="title">
            <br />
            <br />
            <br />
            <h1>Tools Used</h1>
          </div>
          <div className="title">
            <br />
            <br />
            <br />
            <h1>Project Links</h1>
          </div>
        </div>
      </div>
    );
  }
}
class Illnesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      illnesses: [],
      illnesses_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({ illnesses: data.objects });
        this.setState({ illnesses_slice: data.objects.slice(0, 3) });
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + 3 * (evt.page - 1);
    let slice2 = 3 + 3 * (evt.page - 1);
    this.setState({
      page: evt.page,
      illnesses_slice: this.state.illnesses.slice(slice1, slice2)
    });
  };
  render() {
    const { illnesses_slice } = this.state;
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={2}
          />
        </div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'flexWrap': 'wrap' }} >
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
              }}
              label1_heading="Curable"
              label1={illness.curable}
              label2_heading="Chronic"
              label2={illness.chronic}
              label3_heading="Genetic"
              label3={illness.genetic}
              label4_heading="Average Age"
              label4={String(illness.average_age)}
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3]}
              onChange={this.handlePageChange}
              style={{
                position: "relative",
                marginTop: "40px",
                marginBottom: "20px"
              }}
            />
          </center>
        </div>
      </div>
    );
  }
}
class Hospitals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      hospitals: [],
      hospitals_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({ hospitals: data.objects });
        this.setState({ hospitals_slice: data.objects.slice(0, 3) });
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + 3 * (evt.page - 1);
    let slice2 = 3 + 3 * (evt.page - 1);
    this.setState({
      page: evt.page,
      hospitals_slice: this.state.hospitals.slice(slice1, slice2)
    });
  };
  render() {
    const { hospitals_slice } = this.state;
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={3}
          />
        </div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'flexWrap': 'wrap' }}>
          {}
          {hospitals_slice.map(hospital => (
            <Card
              title={hospital.name}
              image={hospital.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
              }}
              label1_heading="City"
              label1={hospital.city}
              label2_heading="State"
              label2={hospital.state}
              label3_heading="Owner"
              label3={hospital.owner}
              label4_heading="Population"
              label4={hospital.population}
              href={`http:
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3]}
              onChange={this.handlePageChange}
              style={{
                position: "relative",
                marginTop: "40px",
                marginBottom: "20px"
              }}
            />
          </center>
        </div>
      </div>
    );
  }
}
class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      charities: [],
      charities_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        console.log(data.objects.slice(0, 3));
        this.setState({ charities: data.objects });
        this.setState({ charities_slice: data.objects.slice(0, 3) });
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + 3 * (evt.page - 1);
    let slice2 = 3 + 3 * (evt.page - 1);
    this.setState({
      page: evt.page,
      charities_slice: this.state.charities.slice(slice1, slice2)
    });
  };
  render() {
    const { charities_slice } = this.state;
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={4}
          />
        </div>
        <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'flexWrap': 'wrap' }} >
          {}
          {charities_slice.map(charity => (
            <Card
              title={charity.name}
              image={charity.image_url}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "40px",
                maxWidth: "385px",
              }}
              label1_heading="Rating"
              label1={String(charity.rating)}
              label2_heading="State"
              label2={charity.state}
              label3_heading="Deductible"
              label3={charity.deductible}
              label4_heading="Income"
              label4={charity.incomeAmount.toLocaleString("en")}
              href={`http:
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3]}
              onChange={this.handlePageChange}
              style={{
                position: "relative",
                marginTop: "20px",
                marginBottom: "20px"
              }}
            />
          </center>
        </div>
      </div>
    );
  }
}
class Charity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      charity: {}
    };
  }
  componentWillMount() {
    fetch(`http:
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ charity: data });
      });
  }
  render() {
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={4}
          />
        </div>
        <div>
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "38px"
            }}
          >
            <div>
              <span>
                <p>
                  <img
                    src={this.state.charity.image_url}
                    width="350"
                    height="370"
                    style={{ display: "inline-block", "vertical-align": "top" }}
                  />
                  <FormLabel
                    className="title"
                    style={{
                      position: "relative",
                      marginLeft: "50px",
                      marginTop: "0px",
                      "font-size": "1.475rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    {this.state.charity.name}
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "80px",
                      "font-size": "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    "{this.state.charity.tagLine}"
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "120px",
                      "font-size": "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    Asset Amount: {this.state.charity.assetAmount}
                  </FormLabel>
                  <FormLabel
                    className="title"
                    style={{
                      position: "absolute",
                      left: "420px",
                      right: "40px",
                      top: "160px",
                      "font-size": "1.0rem",
                      display: "inline-block",
                      "vertical-align": "top"
                    }}
                  >
                    Mission: {this.state.charity.mission}
                  </FormLabel>
                </p>
                <p>
                  <a
                    href={this.state.charity.website_url}
                    style={{
                      position: "relative",
                      marginLeft: "405px",
                      marginRight: "40px",
                      marginTop: "20px",
                      "font-size": "1.0rem"
                    }}
                  >
                    {this.state.charity.website_url}
                  </a>
                </p>
              </span>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
}
class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      hospital: {}
    };
  }
  componentWillMount() {
    fetch(`http:
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ hospital: data });
      });
  }
  render() {
    return (
      <div>
        <div>
          <Header
            label1="Home"
            label2="About"
            label3="Illnesses"
            label4="Hospitals"
            label5="Charities"
            selected={3}
          />
        </div>
        <div>
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "38px",
              display: 'flex',
              flexDirection: 'row', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
            }}
          >
            <div style={{ justifyContent: 'flex-start' }} >
              <img
                src={this.state.hospital.image_url}
                width="350"
                height="370"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.475rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                {this.state.hospital.name}
              </FormLabel>
              <br/>
              <br/>
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.0rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                Street Address: {this.state.hospital.address}
              </FormLabel>
              <br/>
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.0rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                City: {this.state.hospital.city}
              </FormLabel>
              <br/>
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.0rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                State: {this.state.hospital.state}
              </FormLabel>
              <br/>
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.0rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                Zip Code: {this.state.hospital.zip_code}
              </FormLabel>
              <br/>
              <a
                href={this.state.hospital.website_url}
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  "font-size": "1.0rem"
                }}
              >
                {this.state.hospital.website_url}
              </a>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
}
class MyTable extends Component {
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
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }
  render() {
    function handleAboutTabClick(e) {
      if (window.location.href !== "http:
        window.location.assign("/about");
        this.setState({
          selected: 1
        });
      }
    }
    function handleIllnessesTabClick(e) {
      if (window.location.href !== "http:
        window.location.assign("/illnesses");
        this.setState({
          selected: 2
        });
      }
    }
    function handleHospitalsTabClick(e) {
      if (window.location.href !== "http:
        window.location.assign("/hospitals");
        this.setState({
          selected: 3
        });
      }
    }
    function handleCharitiesTabClick(e) {
      if (window.location.href !== "http:
        window.location.assign("/charities");
        this.setState({
          selected: 3
        });
      }
    }
    function handleHomeTabClick(e) {
      if (window.location.href !== "http:
        window.location.assign("/");
        this.setState({
          selected: 0
        });
      }
    }
    return (
      <div className="header">
        <Tile>
          <span>
            <FormLabel
              className="title"
              style={{
                position: "relative",
                marginLeft: "16px",
                marginTop: "10px",
                "font-size": "1.875rem",
                display: "inline-block",
                "vertical-align": "top"
              }}
            >
              mentalhelp.me
            </FormLabel>
            <Tabs
              className="some-class"
              selected={this.props.selected}
              style={{
                position: "relative",
                marginLeft: "532px",
                marginTop: "5px",
                marginBottom: "0px",
                display: "inline-block",
                "vertical-align": "top"
              }}
            >
              <Tab
                className="another-class"
                label={this.props.label1}
                onClick={handleHomeTabClick}
              />
              <Tab
                className="another-class"
                label={this.props.label2}
                onClick={handleAboutTabClick}
              />
              <Tab
                className="another-class"
                label={this.props.label3}
                onClick={handleIllnessesTabClick}
              />
              <Tab
                className="another-class"
                label={this.props.label4}
                onClick={handleHospitalsTabClick}
              />
              <Tab
                className="another-class"
                label={this.props.label5}
                onClick={handleCharitiesTabClick}
              />
            </Tabs>
          </span>
        </Tile>
      </div>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <ClickableTile href={this.props.href} style={this.props.style}>
        <img src={this.props.image} width="350" height="370" />
        <br />
        <span className="title">
          <center>
            <FormLabel
              className="title"
              style={{ "margin-top": "20px", "font-size": "1.2rem" }}
            >
              {this.props.title}
            </FormLabel>
          </center>
        </span>
        <br />
        <center>
          {"buttonTitle" in this.props && (
            <Button kind="secondary">{this.props.buttonTitle}</Button>
          )}
          {"label1" in this.props && (
            <center>
              <FormLabel className="title" style={{ "font-size": "0.9rem" }}>
                {this.props.label1_heading}: {this.props.label1}
              </FormLabel>
            </center>
          )}
          {"label2" in this.props && (
            <center>
              <FormLabel className="title" style={{ "font-size": "0.9rem" }}>
                {this.props.label2_heading}: {this.props.label2}
              </FormLabel>
            </center>
          )}
          {"label3" in this.props && (
            <center>
              <FormLabel className="title" style={{ "font-size": "0.9rem" }}>
                {this.props.label3_heading}: {this.props.label3}
              </FormLabel>
            </center>
          )}
          {"label4" in this.props && (
            <center>
              <FormLabel className="title" style={{ "font-size": "0.9rem" }}>
                {this.props.label4_heading}: {this.props.label4}
              </FormLabel>
            </center>
          )}
        </center>
      </ClickableTile>
    );
  }
}
export default App;
