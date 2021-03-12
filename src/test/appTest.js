const assert = require('assert');
const forTest = require('../forTest');
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('forTest.sayHello()', function(){
    it('should return Hello.', function(){
        let result = forTest.sayHello()
        assert.strictEqual(result, 'Hello.')
    })
})
