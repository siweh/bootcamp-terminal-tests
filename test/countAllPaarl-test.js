let assert = require('assert')
let countAllPaarl = require('./../src/countAllPaarl');

describe('countAllPaarl function', function(){
    context('Given registration numbers from Paarl', function(){
        it('should return the number of registration numbers for Paarl', function(){
            assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        });
    });

    context('Without registration numbers', function(){
        it('should return an error', function(){
            assert.throws(() => countAllPaarl());
        });
    });
});