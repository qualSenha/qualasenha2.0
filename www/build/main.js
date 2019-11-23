webpackJsonp([4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servidor_servidor__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatPage = /** @class */ (function () {
    function ChatPage(navParams, socket, toastCtrl, servidor) {
        var _this = this;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.servidor = servidor;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = this.navParams.get('nickname');
        this.model = new Usuarios();
        navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data;
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        /* this.socket.on('message', (data) => {
          console.log(data)
          //this.messages.push(data)
        }) */
        /* this.getUsers().subscribe(data => {
          let user = data['user']
          if (data['event'] === 'left') {
            this.showToast('User left: ' + user)
          } else {
            this.showToast('User joined: ' + user)
          }
        }) */
    }
    ChatPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', {
            text: this.message,
            nickname: this.model.nome,
            ra: this.model.ra,
            origem: 'aluno',
            data: __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default()(new Date()).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss')
        });
        this.message = '';
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
                console.log(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        this.getChat();
    };
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatPage.prototype.getChat = function () {
        var _this = this;
        this.servidor.getChat(this.model.ra)
            .then(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var msg = result_1[_i];
                _this.messages.push(msg);
            }
            console.log(_this.messages);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title>\n       <span>Chat</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n      \n      <ion-col col-9 *ngIf="message.origem !== \'aluno\'" class="message" [ngClass]="{\'my_message\': message.origem === \'aluno\', \'other_message\': message.origem !== \'aluno\'}">\n        <span class="user_name">Atendimento:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.data}}</div>\n      </ion-col>\n \n      <ion-col offset-3 col-9 *ngIf="message.origem === \'aluno\'" class="message" [ngClass]="{\'my_message\': message.origem === \'aluno\', \'other_message\': message.origem !== \'aluno\'}">\n        <span class="user_name">{{ model.nome }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.data}}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n        Enviar\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _d || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c, _d;
}());

var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    return Usuarios;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomeSgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeSgPage = /** @class */ (function () {
    function HomeSgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeSgPage.prototype.openCancelar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HomeSgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeSgPage');
    };
    HomeSgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-sg',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home-sg/home-sg.html"*/'<ion-header>\n  <ion-navbar hideBackButton transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card-content class="preto">\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n    Senhas Chamadas<br>\n\n  </ion-list>\n</ion-card-content>\n\n<ion-card color="roxo">\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n    <ion-list >\n      Sua Senha:\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="openCancelar()" >\n          Cancelar\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">Guiche</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">02</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">03</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">04</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home-sg/home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
}());

//# sourceMappingURL=home-sg.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-room/chat-room.module": [
		457,
		0
	],
	"../pages/chat/chat.module": [
		458,
		3
	],
	"../pages/home-sg/home-sg.module": [
		459,
		2
	],
	"../pages/login/login.module": [
		460,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, alertCtrl, socket) {
        var _this = this;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.model = new Usuarios();
        navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data;
        this.socket.on('chamadoNormal', function (data) {
            console.log(_this.model.senhaAtendimento);
            if (data.senha == _this.model.senhaAtendimento)
                _this.showAlertSenha();
        });
        this.socket.on('chamadoAgendada', function (data) {
            console.log(_this.model.ra);
            if (data.senha == _this.model.ra)
                _this.showAlertSenha();
        });
    }
    TabsPage.prototype.ionViewDidEnter = function () { };
    TabsPage.prototype.showAlertSenha = function () {
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Senha esta sendo chamada!',
            buttons: ['OK'],
        });
        alert.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab4Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"]])
    ], TabsPage);
    return TabsPage;
}());

