import React, { Component } from 'react';
import { Button } from "carbon-components-react";
import { DataTable, Tile, Tabs, Tab, FormLabel, PaginationV2 } from "carbon-components-react";
import logo from './logo.svg';
import './App.css';
import illnessesImage from './Mental-Illness-Prevalence-in-Adults.png';
import charitiesImage from './charities.png';
import hospitalsImage from './hospitals.png';
import Caleb from './Caleb.jpg';
import Shreyas from './Shreyas.jpg';
import Taher from './Taher.jpg';
import Weihan from './Weihan.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/illnesses" component={Illnesses} />
          <Route path="/hospitals" component={Hospitals} />
          <Route path="/charities" component={Charities} />
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
          <Header label1="Home" label2="About" label3="Illnesses" label4="Hospitals" label5="Charities" selected={0} />
        </div>
        <div>
          <Card title="Illnesses" buttonTitle="Learn More" image={illnessesImage} style={{'position': 'absolute', 'left': '38px', 'top': '130px'}} />
          <Card title="Charities" buttonTitle="Learn More" image={charitiesImage} style={{'position': 'absolute', 'left': '448px', 'top': '130px'}} />
          <Card title="Hospitals" buttonTitle="Learn More" image={hospitalsImage} style={{'position': 'absolute', 'left': '858px', 'top': '130px'}} />
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
      shreyas_i: 0,
      caleb_i: 0,
      taher_i: 0,
      weihan_i: 0
    }
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
        } else if (element.committer_name === "Taher Naeem") {
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
      var shreyas = 0;
      var caleb = 0;
      var taher = 0;
      var weihan = 0;
      data.forEach(element => {
        if (element.author.name === "Shreyas Tawre") {
          shreyas += 1;
        } else if (element.author.name === "Caleb Hamada") {
            caleb += 1;
        } else if (element.author.name === "Taher Naeem") {
            taher += 1;
        } else if (element.author.name === "Weihan He") {
            weihan += 1;
        }
      });
      this.setState({shreyas_i: shreyas, caleb_i : caleb, taher_i : taher, weihan_i : weihan});
    })
  }
  render() {
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Hospitals" label5="Charities" selected={1} />
        </div>
        <div>
          <Card title="Caleb" label1={this.state.caleb_c} label2={this.state.caleb_i} image={Caleb} style={{'position': 'absolute', 'left': '38px', 'top': '130px'}} />
          <Card title="Shreyas" label1={this.state.shreyas_c} label2={this.state.shreyas_i} image={Shreyas} style={{'position': 'absolute', 'left': '448px', 'top': '130px'}} />
          <Card title="Taher" label1={this.state.taher_c} label2={this.state.taher_i} image={Taher} style={{'position': 'absolute', 'left': '858px', 'top': '130px'}} />
          <Card title="Weihan" label1={this.state.weihan_c} label2={this.state.weihan_i} image={Weihan} style={{'position': 'absolute', 'left': '448px', 'top': '675px'}} />
        </div>
      </div>
    );
  }
}
class Illnesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      illnesses: [],
      headers: [ 
        { key: 'name', header: 'Name', }, 
        { key: 'population', header: 'Population Affected', }, 
        { key: 'average_age', header: 'Average Age', }, 
        { key: 'genetic', header: 'Genetic', },
      ],
    };
  }
  componentDidMount() {
    fetch('http:
    .then(results => results.json())
    .then(
      (data) => {
        this.setState({ illnesses: data.objects });
      }
    )
  }
  render() {
    const { illnesses, headers } = this.state;
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Hospitals" label5="Charities" selected={2} />
        </div>
        <div>
          <MyTable rows={illnesses} headers={headers} />
        </div>
        <div>
          <PaginationV2 totalItems={10} pageSize={3} pageSizes={[3]} style={{'position': 'absolute', 'left': '48px', 'top': '680px'}}/>
        </div>
      </div>
    );
  }
}
class Hospitals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitals: [],
      headers: [ 
        { key: 'name', header: 'Name', }, 
        { key: 'population', header: 'Population', }, 
        { key: 'city', header: 'City', }, 
        { key: 'state', header: 'State', },
        { key: 'owner', header: 'Owner', },
      ],
    };
  }
  componentDidMount() {
    fetch('http:
    .then(results => results.json())
    .then(
      (data) => {
        this.setState({ hospitals: data.objects });
      }
    )
  }
  render() {
    const { hospitals, headers } = this.state;
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Hospitals" label5="Charities" selected={3} />
        </div>
        <div>
          <MyTable rows={hospitals} headers={headers} />
        </div>
      </div>
    );
  }
}
class Charities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      headers: [ 
        { key: 'name', header: 'Name', }, 
        { key: 'rating', header: 'Rating', }, 
        { key: 'assetAmount', header: 'Asset Amount', }, 
        { key: 'state', header: 'State', },
        { key: 'deductible', header: 'Deductible', },
        { key: 'website_url', header: 'URL', },
      ],
    };
  }
  componentDidMount() {
    fetch('http:
    .then(results => results.json())
    .then(
      (data) => {
        this.setState({ charities: data.objects });
      }
    )
  }
  render() {
    const { charities, headers } = this.state;
    return (
      <div>
        <div>
          <Header label1="Home" label2="About" label3="Illnesses" label4="Hospitals" label5="Charities" selected={4} />
        </div>
        <div>
          <MyTable rows={charities} headers={headers} />
        </div>
      </div>
    );
  }
}
class MyTable extends Component {
  render() {
    return (
    <DataTable rows={this.props.rows} headers={this.props.headers}
      render={({ rows, headers }) => (
      <TableContainer style={{'padding-top': '30px', 'padding-left': '47px', 'padding-right': '47px'}}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(header => (
              <TableHeader>
                {header.header}
              </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
            <TableRow key={row.id}>
              {row.cells.map(cell => (
              <TableCell key={cell.id}>
                {cell.value}
              </TableCell>
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
    this.state = {selected: 0};
  }
  render() {
    function handleAboutTabClick(e) {
      if (window.location.href !== 'http:
        window.location.assign('/about');
        this.setState({
          selected: 1
        });
      }
    }
    function handleIllnessesTabClick(e) {
      if (window.location.href !== 'http:
        window.location.assign('/illnesses');
        this.setState({
          selected: 2
        });
      }
    }
    function handleHospitalsTabClick(e) {
      if (window.location.href !== 'http:
        window.location.assign('/hospitals');
        this.setState({
          selected: 3
        });
      }
    }
    function handleCharitiesTabClick(e) {
      if (window.location.href !== 'http:
        window.location.assign('/charities');
        this.setState({
          selected: 3
        });
      }
    }
    function handleHomeTabClick(e) {
      if (window.location.href !== 'http:
        window.location.assign('/');
        this.setState({
          selected: 0
        });
      }
    }
    return (
      <div className="header">
        <Tile>
          {}
          <Tabs className="some-class" selected={this.props.selected} style={{'margin-left': '750px', 'margin-top': '5px', 'margin-bottom': '0px'}}>
            <Tab className="another-class" label={this.props.label1} onClick={handleHomeTabClick} />
            <Tab className="another-class" label={this.props.label2} onClick={handleAboutTabClick} />
            <Tab className="another-class" label={this.props.label3} onClick={handleIllnessesTabClick} />
            <Tab className="another-class" label={this.props.label4} onClick={handleHospitalsTabClick} />
            <Tab className="another-class" label={this.props.label5} onClick={handleCharitiesTabClick} />
          </Tabs>
        </Tile>
      </div>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <div className="card">
        <Tile style={this.props.style}>
            <img src={this.props.image} width="350" height="370" />
            <br/>
            <span className="title">
              <center>
                <FormLabel className="title" style={{'margin-top': '20px', 'font-size': '1.2rem'}}>
                  {this.props.title}
                </FormLabel>
              </center>
            </span>
            <br/>
            <center>
              {"buttonTitle" in this.props &&
                <Button kind="secondary">
                  {this.props.buttonTitle}
                </Button>
              }
              {"label1" in this.props &&
                <center>
                  <FormLabel className="title" style={{'font-size': '0.9rem'}}>
                    Commits: {this.props.label1}
                  </FormLabel>
                </center>
              }
              {"label2" in this.props &&
                <center>
                  <FormLabel className="title" style={{'font-size': '0.9rem'}}>
                    Issues: {this.props.label2}
                  </FormLabel>
                </center>
              }
            </center>
          </Tile>
      </div>
    );
  }
}
export default App;
