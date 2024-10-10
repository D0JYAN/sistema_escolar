
const express = require('express');
const rutas = express.Router();

//definir un endpoint para obtener la lista de los alumnos
//metodo: get(leer)
rutas.get('/', function(req, res) { //servicio
    //res.send("<h1>Hola mundo<h1>");
    res.json({
        message:"Hola docente"
    })

})

//Este servicio registra la asistencia de los alumnos
rutas.post('/registro_asistencia', function(req, res) {
    res.json({mensaje:"Registro de asistencia fue un exito"})
})

//El siguiente servicio obtiene la lista de los alumnos
rutas.get("/lista_alumnos/:grupo",function(req, res) {
    res.json({message:"La lista de alumnos fue obtenida con exito"})
})

module.exports = rutas;
