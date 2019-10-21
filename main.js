(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/@angular/core/fesm5 lazy recursive":
/*!*****************************************************************!*\
  !*** ../node_modules/@angular/core/fesm5 lazy namespace object ***!
  \*****************************************************************/
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
webpackEmptyAsyncContext.id = "../node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _benion_firebase_benion_firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benion-firebase/benion-firebase.component */ "./src/app/benion-firebase/benion-firebase.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _benion_page_not_found_benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benion-page-not-found/benion-page-not-found.component */ "./src/app/benion-page-not-found/benion-page-not-found.component.ts");
/* harmony import */ var _benion_animations_benion_animations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./benion-animations/benion-animations.component */ "./src/app/benion-animations/benion-animations.component.ts");
/* harmony import */ var _benion_form_benion_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benion-form/benion-form.component */ "./src/app/benion-form/benion-form.component.ts");
/* harmony import */ var _benion_forms_benion_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./benion-forms/benion-forms.component */ "./src/app/benion-forms/benion-forms.component.ts");
/* harmony import */ var _benion_directives_benion_directives_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./benion-directives/benion-directives.component */ "./src/app/benion-directives/benion-directives.component.ts");
/* harmony import */ var _benion_courses_benion_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benion-courses/benion-courses.component */ "./src/app/benion-courses/benion-courses.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var routes = [
    {
        path: '',
        component: _benion_forms_benion_forms_component__WEBPACK_IMPORTED_MODULE_6__["BenionFormsComponent"],
        data: { title: 'Benion Homepage' }
    },
    {
        path: 'form',
        component: _benion_form_benion_form_component__WEBPACK_IMPORTED_MODULE_5__["BenionFormComponent"],
        data: { title: 'Benion Form' }
    },
    {
        path: 'directives',
        component: _benion_directives_benion_directives_component__WEBPACK_IMPORTED_MODULE_7__["BenionDirectivesComponent"],
        data: { title: 'Benion Directives' }
    },
    {
        path: 'forms',
        component: _benion_forms_benion_forms_component__WEBPACK_IMPORTED_MODULE_6__["BenionFormsComponent"],
        data: { title: 'Benion Forms' }
    },
    // {
    //   path: 'page-not-found',
    //   loadChildren: './benion-page-not-found/benion-page-not-found.module#BenionPageNotFoundModule'
    // },
    // {
    //   path: '**',
    //   redirectTo: 'page-not-found'
    // },
    {
        path: 'courses',
        component: _benion_courses_benion_courses_component__WEBPACK_IMPORTED_MODULE_8__["BenionCoursesComponent"],
        data: { title: 'Benion Courses' }
    },
    {
        path: 'animations',
        component: _benion_animations_benion_animations_component__WEBPACK_IMPORTED_MODULE_4__["BenionAnimationsComponent"],
        data: { title: 'Benion Animations' }
    },
    {
        path: 'test',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"],
        data: { title: 'Benion Test' }
    },
    {
        path: 'firebase',
        component: _benion_firebase_benion_firebase_component__WEBPACK_IMPORTED_MODULE_1__["BenionFirebaseComponent"],
        data: { title: 'Benion FireBase' }
    },
    {
        path: 'page-not-found',
        component: _benion_page_not_found_benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["BenionPageNotFoundComponent"],
        data: { title: 'Benion Page Not Found' }
    },
    {
        path: '**',
        redirectTo: '/page-not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, { enableTracing: true } // Debubbgbging Purpose Only
                )],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Benion-Web';
        this.isChecked = false;
        this.colors = [
            { id: 1, name: 'Red' },
            { id: 2, name: 'Green' },
            { id: 3, name: 'Blue' }
        ];
    }
    AppComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _benion_page_not_found_benion_page_not_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benion-page-not-found/benion-page-not-found.module */ "./src/app/benion-page-not-found/benion-page-not-found.module.ts");
