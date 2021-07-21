let assert = require('assert')
let transportFee = require('./../src/transportFee')

describe('transportFee function', function(){
    context('Given a working shift', function(){
        it('should return transport cost for that working shift', function(){
            assert.equal('R20', transportFee('morning'));
        });
    });

    context('Given a working shift', function(){
        it('should return transport cost for that working shift', function(){
            assert.equal('free', transportFee('nightshift'));
        });
    });

    context('Without a working shift', function(){
        it('should return an error', function(){
            assert.throws(() => transportFee());
        });
    });
});