module.exports = function(regNumbers, townSearch){
    //console.log(regNumbers);

    if (regNumbers && townSearch === undefined){
        throw TypeError('countAllFromTown() expects a string');
    }
  var str = regNumbers.split(',');
  //console.log(townSearch);
  var newStr = [];
  for (var i = 0; i < str.length; i++){
    if (str[i].trim().startsWith(townSearch)){
    newStr.push(str[i].trim());
    //console.log(newStr.length);
    //return newStr.length;
    }
  }
  return newStr.length;
}