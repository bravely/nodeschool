var fs = require('fs'),
    path = require('path');

var extension = process.argv[3];


fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  list.forEach(function (filename) {
    if (path.extname(filename) === '.' + process.argv[3]) {
      console.log(filename);
    }
  });
});
