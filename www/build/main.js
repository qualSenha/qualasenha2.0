webpackJsonp([3],{

<<<<<<< HEAD
/***/ 114:
=======
/***/ 103:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
=======
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
<<<<<<< HEAD
    HomeSgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-sg',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\home-sg\home-sg.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton transparent style="background-color: #FF0000">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n  <ion-card-content class="preto">\n\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n    Senhas Chamadas<br>\n\n\n\n  </ion-list>\n\n</ion-card-content>\n\n\n\n<ion-card color="roxo">\n\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n\n    <ion-list >\n\n      Sua Senha:\n\n    <ion-item-sliding>\n\n\n\n      <ion-item>\n\n\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n\n      </ion-item>\n\n\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="openCancelar()" >\n\n          Cancelar\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">Guiche</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">02</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">03</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">04</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\home-sg\home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
=======
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar transparent style="background-color: #FF0000">\n    <ion-title>\n       <span>Chat</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Message" [(ngModel)]="Mensagem"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="enviarMensagem()" [disabled]="Mensagem === \'\'">\n        Enviar\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
}());

//# sourceMappingURL=chat.js.map

/***/ }),

<<<<<<< HEAD
/***/ 115:
=======
/***/ 104:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.getUsuario = function () {
        var _this = this;
        this.servidor.getUsuario(this.model)
            .then(function (result) {
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n\n\n  <img src="assets/imgs/logos.png" style="width: 100%" />\n\n\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label  style="color: #FFFFFF" stacked>R.A.</ion-label>\n\n	   	<ion-input  style="color:#000000"  type="text" [(ngModel)]="model.ra" ></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label style="color: #FFFFFF" stacked>Senha</ion-label>	\n\n	    <ion-input style="color:#000000" type="password" [(ngModel)]="model.senha"></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card>\n\n    <ion-item style="background-color: #A4A4A4" >\n\n      <ion-label style="color: #FFFFFF">Local de Atendimento</ion-label>\n\n        <ion-select [(ngModel)]="model.local">\n\n          <ion-option value="anaRosa">Ana Rosa</ion-option>\n\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n\n            <ion-option value="morumbi">Morumbi</ion-option>\n\n            <ion-option value="liberdade">Liberdade</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n\n      <ion-list>\n\n            <h1> \n\n              <button style="background-color: #FF0000" ion-button large full (click)="getUsuario()" round>ENTRAR</button>\n\n            </h1>\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
=======
    HomeSgPage.prototype.openCancelar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HomeSgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeSgPage');
    };
    HomeSgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-sg',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\home-sg\home-sg.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton transparent style="background-color: #FF0000">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n  <ion-card-content class="preto">\n\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n\n    Senhas Chamadas<br>\n\n\n\n  </ion-list>\n\n</ion-card-content>\n\n\n\n<ion-card color="roxo">\n\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n\n    <ion-list >\n\n      Sua Senha:\n\n    <ion-item-sliding>\n\n\n\n      <ion-item>\n\n\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n\n      </ion-item>\n\n\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" (click)="openCancelar()" >\n\n          Cancelar\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">Guiche</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">02</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">03</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="font-size: 30px">\n\n  <ion-row>\n\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n\n    <ion-col style="text-align: center;">| </ion-col>\n\n    <ion-col style="text-align: center;">04</ion-col>\n\n  </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\home-sg\home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
}());

//# sourceMappingURL=home-sg.js.map

/***/ }),

<<<<<<< HEAD
/***/ 125:
=======
/***/ 114:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-room/chat-room.module": [
		324,
		5
	],
	"../pages/chat/chat.module": [
		328,
		8
	],
	"../pages/home-sg/home-sg.module": [
		325,
		7
	],
	"../pages/login/login.module": [
		326,
		6
=======
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		276,
		2
	],
	"../pages/home-sg/home-sg.module": [
		277,
		1
	],
	"../pages/login/login.module": [
		278,
		0
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
webpackAsyncContext.id = 166;
=======
webpackAsyncContext.id = 155;
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 180:
=======
/***/ 156:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(183);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(103);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
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
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.model = new Usuarios();
        navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data;
        console.log(this.model);
    }
    TabsPage.prototype.ionViewDidEnter = function () { };
    TabsPage = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Chat" tabIcon="settings"></ion-tab>\n\n  <ion-tab [root]="tab4Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\tabs\tabs.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n\n  <ion-tab [root]="tab4Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\tabs\tabs.html"*/
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
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

