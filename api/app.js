var app = require('./modules/config')
var port = 5000

var server = app.listen
(
    port,
    function()
    {
        console.log(`API conectada na porta ${port}`)
    }
)

var io = require('socket.io').listen(server)

io.on('connection', (socket) => {

    socket.on('add-message', (message) => {
        io.emit('message', {
            text: message.text,
            from: message.nickname,
            created: message.data
        })
    })
})