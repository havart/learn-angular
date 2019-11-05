(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-enum.ts":
/*!*************************************!*\
  !*** ./src/app/app-routing-enum.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoutingPathEnum;
(function (RoutingPathEnum) {
    RoutingPathEnum["LOGIN"] = "login";
    RoutingPathEnum["START"] = "start";
    RoutingPathEnum["MAIN"] = "main";
})(RoutingPathEnum = exports.RoutingPathEnum || (exports.RoutingPathEnum = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_routing_enum_1 = __webpack_require__(/*! ./app-routing-enum */ "./src/app/app-routing-enum.ts");
var user_auth_component_1 = __webpack_require__(/*! ./pages/login-page/components/user-auth/user-auth.component */ "./src/app/pages/login-page/components/user-auth/user-auth.component.ts");
var start_page_component_1 = __webpack_require__(/*! ./pages/start-page/start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/guards/auth-guard.ts");
var main_layout_component_1 = __webpack_require__(/*! ./pages/main-page/main-layout/main-layout.component */ "./src/app/pages/main-page/main-layout/main-layout.component.ts");
var routes = [
    {
        path: '',
        redirectTo: app_routing_enum_1.RoutingPathEnum.LOGIN,
        pathMatch: 'full',
    },
    {
        path: app_routing_enum_1.RoutingPathEnum.LOGIN,
        component: user_auth_component_1.UserAuthComponent,
    },
    {
        path: app_routing_enum_1.RoutingPathEnum.START,
        component: start_page_component_1.StartPageComponent,
        canActivate: [auth_guard_1.UserAuthGuard],
    },
    {
        path: app_routing_enum_1.RoutingPathEnum.MAIN,
        component: main_layout_component_1.MainLayoutComponent,
        canActivate: [auth_guard_1.UserAuthGuard],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var login_page_module_1 = __webpack_require__(/*! ./pages/login-page/login-page.module */ "./src/app/pages/login-page/login-page.module.ts");
var user_auth_service_1 = __webpack_require__(/*! ./services/user-auth.service */ "./src/app/services/user-auth.service.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/guards/auth-guard.ts");
var start_page_module_1 = __webpack_require__(/*! ./pages/start-page/start-page.module */ "./src/app/pages/start-page/start-page.module.ts");
var main_page_module_1 = __webpack_require__(/*! ./pages/main-page/main-page.module */ "./src/app/pages/main-page/main-page.module.ts");
var connection_service_1 = __webpack_require__(/*! ./services/connection.service */ "./src/app/services/connection.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                login_page_module_1.LoginPageModule,
                start_page_module_1.StartPageModule,
                main_page_module_1.MainPageModule,
            ],
            providers: [user_auth_service_1.UserAuthService, connection_service_1.ConnectionService, auth_guard_1.UserAuthGuard],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/client/client-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/client/client-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"client-data\">\r\n        <div class=\"session-data\">\r\n            <span class=\"time-data\">{{ time | date: 'hh:mm a' }}</span>\r\n            <span class=\"session-id\">{{ user.customerId }}</span>\r\n            <span class=\"date-data\">{{ user.createdAt | date: 'dd.MM.yy'}}</span>\r\n        </div>\r\n        <div class=\"client-detail\">\r\n            <div class=\"client-name\"> \r\n                <span>{{ user.firstName }}</span>\r\n                <span>{{ user.lastName}}</span>\r\n            </div>\r\n            <span class=\"client-age\">{{ user.age | ageData }}</span>\r\n            <div class=\"client-adress\">{{ user.address }}</div>\r\n            <div class=\"client-status\">{{ user.city }}</div>\r\n        </div>\r\n        <div >\r\n            <img src=\"{{user.avatar}}\" class=\"client-image\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/client/client-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 170px;\n  background-color: #3f3d3d;\n  font-family: sans-serif;\n  color: #a0a08a; }\n\n.session-data {\n  display: flex;\n  justify-content: space-between;\n  width: 400px;\n  margin-bottom: 20px;\n  font-size: 12px;\n  font-weight: bold; }\n\n.client-data {\n  max-width: 1000px;\n  width: 100%;\n  position: relative;\n  margin: 0 auto;\n  padding-top: 20px; }\n\n.client-detail {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 550px;\n  margin-bottom: 10px; }\n\n.client-name {\n  text-transform: uppercase;\n  width: 600px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  color: #f3f1ec; }\n\n.client-name span {\n  padding-left: 10px; }\n\n.client-status {\n  width: 200px;\n  text-align: center;\n  background-color: #a0a08a;\n  border-radius: 20px;\n  line-height: 20px;\n  font-size: 12px;\n  color: #f3f1ec; }\n\n.client-image {\n  width: 70px;\n  height: 70px;\n  background-color: #fff;\n  position: absolute;\n  right: 10px;\n  top: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnQvRDpcXEFuZ3VsYXJcXGxlYXJuLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsaWVudFxcY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLGNBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudC9jbGllbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjEsIDYxKTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTM4KTtcclxufVxyXG5cclxuLnNlc3Npb24tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jbGllbnQtZGF0YSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNsaWVudC1kZXRhaWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jbGllbnQtbmFtZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAyNDEsIDIzNik7XHJcbn1cclxuXHJcbi5jbGllbnQtbmFtZSBzcGFuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY2xpZW50LXN0YXR1cyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE2MCwgMTYwLCAxMzgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDI0MSwgMjM2KTtcclxufVxyXG5cclxuLmNsaWVudC1pbWFnZSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/client/client-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/client/client-detail.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var connection_service_1 = __webpack_require__(/*! src/app/services/connection.service */ "./src/app/services/connection.service.ts");
var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(connectionService) {
        this.connectionService = connectionService;
        this.time = Date.now();
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionService.getClient$().subscribe(function (currentClient) {
            _this.user = currentClient;
        });
    };
    ClientDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! ./client-detail.component.html */ "./src/app/components/client/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/components/client/client-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [connection_service_1.ConnectionService])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;


/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <span class=\"logo-title\">CommercBank</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 150px;\n  height: 100px;\n  line-height: 100px; }\n\n.logo-title {\n  text-transform: uppercase;\n  font-family: Roboto, sans-serif;\n  font-size: 15px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0Q6XFxBbmd1bGFyXFxsZWFybi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmxvZ28tdGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        core_1.Component({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        })
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;


/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav opened mode=\"side\">\r\n        <mat-list class=\"list-item\">\r\n            <mat-list-item *ngFor=\"let step of stepsList$ | async; let idx = index\"\r\n                >{{ idx + 1 }}. {{ step.name }}\r\n            </mat-list-item>\r\n        </mat-list>\r\n        <div class=\"side-button\">\r\n            <button mat-raised-button color=\"primary\">Завершить сессию</button>\r\n        </div>\r\n    </mat-sidenav>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 450px;\n  height: 100%; }\n\n.side-button {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  text-align: center; }\n\n.list-item .mat-list-item {\n  height: 24px; }\n\nmat-sidenav-container {\n  background-color: white; }\n\nmat-sidenav {\n  height: 100%;\n  width: 300px;\n  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9EOlxcQW5ndWxhclxcbGVhcm4tYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZS1iYXJcXHNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUdaLGdEQUFnRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var get_step_service_1 = __webpack_require__(/*! ../../services/get-step.service */ "./src/app/services/get-step.service.ts");
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(getStepService) {
        this.getStepService = getStepService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.stepsList$ = this.getStepService.getStep$();
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [get_step_service_1.GetStepService])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;


/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-wrapper\" color=\"primary\">\r\n    <app-logo></app-logo>\r\n    <app-user></app-user>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 90px;\n  padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL0Q6XFxBbmd1bGFyXFxsZWFybi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAgXHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;


/***/ }),

