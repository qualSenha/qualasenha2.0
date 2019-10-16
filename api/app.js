var app = require('./modules/config')
var port = 5000

app.listen
(
    port,
    function()
    {
        console.log(`API conectada na porta ${port}`)
    }
)