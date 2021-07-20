let assert = require('assert')
let regCheck = require('./../src/regCheck')

describe('Registration check function', function(){
    context('given a registration that corresponds with the correct registration plate', function(){
        it('should return true for registration number of that province', function(){
            assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
        });
    });

    context('given a registration that does not corresponds with the correct registration plate', function(){
        it('should return false for registration number of that province', function(){
            assert.equal(false, regCheck('DC 55 YU GP', 'MP'));
        });
    });

    context('Without registration number and location indicator', function(){
        it('should throw an error when there is no registration number or location inidcator', function(){
            assert.throws(() => regCheck());
        });
    });
});