/***/ "./src/app/components/toolbar/toolbar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var angular_material_module_1 = __webpack_require__(/*! src/app/modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
var toolbar_component_1 = __webpack_require__(/*! ./toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
var logo_component_1 = __webpack_require__(/*! ../logo/logo.component */ "./src/app/components/logo/logo.component.ts");
var user_component_1 = __webpack_require__(/*! ../user/user.component */ "./src/app/components/user/user.component.ts");
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        core_1.NgModule({
            declarations: [toolbar_component_1.ToolbarComponent, logo_component_1.LogoComponent, user_component_1.UserComponent],
            imports: [common_1.CommonModule, angular_material_module_1.MaterialModule],
            exports: [common_1.CommonModule, toolbar_component_1.ToolbarComponent, angular_material_module_1.MaterialModule],
            providers: [],
        })
    ], ToolbarModule);
    return ToolbarModule;
}());
exports.ToolbarModule = ToolbarModule;


/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info\">\r\n    <div class=\"user-image\"></div>\r\n    <div class=\"user-data\">\r\n        <span>{{ user }}</span>\r\n    </div>\r\n    <button [matMenuTriggerFor]=\"menu\" mat-icon-button>\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button (click)=\"logOut()\" mat-menu-item>\r\n            <span>Выход</span>\r\n        </button>\r\n    </mat-menu>\r\n    <div class=\"user-status\">\r\n        <span>В сети</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #f5f5f5; }\n\n.user-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-self: flex-end;\n  flex-wrap: wrap;\n  width: 160px;\n  font-size: 15px; }\n\n.user-status {\n  width: 150px;\n  text-align: center;\n  font-size: 12px;\n  color: #f5f5f5; }\n\n.mat-menu-item {\n  padding: 0 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL0Q6XFxBbmd1bGFyXFxsZWFybi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udXNlci1zdGF0dXMgeyBcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubWF0LW1lbnUtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_auth_service_1 = __webpack_require__(/*! src/app/services/user-auth.service */ "./src/app/services/user-auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_routing_enum_1 = __webpack_require__(/*! src/app/app-routing-enum */ "./src/app/app-routing-enum.ts");
var UserComponent = /** @class */ (function () {
    function UserComponent(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = this.userAuthService.getUser();
    };
    UserComponent.prototype.logOut = function () {
        this.userAuthService.clearUserData();
        this.router.navigate([app_routing_enum_1.RoutingPathEnum.LOGIN]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [user_auth_service_1.UserAuthService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/configs/url-get.const.ts":
/*!******************************************!*\
  !*** ./src/app/configs/url-get.const.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.basePath = 'http://5bfff0a00296210013dc7e82.mockapi.io/test';
exports.urlGetUser = exports.basePath + "/user-info/";
exports.urlGetStep = exports.basePath + "/steps";


/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth-guard.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var user_auth_service_1 = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
var app_routing_enum_1 = __webpack_require__(/*! ../app-routing-enum */ "./src/app/app-routing-enum.ts");
var UserAuthGuard = /** @class */ (function () {
    function UserAuthGuard(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
    }
    UserAuthGuard.prototype.canActivate = function () {
        if (!this.userAuthService.isUserAuthenticated()) {
            this.router.navigate([app_routing_enum_1.RoutingPathEnum.LOGIN]);
            return false;
        }
        return true;
    };
    UserAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_auth_service_1.UserAuthService, router_1.Router])
    ], UserAuthGuard);
    return UserAuthGuard;
}());
exports.UserAuthGuard = UserAuthGuard;


