(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rate-rate-module"],{

/***/ "./node_modules/ionic4-rating/dist/components/rating.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this._onChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "rateChange", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "rating",
            template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
            styles: [
                "\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
            ],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RatingComponent);
    return RatingComponent;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/index.js ***!
  \**************************************************/
/*! exports provided: IonicRatingModule, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-rating.module */ "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"]; });

/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
  \****************************************************************/
/*! exports provided: IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
    IonicRatingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
            declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
        })
    ], IonicRatingModule);
    return IonicRatingModule;
}());

//# sourceMappingURL=ionic-rating.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"title\"> Rate Foods</p>\n  <div *ngFor=\"let item of items\" class=\"flex_box\">\n    <ion-label class=\"name\">{{item.name}}</ion-label>\n    <rating [(ngModel)]=\"item.rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n      halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n    </rating>\n  </div>\n\n  <p class=\"title\"> Rate Driver</p>\n  <div class=\"driver\">\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"image\" onError=\"this.src='assets/imgs/paper.png'\" />\n      </ion-avatar>\n      <ion-label>{{name}}</ion-label>\n    </ion-item>\n    <rating [(ngModel)]=\"driver\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n      starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n    <ion-textarea rows=\"5\" [(ngModel)]=\"driverNotes\" placeholder=\"Write detailed review here..\"></ion-textarea>\n  </div>\n  <ion-button (click)=\"submit()\" expand=\"block\" shape=\"round\">\n    Submit\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/pages/rate/rate-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/rate/rate-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageRoutingModule", function() { return RatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate.page */ "./src/app/pages/rate/rate.page.ts");




const routes = [
    {
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_3__["RatePage"]
    }
];
let RatePageRoutingModule = class RatePageRoutingModule {
};
RatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rate/rate.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/rate/rate.module.ts ***!
  \*******************************************/
/*! exports provided: RatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageModule", function() { return RatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate-routing.module */ "./src/app/pages/rate/rate-routing.module.ts");
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate.page */ "./src/app/pages/rate/rate.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








let RatePageModule = class RatePageModule {
};
RatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatePageRoutingModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
        ],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
    })
], RatePageModule);



/***/ }),

/***/ "./src/app/pages/rate/rate.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/rate/rate.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  background: #f3f3f3;\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: bold;\n  margin: 0px;\n  padding: 10px;\n}\n\n.flex_box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n\n.flex_box .name {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.driver {\n  padding: 10px;\n}\n\n.driver ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0ZS9DOlxcVXNlcnNcXGRvdWdsXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXEZvb2RBcHBfRm9vZERlbGl2ZXJpbmdfSW9uaWNfRmlyZWJhc2UtbWFpblxcQXBwX0NvZGVcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyYXRlXFxyYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmF0ZS9yYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUNFSjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QURGSTtFQUNJLGtDQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yYXRlL3JhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5mbGV4X2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIC5uYW1le1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG4uZHJpdmVye1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbn0iLCIudGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mbGV4X2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5mbGV4X2JveCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZHJpdmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5kcml2ZXIgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rate/rate.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/rate/rate.page.ts ***!
  \*****************************************/
/*! exports provided: RatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePage", function() { return RatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let RatePage = class RatePage {
    constructor(api, util, adb, navCtrl) {
        this.api = api;
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.driver = 3;
        this.items = [];
        const data = this.util.gerOrder();
        console.log(data);
        if (data) {
            this.items = JSON.parse(data.order);
            this.items = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["uniqBy"])(this.items, 'id');
            this.dId = data.dId.id;
            this.name = data.dId.fullname;
            this.image = data.dId.coverImage;
            console.log(this.items);
            this.items.forEach(element => {
                element.rate = 0;
                element.totalRatting = element.totalRatting ? element.totalRatting : 1;
            });
        }
    }
    submit() {
        console.log(this.items);
        this.items.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('elementt', element);
            let totalRatting = 0;
            totalRatting = (element.rate * element.totalRatting) / 100;
            console.log('???', totalRatting);
            totalRatting = totalRatting * 100;
            if (!totalRatting) {
                totalRatting = element.rate;
            }
            yield this.adb.collection('foods').doc(element.uid).collection('all').doc(element.id).update({
                ratting: totalRatting,
                totalRatting: element.totalRatting + 1
            });
        }));
        const id = Math.random().toString();
        console.log('iddddd', id);
        const uid = localStorage.getItem('uid');
        console.log('----->', localStorage.getItem('uid'));
        const parm = {
            id: id,
            descriptions: this.driverNotes,
            rate: this.driver,
            dId: this.dId,
            user: uid,
            uid: uid
        };
        console.log('parma ====>', parm);
        this.api.addDriverReview(parm).then((data) => {
            console.log('??????', data);
        }).catch(error => {
            console.log(error);
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Success',
            text: 'Thank you for submiting review',
            timer: 1000,
            backdrop: false,
            background: 'white',
            icon: 'success'
        });
        this.navCtrl.navigateRoot(['/tabs']);
    }
    ngOnInit() {
    }
    onRatingChange(event) {
        console.log(event);
    }
};
RatePage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
RatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rate.page.scss */ "./src/app/pages/rate/rate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], RatePage);



/***/ })

}]);
//# sourceMappingURL=pages-rate-rate-module-es2015.js.map