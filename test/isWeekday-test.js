let assert = require('assert')
let isWeekDay = require('./../src/isWeekday')

describe('isWeekDay function', function(){
    context('Given a weekday', function(){
        it('should return true if the given day is a weekday', function(){
            assert.equal(true, isWeekDay('Monday'));
        });
    });

    context('Given a weekend day', function(){
        it('should return false if the given day is a not weekday', function(){
            assert.equal(false, isWeekDay('Sunday'));
        });
    });

    context('Without a day', function(){
        it('should throw an error', function(){
            assert.throws(() => isWeekDay());
        });
    });

    context('Given a number weekday', function(){
        it('should throw an error', function(){
            assert.throws(() => isWeekDay(5));
        });
    });
});