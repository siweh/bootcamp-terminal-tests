module.exports = function(itemList, threshold){
    //console.log(itemList);
    var itemsOverThreshold = [];
    for (var i = 0; i < itemList.length; i++){
      if (itemList[i].qty > threshold)
        itemsOverThreshold.push(itemList[i]);
    }
    //console.log(itemsOverThreshold);
    return itemsOverThreshold;
  }