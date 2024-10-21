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
router.get('/all_users', usersController.allUsers)

//Ruta para obtener la lista de los usuarios por rol
router.get('/users_por_rol/:rol', usersController.usersByRol)

//Ruta para actualizar los usuarios
router.put('/update_user/:id', usersController.updateUser)

module.exports = router;