/***/ }),

/***/ "./src/app/helpers/get-client-age.helper.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/get-client-age.helper.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getClientAge(date) {
    var ageDate = new Date(Date.now() - Date.parse(date));
    var ageYear = Math.abs(ageDate.getUTCFullYear() - 1970);
    var ageValue = ageYear.toString().slice(-1);
    return ageValue === '1'
        ? ageYear + " \u0433\u043E\u0434"
        : ageValue === '0' || ageValue >= '5'
            ? ageYear + " \u043B\u0435\u0442"
            : ageValue < '5'
                ? ageYear + " \u0433\u043E\u0434\u0430"
                : '';
}
exports.getClientAge = getClientAge;


/***/ }),

/***/ "./src/app/helpers/get-random-id.helper.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/get-random-id.helper.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getRandomIdHelper(min, max) {
    return Math.floor(Math.random() * (max + 1 - min));
}
exports.getRandomIdHelper = getRandomIdHelper;


/***/ }),

/***/ "./src/app/modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatFormFieldModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatSidenavModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
            ],
            exports: [
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatListModule,
                material_1.MatFormFieldModule,
                material_1.MatSidenavModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
            ],
            providers: [],
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/app/pages/login-page/components/user-auth/form-controls-enum.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login-page/components/user-auth/form-controls-enum.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoginFormControlEnum;
(function (LoginFormControlEnum) {
    LoginFormControlEnum["LOGIN"] = "login";
    LoginFormControlEnum["PASSWORD"] = "password";
})(LoginFormControlEnum = exports.LoginFormControlEnum || (exports.LoginFormControlEnum = {}));


