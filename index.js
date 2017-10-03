var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')

// environment
let http = express();
http.use( bodyParser.json() );       // to support JSON-encoded bodies

// http

http.get('/todo-api',function(req,res){
  let db  = fs.readFileSync('db.json','utf8');
  console.log('get: ' + db);
  res.status(200).send(db);
});

http.post('/todo-api',async function(req,res) {
 await fs.writeFile('db.json',JSON.stringify(req.body));
 res.send('OK');
});

http.listen(3005);
