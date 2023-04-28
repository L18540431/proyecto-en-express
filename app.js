var express = require('expresss');
var app = express();

app.get('/', function(req, res){
    res.send('una Api basica desde Express');
});
app.get('/saludo', function(req, res){
    res.send('Hola desde la API');
});
app.get('/despedida', function(req, res){
    res.send('adios desde la API');
});
app.listen(3000, function(){
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});