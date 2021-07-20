module.exports = function(day){

    if (day === undefined && day !== "string"){
        throw TypeError('isWeekDay() expects a string')
    }
    return !day.startsWith('S')
};