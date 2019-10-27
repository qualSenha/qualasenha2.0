const moment = require('moment-timezone')
const usuarioModel = require('../models/usuarioModel')

async function login(app, req, res) {
    var usuario = await usuarioModel.getUsuario(req.body)
    
    usuario.horaAtendimento ? (usuario['hora'] = moment(usuario.horaAtendimento).format('HH:mm')) : (usuario['hora'] = null)
    usuario.horaAtendimento ? (usuario['dia'] = moment(usuario.horaAtendimento).format('YYYY-MM-DD')) : (usuario['dia'] = null)

    res.json(usuario)
}

async function putUsuario(app, req, res) {
    if(req.body.dataNascimento && req.body.dataNascimento != 'Invalid date') {
        req.body.dataNascimento = moment(req.body.dataNascimento).format('YYYY-MM-DD')
    } else {
        req.body['dataNascimento'] = null
    }

    var teste = await usuarioModel.putUsuario(req.body)

    res.json({ ok: true })
}

async function getUnidades(app, req, res) {
    var result = await usuarioModel.getUnidades()

    res.json(result)
}

module.exports = {
    login,
    putUsuario,
    getUnidades
}