/***/ }),

/***/ "./src/app/pages/login-page/components/user-auth/user-auth.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/login-page/components/user-auth/user-auth.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-card class=\"form-wrapper\">\r\n        <mat-card-title class=\"form-title\">\r\n            Вход для пользователя\r\n        </mat-card-title>\r\n        <form [formGroup]=\"loginForm\" class=\"login-form\">\r\n            <mat-form-field class=\"input-full-width\">\r\n                <mat-label>\r\n                    Логин:\r\n                </mat-label>\r\n                <input [formControlName]=\"loginFormControlEnum.LOGIN\" matInput class=\"form-control\" />\r\n                <mat-error *ngIf=\"loginForm.controls[loginFormControlEnum.LOGIN].errors?.required\">\r\n                    Поле обязательное к заполнению\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"input-full-width\">\r\n                <mat-label>\r\n                    Пароль:\r\n                </mat-label>\r\n                <input [formControlName]=\"loginFormControlEnum.PASSWORD\" class=\"form-control\" matInput />\r\n                <mat-error *ngIf=\"loginForm.controls[loginFormControlEnum.PASSWORD].errors?.required\">\r\n                    Поле обязательное к заполнению\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <button\r\n                [disabled]=\"loginForm.invalid\"\r\n                (click)=\"submitForm()\"\r\n                class=\"submit-btn\"\r\n                color=\"primary\"\r\n                mat-raised-button\r\n            >\r\n                Отправить\r\n            </button>\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login-page/components/user-auth/user-auth.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/login-page/components/user-auth/user-auth.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper {\n  width: 460px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.form-title {\n  width: 300px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  text-align: center; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.input-full-width {\n  width: 400px; }\n\n.submit-btn {\n  width: 100px;\n  margin: 10px 0; }\n\n.form-control {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9jb21wb25lbnRzL3VzZXItYXV0aC9EOlxcQW5ndWxhclxcbGVhcm4tYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGxvZ2luLXBhZ2VcXGNvbXBvbmVudHNcXHVzZXItYXV0aFxcdXNlci1hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9jb21wb25lbnRzL3VzZXItYXV0aC91c2VyLWF1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0NjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login-page/components/user-auth/user-auth.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/login-page/components/user-auth/user-auth.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var user_auth_service_1 = __webpack_require__(/*! ../../../../services/user-auth.service */ "./src/app/services/user-auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var form_controls_enum_1 = __webpack_require__(/*! ./form-controls-enum */ "./src/app/pages/login-page/components/user-auth/form-controls-enum.ts");
var app_routing_enum_1 = __webpack_require__(/*! ../../../../app-routing-enum */ "./src/app/app-routing-enum.ts");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(formBuilder, userAuthService, router) {
        this.formBuilder = formBuilder;
        this.userAuthService = userAuthService;
        this.router = router;
        this.loginFormControlEnum = form_controls_enum_1.LoginFormControlEnum;
    }
    UserAuthComponent.prototype.ngOnInit = function () {
        this.initLoginForm();
    };
    UserAuthComponent.prototype.submitForm = function () {
        var userLogin = this.loginForm.get(this.loginFormControlEnum.LOGIN).value;
        if (userLogin) {
            this.userAuthService.setUser(userLogin);
            this.router.navigate([app_routing_enum_1.RoutingPathEnum.START]);
        }
    };
    UserAuthComponent.prototype.initLoginForm = function () {
        var _a;
        this.loginForm = this.formBuilder.group((_a = {},
            _a[this.loginFormControlEnum.LOGIN] = ['', [forms_1.Validators.required]],
            _a[this.loginFormControlEnum.PASSWORD] = ['', [forms_1.Validators.required]],
            _a));
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./user-auth.component.html */ "./src/app/pages/login-page/components/user-auth/user-auth.component.html"),
            styles: [__webpack_require__(/*! ./user-auth.component.scss */ "./src/app/pages/login-page/components/user-auth/user-auth.component.scss")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            user_auth_service_1.UserAuthService,
            router_1.Router])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;


/***/ }),

