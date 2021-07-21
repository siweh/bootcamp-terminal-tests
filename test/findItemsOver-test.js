let assert = require('assert')
let findItemsOver = require('./../src/findItemsOver')

describe('findItemsOver()', function(){
    context('given list of items and one of them is greater than threshold of 25', function(){
        it('should return a list with one item greater than the threshold of 25', function(){
            assert.equal(1, findItemsOver([
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ], 25).length);
        });
    });

    context('given list of items and one of them is greater than threshold of 40', function(){
        it('should return a list with one item greater than the threshold of 40', function(){
            assert.equal(0, findItemsOver([
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ], 40).length);
        });
    });
});