//rutas o endpoinsts
//implementando un api rest
//get, put, post, delete(crud)
const express = require('express');
const rutas = express.Router();

//definir un endpoinst para obtener la lista de los alumnos
//METODO:GET(leer)
rutas.get('/', function (req, res) {
    res.send("<h1>hola mundo</h1>")
    res.json({
        message: "hola mundo"
    })
})

module.exports = rutas;//ESta linea es obligatoria para que el objeto
//pueda ser usada en otras carpetas