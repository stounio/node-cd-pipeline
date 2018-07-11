const assert = require('assert');
const app = require('../../main/javascript/hello.js');

describe('Application', function(){
  describe('hello()', function(){
    it('should greet the world', function(){
      assert.equal("Hello World", app.hello());
    });
  });
});
