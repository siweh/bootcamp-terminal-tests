let assert = require('assert');
let isFromBellville = require('./../src/isFromBellville');

describe('Is from Bellville function', function(){
    context('With registration numbers from Bellville', function(){
        it('should display registration numbers form Bellville', function(){
            assert.equal(true, isFromBellville('CY 123'));
        });
    });
    
    context('With registration numbers not from Bellville', function(){
        it('should return false', function(){
            assert.equal(false, isFromBellville('CJ 234'))
        });
    });

    context('Without registration numbers', function(){
        it('should throw an error when there is no registration number', function(){
            assert.throws(() => isFromBellville())
        });
    });
});