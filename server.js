var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 9000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + '/client')));
app.set('views',path.join(__dirname + '/client/templates'));
app.set('view engine','ejs');
require('./server/config/routes.js')(app, io);

http.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})

io.on('connection', function(socket){
  // console.log('a user connected');
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });

  socket.on('pacmanmove', function(msg){
    console.log(`pacman  ${msg}`);
    io.emit('pacmanmove', msg);
  });
  socket.on('ghostmove', function(msg){
    console.log(`ghost  ${msg}`);
    io.emit('ghostmove', msg);
  });
}); 