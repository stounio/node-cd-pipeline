var assert = require('assert');
var app = require('../../main/javascript/hello.js');

describe('Application', function(){
  describe('hello()', function(){
    it('should greet the world', function(){
      assert.equal("Hello World", app.hello());
    });
  }),
  describe('whereAmI()', function(){
    it('should inform about the location', function(){
      assert.equal("Welcome to FullStack London 2018", app.whereAmI());
    });
  })
});