/* harmony import */ var _benion_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./benion-service.service */ "./src/app/benion-service.service.ts");
/* harmony import */ var _benion_courses_benion_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benion-courses/benion-courses.component */ "./src/app/benion-courses/benion-courses.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/database */ "../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "../node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _benion_directives_benion_directives_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./benion-directives/benion-directives.component */ "./src/app/benion-directives/benion-directives.component.ts");
/* harmony import */ var _benion_forms_benion_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./benion-forms/benion-forms.component */ "./src/app/benion-forms/benion-forms.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _benion_form_benion_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./benion-form/benion-form.component */ "./src/app/benion-form/benion-form.component.ts");
/* harmony import */ var _benion_animations_benion_animations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./benion-animations/benion-animations.component */ "./src/app/benion-animations/benion-animations.component.ts");
/* harmony import */ var _benion_page_not_found_benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./benion-page-not-found/benion-page-not-found.component */ "./src/app/benion-page-not-found/benion-page-not-found.component.ts");
/* harmony import */ var _benion_firebase_benion_firebase_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./benion-firebase/benion-firebase.component */ "./src/app/benion-firebase/benion-firebase.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _benion_courses_benion_courses_component__WEBPACK_IMPORTED_MODULE_3__["BenionCoursesComponent"],
                _benion_directives_benion_directives_component__WEBPACK_IMPORTED_MODULE_13__["BenionDirectivesComponent"],
                _benion_forms_benion_forms_component__WEBPACK_IMPORTED_MODULE_14__["BenionFormsComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"],
                _benion_form_benion_form_component__WEBPACK_IMPORTED_MODULE_16__["BenionFormComponent"],
                _benion_animations_benion_animations_component__WEBPACK_IMPORTED_MODULE_17__["BenionAnimationsComponent"],
                _benion_page_not_found_benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["BenionPageNotFoundComponent"],
                _benion_firebase_benion_firebase_component__WEBPACK_IMPORTED_MODULE_19__["BenionFirebaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
                _benion_page_not_found_benion_page_not_found_module__WEBPACK_IMPORTED_MODULE_1__["BenionPageNotFoundModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]
            ],
            providers: [
                _benion_service_service__WEBPACK_IMPORTED_MODULE_2__["BenionServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/benion-animations/benion-animations.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/benion-animations/benion-animations.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1hbmltYXRpb25zL2Jlbmlvbi1hbmltYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/benion-animations/benion-animations.component.html":
/*!********************************************************************!*\
  !*** ./src/app/benion-animations/benion-animations.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input \n  #itemInput \n  class=\"form-control\" \n  (keyup.enter)=\"addItems(itemInput)\" />\n\n<div *ngIf=\"todoLists\" class=\"list-group\">\n  <button\n    type=\"button\"\n    @fade\n    *ngFor=\"let todoList of todoLists\"\n    (click)=\"removeItems(todoList)\"\n    class=\"list-group-item\"\n  >\n    {{ todoList }}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/benion-animations/benion-animations.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/benion-animations/benion-animations.component.ts ***!
  \******************************************************************/
/*! exports provided: BenionAnimationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionAnimationsComponent", function() { return BenionAnimationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _benion_fade_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../benion-fade-animations */ "./src/app/benion-fade-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var BenionAnimationsComponent = /** @class */ (function () {
    function BenionAnimationsComponent() {
        var _this = this;
        this.todoLists = [
            'Check Facebook Notifications',
            'Read News Online',
            'Play Games',
            'Do My Programmings',
            'Chat Online',
            'Midnight Browsing'
        ];
        this.addItems = function (input) {
            _this.todoLists.splice(0, 0, input.value);
            console.log('Item Added');
        };
        this.removeItems = function (item) {
            var index = _this.todoLists.indexOf(item);
            _this.todoLists.splice(index, 1);
            console.log('Item Removed');
        };
    }
    BenionAnimationsComponent.prototype.ngOnInit = function () {
    };
    BenionAnimationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-benion-animations',
            template: __webpack_require__(/*! ./benion-animations.component.html */ "./src/app/benion-animations/benion-animations.component.html"),
            animations: [
                _benion_fade_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./benion-animations.component.css */ "./src/app/benion-animations/benion-animations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionAnimationsComponent);
    return BenionAnimationsComponent;
}());



/***/ }),

/***/ "./src/app/benion-courses/benion-courses.component.css":
/*!*************************************************************!*\
  !*** ./src/app/benion-courses/benion-courses.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1jb3Vyc2VzL2Jlbmlvbi1jb3Vyc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/benion-courses/benion-courses.component.ts":
/*!************************************************************!*\
  !*** ./src/app/benion-courses/benion-courses.component.ts ***!
  \************************************************************/
