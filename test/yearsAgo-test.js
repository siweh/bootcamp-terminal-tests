let assert = require('assert')
let yearsAgo = require('./../src/yearsAgo')

describe('yearsAgo()', function(){
    context('with a given year', function(){
        it('should return the difference between the passed year and the current year', function(){
            assert.equal(4, yearsAgo(2017))
        })
    })

    context('Given a year passed as a string', function(){
        it('should throw error when given a year passed in a string', function(){
            assert.throws(() => yearsAgo('2018'))
        })
    })

    context('with no year', function(){
        it('should throw error when there is no year given', function(){
            assert.throws(() => yearsAgo())
        })
    })
})