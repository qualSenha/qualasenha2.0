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
    this.servidor.getUsuario(this.model)
      .then((result: any) => {
        if(result) {
          var batata = this.model.local
          this.model= result
          this.model.local=batata
          this.navCtrl.push(TabsPage, {
            model: this.model
          })
        } else {
          this.toast.create({ message: 'RA ou senha incorreto.', position: 'botton', duration: 3000 }).present()
        }
      })
      .catch((error: any) => {
        console.log(error)
      });
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