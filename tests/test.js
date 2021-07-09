import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import App from '../src/App';
import Home from '../src/page/home';
import About from '../src/page/about';
import Hospital from '../src/page/hospital';
import Charity from '../src/page/charity';
import Illness from '../src/page/illness';
import { Navigation } from '../src/custom';
configure({ adapter: new Adapter() }); 
global.fetch = require('jest-fetch-mock');
test('<Home> should contain a header and some cards.', ()=>{
    const wrapper = shallow(<Home/>);
    expect(wrapper.find(Navigation)).to.have.lengthOf(1);
});
test('<About> should contain a header and some cards.', ()=>{
    const wrapper = shallow(<About/>);
    expect(wrapper.state().shreyas_c1).to.equal(0);
});
