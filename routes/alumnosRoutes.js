//rutas o endpoinsts
//implementando un api rest
//get, put, post, delete(crud)
const express = require('express');
const rutas = express.Router();

//definir un endpoinst para obtener la lista de los alumnos


//METODO:GET(leer)
rutas.get('/', function (req, res) {
    //res.send("<h1>hola mundo</h1>")
    res.json({
        message: "hola mundo"
    })
})

//METODO: POST(crear)
rutas.post('/fichas', function (req, res) {//servicio
    res.json({
        message: "ficha creada con exito"
    })
})

//METODO: POST(crear)
rutas.post('/becas', function (req, res) {//servicio
    res.json({
        message: "Registro de beca creada"
    })
})

//METODO: GET(leer)
rutas.get('/calificaciones/:matricula', function (req, res) {//servicio
    res.json({
        message: "Lista de calificaciones"
    })
})

//METODO: POST(leer)
rutas.post('/inscripciones', function (req, res) {
    res.json({
        message: "Inscripcion creada"
    })
})

module.exports = rutas;//ESta linea es obligatoria para que el objeto
//pueda ser usada en otras carpetas