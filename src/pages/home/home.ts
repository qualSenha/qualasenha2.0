import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { HomeSgPage } from '../home-sg/home-sg';
import { ServidorProvider } from '../../providers/servidor/servidor';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	model: Home


	constructor(
		private navCtrl: NavController,
		private alertCtrl: AlertController,
		private servidor: ServidorProvider,
		private navParams: NavParams
	) {
		this.model = new Home()

		this.model = navParams.data
	}

	ionViewDidEnter() {
		switch(this.model.localAtendimento) {
			case 'anaRosa' :
				this.model.onde = 'Ana Rosa'
				break
			case 'anhangabau' :
				this.model.onde = 'Vale do Anhangabaú'
				break
			case 'predioTres' :
				this.model.onde = 'Liberdade Prédio 3'
				break
			case 'saoBernardo' :
				this.model.onde = 'São Bernardo do Campo'
				break
			case 'brigadeiro' :
				this.model.onde = 'Brigadeiro'
				break
			case 'predioDez' :
				this.model.onde = 'Liberdade Prédio 10'
				break
			case 'ponteEstaiada' :
				this.model.onde = 'Ponte Estaiada'
				break
			case 'itaimBibi' :
				this.model.onde = 'Itaim Bibi'
				break
			case 'posGraduacao' :
				this.model.onde = 'Centro de Pós-Graduação'
				break
			case 'vilaMarianaI' :
				this.model.onde = 'Vila Mariana I'
				break
			case 'vilaMarianaII' :
				this.model.onde = 'Vila Mariana II'
				break
			case 'santoAmaro' :
				this.model.onde = 'Santo Amaro'
				break
			case 'morumbi' :
				this.model.onde = 'Morumbi'
				break
			case 'liberdade' :
				this.model.onde = 'Liberdade'
				break
		}
	}

	showAlert() {
		const alert = this.alertCtrl.create({
			title: 'Sucesso!',
			subTitle: 'Senha gerada com sucesso!',
			buttons: ['OK'],
		});
		alert.present();
	}

	openGerar() {
		this.navCtrl.setRoot(HomeSgPage);
	}

	cancelar() {
		this.servidor.cancelarAgendamento(this.model)
			.then((result: any) => {
				this.model.dia=null
				this.navParams.data = this.model
				this.navCtrl.setRoot(HomePage, this.model)
			})
			.catch((error: any) => {
				console.log(error)
			})
	}
}

export class Home {
	ra: any
	senha: any
	nome: any
	cpf: any
	email: any
	dataNascimento: any
	telefone: any
	id: any
	onde: any
	localAtendimento: any
	tipoSolicitacao: any
	dia: any
	hora: any
	local: any
}