/*! exports provided: BenionCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionCoursesComponent", function() { return BenionCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _benion_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../benion-service.service */ "./src/app/benion-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var BenionCoursesComponent = /** @class */ (function () {
    function BenionCoursesComponent(service) {
        this.title = 'Benion Maths, Computer & Statistics Courses';
        this.mscCourses = [
            'CMP 111',
            'MTH 111',
            'STA 111',
            'MTH 122',
            'MTH 132',
            'CMP 211'
        ];
        this.label = service.getTitle();
        this.fppCourses = service.getCourses();
    }
    BenionCoursesComponent.prototype.ngOnInit = function () {
    };
    BenionCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-benion-courses',
            template: "\n      <h2>{{ title }}</h2>\n      <ul>\n        <li *ngFor = \"let course of mscCourses\">\n          {{ course }}\n        </li>\n      </ul>\n      <p></p>\n      <h2>{{ label }}</h2>\n      <ul>\n        <li *ngFor = \"let course of fppCourses\">\n          {{ course }}\n        </li>\n      </ul>\n    ",
            styles: [__webpack_require__(/*! ./benion-courses.component.css */ "./src/app/benion-courses/benion-courses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_benion_service_service__WEBPACK_IMPORTED_MODULE_1__["BenionServiceService"]])
    ], BenionCoursesComponent);
    return BenionCoursesComponent;
}());



/***/ }),

/***/ "./src/app/benion-directives/benion-directives.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/benion-directives/benion-directives.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1kaXJlY3RpdmVzL2Jlbmlvbi1kaXJlY3RpdmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/benion-directives/benion-directives.component.html":
/*!********************************************************************!*\
  !*** ./src/app/benion-directives/benion-directives.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div *ngIf=\"courses.length > 0; then courseLists else noCourses\"></div>\n<ng-template #courseLists>\n  List Of Courses\n</ng-template>\n<ng-template #noCourses>\n  No Courses Yet\n</ng-template>\n<div hidden>\n  This Is Hidden\n</div>\n\n\n<div [hidden]=\"courses.length > 0\">\n  Courses Are Unavailable\n</div>\n<div [hidden]=\"courses.length == 0\">\n  Courses Are Available\n</div>\n\n\n<ul class=\"nav nav-pills\">\n  <li [class.active]=\"viewMode=='map'\"><a (click)=\"viewMode='map'\">Map View</a></li>\n  <li [class.active]=\"viewMode=='list'\"><a (click)=\"viewMode='list'\">List View</a></li>\n</ul>\n\n<div [ngSwitch]=\"viewMode\">\n  <div *ngSwitchCase=\"'map'\">Map View Content</div>\n  <div *ngSwitchCase=\"'list'\">List View Content</div>\n  <div *ngSwitchDefault>Otherwise</div>\n</div>\n\n\n<ul>\n  <li *ngFor=\"let course of courses\">\n    {{ course.name }}\n    <button class=\"btn btn-secondary m-2\" (click)=\"onRemove(course)\">Remove Course</button>\n    <button class=\"btn btn-secondary m-2\" (click)=\"onChange(course)\">Change Course</button>\n  </li>\n</ul>\n<button class=\"btn btn-primary m-2\" (click)=\"onAdd()\">Add Course</button>"

/***/ }),

/***/ "./src/app/benion-directives/benion-directives.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/benion-directives/benion-directives.component.ts ***!
  \******************************************************************/
/*! exports provided: BenionDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionDirectivesComponent", function() { return BenionDirectivesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenionDirectivesComponent = /** @class */ (function () {
    function BenionDirectivesComponent() {
        var _this = this;
        this.courses = [
            { id: 1, name: 'CMP 111' },
            { id: 2, name: 'MTH 111' },
            { id: 3, name: 'STA 111' },
            { id: 4, name: 'MTH 122' },
            { id: 5, name: 'MTH 132' }
        ];
        this.viewMode = 'SomethingElse';
        this.onAdd = function () {
            _this.courses.push({ id: 6, name: 'CMP 211' });
        };
        this.onRemove = function (course) {
            var index = _this.courses.indexOf(course);
            _this.courses.splice(index, 1);
        };
        this.onChange = function (course) {
            course.name = 'UPDATED';
        };
    }
    BenionDirectivesComponent.prototype.ngOnInit = function () {
    };
    BenionDirectivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benion-directives',
            template: __webpack_require__(/*! ./benion-directives.component.html */ "./src/app/benion-directives/benion-directives.component.html"),
            styles: [__webpack_require__(/*! ./benion-directives.component.css */ "./src/app/benion-directives/benion-directives.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionDirectivesComponent);
    return BenionDirectivesComponent;
}());



/***/ }),