<<<<<<< HEAD
/***/ 181:
=======
/***/ 157:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export Agendamento */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(40);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Agendamento</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Dados Agendamento\n\n      </div>\n\n    </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Local</ion-label>\n\n        <ion-select [(ngModel)]="model.localAtendimento">\n\n            <ion-option value="anaRosa">Ana Rosa</ion-option>\n\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n\n            <ion-option value="morumbi">Morumbi</ion-option>\n\n            <ion-option value="liberdade">Liberdade</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>  \n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Solicitação</ion-label>\n\n        <ion-select [(ngModel)]="model.tipoSolicitacao">\n\n          <ion-option value="financeiro">Financeiro</ion-option>\n\n          <ion-option value="matricula">Matricula</ion-option>\n\n          <ion-option value="disciplinas">Disciplinas (Eletivas, DP e ADAP)</ion-option>\n\n          <ion-option value="estagio">Estagio</ion-option>\n\n          <ion-option value="outros">Outros Serviços</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Dia</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="model.dia"></ion-datetime>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Hora</ion-label>\n\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="model.hora"></ion-datetime>\n\n    </ion-item> \n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button [disabled]="model.senhaAtendimento" ion-button block large color="danger" (click)="showAlert()" round outline>Agendar</button>\n\n  </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar transparent style="background-color: #FF0000">\n\n    <ion-title><span>Agendamento</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Dados Agendamento\n\n      </div>\n\n    </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Local</ion-label>\n\n        <ion-select [(ngModel)]="model.localAtendimento">\n\n            <ion-option value="anaRosa">Ana Rosa</ion-option>\n\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n\n            <ion-option value="morumbi">Morumbi</ion-option>\n\n            <ion-option value="liberdade">Liberdade</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>  \n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Solicitação</ion-label>\n\n        <ion-select [(ngModel)]="model.tipoSolicitacao">\n\n          <ion-option value="financeiro">Financeiro</ion-option>\n\n          <ion-option value="matricula">Matricula</ion-option>\n\n          <ion-option value="disciplinas">Disciplinas (Eletivas, DP e ADAP)</ion-option>\n\n          <ion-option value="estagio">Estagio</ion-option>\n\n          <ion-option value="outros">Outros Serviços</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Dia</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="model.dia"></ion-datetime>\n\n    </ion-item>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content class="texts">\n\n    <ion-item>\n\n      <ion-label>Hora</ion-label>\n\n      <ion-datetime displayFormat="HH:mm" [(ngModel)]="model.hora"></ion-datetime>\n\n    </ion-item> \n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button [disabled]="model.senhaAtendimento" ion-button block large color="danger" (click)="showAlert()" round outline>Agendar</button>\n\n  </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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

