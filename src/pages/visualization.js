import '../css/basic.css';
import React, { Component } from 'react';
import { Tile, ContentSwitcher, Switch } from 'carbon-components-react';
import { Navigation, IllnessBar, CharityBubble, HospitalPie } from '../components/';
export class MyVis extends Component {
  render(){
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
        <div className='page-title'>
          <h1>Visualizations of our site</h1>
        </div>
        <ContentSwitcher className='vis-switcher' onChange={this.onChange}>
          <Switch text="Illness Bar" name='bar'/>
          <Switch text="Charity Bubble" name='bubble'/>
          <Switch text="Hospital Pie" name='pie'/>
        </ContentSwitcher>
        <Tile className='illness-vis vis-container'>
          <IllnessBar/>
        </Tile>
        <br/>
        <br/>
        <Tile className='charity-vis vis-container'>
          <CharityBubble/>
        </Tile>
        <br/>
        <br/>
        <Tile className='hospital-vis vis-container'>
          <HospitalPie/>
        </Tile>
      </div>
    )
  }
}
export class YourVis extends Component {
  render(){
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
        <div className='page-title'>
          <h1>Hello from your vis page</h1>
        </div>
      </div>
    )
  }
}