/***/ "./src/app/benion-fade-animations.ts":
/*!*******************************************!*\
  !*** ./src/app/benion-fade-animations.ts ***!
  \*******************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'yellow', opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'green', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'white', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'red', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'white', opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/benion-firebase/benion-firebase.component.css":
/*!***************************************************************!*\
  !*** ./src/app/benion-firebase/benion-firebase.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1maXJlYmFzZS9iZW5pb24tZmlyZWJhc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/benion-firebase/benion-firebase.component.html":
/*!****************************************************************!*\
  !*** ./src/app/benion-firebase/benion-firebase.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n\t<li *ngFor=\"let user of users\">\n\t\t{{ user.$value }}\n\t</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/benion-firebase/benion-firebase.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/benion-firebase/benion-firebase.component.ts ***!
  \**************************************************************/
/*! exports provided: BenionFirebaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionFirebaseComponent", function() { return BenionFirebaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var BenionFirebaseComponent = /** @class */ (function () {
    function BenionFirebaseComponent(database) {
        var _this = this;
        database.list('/users').snapshotChanges().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        });
    }
    BenionFirebaseComponent.prototype.ngOnInit = function () { };
    BenionFirebaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benion-firebase',
            template: __webpack_require__(/*! ./benion-firebase.component.html */ "./src/app/benion-firebase/benion-firebase.component.html"),
            styles: [__webpack_require__(/*! ./benion-firebase.component.css */ "./src/app/benion-firebase/benion-firebase.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], BenionFirebaseComponent);
    return BenionFirebaseComponent;
}());



/***/ }),

/***/ "./src/app/benion-form/benion-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/benion-form/benion-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1mb3JtL2Jlbmlvbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/benion-form/benion-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/benion-form/benion-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input\n      required\n      minlength=\"3\"\n      maxlength=\"10\"\n      appForbiddenName=\"Iorver\"\n      ngModel\n      name=\"firstName\"\n      #firstName=\"ngModel\"\n      (change)=\"getName(firstName)\"\n      id=\"firstName\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n    <div\n      class=\"alert alert-danger\"\n      *ngIf=\"firstName.invalid && (firstName.touched || firstName.dirty)\"\n    >\n      <div *ngIf=\"firstName.errors.required\">First Name Is Required.</div>\n      <div *ngIf=\"firstName.errors.minlength\">\n        First Name Should Be A Minimum Of {{ firstName.errors.minlength.requiredLength }} Characters And Not More Than 10 Characters.\n      </div>\n      <div *ngIf=\"firstName.errors.forbiddenName\">\n          First Name Cannot Be \"Iorver\".\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment</label>\n    <textarea\n      ngModel\n      required\n      minlength=\"6\"\n      maxlength=\"10\"\n      pattern=\"Benion\"\n      name=\"comment\"\n      #comment=\"ngModel\"\n      (change)=\"getComment(comment)\"\n      id=\"comment\"\n      cols=\"30\"\n      rows=\"10\"\n      class=\"form-control\"\n    ></textarea>\n    <div\n      class=\"alert alert-danger\"\n      *ngIf=\"comment.touched && !comment.valid\"\n    >\n      <div *ngIf=\"comment.errors.required\">Comment Field Is Required.</div>\n      <div *ngIf=\"comment.errors.minlength\">\n        Comment Should Be A Minimum Of {{ comment.errors.minlength.requiredLength }} Characters And Not More Than 10 Characters.\n      </div>\n      <div *ngIf=\"comment.errors.pattern\">\n        Comment Doesn't Match The Pattern.\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/benion-form/benion-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/benion-form/benion-form.component.ts ***!
  \******************************************************/
/*! exports provided: BenionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionFormComponent", function() { return BenionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenionFormComponent = /** @class */ (function () {
    function BenionFormComponent() {
    }
    BenionFormComponent.prototype.getName = function (x) {
        console.log(x);
    };
    BenionFormComponent.prototype.getComment = function (x) {
        console.log(x);
    };
    BenionFormComponent.prototype.ngOnInit = function () {
    };
    BenionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benion-form',
            template: __webpack_require__(/*! ./benion-form.component.html */ "./src/app/benion-form/benion-form.component.html"),
            styles: [__webpack_require__(/*! ./benion-form.component.css */ "./src/app/benion-form/benion-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionFormComponent);
    return BenionFormComponent;
}());



/***/ }),

