(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-label class=\"support_lbl\">Support</ion-label> -->\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\" color=\"danger\">\n        <ion-icon slot=\"end\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        {{'Support' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">{{'Order Summary' | translate}}</ion-label>\n    <ion-label class=\"res_location\">{{'This order with' | translate}} {{restName}} {{'was' | translate}} {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">{{'Your Order' | translate}}</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='ongoing' || status =='accepted' \">\n        {{'Track Order' | translate}}\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">{{'Item Total' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{total}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">{{'Coupon Discout' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{dicount}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">{{'Delivery Charge' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{serviceTax}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">{{'Order Detail' | translate}}</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">{{'Order Number' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{id}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Payment' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{'Paid' | translate}} ; <span *ngIf=\"paid =='cod'\">COD</span> <span\n        *ngIf=\"paid =='stripe'\">{{'Using Card' | translate}}</span> </ion-label>\n    <ion-label class=\"head_gray\">{{'Date' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Deliver to' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='created' ||status =='ongoing' || status =='accepted' \" (click)=\"call()\">\n      {{'Call' | translate}} {{restName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{'Rate Order' | translate}}\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        {{'Cancel Order' | translate}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/history-detail/history-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function() { return HistoryDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-detail.page */ "./src/app/pages/history-detail/history-detail.page.ts");




const routes = [
    {
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
    }
];
let HistoryDetailPageRoutingModule = class HistoryDetailPageRoutingModule {
};
HistoryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: HistoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function() { return HistoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-detail-routing.module */ "./src/app/pages/history-detail/history-detail-routing.module.ts");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-detail.page */ "./src/app/pages/history-detail/history-detail.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let HistoryDetailPageModule = class HistoryDetailPageModule {
};
HistoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
    })
], HistoryDetailPageModule);



/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: red;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .upper_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.main_content_div .red_lbl {\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvQzpcXFVzZXJzXFxkb3VnbFxcT25lRHJpdmVcXMOBcmVhIGRlIFRyYWJhbGhvXFxGb29kQXBwX0Zvb2REZWxpdmVyaW5nX0lvbmljX0ZpcmViYXNlLW1haW5cXEFwcF9Db2RlXFxVc2VyQXBwL3NyY1xcYXBwXFxwYWdlc1xcaGlzdG9yeS1kZXRhaWxcXGhpc3RvcnktZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDQ1I7QURHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLGNBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDRlI7QURLSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRElRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRlo7QURJUTtFQUNJLGVBQUE7QUNGWjtBRElRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRE1JO0VBQ0ksbUNBQUE7RUFDQSxtQkFBQTtBQ0pSO0FES1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNIWjtBRElZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNGaEI7QURJWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRmhCO0FES1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSFo7QURJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBRE9JO0VBQ0ksbUNBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSlo7QURNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSmhCO0FEUVE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTlo7QURPWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTGhCO0FEVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNSUjtBRFdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNUUjtBRFdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRFdJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEYUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDVko7QURZSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDVlI7QURZSTtFQUNJLHNDQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5LWRldGFpbC9oaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnN1cHBvcnRfbGJse1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxpbmVfZGl2e1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaGVhZGVyX2xibHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAucmVzX25hbWV7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgICBcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vZF9wcmljZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuZmF2X2xibHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3ViTmFtZXN7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZV9sYmx7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mbGV4X3RpdGxlc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLnN1Yl9uYW1le1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAudXBwZXJfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC52ZWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvd2VyX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjs7XG4gICAgICAgICAgICAucmF0ZV9sYmx7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByaXNlX2xibHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZF9ncmF5e1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAuc21hbGxfbGJse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5yZWRfbGJse1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG4uYnRuX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICB9XG4gICAgLnJhdGFle1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTs7XG4gICAgfVxufVxuIiwiLmhlYWRlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX2RpdiAuc3VwcG9ydF9sYmwge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRlcl9sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzX25hbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzX2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogOTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC5mb29kX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZm9vZF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZmF2X2xibCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZm9vZF90aXRsZSAudmVnIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZm9vZF90aXRsZSAucmF0ZV9sYmwge1xuICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZsZXhfdGl0bGVzIC5zdWJfbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC51cHBlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC51cHBlcl9kaXYgLnZlZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmxvd2VyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAubG93ZXJfZGl2IC5yYXRlX2xibCB7XG4gIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByaXNlX2xibCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVkX2xibCB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG5fZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLmJ0bl9kaXYgLnJhdGFlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: HistoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function() { return HistoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let HistoryDetailPage = class HistoryDetailPage {
    constructor(route, api, router, util, alertController, navCtrl) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.orders = [];
        this.coupon = false;
        this.loaded = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    getOrder() {
        this.api.getOrderById(this.id).then((data) => {
            this.loaded = true;
            console.log(data);
            if (data) {
                this.orderData = data;
                this.grandTotal = data.grandTotal;
                this.orders = JSON.parse(data.order);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = data.time;
                if (data && data.dId && data.dId.fullname) {
                    this.dname = data.dId.fullname;
                    this.driverFCM = data.dId.fcm_token;
                    console.log('driver FCM-------->', this.driverFCM);
                    this.dId = data.dId.uid;
                }
                this.total = data.total;
                this.address = data.vid.address;
                this.restName = data.vid.name;
                this.deliveryAddress = data.address.address;
                this.paid = data.paid;
                console.log('this', this.orders);
                this.getRest(data.vid.uid);
                this.coupon = data.appliedCoupon;
                this.dicount = data.dicount;
                // if (this.status === 'delivered') {
                //   this.presentAlertConfirm();
                // }
            }
        }, error => {
            console.log('error in orders', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'How was your experience?',
                message: 'Rate ' + this.restName + ' and ' + this.dname,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.util.setOrders(this.orderData);
                            this.router.navigate(['rate']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getRest(id) {
        this.api.getProfile(id).then((data) => {
            console.log(data);
            this.restFCM = data.fcm_token;
            console.log('rest FCM------------->', this.restFCM);
            if (data && data.phone) {
                this.restPhone = data.phone;
            }
        }, error => {
            console.log('error in orders', error);
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.util.errorToast('Something went wrong');
        });
    }
    trackMyOrder() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
        //
    }
    call() {
        if (this.restPhone) {
            window.open('tel:' + this.restPhone);
        }
    }
    chat() {
        this.router.navigate(['inbox']);
    }
    changeStatus() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('To Cancel this order'),
            showCancelButton: true,
            cancelButtonText: this.util.translate('Cancel'),
            showConfirmButton: true,
            confirmButtonText: this.util.translate('Yes'),
            backdrop: false,
            background: 'white'
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                this.util.show();
                this.api.updateOrderStatus(this.id, 'cancel').then((data) => {
                    this.util.hide();
                    const message = this.util.translate('Order ') + this.id + ' ' + this.util.translate(' cancelled by user');
                    const title = this.util.translate('Order cancelled');
                    this.api.sendNotification(message, title, this.driverFCM).subscribe(data => {
                        console.log(data);
                    });
                    this.api.sendNotification(message, title, this.restFCM).subscribe(data => {
                        console.log(data);
                    });
                    if (this.dId && this.dname) {
                        const parm = {
                            current: 'active',
                        };
                        this.api.updateProfile(this.dId, parm).then((data) => {
                            console.log('driver status cahcnage----->', data);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                }).catch(error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                });
            }
        });
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HistoryDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
HistoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-detail.page.scss */ "./src/app/pages/history-detail/history-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], HistoryDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-history-detail-history-detail-module-es2015.js.map