var fs = require('fs');

module.exports = function(){

  var products = fs.readFileSync('./files/products.csv', 'utf8' );
  var productList = [];

  for (var i = 0; i < products.length; i++) {
    products[i]
  }
   console.log(products[i]);
  //   var productName = item.split(",")[1];
  //   if (productList.indexOf(productName) === -1) {
  //     productList.push(productName);
  //   }
  // });

}
