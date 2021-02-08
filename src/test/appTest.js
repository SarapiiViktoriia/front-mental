const assert = require('assert');
const forTest = require('../forTest');
describe('forTest.sayHello()', function(){
    it('should return Hello.', function(){
        let result = forTest.sayHello()
        assert.strictEqual(result, 'Hello.')
    })
})
