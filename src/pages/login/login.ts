import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: Usuario;

  constructor(
    public toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public servidor: ServidorProvider,
    public http: Http ) {
    this.model = new Usuario();
  }
    
  ionViewDidLoad() {}

  getUsuario() {
          this.navCtrl.push(TabsPage)
        
  }
}

export class Usuario {
  ra: any
  senha: any
  local: any
  ID: any
  nome: any
  cpf: any
  email: any
  telefone: any
  dataNascimento: any
  horaAtendimento: any
  localAtendimento: any
  tipoSolicitacao: any
  status: any
  hora: any
  dia: any
}