module.exports = function(regNumber){

    if (regNumber === undefined){
        throw TypeError('fromWhere() expects a string');
    }
    switch (regNumber){
      case "CY":
        return "Bellville";
      case "CJ":
        return "Paarl";
      case "CA":
        return "Cape Town";
      default:
        return "Some other place!";
       }
  }