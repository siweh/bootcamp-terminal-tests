let assert = require('assert');
let greet = require('./../src/greet');

describe('The Greet Function', function(){
    it('should greet Siweh correctly', function(){
        assert.equal('Hello, Siweh', greet('Siweh'));
    });

    it('should greet Sivuyile correctly', function(){
        assert.equal('Hello, Sivuyile', greet('Sivuyile'));
    });
});