var ext_filter = require('./ext_filter.js');

ext_filter(process.argv[2], process.argv[3], function(err, list) {
  list.forEach(function(item) {
    console.log(item);
  });
});
