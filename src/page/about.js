import React, { Component } from 'react';
import { Card } from '../custom';
import { Tile } from 'carbon-components-react';
import Caleb from "../img/team/Caleb.jpg";
import Shreyas from "../img/team/Shreyas.jpg";
import Taher from "../img/team/Taher.jpg";
import Weihan from "../img/team/Weihan.jpg";
import Jason from "../img/team/Jason.jpg";
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
            label4={"8"}
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
            label4={"0"}
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
            description="I am a senior in computer science and enjoy eating and sleeping but I never get to 😔."
            label1_heading="Responsibilities"
            label1="API and backend development."
            label2_heading="Commits"
            label2={this.state.taher_c1 + this.state.taher_c2}
            label3_heading="Issues"
            label3={this.state.taher_i1 + this.state.taher_i2}
            label4_heading="Unit Tests"
            label4={"8"}
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
            label4={"0"}
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
            label4={"8"}
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
              Total Unit Tests: 24.
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
export default About;
