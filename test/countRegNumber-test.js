let assert = require('assert')
let countRegNumber = require('./../src/countRegNumber')

describe('Count Registration Numbers function', function(){
    context('With registration numbers', function(){
        it('should return a list of registration numbers', function(){
            assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
        });
    });

    context('Without registration numbers', function(){
        it('should return a list of registration numbers', function(){
            assert.throws(() => countRegNumber());
        });
    });
});