<<<<<<< HEAD
/***/ 182:
=======
/***/ 158:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(115);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar transparent class="vermelho">\n\n    <ion-title><span>Configurações</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Dados Pessoais\n\n      </div>\n\n    </ion-card-content>\n\n\n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n       <ion-label>Nome Completo:</ion-label>\n\n			<ion-input [(ngModel)]="model.nome" id="nome"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>CPF: </ion-label>\n\n        <ion-input [(ngModel)]="model.cpf" id="cpf"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>E-mail:</ion-label>\n\n        <ion-input [(ngModel)]="model.email" id="email"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>Data de Nascimento:</ion-label>\n\n        <ion-datetime [(ngModel)]="model.dataNascimento" id="dataNascimento" displayFormat="DD/MM/YYYY"  pickerFormat="DD MM YYYY"></ion-datetime>\n\n      </ion-item>\n\n    </ion-card-content>\n\n \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item>\n\n        <ion-label>Telefone: </ion-label>\n\n        <ion-input [(ngModel)]="model.telefone" id="telefone"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content> \n\n\n\n  <ion-card-content>\n\n    <button ion-button block large color="danger" outline round (click)="putUsuario()">Atualizar</button>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button ion-button block large color="danger" (click)="sair()"outline round >Sair</button>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b, _c, _d, _e;
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar transparent class="vermelho">\n\n    <ion-title><span>Configurações</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Dados Pessoais\n\n      </div>\n\n    </ion-card-content>\n\n\n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n       <ion-label>Nome Completo:</ion-label>\n\n			<ion-input [(ngModel)]="model.nome" id="nome"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>CPF: </ion-label>\n\n        <ion-input [(ngModel)]="model.cpf" id="cpf"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>E-mail:</ion-label>\n\n        <ion-input [(ngModel)]="model.email" id="email"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content class="texts">\n\n      <ion-item>\n\n        <ion-label>Data de Nascimento:</ion-label>\n\n        <ion-datetime [(ngModel)]="model.dataNascimento" id="dataNascimento" displayFormat="DD/MM/YYYY"  pickerFormat="DD MM YYYY"></ion-datetime>\n\n      </ion-item>\n\n    </ion-card-content>\n\n \n\n    <ion-card-content style="text-align: left; font-size: 30px">\n\n      <ion-item>\n\n        <ion-label>Telefone: </ion-label>\n\n        <ion-input [(ngModel)]="model.telefone" id="telefone"></ion-input>\n\n      </ion-item>\n\n    </ion-card-content> \n\n\n\n  <ion-card-content>\n\n    <button ion-button block large color="danger" outline round (click)="putUsuario()">Atualizar</button>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button ion-button block large color="danger" (click)="sair()"outline round >Sair</button>\n\n  </ion-card-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

<<<<<<< HEAD
/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
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
    function ChatPage(navCtrl, navParams, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = this.navParams.get('nickname');
        this.model = new Usuarios();
        navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data;
        console.log(this.model);
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showToast('User left: ' + user);
            }
            else {
                _this.showToast('User joined: ' + user);
            }
        });
    }
    ChatPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message, nickname: this.model.nome });
        this.message = '';
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
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
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar transparent class="vermelho">\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n      \n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n        Send\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
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

/***/ 227:
=======
/***/ 202:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 249:
=======
/***/ 225:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(183);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__ = __webpack_require__(103);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















<<<<<<< HEAD

var config = { url: 'http://04f61b32.ngrok.io', options: {} };
=======
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
=======
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */]
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
<<<<<<< HEAD
                        { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
=======
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
=======
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */]
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
<<<<<<< HEAD
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
=======
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
                __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__["a" /* ServidorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 296:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 316:
=======
/***/ 268:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(115);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 43:
=======
/***/ 40:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
    function ServidorProvider(http) {
        this.http = http;
        //private URL = "http://localhost:5000"
<<<<<<< HEAD
        this.URL = "http://04f61b32.ngrok.io";
=======
        this.URL = "http://2629abe9.ngrok.io";
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
        console.log('Hello ServidorProvider Provider');
    }
    ServidorProvider.prototype.getUsuario = function (model) {
        var _this = this;
        var body = {
            "ra": model.ra,
            "senha": model.senha
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.URL, body)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
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
        var url = this.URL + "/getSenhas?local=" + local;
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
    ServidorProvider = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServidorProvider);
    return ServidorProvider;
    var _a;
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServidorProvider);
    return ServidorProvider;
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

