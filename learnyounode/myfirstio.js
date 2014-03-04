var fs = require('fs'),
    buffer = fs.readFileSync(process.argv[2]),
    buf = buffer.toString();

console.log(buf.split('\n').length - 1);
