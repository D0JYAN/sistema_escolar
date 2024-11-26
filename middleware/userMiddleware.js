const jwt = require('jsonwebtoken');
//Servicio de autentificacion
exports.verificarToken = (req, res, next) => {
    //Obtener el token almacenado en la cookie
    const tokne = req.cookies.token;
    //Validar si el token es valido
    if(!token) {
        return res.status(401).json({ message: 'No tienes acceso'});
    }
    //Verificar que el token es el mismo que el del servidor
    jwt.verify(token, password, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: 'Token inválido'});
        }
    })
    //Si el token es valido, continua y almacena los datos decodificados
    req.user = decoded;
    next();//Indica al middleware que continue con el siguiente proceso
}