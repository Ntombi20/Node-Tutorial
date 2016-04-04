
var fs = require('fs');
var contains = []

var readFolder = fs.readdirSync('./files/week1', 'utf8');
// console.log(readFolder);

  readFolder.forEach(function(readFolder){
     var files = fs.readFileSync('./files/week1/' + readFolder, 'utf8' )
     var linesInFiles = files.split('\n');

     linesInFiles.forEach(function(allLine){
           contains.push(allLine);
      })

  })
  console.log(contains);
