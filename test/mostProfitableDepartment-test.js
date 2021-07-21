let assert = require('assert')
let mostProfitableDepartment = require('./../src/mostProfitableDepartment')

describe('mostProfitableDepartment()', function(){
    context('given list of sales data and check for most profitable department', function(){
        it('should return the most profitable department', function(){
            assert.equal('carpentry', mostProfitableDepartment([
                {department: 'hardware', sales: 4500},
                {department: 'outdoor', sales: 1500},
                {department: 'carpentry', sales: 5500}]));
        });
    });

    context('with no given list of sales data', function(){
        it('should throw error when there is no given sales of data', function(){
            assert.throws(() => mostProfitableDepartment())
        });
    });
});
