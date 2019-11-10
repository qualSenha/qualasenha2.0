import { Component } from '@angular/core'
import { IonicPage, NavParams, ToastController } from 'ionic-angular'
import { Socket } from 'ng-socket-io'
import { Observable } from 'rxjs/Observable'
import moment from 'moment-timezone'
import { ServidorProvider } from '../../providers/servidor/servidor';

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
    private toastCtrl: ToastController,
    private servidor: ServidorProvider
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
    console.log("cccccccccccccc")
    this.socket.emit('add-message', { 
      text: this.message, 
      nickname: this.model.nome,
      ra: this.model.ra,
      origem: 'aluno',
      data: moment(new Date()).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss')
    })
    this.message = ''
  }
 
  getMessages() {
    console.log('bbbbbbb')
    let observable = new Observable(observer => {
      console.log('aaasas')
      this.socket.on('message', (data) => {
        observer.next(data)
        console.log(data)
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

  ionViewDidEnter(){
    this.getChat()
  }
 
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    })
    toast.present()
  }

  getChat(){
    this.servidor.getChat(this.model.ra)
			.then((result: any) => {
			for(let msg of result){
				this.messages.push(msg)
			}
      console.log(this.messages)
      })
			.catch((error: any) => {
				console.log(error)
			})
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
