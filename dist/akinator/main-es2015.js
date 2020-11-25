(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/akinator.service.ts":
/*!*************************************!*\
  !*** ./src/app/akinator.service.ts ***!
  \*************************************/
/*! exports provided: AkinatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkinatorService", function() { return AkinatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AkinatorService {
    // confirmMission(astronaut: string) {
    //   this.missionConfirmedSource.next(astronaut);
    // }
    constructor(http) {
        this.http = http;
        this.gameHasStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.gameHasStarted$ = this.gameHasStarted.asObservable();
        this.url = "http://18.222.226.65:3000/play/";
        this.pattern = [];
    }
    announceMission(mission) {
        this.gameHasStarted.next(mission);
    }
    getQuestion() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log(this.pattern);
        return this.http.post(this.url, { pattern: this.pattern }, httpOptions);
    }
}
AkinatorService.ɵfac = function AkinatorService_Factory(t) { return new (t || AkinatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AkinatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AkinatorService, factory: AkinatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AkinatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _akinator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./akinator.service */ "./src/app/akinator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");






function AppComponent_app_start_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-start");
} }
function AppComponent_app_game_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
} }
class AppComponent {
    constructor(_akinator) {
        this._akinator = _akinator;
        // title = 'akinator';
        // gameHasStarted
        this.gameHasStarted = false;
    }
    // actualQuestion = this._akinator.actualQuestion;
    // rpta = this._akinator.rpta;
    // newAnimalQuestion = "Who was your animal?";
    // newAnimal = ""
    // newAnimalCompleted = false;
    // lastAnwer = true;
    // questionToDiference = "";
    // newQuestion = "";
    // rptaFINAL = ""
    // sendMessage(msg: string){
    //   this._socket.emit("message", msg);
    // } 
    // nextQuestion(answer: string){
    //   this._socket.emit("answer", answer);
    // }
    // lastAnwerF(lastAnwer){
    //   if(!lastAnwer){
    //     this.lastAnwer = false
    //   }else{
    //     this.rptaFINAL = "Iam a genius"
    //   }
    // }
    // newAnimalCreated(){
    //   this.newAnimalCompleted =  true;
    //   this.questionToDiference = `Whats the diference between your ${this.newAnimal} and ${this.rpta}`
    // }
    // newQuestionCreated(){
    //   let lastinfo = {newQuestion:this.newQuestion,
    //     newAnimal: this.newAnimal}
    //     console.log(lastinfo);
    //   this._socket.emit("last-info",lastinfo);
    //     this.rptaFINAL = "we have improve with your feedback"
    // }
    ngOnInit() {
        this._akinator.gameHasStarted$.subscribe(value => {
            this.gameHasStarted = value;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_start_0_Template, 1, 0, "app-start", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_game_1_Template, 1, 0, "app-game", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameHasStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameHasStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _pages_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");
/* harmony import */ var _akinator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./akinator.service */ "./src/app/akinator.service.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_akinator_service__WEBPACK_IMPORTED_MODULE_7__["AkinatorService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"],
        _pages_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"],
                    _pages_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [_akinator_service__WEBPACK_IMPORTED_MODULE_7__["AkinatorService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/game/game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/akinator.service */ "./src/app/akinator.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function GameComponent_div_7_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.counter);
} }
function GameComponent_div_7_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "polygon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_7_div_1_p_3_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_div_7_div_1_p_4_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.rpta && !ctx_r9.rpta.animalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.rpta && ctx_r9.rpta.animalName);
} }
function GameComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Question Nro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.counter);
} }
function GameComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.actualQuestion);
} }
function GameComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I think of");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.rpta.animalPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r12.rpta.animalName, "\"");
} }
function GameComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.winSentence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.rpta.animalName);
} }
function GameComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_7_div_1_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_7_div_3_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_div_7_div_4_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_7_div_5_Template, 8, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameComponent_div_7_div_6_Template, 6, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile && !ctx_r2.rpta.animalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rpta && !ctx_r2.rpta.animalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rpta && ctx_r2.rpta.animalName && !ctx_r2.winSentence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.winSentence);
} }
function GameComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_9_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.playAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Play Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_10_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.nextQuestion(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_10_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.nextQuestion(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_11_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.lastAnwerF(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_11_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.lastAnwerF(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameComponent_div_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.newAnimal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.newAnimalCreated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.newAnimalQuestion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.newAnimal);
} }
function GameComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameComponent_div_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.newQuestion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.newQuestionCreated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.questionToDiference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.newQuestion);
} }
function GameComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_14_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.playAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Play Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.thanksNewAnimal, " ");
} }
class GameComponent {
    constructor(_akinator) {
        this._akinator = _akinator;
        this.pattern = this._akinator.pattern;
        this.title = 'akinator';
        this.gameHasStarted = false;
        this.actualQuestion = "";
        this.rpta = { animalName: "", animalPhoto: "" };
        this.newAnimalQuestion = "Who was your animal?";
        this.newAnimal = "";
        this.newAnimalCompleted = false;
        this.wrongGuess = false;
        this.questionToDiference = "";
        this.newQuestion = "";
        this.winSentence = "";
        this.thanksNewAnimal = "Thank You, our team will review your question !!!";
        this.thanksNewAnimalBool = false;
        this.counter = 1;
    }
    ngOnInit() {
        if (window.screen.width <= 600) { // 768px portrait
            this.mobile = true;
        }
        this._akinator.gameHasStarted$.subscribe(value => {
            this.gameHasStarted = value;
        });
        console.log("hasStarted()");
        this.hasStarted();
    }
    playAgain() {
        this.gameHasStarted = true;
        this.actualQuestion = "";
        this.rpta = { animalName: "", animalPhoto: "" };
        this.newAnimalQuestion = "Who was your animal?";
        this.newAnimal = "";
        this.newAnimalCompleted = false;
        this.wrongGuess = false;
        this.questionToDiference = "";
        this.newQuestion = "";
        this.winSentence = "";
        this.thanksNewAnimalBool = false;
        this._akinator.pattern = [];
        this.counter = 1;
        this.hasStarted();
    }
    sendMessage(msg) {
    }
    nextQuestion(answer) {
        console.log("one time");
        this._akinator.pattern.push(answer);
        this._akinator.getQuestion().subscribe((data) => {
            if (data.animal) {
                this.rpta.animalName = data.question;
            }
            this.actualQuestion = data.question;
        });
        this.counter++;
    }
    lastAnwerF(lastAnwer) {
        if (!lastAnwer) {
            this.wrongGuess = true;
        }
        else {
            this.winSentence = "Great, guessed right one more time !";
        }
    }
    newAnimalCreated() {
        this.newAnimalCompleted = true;
        this.questionToDiference = `Please give me a yes/no question that
    distinguishes between ${this.newAnimal} and ${this.rpta.animalName}`;
    }
    newQuestionCreated() {
        let lastinfo = { newQuestion: this.newQuestion,
            newAnimal: this.newAnimal };
        this.thanksNewAnimalBool = true;
        console.log(lastinfo);
        this.winSentence = "we have improve with your feedback";
    }
    // 
    hasStarted() {
        this._akinator.getQuestion().subscribe((data) => {
            this.actualQuestion = data.question;
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 15, vars: 7, consts: [[1, "bg_img"], [1, "logo"], ["src", "assets/logo_akinator.png", "alt", ""], [1, "bg"], [1, "wp_image"], ["src", "assets/defi.png", "alt", ""], [1, "wp_questions"], ["class", "bubble-question", 4, "ngIf"], [1, "bubble-answers"], ["class", "wp_answer_again", 4, "ngIf"], [4, "ngIf"], ["class", "newAnimalQuestion", 4, "ngIf"], ["class", "thanksNewAnimalBool", 4, "ngIf"], [1, "bubble-question"], ["class", "bubble-tail", 4, "ngIf"], [1, "bubble-body"], ["class", "bubble-propose", 4, "ngIf"], ["class", "win-bubble", 4, "ngIf"], [1, "bubble-tail"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "width", "85", "height", "102"], ["points", "30,0 30,20 29,25 27,30 22,37 15,45 0,60 30,60 30,102 85,102 85,0"], ["class", "number", 4, "ngIf"], [1, "number"], [1, "bubble-propose"], [1, "wp_animalImg"], ["alt", "", "width", "100px", 3, "src"], [1, "win-bubble"], [1, "wp_answer_again"], [1, "answer_again"], [1, "play_again", 3, "click"], [1, "answer_list"], [1, "a_yes", 3, "click"], [1, "a_no", 3, "click"], [1, "newAnimalQuestion"], [1, "wp-input"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "thanksNewAnimalBool"], [1, "thanksNewAnimal"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameComponent_div_7_Template, 7, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GameComponent_div_9_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameComponent_div_10_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameComponent_div_11_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GameComponent_div_12_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GameComponent_div_13_Template, 8, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameComponent_div_14_Template, 8, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.wrongGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.winSentence && !ctx.thanksNewAnimalBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rpta && !ctx.rpta.animalName && !ctx.wrongGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rpta && ctx.rpta.animalName && !ctx.winSentence && !ctx.wrongGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongGuess && !ctx.newAnimalCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newAnimalCompleted && !ctx.thanksNewAnimalBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thanksNewAnimalBool);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["@media only screen and (min-width: 200px) and (max-width: 899px) {\n  .bg_img[_ngcontent-%COMP%] {\n    background-image: url('bg.jpg');\n    background-repeat: no-repeat;\n    font-family: \"ArimaMadurai\";\n    font-weight: 900;\n    color: #18455a;\n  }\n  .bg_img[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%] {\n    height: 100vh;\n    display: inline-block;\n    display: inline-block;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%] {\n    display: flex;\n    \n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%] {\n    display: flex;\n    \n    flex-direction: row;\n    width: 100%;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 120px;\n    background-color: rgba(255, 255, 255, 0.7);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%]   .bubble-propose[_ngcontent-%COMP%]   .wp_animalImg[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .thanksNewAnimalBool[_ngcontent-%COMP%]   .thanksNewAnimal[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .thanksNewAnimalBool[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%] {\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 10px;\n    font-size: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    min-width: 50%;\n    font-size: 20px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .wp_answer_again[_ngcontent-%COMP%]   .answer_again[_ngcontent-%COMP%] {\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    list-style-type: none;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .wp_answer_again[_ngcontent-%COMP%]   .answer_again[_ngcontent-%COMP%]   .play_again[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    min-width: 50%;\n    font-size: 20px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .answer_list[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.7);\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    \n    flex-direction: row;\n    justify-content: stretch;\n    flex-grow: 1;\n    \n    width: 100%;\n    flex-wrap: wrap;\n    align-items: stretch;\n    margin: 0;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .answer_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    min-width: 50%;\n    font-size: 20px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n}\n@media only screen and (min-width: 900px) {\n  .bg_img[_ngcontent-%COMP%] {\n    background-image: url('bg.jpg');\n    background-repeat: no-repeat;\n    font-family: \"ArimaMadurai\";\n    font-weight: 900;\n    color: #18455a;\n    height: 100vh;\n  }\n  .bg_img[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 30%;\n    max-width: 200px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    display: flex;\n    \n    flex-direction: row;\n    justify-content: center;\n    align-items: space-around;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%] {\n    display: flex;\n    \n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    margin-top: 50px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%] {\n    display: flex;\n    \n    flex-direction: row;\n    margin-left: -50px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-tail[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    \n    justify-content: center;\n    align-items: center;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-tail[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40%;\n    right: 30%;\n    color: white;\n    font-size: 24px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 100px;\n    background-color: rgba(255, 255, 255, 0.7);\n    display: flex;\n    \n    justify-content: center;\n    align-items: center;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-question[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .thanksNewAnimalBool[_ngcontent-%COMP%]   .thanksNewAnimal[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .thanksNewAnimalBool[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%] {\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 10px;\n    font-size: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .newAnimalQuestion[_ngcontent-%COMP%]   .wp-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    min-width: 50%;\n    font-size: 20px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .wp_answer_again[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .wp_answer_again[_ngcontent-%COMP%]   .answer_again[_ngcontent-%COMP%] {\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    list-style-type: none;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .wp_answer_again[_ngcontent-%COMP%]   .answer_again[_ngcontent-%COMP%]   .play_again[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    font-size: 20px;\n    width: 100%;\n    width: 300px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .answer_list[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.7);\n    list-style-type: none;\n    padding: 0;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-around;\n    display: inline-block;\n  }\n  .bg_img[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .wp_questions[_ngcontent-%COMP%]   .bubble-answers[_ngcontent-%COMP%]   .answer_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: 10px;\n    cursor: pointer;\n    border: 2px solid #7e743f;\n    height: 50px;\n    text-align: center;\n    font-size: 20px;\n    line-height: 50px;\n    box-sizing: border-box;\n    background: #ffe471;\n    background: linear-gradient(to bottom, #ffe471, #ffd31c);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzL0RvY3VtZW50cy9Qcm9qZWN0cy9OZXctUHJveWVjdHMvQW5pbWFsR2FtZS9BbmltYUdhbWUtRnJvbnQvc3JjL2FwcC9wYWdlcy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBO0lBQ0UsK0JBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDQUE7RURLRTtJQUNFLFVBQUE7RUNISjtFRE1BO0lBRUUsa0JBQUE7RUNMRjtFRE9FO0lBQ0UsYUFBQTtJQUNBLHFCQUFBO0lBU0EscUJBQUE7RUNiSjtFRE1JO0lBRUUsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDTE47RURTRTtJQUVFLGFBQUE7SUFBZSxtQkFBQTtJQUNmLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ1BKO0VEUUk7SUFDRSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLFdBQUE7RUNMTjtFRE9NO0lBRUUsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsMENBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUNOUjtFRFFVO0lBQ0UsV0FBQTtFQ05aO0VEU1E7SUFDRSxlQUFBO0VDUFY7RURTUTtJQUNFLGVBQUE7RUNQVjtFRFdJO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsMENBQUE7RUNUTjtFRGdCUTtJQUNFLFlBQUE7RUNkVjtFRGdCUTtJQUNFLGVBQUE7RUNkVjtFRGlCTTtJQUNFLGFBQUE7SUFBZSxtQkFBQTtJQUNmLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUNkUjtFRGdCUTtJQUNFLGVBQUE7RUNkVjtFRGdCUTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNiVjtFRGNVO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUNaWjtFRGNVO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFFQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0RBQUE7RUNiWjtFRGtCUTtJQUNFLGFBQUE7SUFBZSxtQkFBQTtJQUNmLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtFQ2ZWO0VEaUJVO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFFQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0RBQUE7RUNoQlo7RURxQk07SUFDRSwwQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFBZSxtQkFBQTtJQUNmLG1CQUFBO0lBQ0Esd0JBQUE7SUFFQSxZQUFBO0lBQWMsY0FBQTtJQUNkLFdBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0VDbEJSO0VEcUJRO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFFQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0RBQUE7RUNwQlY7QUFDRjtBRDJCQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSw0QkFBQTtJQUVBLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQzFCRjtFRDRCRTtJQUNFLGFBQUE7RUMxQko7RUQyQkk7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVBLFVBQUE7SUFDQSxnQkFBQTtFQzFCTjtFRDhCRTtJQUNFLGFBQUE7SUFBZSxtQkFBQTtJQUNmLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSx5QkFBQTtFQzNCSjtFRDZCSTtJQUNFLHFCQUFBO0VDM0JOO0VEdUNJO0lBSUUsYUFBQTtJQUFlLG1CQUFBO0lBQ2Ysc0JBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUN2Q047RUR3Q007SUFDRSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLGtCQUFBO0VDckNSO0VEc0NRO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQWUsbUJBQUE7SUFDZix1QkFBQTtJQUNBLG1CQUFBO0VDbkNWO0VEb0NVO0lBQ0Usa0JBQUE7SUFFQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDbkNaO0VEc0NRO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSwwQ0FBQTtJQUNBLGFBQUE7SUFBZSxtQkFBQTtJQUNmLHVCQUFBO0lBQ0EsbUJBQUE7RUNuQ1Y7RURvQ1U7SUFDRSxlQUFBO0VDbENaO0VEb0NVO0lBQ0UsZUFBQTtFQ2xDWjtFRHNDTTtJQUNFLHFCQUFBO0lBRUEsWUFBQTtFQ3JDUjtFRHNDUTtJQUNFLHFCQUFBO0VDcENWO0VEd0NVO0lBQ0UsWUFBQTtFQ3RDWjtFRHdDVTtJQUNFLGVBQUE7RUN0Q1o7RUR5Q1E7SUFDRSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VDdENWO0VEd0NVO0lBQ0UsZUFBQTtFQ3RDWjtFRHdDVTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNyQ1o7RURzQ1k7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQ3BDZDtFRHNDWTtJQUNFLGVBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBRUEsc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHdEQUFBO0VDckNkO0VEMENRO0lBQ0UsZ0JBQUE7RUN4Q1Y7RUR5Q1U7SUFDRSxhQUFBO0lBQWUsbUJBQUE7SUFDZixtQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7RUN0Q1o7RUR1Q1k7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFFQSxlQUFBO0lBQ0EsV0FBQTtJQUVBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0RBQUE7RUN2Q2Q7RUQyQ1E7SUFDRSwwQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtJQUVBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0VDMUNWO0VEMkNVO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEsaUJBQUE7SUFFQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esd0RBQUE7RUMzQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuXG4uYmdfaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LWZhbWlseTogXCJBcmltYU1hZHVyYWlcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMxODQ1NWE7XG4gIC8vIHdpZHRoOjEwMHZoO1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5sb2dvIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gIH1cbiAgLmJnIHtcbiAgICAvLyB3aWR0aDoxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgICAud3BfaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgaW1nIHtcbiAgICAgICAgLy8gaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC53cF9xdWVzdGlvbnMge1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDUwMHB4O1xuICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmJ1YmJsZS1xdWVzdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC5idWJibGUtYm9keSB7XG4gICAgICAgICAgLy8gd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLmJ1YmJsZS1wcm9wb3NlIHtcbiAgICAgICAgICAgIC53cF9hbmltYWxJbWcge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5idWJibGUtYW5zd2VycyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcblxuICAgICAgICAvLyBkaXYge1xuICAgICAgICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLy8gICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gfVxuICAgICAgICAudGhhbmtzTmV3QW5pbWFsQm9vbHtcbiAgICAgICAgICAudGhhbmtzTmV3QW5pbWFse1xuICAgICAgICAgICAgbWFyZ2luOjIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5ld0FuaW1hbFF1ZXN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46MjBweDtcblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndwLWlucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjYsIDExNiwgNjMpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC53cF9hbnN3ZXJfYWdhaW4ge1xuICAgICAgICAgIC5hbnN3ZXJfYWdhaW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgICAgICAgICAgLnBsYXlfYWdhaW4ge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjYsIDExNiwgNjMpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC5hbnN3ZXJfbGlzdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgICAgLy8gYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7IC8qIGRlZmF1bHQgMCAqL1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLy8gbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNiwgMTE2LCA2Myk7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmU0NzEsICNmZmQzMWMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYmdfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1hTWFkdXJhaVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMxODQ1NWE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIC5sb2dve1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJnIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICAgICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgICAgLndwX2ltYWdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIC8vICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gIGhlaWdodDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAvLyBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICAud3BfcXVlc3Rpb25zIHtcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyBtYXJnaW4tbGVmdDogNTAwcHg7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgLmJ1YmJsZS1xdWVzdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICAgICAgICAuYnViYmxlLXRhaWwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIC8vIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idWJibGUtYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ1YmJsZS1hbnN3ZXJzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgLy8gd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbjoyMHB4O1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRoYW5rc05ld0FuaW1hbEJvb2x7XG4gICAgICAgICAgICAudGhhbmtzTmV3QW5pbWFse1xuICAgICAgICAgICAgICBtYXJnaW46MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubmV3QW5pbWFsUXVlc3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW46MjBweDtcbiAgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cC1pbnB1dCB7XG4gICAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI2LCAxMTYsIDYzKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlNDcxLCAjZmZkMzFjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAud3BfYW5zd2VyX2FnYWluIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgICAgICAgIC5hbnN3ZXJfYWdhaW4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAucGxheV9hZ2FpbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjYsIDExNiwgNjMpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlNDcxLCAjZmZkMzFjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYW5zd2VyX2xpc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI2LCAxMTYsIDYzKTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG5cbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcbiAgLmJnX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJpbWFNYWR1cmFpXCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogIzE4NDU1YTtcbiAgfVxuICAuYmdfaW1nIC5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuYmdfaW1nIC5iZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9pbWFnZSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1xdWVzdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLXF1ZXN0aW9uIC5idWJibGUtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtcXVlc3Rpb24gLmJ1YmJsZS1ib2R5IC5idWJibGUtcHJvcG9zZSAud3BfYW5pbWFsSW1nIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtcXVlc3Rpb24gLmJ1YmJsZS1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtcXVlc3Rpb24gLmJ1YmJsZS1ib2R5IGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLnRoYW5rc05ld0FuaW1hbEJvb2wgLnRoYW5rc05ld0FuaW1hbCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC50aGFua3NOZXdBbmltYWxCb29sIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLm5ld0FuaW1hbFF1ZXN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAubmV3QW5pbWFsUXVlc3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAubmV3QW5pbWFsUXVlc3Rpb24gLndwLWlucHV0IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAubmV3QW5pbWFsUXVlc3Rpb24gLndwLWlucHV0IGlucHV0IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5uZXdBbmltYWxRdWVzdGlvbiAud3AtaW5wdXQgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlNzQzZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNmZmU0NzE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLndwX2Fuc3dlcl9hZ2FpbiAuYW5zd2VyX2FnYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLndwX2Fuc3dlcl9hZ2FpbiAuYW5zd2VyX2FnYWluIC5wbGF5X2FnYWluIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlNzQzZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNmZmU0NzE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLmFuc3dlcl9saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICAvKiBkZWZhdWx0IDAgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5hbnN3ZXJfbGlzdCBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTc0M2Y7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlNDcxO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmU0NzEsICNmZmQzMWMpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5iZ19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaW1hTWFkdXJhaVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMxODQ1NWE7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuYmdfaW1nIC5sb2dvIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5iZ19pbWcgLmxvZ28gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1xdWVzdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1xdWVzdGlvbiAuYnViYmxlLXRhaWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtcXVlc3Rpb24gLmJ1YmJsZS10YWlsIC5udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICByaWdodDogMzAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLXF1ZXN0aW9uIC5idWJibGUtYm9keSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1xdWVzdGlvbiAuYnViYmxlLWJvZHkgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1xdWVzdGlvbiAuYnViYmxlLWJvZHkgaDUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAudGhhbmtzTmV3QW5pbWFsQm9vbCAudGhhbmtzTmV3QW5pbWFsIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLnRoYW5rc05ld0FuaW1hbEJvb2wgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAubmV3QW5pbWFsUXVlc3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5uZXdBbmltYWxRdWVzdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5uZXdBbmltYWxRdWVzdGlvbiAud3AtaW5wdXQge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5uZXdBbmltYWxRdWVzdGlvbiAud3AtaW5wdXQgaW5wdXQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmJnX2ltZyAuYmcgLndwX3F1ZXN0aW9ucyAuYnViYmxlLWFuc3dlcnMgLm5ld0FuaW1hbFF1ZXN0aW9uIC53cC1pbnB1dCBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3NDNmO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlNDcxLCAjZmZkMzFjKTtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAud3BfYW5zd2VyX2FnYWluIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC53cF9hbnN3ZXJfYWdhaW4gLmFuc3dlcl9hZ2FpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC53cF9hbnN3ZXJfYWdhaW4gLmFuc3dlcl9hZ2FpbiAucGxheV9hZ2FpbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTc0M2Y7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2ZmZTQ3MTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlNDcxLCAjZmZkMzFjKTtcbiAgfVxuICAuYmdfaW1nIC5iZyAud3BfcXVlc3Rpb25zIC5idWJibGUtYW5zd2VycyAuYW5zd2VyX2xpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iZ19pbWcgLmJnIC53cF9xdWVzdGlvbnMgLmJ1YmJsZS1hbnN3ZXJzIC5hbnN3ZXJfbGlzdCBsaSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlNzQzZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNmZmU0NzE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZTQ3MSwgI2ZmZDMxYyk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/akinator.service */ "./src/app/akinator.service.ts");



class StartComponent {
    constructor(_akinator) {
        this._akinator = _akinator;
    }
    ngOnInit() {
        this._akinator.announceMission(false);
    }
    startGame() {
        this._akinator.announceMission(true);
        // this._akinator.gameHasStarted = true
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"])); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 11, vars: 0, consts: [[1, "bg_img"], [1, "wp_image"], ["src", "assets/akinator.png", "alt", ""], [1, "wp_btn-play"], [1, "btn-play", 3, "click"], [1, "text-play"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_div_click_4_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2666\u2666");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " PLAY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2666\u2666");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg_img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/bg.jpg\");\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.bg_img[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%] {\n  height: 50vh;\n  margin: 20px;\n}\n.bg_img[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  cursor: pointer;\n  font-family: \"Sansita\";\n  font-weight: 800;\n  color: white;\n  text-align: center;\n  font-size: 35px;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  display: block;\n  text-decoration: none;\n  padding: 2px 5px 8px 5px;\n  margin: auto;\n  position: relative;\n}\n.bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%]   .text-play[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media only screen and (min-width: 900px) {\n  .bg_img[_ngcontent-%COMP%] {\n    background-image: url('bg.jpg');\n    background-repeat: no-repeat;\n    display: flex;\n    \n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .bg_img[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    \n    flex-direction: row;\n    justify-content: center;\n    margin: 20px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .wp_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%] {\n    width: 200px;\n    text-align: center;\n    cursor: pointer;\n    font-family: \"Sansita\";\n    font-weight: 800;\n    color: white;\n    text-align: center;\n    font-size: 35px;\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    display: block;\n    text-decoration: none;\n    padding: 2px 5px 8px 5px;\n    margin: auto;\n    position: relative;\n  }\n  .bg_img[_ngcontent-%COMP%]   .wp_btn-play[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%]   .text-play[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzL0RvY3VtZW50cy9Qcm9qZWN0cy9OZXctUHJveWVjdHMvQW5pbWFsR2FtZS9BbmltYUdhbWUtRnJvbnQvc3JjL2FwcC9wYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFDZixzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBREFFO0VBRUUsWUFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtBQ0VOO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFNQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pOO0FEWFM7RUFDRSxlQUFBO0FDYVg7QURLQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSw0QkFBQTtJQUVBLGFBQUE7SUFBZSxtQkFBQTtJQUNmLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtFQ0ZGO0VESUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFBZSxtQkFBQTtJQUNmLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VDREo7RURFSTtJQUNFLGFBQUE7RUNBTjtFREdFO0lBQ0UsYUFBQTtFQ0RKO0VER0k7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBTUEsc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esd0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNOTjtFRFRTO0lBQ0UsZUFBQTtFQ1dYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ19pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyIDtcblxuICAud3BfaW1hZ2Uge1xuICAgIC8vIHdpZHRoOiAxMDB2aDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cbiAgfVxuICAud3BfYnRuLXBsYXkge1xuICAgIGhlaWdodDogMTAwcHg7XG5cbiAgICAuYnRuLXBsYXkge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgIC50ZXh0LXBsYXl7XG4gICAgICAgICBzcGFue1xuICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICBmb250LWZhbWlseTogXCJTYW5zaXRhXCI7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nOiAycHggNXB4IDhweCA1cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5iZ19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciA7XG4gIFxuICAgIC53cF9pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46MjBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC53cF9idG4tcGxheSB7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICBcbiAgICAgIC5idG4tcGxheSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAudGV4dC1wbGF5e1xuICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGFcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHggOHB4IDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuYmdfaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBvciBpbmxpbmUtZmxleCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iZ19pbWcgLndwX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW46IDIwcHg7XG59XG4uYmdfaW1nIC53cF9pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDkwJTtcbn1cbi5iZ19pbWcgLndwX2J0bi1wbGF5IHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5iZ19pbWcgLndwX2J0bi1wbGF5IC5idG4tcGxheSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGFcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDJweCA1cHggOHB4IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmdfaW1nIC53cF9idG4tcGxheSAuYnRuLXBsYXkgLnRleHQtcGxheSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5iZ19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmJnX2ltZyAud3BfaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLmJnX2ltZyAud3BfaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIC5iZ19pbWcgLndwX2J0bi1wbGF5IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5iZ19pbWcgLndwX2J0bi1wbGF5IC5idG4tcGxheSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDVweCA4cHggNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJnX2ltZyAud3BfYnRuLXBsYXkgLmJ0bi1wbGF5IC50ZXh0LXBsYXkgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss']
            }]
    }], function () { return [{ type: src_app_akinator_service__WEBPACK_IMPORTED_MODULE_1__["AkinatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luis/Documents/Projects/New-Proyects/AnimalGame/AnimaGame-Front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map