const moment = require('moment-timezone')
const atendimentoModel = require('../models/atendimentoModel')

async function getAgendamentos(app, req, res) {
    var dados = req.query
    dados['data'] = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm')
    dados['dataFinal'] = `${moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD')} 23:59`

    var result = await atendimentoModel.getAgendamentos(dados)

    res.json(result)
}

async function chamarAgendamento(app, req, res) {
    var dados = req.query
    
    dados['data'] = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm')
    dados['dataFinal'] = `${moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD')} 23:59`

    var result = await atendimentoModel.chamarAgendamento(dados)
    await atendimentoModel.alterarAgendamento(result.id)

    res.json(result)
}

async function chamarSenha(app, req, res) {

    var result = await atendimentoModel.chamarSenha(req.query.local)
    await atendimentoModel.alterarSenha(req.query.local, result.senha)

    res.json(result)
}

module.exports = {
    getAgendamentos,
    chamarAgendamento,
    chamarSenha
}