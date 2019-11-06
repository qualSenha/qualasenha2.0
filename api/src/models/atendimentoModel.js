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

class Agendamento {
    async getAgendamentos(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' SELECT * FROM agendamento ' +
                ' WHERE horaAtendimento > ? AND horaAtendimento < ? ' +
                ' AND status = ? AND localAtendimento = ? ' +
                ' ORDER BY horaAtendimento; ',
                [
                    dados.data,
                    dados.dataFinal,
                    0,
                    dados.local
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async chamarAgendamento(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT * FROM agendamento ' +
                ' WHERE horaAtendimento = (SELECT MIN(horaAtendimento) FROM agendamento WHERE horaAtendimento > ? AND horaAtendimento < ? AND localAtendimento = ?);',
                [
                    dados.data,
                    dados.dataFinal,
                    dados.local
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async chamarSenha(local) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT MIN(senha) AS "senha" FROM senhas WHERE status = ? AND local = ?;',
                [
                    0,
                    local
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

module.exports = new Agendamento()