/***/ "./src/app/benion-forms/benion-forms.component.css":
/*!*********************************************************!*\
  !*** ./src/app/benion-forms/benion-forms.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1mb3Jtcy9iZW5pb24tZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/benion-forms/benion-forms.component.html":
/*!**********************************************************!*\
  !*** ./src/app/benion-forms/benion-forms.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input \n    ngModel\n    name=\"firstname\"\n    #firstname=\"ngModel\"\n    matInput \n    placeholder=\"First Name\" \n    value=\"\" \n    required>\n    <mat-error *ngIf=\"firstname.invalid && firstname.errors.required\">\n      This First Name Field Is Required.. \n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n     <input \n     ngModel\n     name=\"lastname\"\n     #lastname=\"ngModel\"\n     matInput \n     placeholder=\"Last Name\" \n     value=\"\" \n     required>\n     <mat-error *ngIf=\"lastname.invalid && lastname.errors.required\">\n      This Last Name Field Is Required.. \n    </mat-error>\n  </mat-form-field><p></p>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"About Yourself\"></textarea>\n  </mat-form-field>\n</form><p></p>\n\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input \n    ngModel\n    name=\"email\"\n    #email=\"ngModel\"\n    matInput \n    placeholder=\"Select Mail\" \n    value=\"\" \n    required>\n    <mat-hint>Select A Unique Name For Email. </mat-hint>\n\t  <span matSuffix>@domain.com</span>\n    <span matPrefix>admin.</span>\n    <mat-error *ngIf=\"email.invalid && email.errors.required\">\n      This Mail Field Is Required.. \n    </mat-error>  \n  </mat-form-field>\n</form><p></p>\n\n\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input \n    ngModel\n    name=\"choosepassword\"\n    #choosepassword=\"ngModel\"\n    matInput \n    placeholder=\"Choose Password\" \n    type=\"password\" \n    value=\"\" \n    required>\n    <mat-hint>Password Should Be More Than 8 Characters </mat-hint>\n    <mat-error *ngIf=\"choosepassword.invalid && choosepassword.errors.required\">\n      Password Is Required.. \n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input \n    ngModel\n    name=\"confirmpassword\"\n    #confirmpassword=\"ngModel\"\n    matInput \n    placeholder=\"Confirm Password\" \n    type=\"password\" \n    value=\"\" \n    required>\n    <mat-hint>Passwords Should Be Thesame </mat-hint>\n    <mat-error *ngIf=\"confirmpassword.invalid && confirmpassword.errors.required\">\n      Confirmation Required.. \n    </mat-error>\n  </mat-form-field>\n</form><p></p>\n\n<mat-radio-group value=\"0\">\n\t<mat-radio-button value=\"1\">Male</mat-radio-button>\n\t<mat-radio-button value=\"0\">Female</mat-radio-button>\n</mat-radio-group>\n<p></p>\n\n\n<mat-form-field>\n  <mat-label>Select Color</mat-label>\n  <mat-select \n  [value]=\"\" \n  required>\n    <mat-option \n    *ngFor=\"let color of colors\" \n    [value]=\"color.id\">\n      {{color.name}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<p></p>\n\n\n<mat-form-field>\n  <input \n  ngModel\n  name=\"choosebirthday\"\n  #choosebirthday=\"ngModel\"\n  matInput \n  [matDatepicker]=\"picker\" \n  placeholder=\"Choose Your Birth Date\" \n  required>\n  <mat-datepicker-toggle \n  matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker \n  #picker \n  color=\"warn\"></mat-datepicker>\n  <mat-hint>Password Should Be More Than 8 Characters </mat-hint>\n    <mat-error *ngIf=\"choosebirthday.invalid && choosebirthday.errors.required\">\n      Birth Date Is Required.. \n    </mat-error>\n</mat-form-field>\n<p></p>\n\n\n<mat-checkbox\n  value=\"\"\n  #showDetails\n  [checked]=\"isChecked\"\n  (change)=\"onChange($event)\"\n>\n\tAccept Terms And Condition..??\n</mat-checkbox>\n<div *ngIf=\"showDetails.checked\">\n\tThanks For Accepting... \n</div>\n<p></p>\n\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/courses\">Benion Courses</a></button>\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/directives\">Benion Directives</a></button>\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/forms\">Benion Forms</a></button>\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/animations\">Benion Animations</a></button>\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/form\">Benion Form</a></button>\n  <button mat-menu-item routerLinkActive=\"active\"><a routerLink=\"/firebase\">Benion Firebase</a></button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/benion-forms/benion-forms.component.ts":
/*!********************************************************!*\
  !*** ./src/app/benion-forms/benion-forms.component.ts ***!
  \********************************************************/
