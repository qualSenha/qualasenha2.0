const geralModel = require('../models/geralModel')

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

    await geralModel.postSenha(dados)

    res.json({ senha: dados.senha })
        
}

module.exports = {
    gerarSenha
}