var fs = require('fs');

module.exports = function(){

  var products = fs.readFileSync('./files/products.csv');
  var productList = [];

    for (var i = 0; i < products.length; i++) {
      console.log(products[i].split(","))
    }


  //   var productName = item.split(",")[1];
  //   if (productList.indexOf(productName) === -1) {
  //     productList.push(productName);
  //   }
  // });

}
