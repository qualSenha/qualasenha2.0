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
                ' SELECT u.*, a.horaAtendimento, s.senha AS "senhaAtendimento" ' +
                ' FROM usuario          AS u ' +
                ' LEFT JOIN agendamento AS a ON a.ra = u.ra AND a.status = ? ' +
                ' LEFT JOIN senhas      AS s ON s.ra = u.ra AND s.status = ? ' +
                ' WHERE u.ra = ? AND u.senha = ? ',
                [
                    0,
                    0,
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

    async getNormal(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT s.senha, s.local ' +
                ' FROM usuario          AS u ' +
                ' LEFT JOIN senhas      AS s ON s.ra = u.ra AND s.status <> ? ' +
                ' WHERE u.ra = ? AND u.senha = ? ',
                [
                    2,
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

    async getAgendada(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const [retorno] = await query
            (
                ' SELECT horaAtendimento, localAtendimento ' +
                ' FROM usuario          AS u ' +
                ' LEFT JOIN agendamento AS a ON a.ra = u.ra ' +
                ' WHERE u.ra = ? AND u.senha = ? AND a.status = ? ',
                [
                    dados.ra,
                    dados.senha,
                    0
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
                ' UPDATE usuario SET senha = ?, nome = ?, cpf = ?, email = ?, telefone = ?, dataNascimento = ? ' +
                ' WHERE ra = ? ',
                [
                    dados.senha,
                    dados.nome,
                    dados.cpf,
                    dados.email,
                    dados.telefone,
                    dados.dataNascimento,
                    dados.ra
                ]
            )

            return retorno
            
        } catch (err) {
            return err
        } finally {
            _dbConnection.destroy()
        }
    }

    async getUnidades() {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' SELECT * FROM unidades '
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