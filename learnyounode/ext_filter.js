var fs = require('fs'),
    path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) return callback(err, null);

    var filtered_list  = [];
    list.forEach(function(item) {
      if (path.extname(item) === '.' + extension) {
        filtered_list.push(item);
      }
    });

    callback(null, filtered_list);
  });
};
