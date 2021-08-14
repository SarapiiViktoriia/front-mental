import './basic.css';
import React, { Component } from 'react';
import { Navigation } from '../custom';
export class MyVis extends Component {
  render(){
    return (
      <div>
        <div className='navbar'>
          <Navigation selected={-1}/>
        </div>
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
