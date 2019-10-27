import { Component } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { ServidorProvider } from '../../providers/servidor/servidor'

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