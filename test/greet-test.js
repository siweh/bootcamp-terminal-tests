let assert = require('assert');
let greet = require('./../src/greet');

describe('The Greet Function', function(){
    context('Given a string argument', function(){
        it('should greet Siweh correctly', function(){
            assert.equal('Hello, Siweh', greet('Siweh'));
        });
    });

    context('without string argument', function(){
        it('should throw error when a name is not provided', function(){
            assert.throws(() => greet());
        });
    });
    
    context('Given a number argument instead of a string', function(){
        it('should throw an error when the argument is not a string', function(){
            assert.throws(() => greet(7));
        });
    });
    
});