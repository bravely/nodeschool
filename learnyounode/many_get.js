var bl = require('bl'),
    http = require('http');

http.get(process.argv[2], function(request) {
  request.pipe(bl(function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    var result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});
