var firebase = require('firebase')
var chatModel = require('../models/chatModel')

async function getChat(app, req, res) {
    var msg = []

    firebase.database().ref(`/${req.query.ra}`).on('value', (snapshot) => {
        var result = snapshot.val()

        if(result) {
            var chaves = Object.keys(result)

            for(let chave of chaves) {
                msg.push({
                    data: chave,
                    text: result[chave].mensagem,
                    origem: result[chave].origem
                })
            }
        }    
    })

    res.send(msg)
}

async function getChamados(app, req, res) {
    var chaves = null

    firebase.database().ref('/').on('value', (snapshot) => {
        if(snapshot.val())
            chaves = Object.keys(snapshot.val())    
    })
    
    res.send(chaves)
}

async function salvarMsg(message) {
    firebase.database().ref(`/${message.ra}/${message.data}`)
    .set({
        mensagem: message.text,
        origem: message.origem
    })
}

module.exports = {
    getChat,
    getChamados,
    salvarMsg
}