import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat'

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

  constructor(public navParams: NavParams) {
    this.model = new Usuarios()

    navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data

    console.log(this.model)
  }

  ionViewDidEnter () {}
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