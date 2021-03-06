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
import Jason from "./Jason.JPG";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
    let illnesses;
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
    if ("id" in parsed) {
      illnesses = (
        <Route
          path="/illnesses"
          render={props => <Illness {...props} id={parsed.id} />}
        />
      );
    } else {
      illnesses = <Route path="/illnesses" component={Illnesses} />;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {illnesses}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Card
            title="Illnesses"
            buttonTitle="Learn More"
            buttonHref="/illnesses"
            image={illnessesImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Hospitals"
            buttonTitle="Learn More"
            buttonHref="/hospitals"
            image={hospitalsImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Charities"
            buttonTitle="Learn More"
            buttonHref="/charities"
            image={charitiesImage}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
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
      shreyas_c1: 0,
      shreyas_c2: 0,
      caleb_c1: 0,
      caleb_c2: 0,
      taher_c1: 0,
      taher_c2: 0,
      weihan_c1: 0,
      weihan_c2: 0,
      jason_c1: 0,
      jason_c2: 0,
      shreyas_i1: 0,
      shreyas_i2: 0,
      caleb_i1: 0,
      caleb_i2: 0,
      taher_i1: 0,
      taher_i2: 0,
      weihan_i1: 0,
      weihan_i2: 0,
      jason_i1: 0,
      jason_i2: 0,
      total_c1: 0,
      total_c2: 0,
      total_i1: 0,
      total_i2: 0
    };
  }
  componentDidMount() {
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
        var total = 0;
        data.forEach(element => {
          total = total + 1;
          if (
            element.author_name === "Shreyas Tawre" ||
            element.author_email === "tawre.shreyas@gmail.com"
          ) {
            shreyas = shreyas + 1;
          } else if (
            element.author_name === "Caleb Hamada" ||
            element.author_email === "chamada1@me.com"
          ) {
            caleb = caleb + 1;
          } else if (
            element.author_name === "Taher Naeem" ||
            element.author_email === "tahern52@cs.utexas.edu"
          ) {
            taher = taher + 1;
          } else if (
            element.author_name === "Weihan He" ||
            element.author_email === "weihan.he@gmail.com"
          ) {
            weihan = weihan + 1;
          } else if (
            element.author_name === "Jason Cheng" ||
            element.author_email === "hc27469@utexas.edu"
          ) {
            jason = jason + 1;
          }
        });
        this.setState({
          shreyas_c1: shreyas,
          caleb_c1: caleb,
          taher_c1: taher,
          weihan_c1: weihan,
          jason_c1: jason,
          total_c1: total
        });
      });
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
        var total = 0;
        data.forEach(element => {
          total = total + 1;
          if (
            element.author_name === "Shreyas Tawre" ||
            element.author_email === "tawre.shreyas@gmail.com"
          ) {
            shreyas = shreyas + 1;
          } else if (
            element.author_name === "Caleb Hamada" ||
            element.author_email === "chamada1@me.com"
          ) {
            caleb = caleb + 1;
          } else if (
            element.author_name === "Taher Naeem" ||
            element.author_email === "tahern52@cs.utexas.edu"
          ) {
            taher = taher + 1;
          } else if (
            element.author_name === "Weihan He" ||
            element.author_email === "weihan.he@gmail.com"
          ) {
            weihan = weihan + 1;
          } else if (
            element.author_name === "Jason Cheng" ||
            element.author_email === "hc27469@utexas.edu"
          ) {
            jason = jason + 1;
          }
        });
        this.setState({
          shreyas_c2: shreyas,
          caleb_c2: caleb,
          taher_c2: taher,
          weihan_c2: weihan,
          jason_c2: jason,
          total_c2: total
        });
      });
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
        var total = 0;
        data.forEach(element => {
          total = total + 1;
          if (element.author.name === "Shreyas Tawre") {
            shreyas += 1;
          } else if (element.author.name === "Caleb Hamada") {
            caleb += 1;
          } else if (element.author.name === "Taher Naeem") {
            taher += 1;
          } else if (element.author.name === "Weihan He") {
            weihan += 1;
          } else if (element.author.name === "Jason Cheng") {
            jason = jason + 1;
          }
        });
        this.setState({
          shreyas_i1: shreyas,
          caleb_i1: caleb,
          taher_i1: taher,
          weihan_i1: weihan,
          jason_i1: jason,
          total_i1: total
        });
      });
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
        var total = 0;
        data.forEach(element => {
          total = total + 1;
          if (element.author.name === "Shreyas Tawre") {
            shreyas = shreyas + 1;
          } else if (element.author.name === "Caleb Hamada") {
            caleb = caleb + 1;
          } else if (element.author.name === "Taher Naeem") {
            taher = taher + 1;
          } else if (element.author.name === "Weihan He") {
            weihan = weihan + 1;
          } else if (element.author.name === "Jason Cheng") {
            jason = jason + 1;
          }
        });
        this.setState({
          shreyas_i2: shreyas,
          caleb_i2: caleb,
          taher_i2: taher,
          weihan_i2: weihan,
          jason_i2: jason,
          total_i2: total
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
          <h1>Mission</h1>
          <br />
          <Tile
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "35px",
              marginRight: "35px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "35px",
                marginRight: "35px",
                marginBottom: "35px",
                marginTop: "35px"
              }}
            >
              <p>
                We decided to make a website about mental health awareness
                because of the lack of easily accessible information available
                to people concerning mental health. Many people do not know
                about specific mental illnesses, so our site will help educate
                people about them. There are a lot of misconceptions about
                mental illness, and we hope our website will help clear some of
                them up with the information we will be displaying. The best way
                for there to be more mental health awareness is to help fund
                charities dedicated to researching mental illnesses, educating
                the public, and supporting peoples’ needs. There are not many
                psychiatric hospitals in the United States, so we want to
                provide people information about the hospitals closest to them.
                This information will be useful to both people in need and those
                wanting to support friends and family members who need help.
              </p>
            </div>
          </Tile>
          <br />
          <br />
          <h1>Group Members</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Card
            title="Caleb"
            description={"I am a Junior and I enjoy coding and video games."}
            label1_heading="Responsibilities"
            label1={"Data scraping, Selenium, UI/UX"}
            label2_heading="Commits"
            label2={this.state.caleb_c1 + this.state.caleb_c2}
            label3_heading="Issues"
            label3={this.state.caleb_i1 + this.state.caleb_i2}
            label4_heading="Unit Tests"
            label4={""}
            image={Caleb}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Shreyas"
            description={
              "I am a senior year CS student and I enjoy reading and playing video-games 🎮."
            }
            label1_heading="Responsibilities"
            label1="Frontend development and UI/UX"
            label2_heading="Commits"
            label2={this.state.shreyas_c1 + this.state.shreyas_c2}
            label3_heading="Issues"
            label3={this.state.shreyas_i1 + this.state.shreyas_i2}
            label4_heading="Unit Tests"
            label4={""}
            image={Shreyas}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Taher"
            description="I am a senior in computer science and enjoy eating and sleeping but I never get to 😔"
            label1_heading="Responsibilities"
            label1="API and backend development."
            label2_heading="Commits"
            label2={this.state.taher_c1 + this.state.taher_c2}
            label3_heading="Issues"
            label3={this.state.taher_i1 + this.state.taher_i2}
            label4_heading="Unit Tests"
            label4={""}
            image={Taher}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Card
            title="Weihan"
            description="I'm a junior CS student. I love League of Legends."
            label1_heading="Responsibilities"
            label1={"MySQL Database"}
            label2_heading="Commits"
            label2={this.state.weihan_c1 + this.state.weihan_c2}
            label3_heading="Issues"
            label3={this.state.weihan_i1 + this.state.weihan_i2}
            label4_heading="Unit Tests"
            label4={""}
            image={Weihan}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
          <Card
            title="Jason"
            description="I am a junior cs student. Find me to play PUBG together 😏"
            label1_heading="Responsibilities"
            label1={"Frontend testing"}
            label2_heading="Commits"
            label2={this.state.jason_c1 + this.state.jason_c2}
            label3_heading="Issues"
            label3={this.state.jason_i1 + this.state.jason_i2}
            label4_heading="Unit Tests"
            label4={""}
            image={Jason}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "40px",
              maxWidth: "385px"
            }}
          />
        </div>
        <div>
          <div className="title">
            <br />
            <br />
            <br />
            <h1>Repository Stats</h1>
            <br />
            <p>
              Total Commits on{" "}
              <a href="https:
                Frontend
              </a>{" "}
              and <a href="https:
              = {this.state.total_c1 + this.state.total_c2}.<br />
              <br />
              Total Issues on{" "}
              <a href="https:
                Frontend
              </a>{" "}
              and <a href="https:
              = {this.state.total_i1 + this.state.total_i2}.<br />
              <br />
              Total Unit Tests: 10.
            </p>
          </div>
          <br />
          <div className="title">
            <br />
            <h1>Data Sources</h1>
          </div>
          <div className="title">
            <br />
            <p>
              Charities data was scraped from{" "}
              <a href="https:
              using the python `requests` library.
              <br />
              <br />
              Hospitals data was scraped from{" "}
              <a href="https:
                HIFLD
              </a>{" "}
              using the python `requests` library.
              <br />
              <br />
              Illnesses data was scraped from{" "}
              <a href="https:
              python `requests` library.
            </p>
            <br />
            <br />
            <h1>Tools Used</h1>
            <br />
            <p>
              Gitlab &nbsp; &nbsp; AWS EC2 &nbsp; &nbsp; AWS RDS &nbsp; &nbsp;
              MySQL
              <br />
              <br />
              MySQL &nbsp; &nbsp; Workbench &nbsp; &nbsp; Postman &nbsp; &nbsp;
              Namecheap
              <br />
              <br />
              React &nbsp; &nbsp; React-Router &nbsp; &nbsp; Slack &nbsp; &nbsp;
              Flask
              <br />
              <br />
              Flask-Restless &nbsp; &nbsp; GUnicorn &nbsp; &nbsp; Enzyme
              <br />
              <br />
              Mocha &nbsp; &nbsp; Selenium &nbsp; &nbsp; PlantUML
              <br />
              <br />
              IBM carbon-components-react
            </p>
            <br />
          </div>
          <div className="title">
            <br />
            <h1>Project Links</h1>
            <br />
            <p style={{ marginBottom: "30px" }}>
              <a
                href="https:
                style={{ fontSize: "1.4rem" }}
              >
                Postman
              </a>
              <br />
              <a
                href="https:
                style={{ fontSize: "1.4rem" }}
              >
                Frontend Repo
              </a>
              <br />
              <a
                href="https:
                style={{ fontSize: "1.4rem" }}
              >
                Backend Repo
              </a>
            </p>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
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
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
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
      pageSize: 3,
      hospitals: [],
      hospitals_slice: []
    };
  }
  componentWillMount() {
    fetch("http:
      .then(results => results.json())
      .then(data => {
        this.setState({ hospitals: data.objects });
        this.setState({
          hospitals_slice: data.objects.slice(0, this.state.pageSize)
        });
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
              label1_heading="City"
              label1={hospital.city}
              label2_heading="State"
              label2={hospital.state}
              label3_heading="Owner"
              label3={hospital.owner}
              label4_heading="Population"
              label4={hospital.population}
              href={`/hospitals?id=${hospital.id}`}
            />
          ))}
        </div>
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
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
      pageSize: 3,
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
        this.setState({
          charities_slice: data.objects.slice(0, this.state.pageSize)
        });
      });
  }
  handlePageChange = evt => {
    console.log(evt);
    let slice1 = 0 + evt.pageSize * (evt.page - 1);
    let slice2 = evt.pageSize + evt.pageSize * (evt.page - 1);
    this.setState({
      page: evt.page,
      pageSize: evt.pageSize,
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
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
        <div>
          <center>
            <PaginationV2
              totalItems={10}
              pageSize={3}
              pageSizes={[3, 6, 9, 10]}
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
                      fontSize: "1.475rem",
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
                      fontSize: "1.0rem",
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
                      fontSize: "1.0rem",
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
                      fontSize: "1.0rem",
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
                      fontSize: "1.0rem"
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <div style={{ justifyContent: "flex-start" }}>
              <img
                src={this.state.hospital.image_url}
                width="350"
                height="370"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormLabel
                className="title"
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  fontSize: "1.475rem",
                  display: "inline-block",
                  "vertical-align": "top"
                }}
              >
                {this.state.hospital.name}
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
                Street Address: {this.state.hospital.address}
              </FormLabel>
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
                City: {this.state.hospital.city}
              </FormLabel>
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
                State: {this.state.hospital.state}
              </FormLabel>
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
                Zip Code: {this.state.hospital.zip_code}
              </FormLabel>
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
                Owner: {this.state.hospital.owner}
              </FormLabel>
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
                Population: {this.state.hospital.population}
              </FormLabel>
              <br />
              <a
                href={this.state.hospital.website_url}
                style={{
                  position: "relative",
                  marginLeft: "50px",
                  marginTop: "0px",
                  fontSize: "1.0rem"
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
class Illness extends Component {
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
        <div>
          <Tile
            style={{
              position: "relative",
              marginLeft: "32px",
              marginRight: "32px",
              marginTop: "38px",
              marginBottom: "38px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <div style={{ justifyContent: "flex-start" }}>
              <img src={this.state.illness.image_url} height="370" />
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
              <p>
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
      <Tile
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        <FormLabel
          className="title"
          style={{
            position: "relative",
            marginTop: "10px",
            fontSize: "1.875rem"
          }}
        >
          mentalhelp.me
        </FormLabel>
        <Tabs
          className="some-class"
          selected={this.props.selected}
          style={{
            position: "relative",
            marginLeft: "0px"
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
      </Tile>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <ClickableTile href={this.props.href} style={this.props.style}>
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
export default App;
