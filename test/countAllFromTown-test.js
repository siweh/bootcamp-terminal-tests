let assert = require('assert')
let countAllFromTown = require('./../src/countAllFromTown')

describe('countAllFromTown function', function(){
    context('Given a list of registration numbers', function(){
        it('should return a list of registration numbers for that town', function(){
            assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        });
    });

    context('Without registration numbers and a town', function(){
        it('should throw an error', function(){
            assert.throws(() => countAllFromTown());
        });
    });
});