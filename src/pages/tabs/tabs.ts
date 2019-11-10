import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular'
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat' ;
import { Socket } from 'ng-socket-io'

import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  model: Usuarios;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ChatPage;
  tab4Root = ContactPage;

  constructor(public navParams: NavParams,
              private alertCtrl: AlertController,
              private socket: Socket
            ) {
    this.model = new Usuarios()

    navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data

    this.socket.on('chamadoNormal',data =>{
      console.log(this.model.senhaAtendimento)
      if(data.senha==this.model.senhaAtendimento)
        this.showAlertSenha()
    })
    this.socket.on('chamadoAgendada',data =>{
      console.log(this.model.ra)
      if(data.senha==this.model.ra)
        this.showAlertSenha()
    })
  }

  ionViewDidEnter () {}

  showAlertSenha() {
		const alert = this.alertCtrl.create({
			title: 'Atenção!',
			subTitle: 'Senha esta sendo chamada!',
			buttons: ['OK'],
		});
		alert.present();
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
  senhaAtendimento: any
}