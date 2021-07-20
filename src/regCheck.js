module.exports = function(regNumber, locIndicator){

    if (regNumber && locIndicator === undefined){
        throw TypeError('regCheck() expects a string');
    }
    // console.log(locIndicator)
    return regNumber.endsWith(locIndicator);
};