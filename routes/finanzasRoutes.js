const express = require('express');
const rutas = express.Router();

rutas.get('/conceptos_pago', function (req, res) {
    res.json({success: true});
})

rutas.post('/comprobantes_inscripcion', function (req, res) {
    res.json({success: true});
})

module.exports = rutas;