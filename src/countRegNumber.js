module.exports = function(regNumber){

    if (regNumber === undefined){
        throw TypeError('countRegNumber() expects a string');
    }
    return regNumber.split(',').length;
}