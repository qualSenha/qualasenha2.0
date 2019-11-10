var firebase = require('firebase')

async function getChat(app, req, res) {

    firebase.database().ref(`/${req.query.ra}`).on('value', (snapshot) => {
        var result = snapshot.val()

        var msg = []

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

        res.send(msg)

    })
}

async function getChamados(app, req, res) {
    firebase.database().ref('/').on('value', (snapshot) => {
        var chaves = null
        if(snapshot.val())
            chaves = Object.keys(snapshot.val())
        
        res.send(chaves)
    })
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