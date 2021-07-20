module.exports = function(year){

    var currentYear = new Date();

    if (year === undefined || typeof year === 'string'){
        throw TypeError('yearsAgo() expects a number');
    }
    
     return (currentYear.getFullYear() - year);
  };