const React = require('react');
const App = require('../App');
const shallow = require('enzyme');
const expect = require('chai');
describe('<Home/>', function () {
  it('should contain a header and some cards', function () {
    const wrapper = shallow(App.Home);
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('Card')).to.have.length(1);
  })
});
describe('<About/>', function () {
    it('should contain a header and some cards', function () {
        const wrapper = shallow(App.About);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('Card')).to.have.length(1);
    })
    it('initial values are all zero.', function(){
        const wrapper = shallow(App.About);
        expect(wrapper.state().shreyas_c1).to.equal(0);
        expect(wrapper.state().shreyas_c2).to.equal(0);
        expect(wrapper.state().caleb_c1).to.equal(0);
        expect(wrapper.state().calbe_c2).to.equal(0);
        expect(wrapper.state().taher_c1).to.equal(0);
        expect(wrapper.state().taher_c2).to.equal(0);
        expect(wrapper.state().weihan_c1).to.equal(0);
        expect(wrapper.state().weihan_c2).to.equal(0);
        expect(wrapper.state().jason_c1).to.equal(0);
        expect(wrapper.state().jason_c2).to.equal(0);
        expect(wrapper.state().shreyas_i1).to.equal(0);
        expect(wrapper.state().shreyas_i2).to.equal(0);
        expect(wrapper.state().caleb_i1).to.equal(0);
        expect(wrapper.state().calbe_i2).to.equal(0);
        expect(wrapper.state().taher_i1).to.equal(0);
        expect(wrapper.state().taher_i2).to.equal(0);
        expect(wrapper.state().weihan_i1).to.equal(0);
        expect(wrapper.state().weihan_i2).to.equal(0);
        expect(wrapper.state().jason_i1).to.equal(0);
        expect(wrapper.state().jason_i2).to.equal(0);
    })
});
describe('<Illnesses/>', function () {
    it('should contain a header, Cards, and Pagination', function () {
        const wrapper = shallow(App.Illnesses);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('Card')).to.have.length(1);
        expect(wrapper.find('PaginationV2')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Illnesses);
        expect(wrapper.state().page).to.equal(1);
        expect(wrapper.state().pageSize).to.equal(3);
        expect(wrapper.state().illnesses).to.equal([]);
        expect(wrapper.state().illnesses_slice).to.equal([]);
    })
});
describe('<Illness/>', function () {
    it('should contain a header, FormLabel and Title.', function () {
        const wrapper = shallow(App.Illness);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('FormLabel')).to.have.length(1);
        expect(wrapper.find('Title')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Illness);
        expect(wrapper.state().illness).to.equal({});
    })
});
describe('<Hospitals/>', function () {
    it('should contain a header, Cards, and Pagination.', function () {
        const wrapper = shallow(App.Hospitals);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('Card')).to.have.length(1);
        expect(wrapper.find('PaginationV2')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Hospitals);
        expect(wrapper.state().page).to.equal(1);
        expect(wrapper.state().pageSize).to.equal(3);
        expect(wrapper.state().hospitals).to.equal([]);
        expect(wrapper.state().hospitals_slice).to.equal([]);
    })
});
describe('<Hospital/>', function () {
    it('should contain a header, FormLabel and Title.', function () {
        const wrapper = shallow(App.Hospital);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('FormLabel')).to.have.length(1);
        expect(wrapper.find('Title')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Hospital);
        expect(wrapper.state().hospital).to.equal({});
    })
});
describe('<Charities/>', function () {
    it('should contain a header, Cards, and Pagination.', function () {
        const wrapper = shallow(App.Charities);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('Card')).to.have.length(1);
        expect(wrapper.find('PaginationV2')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Charities);
        expect(wrapper.state().page).to.equal(1);
        expect(wrapper.state().pageSize).to.equal(3);
        expect(wrapper.state().charities).to.equal([]);
        expect(wrapper.state().charities_slice).to.equal([]);
    })
});
describe('<Charity/>', function () {
    it('should contain a header, FormLabel and Title.', function () {
        const wrapper = shallow(App.Charity);
        expect(wrapper.find('Header')).to.have.length(1);
        expect(wrapper.find('FormLabel')).to.have.length(1);
        expect(wrapper.find('Title')).to.have.length(1);
    })
    it('initial values.', function(){
        const wrapper = shallow(App.Charity);
        expect(wrapper.state().charity).to.equal({});
    })
});
describe('<MyTable/>', function(){
    it('should contain a DataTable', function(){
        const wrapper = shallow(App.MyTable);
        expect(wrapper.find('DataTable')).to.have.length(1);
    })
})
describe('<Card/>', function(){
    it('should contain a ClickableTile', function(){
        const wrapper = shallow(App.Card);
        expect(wrapper.find('ClickableTitle')).to.have.length(1);
    })
})
