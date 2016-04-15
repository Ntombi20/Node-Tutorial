module.exports = function(filePath){

var fs = require('fs');
//returns a list of products..
this.productNames = function(callback){
    var productList = [];
    var readFile = fs.readFileSync(filePath, "utf8");
    var rows = readFile.split('\n');

      var product = {};

    rows.forEach(function(row) {
      var productName = row.split(',')[1];

       if(product[productName]=== undefined){
          productList.push(productName);
          product[productName]=0;
       }

    });

        callback(null, productList);
}

//returns a map of how many of each product is sold - mapping productName to quantity sold.
this.productsSold = function(callback){
  var productMap = {};
  var readFile = fs.readFileSync(filePath, "utf8");

      var items = readFile.split("\n");

      items.forEach(function(item) {

      var hold = item.split(',');

      var currentItem = hold[1];
      var NumberOfItem = hold[2];

        if(productMap[currentItem] === undefined){
          productMap[currentItem]= 0;
        }
         productMap[currentItem]= productMap[currentItem] + Number(NumberOfItem);

     });

            console.log(productMap);
            callback(null, productMap);
}

};
