import { Component } from '@angular/core'
import { NavController, NavParams, AlertController, App } from 'ionic-angular'
import { ServidorProvider } from '../../providers/servidor/servidor'
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  model: Usuario

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private servidor: ServidorProvider,
    private appCtrl: App,
    private alertCtrl: AlertController
    ) {
      this.model = new Usuario()
      this.model = navParams.data      
  }

  ionViewDidEnter () {}

  putUsuario() {
    this.servidor.putUsuario(this.model)
      .then((result: any) => {
        this.showAlert()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Seus dados foram atualizados!',
      buttons: ['OK'],
    })

    alert.present()
  }

  sair(){
    
    this.appCtrl.getRootNav().push(LoginPage);
  }

}

export class Usuario {
  ra: any
  senha: any
  nome: any
  cpf: any
  email: any
  dataNascimento: any
  telefone: any
  id: any
  local: any
}