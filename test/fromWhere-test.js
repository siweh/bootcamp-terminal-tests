let assert = require('assert')
let fromWhere = require('./../src/fromWhere')

describe('fromWhere function', function(){
    context('Given a registration number from the Western Cape', function(){
        it('should return a town the registration number is from', function(){
            assert.equal('Bellville', fromWhere('CY'));
        });
    });

    context('Given a registration number of a different province', function(){
        it('should return a town the registration number is from', function(){
            assert.equal('Some other place!', fromWhere('MP'));
        });
    });

    context('Without registration number', function(){
        it('should return an error', function(){
            assert.throws(() => fromWhere());
        });
    });
});