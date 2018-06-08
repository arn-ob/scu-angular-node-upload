var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');

var app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests


app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'dist'))); // For deploy the project


// App nav request
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})



// run server
//app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});