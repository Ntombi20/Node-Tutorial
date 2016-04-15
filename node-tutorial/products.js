module.exports = function(filePath){

//returns a list of products

var fs = require('fs');

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


//return products;

// }
//
// this.productsSold = function() {
//
//
//
// }
//
};
