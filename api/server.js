var express = require('express'),
  mysql = require('mysql'),
  consign = require('consign'),
  expressvalidator = require('express-validator'),
  cors = require('cors');

var port = 1000;
var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressvalidator());
app.listen(port, function () {
  console.log('servidor iniciado na porta ' + port);
});

/*****************************************************
************************routes************************
*****************************************************/

app.get('/', function (req, res) {
  res.status(200).send("api entrou");
});

/********************Check-In********************/

app.get('/rotamarota', function (req, res) {
  try {
    var _dbConnection = dbConnection()
    var _callback = function(error, result) {
      console.error(error)
      res.json(result)
    }

    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback)
    retornoBuscaSQL.get()
  } catch (error) {
    console.log(error)
  }
})

app.get('/usuarios', function (req, res) {
  try {
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      console.log(error)
      console.log(result)
      _dbConnection.destroy();
      res.status(200).json(result);
    }
    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuarios();
  } catch (error) {
    console.log('error ' + error);
    res.status(400).send(error);
  }
})

app.post('/usuario', function (req, res) {
  try {
    var dados = req.body

    var _dbConnection = dbConnection()

    var _callback = function (error, result) {
      _dbConnection.destroy()

      if (result.length > 0) {
        res.send(true)
      } else {
        res.send(false)
      }
    }

    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getUsuario(dados);

  } catch (error) {
    console.log('error ' + error);
    res.status(400).send(error);
  }
});



/*****************************************************
***********************database***********************
*****************************************************/

var dbConnection = function () {
  return mysql.createConnection
    (
      {
        /* host: '192.168.43.239',
        user: 'pedro',
        password: 'password',
        database: 'seminario',
        multipleStatements: true */
        host: 'remotemysql.com',
        user: 'wCMghCIswK',
        password: 'YxIx3J57Fd',
        database: 'wCMghCIswK',
        multipleStatements: true
      }
    );
}

/*****************************************************
************************consign***********************
*****************************************************/

/*consign()
	.include('modules/routes')
		.then('modules/config/db.js')
		.then('app/models')
		.then('app/controllers')
		.into(app);*/

/*****************************************************
************************model***********************
*****************************************************/

function buscaSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

buscaSQL.prototype.get = function () {
  this._dbConnection.query
    (
      ' SELECT * FROM login',
      this._callback
    );
}

buscaSQL.prototype.getUsuarios = function () {
  this._dbConnection.query
    (
      ' SELECT * FROM usuario',
      this._callback
    );
}

buscaSQL.prototype.getUsuario = function (dados) {
  this._dbConnection.query
    (
      ' SELECT * FROM usuario WHERE ra = ? AND senha = ? ',
      [
        dados.ra,
        dados.senha
      ],
      this._callback
    );
}

/*****************************************************************************************************************************************/
