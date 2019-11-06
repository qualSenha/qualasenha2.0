import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';

@Injectable()
export class ServidorProvider {

  //private URL = "http://localhost:5000"
<<<<<<< HEAD
  //private URL = "http://2629abe9.ngrok.io"
  private URL = "http://192.168.43.81:5000"
=======
<<<<<<< HEAD
  private URL = "http://04f61b32.ngrok.io"
=======
  private URL = "http://2629abe9.ngrok.io"
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
>>>>>>> 90e7339c344296a44574e443e5c4e59866fad604

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider')
  }

  getUsuario(model) {
    console.log('ou')
    let body = {
      "ra": model.ra, 
      "senha": model.senha
    }

    return new Promise((resolve,reject) => {
      this.http.post(this.URL, body)
      .subscribe(
        (result: any) => {
          console.log(result)
          resolve(result.json())
        },
        (error: any) => {
          console.log(error)
          reject(error.json())
        }
      )
    })
  }

  putUsuario(dados) {
    let url = `${this.URL}/putUsuario`

    let body = {
      "ra": dados.ra, 
      "senha": dados.senha,
      "nome": dados.nome,
      "cpf": dados.cpf,
      "email": dados.email,
      "dataNascimento": dados.dataNascimento,
      "telefone": dados.telefone,
      "id": dados.ID
    }

    return new Promise((resolve,reject) => {
      this.http.post(url, body)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }

  postAgendamento(dados) {
    let url = `${this.URL}/postAgendamento`

    let body = {
      "ra": dados.ra, 
      "hora": dados.hora,
      "dia": dados.dia,
      "localAtendimento": dados.localAtendimento,
      "tipoSolicitacao": dados.tipoSolicitacao
    }

    return new Promise((resolve,reject) => {
      this.http.post(url, body)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }

  cancelarAgendamento(dados) {
    let url = `${this.URL}/cancelarAgendamentos`

    let body = {
      "ra": dados.ra, 
      "hora": dados.hora,
      "dia": dados.dia,
    }

    return new Promise((resolve,reject) => {
      this.http.post(url, body)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }

  getSenhas(local) {
    let url = `${this.URL}/getSenhas?local=${local}`

    return new Promise((resolve,reject) => {
      this.http.get(url)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }

  gerarSenha(dados) {
    let url = `${this.URL}/gerarSenha?local=${dados.local}&ra=${dados.ra}`

    return new Promise((resolve,reject) => {
      this.http.get(url)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }

  cancelarSenha(dados) {
    let url = `${this.URL}/cancelarSenha`

    let body = {
      "ra": dados.ra,
      "local": dados.localAtendimento
    }

    return new Promise((resolve,reject) => {
      this.http.post(url, body)
      .subscribe(
        (result: any) => {
          resolve(result.json())
        },
        (error: any) => {
          reject(error.json())
        }
      )
    })
  }


}