/***/ "./src/app/pages/login-page/login-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login-page/login-page.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var user_auth_component_1 = __webpack_require__(/*! ./components/user-auth/user-auth.component */ "./src/app/pages/login-page/components/user-auth/user-auth.component.ts");
var angular_material_module_1 = __webpack_require__(/*! src/app/modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        core_1.NgModule({
            declarations: [user_auth_component_1.UserAuthComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, angular_material_module_1.MaterialModule],
            exports: [common_1.CommonModule, user_auth_component_1.UserAuthComponent, angular_material_module_1.MaterialModule],
            providers: [],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
exports.LoginPageModule = LoginPageModule;


/***/ }),

/***/ "./src/app/pages/main-page/main-layout/main-layout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/main-page/main-layout/main-layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n<app-client-detail></app-client-detail>\r\n<app-side-bar class=\"left-list\"></app-side-bar>\r\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-layout/main-layout.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/main-page/main-layout/main-layout.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main-page/main-layout/main-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/main-page/main-layout/main-layout.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/pages/main-page/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/pages/main-page/main-layout/main-layout.component.scss")]
        })
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;


/***/ }),

/***/ "./src/app/pages/main-page/main-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var angular_material_module_1 = __webpack_require__(/*! src/app/modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
var main_layout_component_1 = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/pages/main-page/main-layout/main-layout.component.ts");
var toolbar_module_1 = __webpack_require__(/*! src/app/components/toolbar/toolbar.module */ "./src/app/components/toolbar/toolbar.module.ts");
var client_detail_component_1 = __webpack_require__(/*! src/app/components/client/client-detail.component */ "./src/app/components/client/client-detail.component.ts");
var age_transform_pipe_1 = __webpack_require__(/*! src/app/pipes/age-transform.pipe */ "./src/app/pipes/age-transform.pipe.ts");
var side_bar_component_1 = __webpack_require__(/*! src/app/components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        core_1.NgModule({
            declarations: [main_layout_component_1.MainLayoutComponent, client_detail_component_1.ClientDetailComponent, age_transform_pipe_1.AgeTransformPipe, side_bar_component_1.SideBarComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, angular_material_module_1.MaterialModule, toolbar_module_1.ToolbarModule],
            exports: [common_1.CommonModule, main_layout_component_1.MainLayoutComponent, angular_material_module_1.MaterialModule, toolbar_module_1.ToolbarModule],
            providers: [],
        })
    ], MainPageModule);
    return MainPageModule;
}());
exports.MainPageModule = MainPageModule;


/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n<mat-card-content>\r\n    <img mat-card-image src=\"../../../assets/img/desktop.jpg\" alt=\"\" />\r\n    <button (click)=\"getTask()\" class=\"button\" mat-raised-button color=\"primary\">Получить задание</button>\r\n</mat-card-content>\r\n"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%); }\n\n.mat-card-image {\n  width: 100%;\n  height: 80%;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQtcGFnZS9EOlxcQW5ndWxhclxcbGVhcm4tYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXHN0YXJ0LXBhZ2VcXHN0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var get_task_service_1 = __webpack_require__(/*! ../../services/get-task.service */ "./src/app/services/get-task.service.ts");
var get_random_id_helper_1 = __webpack_require__(/*! ../../helpers/get-random-id.helper */ "./src/app/helpers/get-random-id.helper.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_routing_enum_1 = __webpack_require__(/*! ../../app-routing-enum */ "./src/app/app-routing-enum.ts");
var connection_service_1 = __webpack_require__(/*! src/app/services/connection.service */ "./src/app/services/connection.service.ts");
var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(getTaskService, connectionService, router) {
        this.getTaskService = getTaskService;
        this.connectionService = connectionService;
        this.router = router;
    }
    StartPageComponent.prototype.getTask = function () {
        var _this = this;
        var id = get_random_id_helper_1.getRandomIdHelper(1, 10);
        this.getTaskService.getClient$(id).subscribe(function (_client) {
            _this.connectionService.setClient(_client);
        }, function (_error) { });
        this.router.navigate([app_routing_enum_1.RoutingPathEnum.MAIN]);
    };
    StartPageComponent = __decorate([
        core_1.Component({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/pages/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.scss */ "./src/app/pages/start-page/start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [get_task_service_1.GetTaskService,
            connection_service_1.ConnectionService,
            router_1.Router])
    ], StartPageComponent);
    return StartPageComponent;
}());
exports.StartPageComponent = StartPageComponent;


