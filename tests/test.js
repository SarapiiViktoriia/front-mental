import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import App from '../src/App';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Hospital from '../src/pages/hospital';
import Charity from '../src/pages/charity';
import Illness from '../src/pages/illness';
import { Navigation } from '../src/components';
configure({ adapter: new Adapter() }); 
global.fetch = require('jest-fetch-mock');
test('<Home> should contain <Navigation>.', ()=>{
    const wrapper = shallow(<Home/>);
    expect(wrapper.find(Navigation)).to.have.lengthOf(1);
});
test('<About>: All the property values are 0.', ()=>{
    const wrapper = shallow(<About/>);
    expect(wrapper.state().shreyas_c1).to.equal(0);
    expect(wrapper.state().shreyas_c2).to.equal(0);
    expect(wrapper.state().caleb_c1).to.equal(0);
    expect(wrapper.state().caleb_c2).to.equal(0);
    expect(wrapper.state().taher_c1).to.equal(0);
    expect(wrapper.state().taher_c2).to.equal(0);
    expect(wrapper.state().weihan_c1).to.equal(0);
    expect(wrapper.state().weihan_c2).to.equal(0);
    expect(wrapper.state().jason_c1).to.equal(0);
    expect(wrapper.state().jason_c2).to.equal(0);
    expect(wrapper.state().shreyas_i1).to.equal(0);
    expect(wrapper.state().shreyas_i2).to.equal(0);
    expect(wrapper.state().caleb_i1).to.equal(0);
    expect(wrapper.state().caleb_i2).to.equal(0);
    expect(wrapper.state().taher_i1).to.equal(0);
    expect(wrapper.state().taher_i2).to.equal(0);
    expect(wrapper.state().weihan_i1).to.equal(0);
    expect(wrapper.state().weihan_i2).to.equal(0);
    expect(wrapper.state().jason_i1).to.equal(0);
    expect(wrapper.state().jason_i2).to.equal(0);
});
test('<Illness> should contain <Navigation>.', ()=>{
    const wrapper = shallow(<Illness/>);
    expect(wrapper.find(Navigation)).to.have.lengthOf(1);
});
test('<Hospital> should contain <Navigation>.', ()=>{
    const wrapper = shallow(<Hospital/>);
    expect(wrapper.find(Navigation)).to.have.lengthOf(1);
});
test('<Charity> should contain <Navigation>.', ()=>{
    const wrapper = shallow(<Charity/>);
    expect(wrapper.find(Navigation)).to.have.lengthOf(1);
});
