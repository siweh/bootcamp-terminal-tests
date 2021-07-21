module.exports = function(salesData){
    //Throw error when there's no given sales of data
    if (salesData === undefined){
        throw TypeError('mostProfitableDepartment() expects a list of sale data')
    }
   var hardwareSalesTotal = 0, outdoorSalesTotal = 0,carpentrySalesTotal = 0,electronicsSalesTotal = 0;
   
   for(var i = 0; i < salesData.length; i++){
     if(salesData[i].department == 'hardware')
       hardwareSalesTotal += salesData[i].sales;
     else if (salesData[i].department == 'outdoor')
       outdoorSalesTotal += salesData[i].sales;
     else if (salesData[i].department == 'carpentry')
       carpentrySalesTotal += salesData[i].sales;
     else if (salesData[i].department == 'electronics')
       electronicsSalesTotal += salesData[i].sales;
   }
  
   
   var totalSalesDep = [
     {department: 'hardware', totalSales: hardwareSalesTotal},
     {department: 'outdoor', totalSales: outdoorSalesTotal},
     {department: 'carpentry', totalSales: carpentrySalesTotal},
     {department: 'electronics', totalSales: electronicsSalesTotal}
   ];
   
    var profitableDepartment = totalSalesDep[0];
   
   for(var s = 0; s < totalSalesDep.length; s++){
     if(totalSalesDep[s].totalSales > profitableDepartment.totalSales){
       profitableDepartment = totalSalesDep[s];
     }
   }
   
   
   //console.log('department '+profitableDepartment.department +' is a profitable department with '+ 
               //profitableDepartment.totalSales + ' total sales.');
   
   return profitableDepartment.department;
 }