module.exports = function(shift){

    if (shift === undefined){
        throw TypeError('transportFee() expects a string');
    }
    switch (shift){
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      default:
        return "free";
    }
  }