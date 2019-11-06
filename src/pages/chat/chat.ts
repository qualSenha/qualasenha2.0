import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
<<<<<<< HEAD
  messages = [];
  nickname = '';
  message = '';
  model: Usuarios;
 
  constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket, private toastCtrl: ToastController) {
    this.nickname = this.navParams.get('nickname');

    this.model = new Usuarios()

    navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data
 
    console.log(this.model)
 
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });
 
    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }
 
  sendMessage() {
    this.socket.emit('add-message', { text: this.message, nickname:this.model.nome });
    this.message = '';
  }
 
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }
 
  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
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
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
}
