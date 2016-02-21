var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Jordan smells kind of really good. Sometimes. Okay. ayy lmaoo good'
      + 'haAUHWDIUHASDHIUha fun FUN FUN FUN times');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