var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    return Usuarios;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export Agendamento */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, servidor, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.alertCtrl = alertCtrl;
        this.model = new Agendamento();
        this.model = navParams.data;
    }
    AboutPage.prototype.agendar = function () {
        var _this = this;
        this.servidor.postAgendamento(this.model)
            .then(function (result) {
            _this.navParams.data = _this.model;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], _this.model);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AboutPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Agendamento realizado!',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.agendar();
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title><span>Agendamento</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card-content class="preto">\n      <div class="title" text-center>\n        Dados Agendamento\n      </div>\n    </ion-card-content>\n\n  <ion-card-content class="texts">\n    <ion-item>\n      <ion-label>Local</ion-label>\n        <ion-select [(ngModel)]="model.localAtendimento">\n            <ion-option value="anaRosa">Ana Rosa</ion-option>\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n            <ion-option value="morumbi">Morumbi</ion-option>\n            <ion-option value="liberdade">Liberdade</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>  \n\n  <ion-card-content class="texts">\n    <ion-item>\n      <ion-label>Solicitação</ion-label>\n        <ion-select [(ngModel)]="model.tipoSolicitacao">\n          <ion-option value="financeiro">Financeiro</ion-option>\n          <ion-option value="matricula">Matricula</ion-option>\n          <ion-option value="disciplinas">Disciplinas (Eletivas, DP e ADAP)</ion-option>\n          <ion-option value="estagio">Estagio</ion-option>\n          <ion-option value="outros">Outros Serviços</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content class="texts">\n    <ion-item>\n      <ion-label>Dia</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="model.dia"></ion-datetime>\n    </ion-item>\n  </ion-card-content>\n\n  <ion-card-content class="texts">\n    <ion-item>\n      <ion-label>Hora</ion-label>\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="model.hora"></ion-datetime>\n    </ion-item> \n  </ion-card-content>\n\n  <ion-card-content>\n    <button [disabled]="model.senhaAtendimento" ion-button block large color="danger" (click)="showAlert()" round outline>Agendar</button>\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

var Agendamento = /** @class */ (function () {
    function Agendamento() {
    }
    return Agendamento;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, servidor, appCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.model = new Usuario();
        this.model = navParams.data;
    }
    ContactPage.prototype.ionViewDidEnter = function () { };
    ContactPage.prototype.putUsuario = function () {
        var _this = this;
        this.servidor.putUsuario(this.model)
            .then(function (result) {
            _this.showAlert();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ContactPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Seus dados foram atualizados!',
            buttons: ['OK'],
        });
        alert.present();
    };
    ContactPage.prototype.sair = function () {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar transparent class="vermelho">\n    <ion-title><span>Configurações</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card-content class="preto">\n      <div class="title" text-center>\n        Dados Pessoais\n      </div>\n    </ion-card-content>\n\n    <ion-card-content class="texts">\n      <ion-item>\n       <ion-label>Nome Completo:</ion-label>\n			<ion-input [(ngModel)]="model.nome" id="nome"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content class="texts">\n      <ion-item>\n        <ion-label>CPF: </ion-label>\n        <ion-input [(ngModel)]="model.cpf" id="cpf"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content class="texts">\n      <ion-item>\n        <ion-label>E-mail:</ion-label>\n        <ion-input [(ngModel)]="model.email" id="email"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  \n    <ion-card-content class="texts">\n      <ion-item>\n        <ion-label>Data de Nascimento:</ion-label>\n        <ion-datetime [(ngModel)]="model.dataNascimento" id="dataNascimento" displayFormat="DD/MM/YYYY"  pickerFormat="DD MM YYYY"></ion-datetime>\n      </ion-item>\n    </ion-card-content>\n \n    <ion-card-content style="text-align: left; font-size: 30px">\n      <ion-item>\n        <ion-label>Telefone: </ion-label>\n        <ion-input [(ngModel)]="model.telefone" id="telefone"></ion-input>\n      </ion-item>\n    </ion-card-content> \n\n  <ion-card-content>\n    <button ion-button block large color="danger" outline round (click)="putUsuario()">Atualizar</button>\n  </ion-card-content>\n\n  <ion-card-content>\n    <button ion-button block large color="danger" (click)="sair()"outline round >Sair</button>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServidorProvider = /** @class */ (function () {
    //private URL = "http://2629abe9.ngrok.io"
    //private URL = "http://6a83eff0.ngrok.io"
    function ServidorProvider(http) {
        this.http = http;
        this.URL = "http://localhost:5000";
        console.log('Hello ServidorProvider Provider');
    }
    ServidorProvider.prototype.getUsuario = function (model) {
        var _this = this;
        console.log('ou');
        var body = {
            "ra": model.ra,
            "senha": model.senha
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.URL, body)
                .subscribe(function (result) {
                console.log(result);
                resolve(result.json());
            }, function (error) {
                console.log(error);
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.putUsuario = function (dados) {
        var _this = this;
        var url = this.URL + "/putUsuario";
        var body = {
            "ra": dados.ra,
            "senha": dados.senha,
            "nome": dados.nome,
            "cpf": dados.cpf,
            "email": dados.email,
            "dataNascimento": dados.dataNascimento,
            "telefone": dados.telefone,
            "id": dados.ID
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.postAgendamento = function (dados) {
        var _this = this;
        var url = this.URL + "/postAgendamento";
        var body = {
            "ra": dados.ra,
            "hora": dados.hora,
            "dia": dados.dia,
            "localAtendimento": dados.localAtendimento,
            "tipoSolicitacao": dados.tipoSolicitacao
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.cancelarAgendamento = function (dados) {
        var _this = this;
        var url = this.URL + "/cancelarAgendamentos";
        var body = {
            "ra": dados.ra,
            "hora": dados.hora,
            "dia": dados.dia,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getSenhas = function (local) {
        var _this = this;
        var url = this.URL + "/getSenhasChamadas?local=" + local;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.gerarSenha = function (dados) {
        var _this = this;
        var url = this.URL + "/gerarSenha?local=" + dados.local + "&ra=" + dados.ra;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.cancelarSenha = function (dados) {
        var _this = this;
        var url = this.URL + "/cancelarSenha";
        var body = {
            "ra": dados.ra,
            "local": dados.localAtendimento
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(url, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider.prototype.getChat = function (ra) {
        var _this = this;
        var url = this.URL + "/getChat?ra=" + ra;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    ServidorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServidorProvider);
    return ServidorProvider;
    var _a;
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//const config: SocketIoConfig = { url: 'http://6a83eff0.ngrok.io', options: {} };
var config = { url: 'http://localhost:5000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-sg/home-sg.module#HomeSgPageModule', name: 'HomeSgPage', segment: 'home-sg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__["a" /* ServidorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 182,
	"./af.js": 182,
	"./ar": 183,
	"./ar-dz": 184,
	"./ar-dz.js": 184,
	"./ar-kw": 185,
	"./ar-kw.js": 185,
	"./ar-ly": 186,
	"./ar-ly.js": 186,
	"./ar-ma": 187,
	"./ar-ma.js": 187,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 189,
	"./ar-tn.js": 189,
	"./ar.js": 183,
	"./az": 190,
	"./az.js": 190,
	"./be": 191,
	"./be.js": 191,
	"./bg": 192,
	"./bg.js": 192,
	"./bm": 193,
	"./bm.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 203,
	"./de-at": 204,
	"./de-at.js": 204,
	"./de-ch": 205,
	"./de-ch.js": 205,
	"./de.js": 203,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-SG": 208,
	"./en-SG.js": 208,
	"./en-au": 209,
	"./en-au.js": 209,
	"./en-ca": 210,
	"./en-ca.js": 210,
	"./en-gb": 211,
	"./en-gb.js": 211,
	"./en-ie": 212,
	"./en-ie.js": 212,
	"./en-il": 213,
	"./en-il.js": 213,
	"./en-nz": 214,
	"./en-nz.js": 214,
	"./eo": 215,
	"./eo.js": 215,
	"./es": 216,
	"./es-do": 217,
	"./es-do.js": 217,
	"./es-us": 218,
	"./es-us.js": 218,
	"./es.js": 216,
	"./et": 219,
	"./et.js": 219,
	"./eu": 220,
	"./eu.js": 220,
	"./fa": 221,
	"./fa.js": 221,
	"./fi": 222,
	"./fi.js": 222,
	"./fo": 223,
	"./fo.js": 223,
	"./fr": 224,
	"./fr-ca": 225,
	"./fr-ca.js": 225,
	"./fr-ch": 226,
	"./fr-ch.js": 226,
	"./fr.js": 224,
	"./fy": 227,
	"./fy.js": 227,
	"./ga": 228,
	"./ga.js": 228,
	"./gd": 229,
	"./gd.js": 229,
	"./gl": 230,
	"./gl.js": 230,
	"./gom-latn": 231,
	"./gom-latn.js": 231,
	"./gu": 232,
	"./gu.js": 232,
	"./he": 233,
	"./he.js": 233,
	"./hi": 234,
	"./hi.js": 234,
	"./hr": 235,
	"./hr.js": 235,
	"./hu": 236,
	"./hu.js": 236,
	"./hy-am": 237,
	"./hy-am.js": 237,
	"./id": 238,
	"./id.js": 238,
	"./is": 239,
	"./is.js": 239,
	"./it": 240,
	"./it-ch": 241,
	"./it-ch.js": 241,
	"./it.js": 240,
	"./ja": 242,
	"./ja.js": 242,
	"./jv": 243,
	"./jv.js": 243,
	"./ka": 244,
	"./ka.js": 244,
	"./kk": 245,
	"./kk.js": 245,
	"./km": 246,
	"./km.js": 246,
	"./kn": 247,
	"./kn.js": 247,
	"./ko": 248,
	"./ko.js": 248,
	"./ku": 249,
	"./ku.js": 249,
	"./ky": 250,
	"./ky.js": 250,
	"./lb": 251,
	"./lb.js": 251,
	"./lo": 252,
	"./lo.js": 252,
	"./lt": 253,
	"./lt.js": 253,
	"./lv": 254,
	"./lv.js": 254,
	"./me": 255,
	"./me.js": 255,
	"./mi": 256,
	"./mi.js": 256,
	"./mk": 257,
	"./mk.js": 257,
	"./ml": 258,
	"./ml.js": 258,
	"./mn": 259,
	"./mn.js": 259,
	"./mr": 260,
	"./mr.js": 260,
	"./ms": 261,
	"./ms-my": 262,
	"./ms-my.js": 262,
	"./ms.js": 261,
	"./mt": 263,
	"./mt.js": 263,
	"./my": 264,
	"./my.js": 264,
	"./nb": 265,
	"./nb.js": 265,
	"./ne": 266,
	"./ne.js": 266,
	"./nl": 267,
	"./nl-be": 268,
	"./nl-be.js": 268,
	"./nl.js": 267,
	"./nn": 269,
	"./nn.js": 269,
	"./pa-in": 270,
	"./pa-in.js": 270,
	"./pl": 271,
	"./pl.js": 271,
	"./pt": 272,
	"./pt-br": 273,
	"./pt-br.js": 273,
	"./pt.js": 272,
	"./ro": 274,
	"./ro.js": 274,
	"./ru": 275,
	"./ru.js": 275,
	"./sd": 276,
	"./sd.js": 276,
	"./se": 277,
	"./se.js": 277,
	"./si": 278,
	"./si.js": 278,
	"./sk": 279,
	"./sk.js": 279,
	"./sl": 280,
	"./sl.js": 280,
	"./sq": 281,
	"./sq.js": 281,
	"./sr": 282,
	"./sr-cyrl": 283,
	"./sr-cyrl.js": 283,
	"./sr.js": 282,
	"./ss": 284,
	"./ss.js": 284,
	"./sv": 285,
	"./sv.js": 285,
	"./sw": 286,
	"./sw.js": 286,
	"./ta": 287,
	"./ta.js": 287,
	"./te": 288,
	"./te.js": 288,
	"./tet": 289,
	"./tet.js": 289,
	"./tg": 290,
	"./tg.js": 290,
	"./th": 291,
	"./th.js": 291,
	"./tl-ph": 292,
	"./tl-ph.js": 292,
	"./tlh": 293,
	"./tlh.js": 293,
	"./tr": 294,
	"./tr.js": 294,
	"./tzl": 295,
	"./tzl.js": 295,
	"./tzm": 296,
	"./tzm-latn": 297,
	"./tzm-latn.js": 297,
	"./tzm.js": 296,
	"./ug-cn": 298,
	"./ug-cn.js": 298,
	"./uk": 299,
	"./uk.js": 299,
	"./ur": 300,
	"./ur.js": 300,
	"./uz": 301,
	"./uz-latn": 302,
	"./uz-latn.js": 302,
	"./uz.js": 301,
	"./vi": 303,
	"./vi.js": 303,
	"./x-pseudo": 304,
	"./x-pseudo.js": 304,
	"./yo": 305,
	"./yo.js": 305,
	"./zh-cn": 306,
	"./zh-cn.js": 306,
	"./zh-hk": 307,
	"./zh-hk.js": 307,
	"./zh-tw": 308,
	"./zh-tw.js": 308
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 430;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export Home */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, servidor, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.servidor = servidor;
        this.navParams = navParams;
        this.model = new Home();
        this.model = navParams.data;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        this.senhas = [];
        this.getSenhas();
        switch (this.model.localAtendimento) {
            case 'anaRosa':
                this.model.onde = 'Ana Rosa';
                break;
            case 'anhangabau':
                this.model.onde = 'Vale do Anhangabaú';
                break;
            case 'predioTres':
                this.model.onde = 'Liberdade Prédio 3';
                break;
            case 'saoBernardo':
                this.model.onde = 'São Bernardo do Campo';
                break;
            case 'brigadeiro':
                this.model.onde = 'Brigadeiro';
                break;
            case 'predioDez':
                this.model.onde = 'Liberdade Prédio 10';
                break;
            case 'ponteEstaiada':
                this.model.onde = 'Ponte Estaiada';
                break;
            case 'itaimBibi':
                this.model.onde = 'Itaim Bibi';
                break;
            case 'posGraduacao':
                this.model.onde = 'Centro de Pós-Graduação';
                break;
            case 'vilaMarianaI':
                this.model.onde = 'Vila Mariana I';
                break;
            case 'vilaMarianaII':
                this.model.onde = 'Vila Mariana II';
                break;
            case 'santoAmaro':
                this.model.onde = 'Santo Amaro';
                break;
            case 'morumbi':
                this.model.onde = 'Morumbi';
                break;
            case 'liberdade':
                this.model.onde = 'Liberdade';
                break;
        }
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Senha gerada com sucesso!',
            buttons: ['OK'],
        });
        alert.present();
    };
    HomePage.prototype.openGerar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__["a" /* HomeSgPage */]);
    };
    HomePage.prototype.cancelar = function () {
        var _this = this;
        this.servidor.cancelarAgendamento(this.model)
            .then(function (result) {
            _this.model.dia = null;
            _this.navParams.data = _this.model;
            _this.navCtrl.setRoot(HomePage_1, _this.model);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getSenhas = function () {
        var _this = this;
        this.servidor.getSenhas(this.model.local)
            .then(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var senha = result_1[_i];
                _this.senhas.push(senha);
            }
            console.log(_this.senhas);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.gerarSenha = function () {
        var _this = this;
        this.servidor.gerarSenha(this.model)
            .then(function (result) {
            _this.model.senhaAtendimento = result.senha;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.cancelarSenha = function () {
        var _this = this;
        this.servidor.cancelarSenha(this.model)
            .then(function (result) {
            _this.model.senhaAtendimento = null;
            _this.navParams.data = _this.model;
            _this.navCtrl.setRoot(HomePage_1, _this.model);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar transparent class="vermelho">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card-content *ngIf="model.dia" class="preto">\n        <div class="title" text-center>\n            Agendamento\n        </div>\n      </ion-card-content>\n\n    <ion-card *ngIf="model.dia">      \n        <ion-list>\n          <button ion-item style="font-size: 20px">\n            <ion-icon name="clock" item-start></ion-icon>\n            {{ model.dia | date: \'dd/MM/yyyy\' }} {{ model.hora }}\n          </button>\n      \n          <button ion-item style="font-size: 20px">\n            <ion-icon name="compass" item-start></ion-icon>\n            {{ model.onde }}\n          </button>      \n        </ion-list>\n      </ion-card>\n\n      <ion-card-content *ngIf="model.dia">\n        <button ion-button block large (click)="cancelar()" color="danger" round outline>cancelar\n        </button>\n      </ion-card-content>\n\n      <ion-card-content *ngIf="model.senhaAtendimento"  class="preto">\n        <div class="title" text-center>\n            Sua Senha\n        </div>\n      </ion-card-content>\n\n    <ion-card *ngIf="model.senhaAtendimento">      \n        <ion-list>\n          <button ion-item style="font-size: 20px">\n            <ion-icon name="key" item-start></ion-icon>\n            {{ model.senhaAtendimento }}\n          </button>\n          <button ion-item style="font-size: 20px">\n            <ion-icon name="compass" item-start></ion-icon>\n            {{ model.onde }}\n          </button>       \n        </ion-list>\n      </ion-card>\n\n      <ion-card-content *ngIf="model.senhaAtendimento" >\n        <button ion-button block large (click)="cancelarSenha()" color="danger" round outline>cancelar\n        </button>\n      </ion-card-content>\n\n  <!--ion-card *ngIf="model.dia" color="roxo">\n    <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n      <ion-card-header>\n        Agendamento\n      </ion-card-header>\n      <ion-card-body>\n        Você possui um agendamento para\n      </ion-card-body>\n    </ion-card-content>\n\n  </ion-card-->\n\n  <ion-card-content class="preto">\n      <div class="title" text-center>\n        Senhas chamadas\n      </div>\n  </ion-card-content>\n\n  <ion-card>\n    <ion-card-content style="font-size: 30px; background-color: #9C9C9C">\n      <ion-row>\n        <ion-col col-4 style="text-align: center;">Senha</ion-col>\n        <ion-col style="text-align: center;">| </ion-col>\n        <ion-col style="text-align: center;">Guiche</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card-content *ngFor="let senha of senhas" style="font-size: 30px">\n    <ion-row>\n      <ion-col col-4 style="text-align: center;">{{senha.senha}}</ion-col>\n      <ion-col style="text-align: center;">| </ion-col>\n      <ion-col style="text-align: center;">01</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n  <ion-card-content>\n    <button [disabled]="model.dia||model.senhaAtendimento" ion-button block large (click)="showAlert();gerarSenha()" color="danger" round outline>Gerar Senha\n    </button>\n  </ion-card-content>\n\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(toast, navCtrl, navParams, alertCtrl, servidor, http) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.servidor = servidor;
        this.http = http;
        this.model = new Usuario();
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.getUsuario = function () {
        var _this = this;
        this.servidor.getUsuario(this.model)
            .then(function (result) {
            console.log(result);
            if (result) {
                var batata = _this.model.local;
                _this.model = result;
                _this.model.local = batata;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {
                    model: _this.model
                });
            }
            else {
                _this.toast.create({ message: 'RA ou senha incorreto.', position: 'botton', duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/login/login.html"*/'<ion-content padding>\n\n\n  <img src="assets/imgs/logos.png" style="width: 100%" />\n\n\n  <ion-card>\n	  <ion-item style="background-color: #A4A4A4">\n	    <ion-label  style="color: #FFFFFF" stacked>R.A.</ion-label>\n	   	<ion-input  style="color:#000000"  type="text" [(ngModel)]="model.ra"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n  <ion-card>\n	  <ion-item style="background-color: #A4A4A4">\n	    <ion-label style="color: #FFFFFF" stacked>Senha</ion-label>	\n	    <ion-input style="color:#000000" type="password" [(ngModel)]="model.senha"></ion-input>\n	  </ion-item>\n  </ion-card>\n\n    <ion-card>\n    <ion-item style="background-color: #A4A4A4" >\n      <ion-label style="color: #FFFFFF">Local de Atendimento</ion-label>\n        <ion-select [(ngModel)]="model.local">\n          <ion-option value="anaRosa">Ana Rosa</ion-option>\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n            <ion-option value="morumbi">Morumbi</ion-option>\n            <ion-option value="liberdade">Liberdade</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-card>\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n      <ion-list>\n            <h1> \n              <button style="background-color: #FF0000" ion-button large full (click)="getUsuario()" round>ENTRAR</button>\n            </h1>\n      </ion-list>\n    </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map