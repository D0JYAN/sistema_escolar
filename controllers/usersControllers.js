const connection = require('../models/database');

exports.login = (req, res) => {
    const {username, password} = req.body
    console.log(username)
    console.log(password)
    /*res.json({
        success:true
    })*/
}

exports.register = (req, res) => {
    res.json({
        success:true
    })
}

exports.allUsers = (req, res) => {
    res.json({
        success:true
    })
}