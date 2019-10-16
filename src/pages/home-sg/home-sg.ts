import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the HomeSgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-sg',
  templateUrl: 'home-sg.html',
})
export class HomeSgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openCancelar() {
		this.navCtrl.push(HomePage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSgPage');
  }

}
