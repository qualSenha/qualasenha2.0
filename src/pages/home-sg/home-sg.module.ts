import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSgPage } from './home-sg';

@NgModule({
  declarations: [
    HomeSgPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSgPage),
  ],
})
export class HomeSgPageModule {}
