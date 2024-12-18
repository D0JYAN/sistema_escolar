//configurar express
const express = require('express');
//configurar bodyParser
const bodyParser = require('body-parser');
//importar el modulo de morgan
const morgan = require('morgan');
//importar el objeto path
const path = require('path');
//importar el archivo
const alumnosRoutes = require('./routes/alumnosRoutes');
const docentesRoutes = require('./routes/docentesRoutes');
const finanzasRoutes = require('./routes/finanzasRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

//middlewares
app.use(morgan('dev'))//dev, combined, common, short, tiny

app.use(bodyParser.json());//se establece el formato de los datos

//agregar añ middleware el objeto

app.use('/alumnos', alumnosRoutes)// localhost:3000
app.use("/docentes",docentesRoutes)
app.use("/finanzas",finanzasRoutes)
app.use("/users",usersRoutes)

//acceder a los archvivos html
app.use(express.static(path.join(__dirname, 'views')))

//app.use(express.static(path.join(__dirname, 'views')));

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`);
});