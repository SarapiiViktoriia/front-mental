import '../css/basic.css';
import React, { Component } from 'react';
import { Tile, ContentSwitcher, Switch } from 'carbon-components-react';
import { Navigation, IllnessBar, CharityBubble, HospitalPie } from '../components';
export class MyVis extends Component {
  constructor(props){
    super(props)
    this.state = {vis: 'bar'}
  }
  render(){
    let vis = this.state.vis === 'bar'? <IllnessBar/>: 
              this.state.vis === 'pie'? <HospitalPie/>: 
              this.state.vis === 'bubble'? <CharityBubble/>: 
              null;
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
        <div className='page-title'>
          <h1>Visualizations of our site</h1>
        </div>
        <ContentSwitcher className='vis-switcher' onChange={evt => this.setState({vis: evt.name})}>
          <Switch text="Illness Bar" name='bar'/>
          <Switch text="Charity Bubble" name='bubble'/>
          <Switch text="Hospital Pie" name='pie'/>
        </ContentSwitcher>
        <Tile className='vis-container'>{vis}</Tile>
      </div>
    )
  }
}
export class YourVis extends Component {
  constructor(props){
    super(props)
    this.state = {vis: 'bar'}
  }
  render(){
    let vis = this.state.vis === 'bar'? <h1>Nothing yet #1</h1>: 
              this.state.vis === 'bubble'? <h1>Nothing yet #2</h1>: 
              this.state.vis === 'pie'? <h1>Nothing yet #3</h1>: 
              null;
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
        <div className='page-title'>
          <h1>Visualizations of the provider's site</h1>
        </div>
        <ContentSwitcher className='vis-switcher' onChange={evt => this.setState({vis: evt.name})}>
          <Switch text="??? #1" name='bar'/>
          <Switch text="??? #2" name='bubble'/>
          <Switch text="??? #3" name='pie'/>
        </ContentSwitcher>
        <Tile className='vis-container'>{vis}</Tile>
      </div>
    )
  }
}
