//configurar express
const express = require('express');
//configurar bodyParser
const bodyParser = require('body-parser');
//importar el archivo
const alumnosRoutes = require('./routes/alumnosRoutes');


const app = express();

//middlewares
app.use(bodyParser.json());//se establece el formato de los datos
//agregar añ middleware el objeto

app.use('/alumnos', alumnosRoutes)// localhost:3000
//app.use(express.static(path.join(__dirname, 'views')));

const PORT = 3000;

app.listen(PORT,()=>{
    console.log('servidor escuchando en el puerto  ${PORT}');
});