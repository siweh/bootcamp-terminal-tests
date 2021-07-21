module.exports = function(phoneBill){

    if (phoneBill === undefined && phoneBill !== 'string'){
        throw TypeError('totalPhoneBill() expects a string');
    }
    //console.log(phoneBill));
    var newStr = phoneBill.split(', ');
    var total = 0;
    for (var i = 0; i < newStr.length; i++){
      var ans = newStr[i];
      if (ans === 'call'){
        //console.log(ans);
        total += 2.75;
      }
      if (ans === 'sms'){
        total += 0.65;
      }
    }
    //console.log(total.toFixed(2));
    return 'R' + total.toFixed(2).trim();
  }