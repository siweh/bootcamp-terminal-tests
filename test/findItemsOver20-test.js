let assert = require('assert')
let findItemsOver20 = require('./../src/findItemsOver20')

describe('findItemsOver20 function', function(){
    context('Given a list of items', function(){
        it('should return all the products that have a quantity higher than 20', function(){
            assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ], 20))
        });
    });

    context('given list of items and none of them is greater than 20', function(){
        it('should return an empty list', function(){
            assert.equal(0, findItemsOver20([
                {name : 'apples', qty : 3},
            ]).length)
        })
    });
});