import { Component } from '@angular/core'
import { IonicPage, NavParams, ToastController } from 'ionic-angular'
import { Socket } from 'ng-socket-io'
import { Observable } from 'rxjs/Observable'
import moment from 'moment-timezone'

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  messages = []
  nickname = ''
  message = ''
  model: Usuarios
 
  constructor(
    private navParams: NavParams, 
    private socket: Socket, 
    private toastCtrl: ToastController
  ) {
    this.nickname = this.navParams.get('nickname')

    this.model = new Usuarios()

    navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data
 
    console.log(this.model)
 
    this.getMessages().subscribe(message => {
      this.messages.push(message)
    })
 
    this.getUsers().subscribe(data => {
      let user = data['user']
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user)
      } else {
        this.showToast('User joined: ' + user)
      }
    })
  }
 
  sendMessage() {
    this.socket.emit('add-message', { 
      text: this.message, 
      nickname: this.model.nome,
      data: moment(new Date()).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')
    })
    this.message = ''
  }
 
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data)
      })
    })
    return observable
  }
 
  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data)
      })
    })
    return observable
  }
 
  ionViewWillLeave() {
    this.socket.disconnect()
  }
 
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    })
    toast.present()
  }
}

export class Usuarios {
  ra: any
  senha: any
  nome: any
  cpf: any
  email: any
  dataNascimento: any
  telefone: any
  id: any
	localAtendimento: any
	tipoSolicitacao: any
	dia: any
  hora: any
  local: any
}
