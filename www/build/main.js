webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-sg',template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home-sg/home-sg.html"*/'<ion-header>\n  <ion-navbar hideBackButton transparent style="background-color: #FF0000">\n    <ion-title><span>Home</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card-content class="preto">\n  <ion-list style="color: #FFFFFF;font-size: 30px; text-align: center">\n    Senhas Chamadas<br>\n\n  </ion-list>\n</ion-card-content>\n\n<ion-card color="roxo">\n  <ion-card-content style="background-color: #424242;text-align: center; font-size: 30px">\n    <ion-list >\n      Sua Senha:\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <h2 style="color: #000000; font-size: 30px; text-align: center">6</h2>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="openCancelar()" >\n          Cancelar\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">Senha</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">Guiche</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">1</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">02</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">5</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">03</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-content style="font-size: 30px">\n  <ion-row>\n    <ion-col col-4 style="text-align: center;">A69</ion-col>\n    <ion-col style="text-align: center;">| </ion-col>\n    <ion-col style="text-align: center;">04</ion-col>\n  </ion-row>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/home-sg/home-sg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeSgPage);
    return HomeSgPage;
}());

//# sourceMappingURL=home-sg.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-sg/home-sg.module": [
		275,
		1
	],
	"../pages/login/login.module": [
		276,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* unused harmony export Usuarios */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.model = new Usuarios();
        navParams.get('model') ? this.model = navParams.get('model') : this.model = navParams.data;
        console.log(this.model);
    }
    TabsPage.prototype.ionViewDidEnter = function () { };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" [rootParams]="model" tabTitle="Senhas" tabIcon="time" color="dark" ></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="model" tabTitle="Agendar" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="model" tabTitle="Configurações" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* unused harmony export Agendamento */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(40);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_sg_home_sg__["a" /* HomeSgPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-sg/home-sg.module#HomeSgPageModule', name: 'HomeSgPage', segment: 'home-sg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
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
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_servidor_servidor__["a" /* ServidorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/brendacustodio/Documents/Facul/tcc/qualasenha2.0/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
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
        //private URL = "http://2629abe9.ngrok.io"
        this.URL = "http://192.168.43.81:5000";
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServidorProvider);
    return ServidorProvider;
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export Home */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_sg_home_sg__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(40);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* unused harmony export Usuario */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(155);
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
        var _this = this;
        console.log('oi');
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

},[201]);
//# sourceMappingURL=main.js.map