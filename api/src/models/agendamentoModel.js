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
    async getAgendamento(ra) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT id FROM agendamento WHERE ra = ?; ',
                ra
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async postAgendamento(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' INSERT INTO agendamento (ra, horaAtendimento, horaGerada, status, localAtendimento, tipoSolicitacao) VALUES (?, ?, ?, ?, ?, ?) ',
                [
                    dados.ra,
                    dados.horaAtendimento,
                    dados.horaGerada,
                    0,
                    dados.localAtendimento,
                    dados.tipoSolicitacao
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async putAgendamento(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' UPDATE agendamento SET ' +
                ' horaAtendimento = ?, horaGerada = ?, status = ?, localAtendimento = ?, tipoSolicitacao = ? ' +
                ' WHERE id = ? ',
                [
                    dados.horaAtendimento,
                    dados.horaGerada,
                    0,
                    dados.localAtendimento,
                    dados.tipoSolicitacao,
                    dados.idAgendamento
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