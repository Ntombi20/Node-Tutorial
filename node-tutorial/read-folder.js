var findLines = function(folderName) {
var fs = require('fs');
var data = []

  var linesInFiles = fs.readdirSync('./files/week1', 'utf8');

  linesInFiles.forEach(function(linesInFiles){
     var files = fs.readFileSync('./files/week1/' + linesInFiles, 'utf8' )
     var linesInFilesAsync = files.split('\n');

    linesInFilesAsync.forEach(function(allLine){
           data.push(allLine);
      })

  })

return data;
}

exports.linesInFiles = function(folderName) {
    var data = findLines(folderName);
    return data;
}

exports.linesInFilesAsync = function(folderName, callback){
  var data = findLines(folderName);
    callback(null, data);
    return data;
}
