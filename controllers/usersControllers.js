const connection = require('../models/database');
const db = require('../models/database');

exports.login = (req, res) => {
    const { username, password } = req.body

    const query = 'SELECT * FROM `usuarios` WHERE username =? AND password =?;'

    //Verificar las credenciales de un usuario y responde en consecuencia.
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ message: "Login Exitoso", data: results })
            //Generar un token
        } else {
            res.json({ message: "Usuario o contraseña incorrectos", data: [] })
        }
    })
}

exports.register = (req, res) => {
    const {username, correo, password, rol} = req.body

    const query = 'INSERT INTO `usuarios` (username, correo, password, rol) VALUES (?,?,?,?);'

    //Crear un nuevo usuario y responde en consecuencia.
    db.query(query, [username, correo, password, rol], (err, results) => {
        if (err) throw err;
        res.json({
            message: "Registro Exitoso",
            data: results
        })
    })
}

exports.allUsers = (req, res) => {
    res.json({
        success: true
    })
}