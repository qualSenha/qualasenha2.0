const moment = require('moment-timezone')
const agendamentoModel = require('../models/agendamentoModel')

async function postAgendamento(app, req, res) {
    req.body['horaAtendimento'] = `${req.body.dia} ${req.body.hora}`
    req.body['horaGerada'] = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')

    var result = await agendamentoModel.getAgendamento(req.body.ra)

    if(result) {
        req.body['idAgendamento'] = result
        await agendamentoModel.putAgendamento(req.body)
    } else {
        await agendamentoModel.postAgendamento(req.body)
    }

    res.json({ ok: true })
}

module.exports = {
    postAgendamento
}