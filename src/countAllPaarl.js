module.exports = function(regNumbers){
    //console.log(regNumbers);
    //var count = 0;

    if (regNumbers === undefined){
        throw TypeError('countAllPaarl() expects a string')
    }
    
    var str = regNumbers.split(', ');
    //console.log(str);
    var newStr = [];
    for (var i = 0; i < str.length; i++){
      if (str[i].startsWith('CJ')){
        newStr.push(str[i]);
      //if (str[i] != "")
        //count = count + 1;
        //console.log(count);
        //console.log(newStr.length);
      }
    }
    return newStr.length;
}