/***/ }),

/***/ "./src/app/pages/start-page/start-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/start-page/start-page.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var start_page_component_1 = __webpack_require__(/*! ./start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
var angular_material_module_1 = __webpack_require__(/*! src/app/modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
var toolbar_module_1 = __webpack_require__(/*! src/app/components/toolbar/toolbar.module */ "./src/app/components/toolbar/toolbar.module.ts");
var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = __decorate([
        core_1.NgModule({
            declarations: [start_page_component_1.StartPageComponent],
            imports: [common_1.CommonModule, angular_material_module_1.MaterialModule, toolbar_module_1.ToolbarModule],
            exports: [common_1.CommonModule, start_page_component_1.StartPageComponent, angular_material_module_1.MaterialModule, toolbar_module_1.ToolbarModule],
            providers: [],
        })
    ], StartPageModule);
    return StartPageModule;
}());
exports.StartPageModule = StartPageModule;


/***/ }),

/***/ "./src/app/pipes/age-transform.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/age-transform.pipe.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var get_client_age_helper_1 = __webpack_require__(/*! ../helpers/get-client-age.helper */ "./src/app/helpers/get-client-age.helper.ts");
var AgeTransformPipe = /** @class */ (function () {
    function AgeTransformPipe() {
    }
    AgeTransformPipe.prototype.transform = function (value) {
        var age = get_client_age_helper_1.getClientAge(value);
        return age;
    };
    AgeTransformPipe = __decorate([
        core_1.Pipe({
            name: 'ageData',
        })
    ], AgeTransformPipe);
    return AgeTransformPipe;
}());
exports.AgeTransformPipe = AgeTransformPipe;


/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ConnectionService = /** @class */ (function () {
    function ConnectionService() {
        this.client$ = new rxjs_1.BehaviorSubject(null);
        this.currentСlient$ = this.client$.asObservable();
    }
    ConnectionService.prototype.setClient = function (client) {
        this.client$.next(client);
    };
    ConnectionService.prototype.getClient$ = function () {
        return this.currentСlient$;
    };
    return ConnectionService;
}());
exports.ConnectionService = ConnectionService;


/***/ }),

/***/ "./src/app/services/get-step.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-step.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var url_get_const_1 = __webpack_require__(/*! ../configs/url-get.const */ "./src/app/configs/url-get.const.ts");
var GetStepService = /** @class */ (function () {
    function GetStepService(http) {
        this.http = http;
    }
    GetStepService.prototype.getStep$ = function () {
        return this.http
            .get(url_get_const_1.urlGetStep)
            .pipe(operators_1.map(function (steps) { return steps.filter(function (_a) {
            var isComment = _a.isComment;
            return !isComment;
        }); }));
    };
    GetStepService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GetStepService);
    return GetStepService;
}());
exports.GetStepService = GetStepService;


/***/ }),

/***/ "./src/app/services/get-task.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-task.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var url_get_const_1 = __webpack_require__(/*! ../configs/url-get.const */ "./src/app/configs/url-get.const.ts");
var GetTaskService = /** @class */ (function () {
    function GetTaskService(http) {
        this.http = http;
    }
    GetTaskService.prototype.getClient$ = function (id) {
        return this.http.get(url_get_const_1.urlGetUser + id);
    };
    GetTaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GetTaskService);
    return GetTaskService;
}());
exports.GetTaskService = GetTaskService;


/***/ }),

/***/ "./src/app/services/user-auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-auth.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAuthService = /** @class */ (function () {
    function UserAuthService() {
    }
    UserAuthService.prototype.setUser = function (login) {
        var currentUser = {
            authData: {
                userName: "" + login,
            },
        };
        localStorage.setItem('user', JSON.stringify(currentUser));
    };
    UserAuthService.prototype.getUser = function () {
        var currentUser = localStorage.getItem('user');
        return JSON.parse(currentUser).authData.userName;
    };
    UserAuthService.prototype.clearUserData = function () {
        localStorage.clear();
    };
    UserAuthService.prototype.isUserAuthenticated = function () {
        var currentUser = localStorage.getItem('user');
        return !!currentUser;
    };
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\learn-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map