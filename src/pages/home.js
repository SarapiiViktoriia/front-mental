import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';
import { Navigation } from '../custom';
class Home extends Component {
  render() {
    return (
      <div style={{height: '450vh'}}>
        <div className="navbar" style={{backgroundColor: "transparent"}}>
          <Navigation selected={-1}/>
        </div>
        <div className='section bg-0'>
          <Tile className='section-text' style={{opacity: '1'}}>
            <Typing speed={25} style={{textAlign: 'center'}}>
              <h1 style={{fontWeight: 'bold'}}>Welcome to your mental health</h1>
              <h3 style={{fontWeight: 'bold'}}>Scroll down or use the tabs to get started</h3>
            </Typing>
          </Tile>
        </div>
        <div className='section bg-1'>
          <Tile className='section-text'>
            <h1 style={{fontWeight: 'bold'}}>Discover common <Link to='/illnesses'>afflictions</Link></h1>
          </Tile> 
        </div>
        <div className='section bg-2'>
          <Tile className='section-text'>
            <h1 style={{fontWeight: 'bold'}}>Find <Link to='/hospitals'>places</Link> that can help</h1>
          </Tile> 
        </div>
        <div className='section bg-3'>
          <Tile className='section-text'>
            <h1 style={{fontWeight: 'bold'}}><Link to='/charities'>Help</Link> others in need</h1>
          </Tile> 
        </div>
      </div>
    );
  }
}
export default Home;
