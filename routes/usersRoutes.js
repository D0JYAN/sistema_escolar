const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers')

//Servicios:
//Login, register, lista de usuarios

//Ruta de login

router.post('/login', usersController.login)

//Ruta de registro
router.post('/register', usersController.register)

//Ruta para obtener la lista de usuarios
router.get('/all_users', (req, res) => {})

module.exports = router;