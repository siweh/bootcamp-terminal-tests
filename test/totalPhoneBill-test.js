let assert = require('assert')
let totalPhoneBill = require('./../src/totalPhoneBill')

describe('totalPhoneBill function', function(){
    context('Given a type of phone bill either call or sms', function(){
        it('should return total cost of the phone bill', function(){
            assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        });
    });

    context('Given a number phone bill', function(){
        it('should return an error', function(){
            assert.throws(() => totalPhoneBill(20));
        });
    });

    context('Not given a phone bill', function(){
        it('should return an error', function(){
            assert.throws(() => totalPhoneBill());
        });
    });
});