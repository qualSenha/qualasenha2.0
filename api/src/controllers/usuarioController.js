const moment = require('moment-timezone')
const usuarioModel = require('../models/usuarioModel')

async function login(app, req, res) {
    var usuario = await usuarioModel.getUsuario(req.body)
    
    usuario.horaAtendimento ? (usuario['hora'] = moment(usuario.horaAtendimento).format('HH:mm')) : (usuario['hora'] = null)
    usuario.horaAtendimento ? (usuario['dia'] = moment(usuario.horaAtendimento).format('YYYY-MM-DD')) : (usuario['dia'] = null)

    res.json(usuario)
}

async function putUsuario(app, req, res) {
    req.body.dataNascimento = moment(req.body.dataNascimento).format('YYYY-MM-DD')
    
    await usuarioModel.putUsuario(req.body)

    res.json({ ok: true })
}

module.exports = {
    login,
    putUsuario
}