const geralModel = require('../models/geralModel')
const moment = require('moment-timezone')

async function gerarSenha (app, req, res) {
    var dados = req.query

    var senhas = await geralModel.getSenhas(dados.local)
    var ultima = senhas.length > 0 ? senhas[senhas.length-1].senha : null

    if(!senhas.length > 0) {
        dados['senha'] = 1
    } else {
        if(ultima == '100') {
            dados['senha'] = 1
        } else {
            dados['senha'] = ++ultima
        }
    }

    dados['dtCriacao'] = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')

    await geralModel.postSenha(dados)

    res.json({ senha: dados.senha, localAtendimento: dados.local })       
}

async function getSenhas(app, req, res) {
    var result = await geralModel.getSenhas(req.query.local)

    res.json(result)
}

async function getSenhasChamadas(app, req, res) {
    var dados = req.query
    dados['dtCriacao'] = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD')

    var result = await geralModel.getSenhasChamadas(dados)

    res.json(result)
}

async function cancelarSenha(app, req, res) {
    await geralModel.cancelarSenha(req.body)

    res.json({ok: true})
}

module.exports = {
    gerarSenha,
    getSenhas,
    cancelarSenha,
    getSenhasChamadas
}