/*! exports provided: BenionFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionFormsComponent", function() { return BenionFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenionFormsComponent = /** @class */ (function () {
    function BenionFormsComponent() {
        this.title = 'Benion-Web';
        this.isChecked = false;
        this.colors = [
            { id: 1, name: 'Red' },
            { id: 2, name: 'Green' },
            { id: 3, name: 'Blue' }
        ];
    }
    BenionFormsComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    BenionFormsComponent.prototype.ngOnInit = function () {
    };
    BenionFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benion-forms',
            template: __webpack_require__(/*! ./benion-forms.component.html */ "./src/app/benion-forms/benion-forms.component.html"),
            styles: [__webpack_require__(/*! ./benion-forms.component.css */ "./src/app/benion-forms/benion-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionFormsComponent);
    return BenionFormsComponent;
}());



/***/ }),

/***/ "./src/app/benion-page-not-found/benion-page-not-found-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/benion-page-not-found/benion-page-not-found-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BenionPageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionPageNotFoundRoutingModule", function() { return BenionPageNotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benion-page-not-found.component */ "./src/app/benion-page-not-found/benion-page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _benion_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["BenionPageNotFoundComponent"]
    }
];
var BenionPageNotFoundRoutingModule = /** @class */ (function () {
    function BenionPageNotFoundRoutingModule() {
    }
    BenionPageNotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], BenionPageNotFoundRoutingModule);
    return BenionPageNotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/benion-page-not-found/benion-page-not-found.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/benion-page-not-found/benion-page-not-found.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlbmlvbi1wYWdlLW5vdC1mb3VuZC9iZW5pb24tcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/benion-page-not-found/benion-page-not-found.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/benion-page-not-found/benion-page-not-found.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <span class=\"error-code\">404</span>\n  <h1>This page doesn't exist</h1>\n</div>"

/***/ }),

/***/ "./src/app/benion-page-not-found/benion-page-not-found.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/benion-page-not-found/benion-page-not-found.component.ts ***!
  \**************************************************************************/
/*! exports provided: BenionPageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionPageNotFoundComponent", function() { return BenionPageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenionPageNotFoundComponent = /** @class */ (function () {
    function BenionPageNotFoundComponent() {
    }
    BenionPageNotFoundComponent.prototype.ngOnInit = function () {
    };
    BenionPageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benion-page-not-found',
            template: __webpack_require__(/*! ./benion-page-not-found.component.html */ "./src/app/benion-page-not-found/benion-page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./benion-page-not-found.component.css */ "./src/app/benion-page-not-found/benion-page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionPageNotFoundComponent);
    return BenionPageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/benion-page-not-found/benion-page-not-found.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/benion-page-not-found/benion-page-not-found.module.ts ***!
  \***********************************************************************/
/*! exports provided: BenionPageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionPageNotFoundModule", function() { return BenionPageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _benion_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benion-page-not-found-routing.module */ "./src/app/benion-page-not-found/benion-page-not-found-routing.module.ts");




var BenionPageNotFoundModule = /** @class */ (function () {
    function BenionPageNotFoundModule() {
    }
    BenionPageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _benion_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["BenionPageNotFoundRoutingModule"]
            ]
        })
    ], BenionPageNotFoundModule);
    return BenionPageNotFoundModule;
}());



/***/ }),

/***/ "./src/app/benion-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/benion-service.service.ts ***!
  \*******************************************/
/*! exports provided: BenionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenionServiceService", function() { return BenionServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenionServiceService = /** @class */ (function () {
    function BenionServiceService() {
        this.getTitle = function () {
            return 'Benion Forest Production & Products Courses';
        };
        this.getCourses = function () {
            return [
                'FPP 201',
                'FPP 301',
                'FPP 303',
                'FPP 305',
                'FPP 309'
            ];
        };
    }
    BenionServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenionServiceService);
    return BenionServiceService;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form works!\n</p>\n\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAI0USNxo-c2SrxnvUbNMmVPBeT0f2a12g',
        authDomain: 'benion-firebase.firebaseapp.com',
        databaseURL: 'https://benion-firebase.firebaseio.com',
        projectId: 'benion-firebase',
        storageBucket: '',
        messagingSenderId: '308058327609',
        appId: '1:308058327609:web:f795e7ff9af0998b'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Benion Programmings\Angular\Benion-Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map