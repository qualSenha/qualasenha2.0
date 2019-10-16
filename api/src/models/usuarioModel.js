const mysql = require('mysql')
const util = require('util')

var dbConnection = () => {
    return mysql.createConnection
    ({
        host: 'remotemysql.com',
        user: 'wCMghCIswK',
        password: 'YxIx3J57Fd',
        database: 'wCMghCIswK',
        multipleStatements: true
        /* host: '192.168.43.239',
        user: 'pedro',
        password: 'password',
        database: 'seminario',
        multipleStatements: true */
    })
}

class Inquilino {
    async getUsuario(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT u.*, a.horaAtendimento, a.localAtendimento, a.tipoSolicitacao, a.status ' +
                ' FROM usuario          AS u ' +
                ' LEFT JOIN agendamento AS a ON a.ra = u.ra ' +
                ' WHERE u.ra = ? AND u.senha = ? ',
                [
                    dados.ra,
                    dados.senha
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async putUsuario(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' UPDATE usuario SET ra = ?, senha = ?, nome = ?, cpf = ?, email = ?, telefone = ?, dataNascimento = ? WHERE ID = ? ',
                [
                    dados.ra,
                    dados.senha,
                    dados.nome,
                    dados.cpf,
                    dados.email,
                    dados.telefone,
                    dados.dataNascimento,
                    dados.id
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }
}

module.exports = new Inquilino()