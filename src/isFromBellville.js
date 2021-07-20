module.exports = function(registrationNumber){

    if (registrationNumber === undefined){
        throw TypeError('isFromBellville() expects a string')
    }
    return registrationNumber.startsWith('CY');
};