<<<<<<< HEAD
/***/ 54:
=======
/***/ 47:
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export Home */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(40);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar transparent class="vermelho">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content *ngIf="model.dia" class="preto">\n\n        <div class="title" text-center>\n\n            Agendamento\n\n        </div>\n\n      </ion-card-content>\n\n\n\n    <ion-card *ngIf="model.dia">      \n\n        <ion-list>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="clock" item-start></ion-icon>\n\n            {{ model.dia | date: \'dd/MM/yyyy\' }} {{ model.hora }}\n\n          </button>\n\n      \n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="compass" item-start></ion-icon>\n\n            {{ model.onde }}\n\n          </button>      \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n      <ion-card-content *ngIf="model.dia">\n\n        <button ion-button block large (click)="cancelar()" color="danger" round outline>cancelar\n\n        </button>\n\n      </ion-card-content>\n\n\n\n      <ion-card-content *ngIf="model.senhaAtendimento"  class="preto">\n\n        <div class="title" text-center>\n\n            Sua Senha\n\n        </div>\n\n      </ion-card-content>\n\n\n\n    <ion-card *ngIf="model.senhaAtendimento">      \n\n        <ion-list>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="key" item-start></ion-icon>\n\n            {{ model.senhaAtendimento }}\n\n          </button>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="compass" item-start></ion-icon>\n\n            {{ model.onde }}\n\n          </button>       \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n      <ion-card-content *ngIf="model.senhaAtendimento" >\n\n        <button ion-button block large (click)="cancelarSenha()" color="danger" round outline>cancelar\n\n        </button>\n\n      </ion-card-content>\n\n\n\n  <!--ion-card *ngIf="model.dia" color="roxo">\n\n    <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n\n      <ion-card-header>\n\n        Agendamento\n\n      </ion-card-header>\n\n      <ion-card-body>\n\n        Você possui um agendamento para\n\n      </ion-card-body>\n\n    </ion-card-content>\n\n\n\n  </ion-card-->\n\n\n\n  <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Senhas chamadas\n\n      </div>\n\n  </ion-card-content>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="font-size: 30px; background-color: #9C9C9C">\n\n      <ion-row>\n\n        <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n        <ion-col style="text-align: center;">| </ion-col>\n\n        <ion-col style="text-align: center;">Guiche</ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card-content *ngFor="let senha of senhas" style="font-size: 30px">\n\n    <ion-row>\n\n      <ion-col col-4 style="text-align: center;">{{senha.senha}}</ion-col>\n\n      <ion-col style="text-align: center;">| </ion-col>\n\n      <ion-col style="text-align: center;">01</ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button [disabled]="model.dia||model.senhaAtendimento" ion-button block large (click)="showAlert();gerarSenha()" color="danger" round outline>Gerar Senha\n\n    </button>\n\n  </ion-card-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\chat1.0\qualasenha2.0\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object])
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar transparent class="vermelho">\n\n    <ion-title><span>Home</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card-content *ngIf="model.dia" class="preto">\n\n        <div class="title" text-center>\n\n            Agendamento\n\n        </div>\n\n      </ion-card-content>\n\n\n\n    <ion-card *ngIf="model.dia">      \n\n        <ion-list>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="clock" item-start></ion-icon>\n\n            {{ model.dia | date: \'dd/MM/yyyy\' }} {{ model.hora }}\n\n          </button>\n\n      \n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="compass" item-start></ion-icon>\n\n            {{ model.onde }}\n\n          </button>      \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n      <ion-card-content *ngIf="model.dia">\n\n        <button ion-button block large (click)="cancelar()" color="danger" round outline>cancelar\n\n        </button>\n\n      </ion-card-content>\n\n\n\n      <ion-card-content *ngIf="model.senhaAtendimento"  class="preto">\n\n        <div class="title" text-center>\n\n            Sua Senha\n\n        </div>\n\n      </ion-card-content>\n\n\n\n    <ion-card *ngIf="model.senhaAtendimento">      \n\n        <ion-list>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="key" item-start></ion-icon>\n\n            {{ model.senhaAtendimento }}\n\n          </button>\n\n          <button ion-item style="font-size: 20px">\n\n            <ion-icon name="compass" item-start></ion-icon>\n\n            {{ model.onde }}\n\n          </button>       \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n      <ion-card-content *ngIf="model.senhaAtendimento" >\n\n        <button ion-button block large (click)="cancelarSenha()" color="danger" round outline>cancelar\n\n        </button>\n\n      </ion-card-content>\n\n\n\n  <!--ion-card *ngIf="model.dia" color="roxo">\n\n    <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n\n      <ion-card-header>\n\n        Agendamento\n\n      </ion-card-header>\n\n      <ion-card-body>\n\n        Você possui um agendamento para\n\n      </ion-card-body>\n\n    </ion-card-content>\n\n\n\n  </ion-card-->\n\n\n\n  <ion-card-content class="preto">\n\n      <div class="title" text-center>\n\n        Senhas chamadas\n\n      </div>\n\n  </ion-card-content>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="font-size: 30px; background-color: #9C9C9C">\n\n      <ion-row>\n\n        <ion-col col-4 style="text-align: center;">Senha</ion-col>\n\n        <ion-col style="text-align: center;">| </ion-col>\n\n        <ion-col style="text-align: center;">Guiche</ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card-content *ngFor="let senha of senhas" style="font-size: 30px">\n\n    <ion-row>\n\n      <ion-col col-4 style="text-align: center;">{{senha.senha}}</ion-col>\n\n      <ion-col style="text-align: center;">| </ion-col>\n\n      <ion-col style="text-align: center;">01</ion-col>\n\n    </ion-row>\n\n  </ion-card-content>\n\n\n\n  <ion-card-content>\n\n    <button [disabled]="model.dia||model.senhaAtendimento" ion-button block large (click)="showAlert();gerarSenha()" color="danger" round outline>Gerar Senha\n\n    </button>\n\n  </ion-card-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
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

<<<<<<< HEAD
/***/ })

},[227]);
=======
/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__ = __webpack_require__(40);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n\n\n  <img src="assets/imgs/logos.png" style="width: 100%" />\n\n\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label  style="color: #FFFFFF" stacked>R.A.</ion-label>\n\n	   	<ion-input  style="color:#000000"  type="text" ></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n	  <ion-item style="background-color: #A4A4A4">\n\n	    <ion-label style="color: #FFFFFF" stacked>Senha</ion-label>	\n\n	    <ion-input style="color:#000000" type="password" ></ion-input>\n\n	  </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card>\n\n    <ion-item style="background-color: #A4A4A4" >\n\n      <ion-label style="color: #FFFFFF">Local de Atendimento</ion-label>\n\n        <ion-select >\n\n          <ion-option value="anaRosa">Ana Rosa</ion-option>\n\n            <ion-option value="anhangabau">Vale do Anhangabaú</ion-option>\n\n            <ion-option value="predioTres">Liberdade Prédio 3</ion-option>\n\n            <ion-option value="saoBernardo">São Bernardo do Campo</ion-option>\n\n            <ion-option value="brigadeiro">Brigadeiro</ion-option>\n\n            <ion-option value="predioDez">Liberdade Prédio 10</ion-option>\n\n            <ion-option value="ponteEstaiada">Ponte Estaida</ion-option>\n\n            <ion-option value="itaimBibi">Itaim Bibi</ion-option>\n\n            <ion-option value="posGraduacao">Centro de Pós-Graduação</ion-option>\n\n            <ion-option value="vilaMarianaI">Vila Mariana I</ion-option>\n\n            <ion-option value="vilaMarianaII">Vila Mariana II</ion-option>\n\n            <ion-option value="santoAmaro">Santo Amaro</ion-option>\n\n            <ion-option value="morumbi">Morumbi</ion-option>\n\n            <ion-option value="liberdade">Liberdade</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n    <ion-card-content style="text-align: center; font-size: 30px">\n\n      <ion-list>\n\n            <h1> \n\n              <button style="background-color: #FF0000" ion-button large full (click)="getUsuario()" round>ENTRAR</button>\n\n            </h1>\n\n      </ion-list>\n\n    </ion-card-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\kaiqu\Documents\fmu\qualasenha2.0\src\pages\login\login.html"*/,
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

},[202]);
>>>>>>> 5c8457d59761db7f2c2e77dd78c5fe69f997150c
//# sourceMappingURL=main.js.map