const moment = require('moment-timezone')
const atendimentoModel = require('../models/atendimentoModel')

async function getAgendamentos(app, req, res) {
    var data = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm')

    var result = await atendimentoModel.getAgendamentos(data)

    res.json(result)
}

async function chamarAgendamento(app, req, res) {
    var data = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm')

    var result = await atendimentoModel.chamarAgendamento(data)

    res.json(result)
}

module.exports = {
    getAgendamentos,
    chamarAgendamento
}