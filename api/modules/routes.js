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

    app.get(
        '/getAgendamentos',
        (req, res) =>
        {
            app.src.controllers.atendimentoController.getAgendamentos(app, req, res)
        }
    )

    app.get(
        '/chamarAgendamento',
        (req, res) =>
        {
            app.src.controllers.atendimentoController.chamarAgendamento(app, req, res)
        }
    )
}

module.exports = routes