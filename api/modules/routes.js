var routes = (app) =>
{
    app.post(
        '/',
        (req, res) =>
        {
            app.src.controllers.usuarioController.login(app, req, res)
        }
    )

    app.post(
        '/putUsuario',
        (req, res) =>
        {
            app.src.controllers.usuarioController.putUsuario(app, req, res)
        }
    )

    app.post(
        '/postAgendamento',
        (req, res) =>
        {
            app.src.controllers.agendamentoController.postAgendamento(app, req, res)
        }
    )
}

module.exports = routes