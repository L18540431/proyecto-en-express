var express = require('expresss');
var app = express();

app.get('/', function(req, res){
    res.send('hola mundo!');
});

app.listen(3000, function(){
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});