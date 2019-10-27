import { Component } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { HomePage } from '../home/home'
import { ServidorProvider } from '../../providers/servidor/servidor'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	model: Agendamento

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private servidor: ServidorProvider,
		private alertCtrl: AlertController
	) {
		this.model = new Agendamento()
		this.model = navParams.data
	}

	agendar() {
		this.servidor.postAgendamento(this.model)
			.then((result: any) => {
				this.navParams.data = this.model
				this.navCtrl.setRoot(HomePage, this.model)
			})
			.catch((error: any) => {
				console.log(error)
			})
	}

	showAlert() {
	  const alert = this.alertCtrl.create({
		title: 'Sucesso!',
		subTitle: 'Agendamento realizado!',
		buttons: [
		  {
			text: 'Ok',
			handler: data => {
				this.agendar()
			}
		  }
		]
	  })
  
	  alert.present()
	}

}

export class Agendamento {
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