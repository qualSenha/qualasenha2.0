import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';

@Injectable()
export class ServidorProvider {

  //private URL = "http://localhost:5000"
  private URL = "http://65c42b1f.ngrok.io"

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider')
  }

  getUsuario(model) {
    let body = {
      "ra": model.ra, 
      "senha": model.senha
    }

    return new Promise((resolve,reject) => {
      this.http.post(this.URL, body)
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

}
