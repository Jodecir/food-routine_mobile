(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Add New Card' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <ion-label class=\"lbl_card\">{{'Your Credit / Debit Card' | translate}}</ion-label>\n\n    <div class=\"div_card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" placeholder=\"demo@gmail.com\" [(ngModel)]=\"email\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Email Address' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"number\" placeholder=\"424242*********4242\" [(ngModel)]=\"cnumber\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">{{'Card Number' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"text\" placeholder=\"Joe\" [(ngModel)]=\"cname\" class=\"input_all\"></ion-input>\n          <ion-label class=\"card_number\">{{'Card Holder Name' | translate}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime min=\"2020\" max=\"2030\" display-format=\"MMM, YYYY\" [(ngModel)]=\"date\" class=\"input_date\"\n            placeholder=\"Jan, 2019\">\n          </ion-datetime>\n          <ion-label class=\"card_number\">{{'Expiration Date' | translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-label class=\"lbl_card\">CVC</ion-label>\n    <ion-input type=\"text\" maxlength=\"3\" [(ngModel)]=\"cvc\" class=\"in_cvc\"></ion-input>\n\n    <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{'ADD CARD' | translate}}\n    </ion-button>\n  </div>\n  <p class=\"title\">NOTE : For DEMO USE </p>\n  <p class=\"sub\">CN : 4242 4242 4242 4242</p>\n  <p class=\"sub\">EXP : 12/2022</p>\n  <p class=\"sub\">CVC : 220</p>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-card/add-card-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");




const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "./src/app/pages/add-card/add-card-routing.module.ts");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_content {\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.div_content .lbl_card {\n  font-size: 16px;\n  display: block;\n  color: gray;\n  margin-top: 15px;\n}\n.div_content .div_card {\n  margin-top: 20px;\n  width: 100%;\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 20px;\n}\n.div_content .div_card .input_all {\n  font-size: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-start: 10px;\n}\n.div_content .div_card .input_date {\n  font-size: 10px;\n  padding: 0px !important;\n  color: black;\n}\n.div_content .div_card .card_number {\n  font-size: 10px;\n  color: gray;\n}\n.div_content .div_card .img_visa {\n  float: right;\n  height: 30px;\n  width: 30px;\n}\n.div_content .in_cvc {\n  border: 1px solid gray;\n  margin-top: 15px;\n  border-radius: 5px;\n  width: 135px;\n  text-align: center;\n  font-size: 10px;\n}\n.div_content .btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n.title {\n  margin: 0px;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-primary);\n}\n.sub {\n  padding: 10px;\n  margin: 0px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvQzpcXFVzZXJzXFxkb3VnbFxcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxGb29kQXBwX0Zvb2REZWxpdmVyaW5nX0lvbmljX0ZpcmViYXNlLW1haW5cXEFwcF9Db2RlXFxVc2VyQXBwL3NyY1xcYXBwXFxwYWdlc1xcYWRkLWNhcmRcXGFkZC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDUjtBRENRO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ1o7QURZUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDVlo7QURZUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEY0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWlI7QURlSTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QUNiUjtBRGdCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDYko7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdl9jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuXG4gICAgLmxibF9jYXJke1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5kaXZfY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAuaW5wdXRfYWxse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dF9kYXRle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyAvZGVlcC8gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gL2RlZXAvIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tcbiAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgICAgICAgLy8gfVxuICAgICAgICAuY2FyZF9udW1iZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTsgIFxuICAgICAgICB9XG4gICAgICAgIC5pbWdfdmlzYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluX2N2Y3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC5idG5fYWRkY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnRpdGxle1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5zdWJ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLmRpdl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cbi5kaXZfY29udGVudCAubGJsX2NhcmQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2NhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfY2FyZCAuaW5wdXRfYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfY2FyZCAuaW5wdXRfZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5kaXZfY29udGVudCAuZGl2X2NhcmQgLmNhcmRfbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5kaXZfY29udGVudCAuZGl2X2NhcmQgLmltZ192aXNhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmRpdl9jb250ZW50IC5pbl9jdmMge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmJ0bl9hZGRjYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zdWIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AddCardPage = class AddCardPage {
    constructor(util, api, navCtrl) {
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
    }
    ngOnInit() {
    }
    updateRest(body) {
        this.api.updateProfile(body.uid, body).then((data) => {
            console.log(data);
        });
        this.navCtrl.back();
    }
    addcard() {
        if (this.email === '' || this.cname === '' || this.cnumber === '' ||
            this.cvc === '' || this.date === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.errorToast(this.util.translate('Please enter valid email'));
            return false;
        }
        const year = this.date.split('-')[0];
        const month = this.date.split('-')[1];
        const param = {
            'card[number]': this.cnumber,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
        };
        this.util.show();
        this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                // this.token = data.id;
                const customer = {
                    description: 'Customer for food app',
                    source: data.id,
                    email: this.email
                };
                this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe((customer) => {
                    console.log(customer);
                    this.util.hide();
                    if (customer && customer.id) {
                        // this.cid = customer.id;
                        const cid = {
                            uid: localStorage.getItem('uid'),
                            cid: customer.id
                        };
                        this.updateRest(cid);
                    }
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
            else {
                this.util.hide();
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
AddCardPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-card.page.scss */ "./src/app/pages/add-card/add-card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AddCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module-es2015.js.map