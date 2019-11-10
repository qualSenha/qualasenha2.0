var routes = (app) =>
{
    app.get(
        '/',
        (req, res) =>
        {
            app.src.controllers.usuarioController.getUnidades(app, req, res)
        }
    )

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

    app.post(
        '/cancelarAgendamentos',
        (req, res) =>
        {
            app.src.controllers.agendamentoController.cancelarAgendamento(app, req, res)
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

    app.get(
        '/chamarSenha',
        (req, res) =>
        {
            app.src.controllers.atendimentoController.chamarSenha(app, req, res)
        }
    )

    app.get(
        '/gerarSenha',
        (req, res) => {
            app.src.controllers.geralController.gerarSenha(app, req, res)
        }
    )

    app.get(
        '/getSenhas',
        (req, res) => {
            app.src.controllers.geralController.getSenhas(app, req, res)
        }
    )

    app.get(
        '/getSenhasChamadas',
        (req, res) => {
            app.src.controllers.geralController.getSenhasChamadas(app, req, res)
        }
    )

    app.post(
        '/cancelarSenha',
        (req, res) => {
            app.src.controllers.geralController.cancelarSenha(app, req, res)
        }
    )

    app.get(
        '/getChat',
        (req, res) => {
            app.src.controllers.chatController.getChat(app, req, res)
        }
    )

    app.get(
        '/getChamados',
        (req, res) => {
            app.src.controllers.chatController.getChamados(app, req, res)
        }
    )
}

module.exports = routes