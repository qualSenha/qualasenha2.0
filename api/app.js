var app = require('./modules/config')
var firebase = require('firebase')

var port = 5000

var server = app.listen
(
    port,
    function()
    {
        console.log(`API conectada na porta ${port}`)
    }
)

var config = {
    apiKey: "AIzaSyC-YLHoL_GjUfQfaeKp6mUfYKeebwYqoBM",
    authDomain: "chatfastpassword.firebaseapp.com",
    databaseURL: "https://chatfastpassword.firebaseio.com",
    projectId: "chatfastpassword",
    storageBucket: "chatfastpassword.appspot.com",
    messagingSenderId: "1036029588220",
    appId: "1:1036029588220:web:0f9dd352c9a9d833735d79"
}
firebase.initializeApp(config)

var io = require('socket.io').listen(server)

io.on('connection', (socket) => {

    socket.on('add-message', (message) => {
        io.emit('message', {
            text: message.text,
            origem: message.origem,
            data: message.data,
            ra: message.ra,
            nome: message.nickname
        })
        
        app.src.controllers.chatController.salvarMsg(message)
    })

    socket.on('chamarNormal', (data) => {
        io.emit('chamadoNormal', {
            senha: data.senha
        })
    })

    socket.on('chamarAgendada', (data) => {
        io.emit('chamadoAgendada', {
            ra: data.ra
        })
    })
})