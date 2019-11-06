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
<<<<<<< HEAD
    console.log('oi')
=======
<<<<<<< HEAD
>>>>>>> 90e7339c344296a44574e443e5c4e59866fad604
    this.servidor.getUsuario(this.model)
      .then((result: any) => {
        console.log(result)
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
=======
          this.navCtrl.push(TabsPage)
        
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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