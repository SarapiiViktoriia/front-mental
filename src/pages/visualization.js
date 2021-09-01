import '../css/basic.css';
import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import { Navigation, IllnessBar, CharityBubble, HospitalPie } from '../components/';
export class MyVis extends Component {
  render(){
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
        <Tile className='illness-vis'>
          <IllnessBar/>
        </Tile>
        <br/>
        <br/>
        <Tile className='charity-vis'>
          <CharityBubble/>
        </Tile>
        <br/>
        <br/>
        <Tile className='hospital-vis'>
          <HospitalPie/>
        </Tile>
        <div className='page-title'>
          <h1>Hello from my vis page</h1>
        </div>
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
