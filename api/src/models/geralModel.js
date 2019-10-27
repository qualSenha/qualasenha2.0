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
    async getSenhas(local) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' SELECT * FROM senhas WHERE local = ? AND status = ? ORDER BY id ',
                [
                    local,
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

    async postSenha(dados) {
        try {
            var _dbConnection = dbConnection()
            const query = util.promisify(_dbConnection.query).bind(_dbConnection)

            const retorno = await query
            (
                ' INSERT INTO senhas (senha, local, status, ra) VALUES (?, ?, ?, ?); ',
                [
                    dados.senha,
                    dados.local,
                    0,
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
}

module.exports = new Inquilino()