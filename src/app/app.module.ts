import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServidorProvider } from '../providers/servidor/servidor';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { HomeSgPage } from '../pages/home-sg/home-sg';
import { LoginPage } from '../pages/login/login';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatPage } from '../pages/chat/chat';
const config: SocketIoConfig = { url: 'http://d092bccc.ngrok.io', options: {} };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeSgPage,
    ChatPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeSgPage,
    ChatPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServidorProvider
  ]
})
export class AppModule {}
