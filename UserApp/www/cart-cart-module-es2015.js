(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainContent\">\n    <div class=\"noData\" *ngIf=\"!cart?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{'Your Cart is Empty' | translate}}</ion-label>\n      <ion-label>{{'Please add your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div *ngIf=\"cart?.length\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" [style.backgroundImage]=\"'url('+cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"restname\">{{name}}</ion-label>\n          <ion-label class=\"address\">{{address}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"cart?.length\">\n        <div class=\"card_div\">\n          <div class=\"card\" *ngFor=\"let item of cart;let i = index\">\n            <!-- Single -->\n            <div class=\"mainCat\" *ngIf=\"item.quantiy > 0 && !item.selectedItem?.length\">\n              <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{totalRatting}} {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">{{getCurrency()}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn2\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n\n            <!-- End Of Sinle -->\n\n\n            <!-- Add-ons Product -->\n            <div *ngIf=\"item.quantiy > 0 && item.selectedItem?.length\">\n              <div class=\"mainCat\" *ngFor=\"let subItems of item.selectedItem;let j = index\">\n                <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n                <div class=\"desc_div2\">\n                  <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                  <p *ngFor=\"let addods of subItems.item\" style=\"margin: 0px;font-size: 10px;color: black;\">\n                    - {{addods.name}}\n                    <span style=\"color: black;\"> {{getCurrency()}} {{addods.value}}</span>\n                  </p>\n                </div>\n                <div class=\"cartBtn2\">\n                  <ion-button (click)=\"removeQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                    <ion-icon name=\"remove\"></ion-icon>\n                  </ion-button>\n                  <p class=\"qunitity\">{{subItems.total}}</p>\n                  <ion-button (click)=\"addQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                    <ion-icon name=\"add\"></ion-icon>\n                  </ion-button>\n                </div>\n              </div>\n            </div>\n            <!-- End Of Add-ons Product -->\n          </div>\n        </div>\n        <div class=\"coupones\" (click)=\"openCoupon()\">\n          <img src=\"assets/discount.png\" class=\"badge\" />\n          <ion-label class=\"title\">{{'Apply coupon code' | translate}} <br>\n            <p *ngIf=\"coupon\">{{'Coupon Applied' | translate}}</p>\n          </ion-label>\n        </div>\n        <div class=\"billing\">\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Item Total'}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{totalPrice}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Taxes & Charges' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{serviceTax}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Delivery Charges' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{deliveryCharge}}</ion-label>\n          </div>\n          <div class=\"singleRow\" *ngIf=\"coupon\">\n            <ion-label class=\"headerTitle\">{{'Dicount' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{dicount}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTotal boldClass\">{{'Grand Total' | translate}}</ion-label>\n            <ion-label class=\"priceTotal boldClass\">{{getCurrency()}} {{grandTotal}}</ion-label>\n          </div>\n        </div>\n        <p class=\"instructions\">\n          {{'Orders once placed cannot be cancelled and are non-refundable' | translate}}\n        </p>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"cart?.length\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\">{{getCurrency()}}{{grandTotal}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"checkout()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      {{'Checkout' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/cart/cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/pages/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent {\n  padding: 20px 0px;\n}\n\n.mainContent ion-label {\n  display: block;\n}\n\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n\n.mainContent .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.mainContent .restname {\n  margin-top: 10px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n.mainContent .address {\n  font-size: 0.8rem;\n  color: lightgray;\n}\n\n.mainContent .deliveryAddress {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px 0px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .deliveryAddress .changeAddress {\n  color: var(--ion-color-primary);\n}\n\n.mainContent .card_div {\n  padding-top: 10px;\n}\n\n.mainContent .card_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .card_div .card .mainCat {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.mainContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 10px;\n  color: black;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div2 {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div2 .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.mainContent .coupones {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .billing {\n  padding: 5px 10px;\n}\n\n.mainContent .billing .singleRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n\n.mainContent .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n\n.mainContent .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n\n.mainContent .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n\n.mainContent .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9DOlxcVXNlcnNcXGRvdWdsXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXEZvb2RBcHBfRm9vZERlbGl2ZXJpbmdfSW9uaWNfRmlyZWJhc2UtbWFpblxcQXBwX0NvZGVcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SkE7RUFDSSxjQUFBO0FDN0pKOztBRCtKQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7QUM1Skg7O0FENkpHO0VBQ0ksaUJBQUE7QUMzSlA7O0FEOEpBO0VBQ0ksaUJBQUE7QUMzSko7O0FENEpJO0VBQ0ksY0FBQTtBQzFKUjs7QUQ0Skk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUMxSlI7O0FENEpRO0VBQ0ksV0FBQTtBQzFKWjs7QUQ2Sks7RUFDRyxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDM0pSOztBRDZKSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQzNKUjs7QUQ2Skk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDM0pSOztBRDZKSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzNKUjs7QUQ0SlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzFKWjs7QUQ0SlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQzFKWjs7QUQ0SlE7RUFDSSwrQkFBQTtBQzFKWjs7QUQ2Sk87RUFDSSxpQkFBQTtBQzNKWDs7QUQ0Slk7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUMxSlo7O0FEMkpZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUN6SmhCOztBRDBKZ0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDeEpwQjs7QUQwSmdCO0VBQ0ksaUJBQUE7QUN4SnBCOztBRHlKb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdkp4Qjs7QUR5Sm9CO0VBQ0ksZUFBQTtBQ3ZKeEI7O0FEeUpvQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdkp4Qjs7QUQySmdCO0VBQ0ksaUJBQUE7QUN6SnBCOztBRDBKb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDeEp4Qjs7QUQySmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDekpwQjs7QUQySmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDekpwQjs7QUQwSm9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDeEp4Qjs7QUQ4Skk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUM1SlI7O0FENkpRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMzSlo7O0FENkpRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQzNKWjs7QUQ4Skk7RUFDSSxpQkFBQTtBQzVKUjs7QUQ2SlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQzNKWjs7QUQ0Slk7RUFDSSxpQkFBQTtBQzFKaEI7O0FENEpZO0VBQ0ksaUJBQUE7QUMxSmhCOztBRDRKWTtFQUNJLGVBQUE7QUMxSmhCOztBRDRKWTtFQUNJLGVBQUE7QUMxSmhCOztBRDRKWTtFQUNJLGlCQUFBO0FDMUpoQjs7QUQ4Skk7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FDNUpSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1sYWJlbHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vIH1cbi8vIGlvbi10b29sYmFyIHtcbi8vICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuLy8gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICBpb24tYnV0dG9uIHtcbi8vICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgIH1cbi8vIH1cbi8vIC5tYWluQ29udGVudHtcbi8vICAgICBwYWRkaW5nOiAyMHB4IDBweDtcbi8vICAgICBpb24tbGFiZWx7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIH1cbi8vICAgICAubm9EYXRhe1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgXG4vLyAgICAgICAgIC5ub0RhdGFJbWd7XG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAgLmltYWdlX2Rpdntcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgICB9XG4vLyAgICAgLnJlc3RuYW1le1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XG4vLyAgICAgICAgIGNvbG9yOiBibGFjaztcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgfVxuLy8gICAgIC5hZGRyZXNze1xuLy8gICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbi8vICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbi8vICAgICB9XG4vLyAgICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgICAucGlue1xuLy8gICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmFkZHJlc3N7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4vLyAgICAgICAgICAgICBtYXJnaW46IDBweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY2hhbmdlQWRkcmVzc3tcbi8vICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuLy8gICAgICAgICB9XG4vLyAgICAgfSBcbi8vICAgICAgICAuY2FyZF9kaXZ7XG4vLyAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuLy8gICAgICAgICAgICAgLmNhcmR7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgICAgLm1haW5DYXR7XG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4vLyAgICAgICAgICAgICAgICAgLmltYWdlX2Rpdntcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAuZGVzY19kaXZ7XG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgLnJhdHRpbmd7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLmNhcnRCdG57XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLmNhcnRCdG4ye1xuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgICAgICAgICAgICAgICAgICAgIC5xdW5pdGl0eXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5jb3Vwb25lc3tcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgICAuYmFkZ2V7XG4vLyAgICAgICAgICAgICB3aWR0aDogMjVweDtcbi8vICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAudGl0bGV7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbi8vICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5iaWxsaW5ne1xuLy8gICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbi8vICAgICAgICAgLnNpbmdsZVJvd3tcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuLy8gICAgICAgICAgICAgLmhlYWRlclRpdGxle1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLmJvbGRDbGFzc3tcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC5oZWFkZXJUb3RhbHtcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAucHJpY2VUb3RhbHtcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAucHJpY2V7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLmluc3RydWN0aW9uc3tcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4vLyAgICAgfVxuLy8gfVxuXG5cbmlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi10b29sYmFyIHtcbiAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBpb24tYnV0dG9uIHtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbn1cbi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubm9EYXRhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgXG4gICAgICAgIC5ub0RhdGFJbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgLmltYWdlX2RpdntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgLnJlc3RuYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5hZGRyZXNze1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAucGlue1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhbmdlQWRkcmVzc3tcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICB9XG4gICAgfSBcbiAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcbiAgICAgICAgICAgIC5tYWluQ2F0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYXR0aW5ne1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXNjX2RpdjJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcnRCdG57XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcnRCdG4ye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIC5xdW5pdGl0eXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3Vwb25lc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAuYmFkZ2V7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iaWxsaW5ne1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgLnNpbmdsZVJvd3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgLmhlYWRlclRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvbGRDbGFzc3tcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJUb3RhbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VUb3RhbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluc3RydWN0aW9uc3tcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgfVxufVxuXG4iLCJpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuLm1haW5Db250ZW50IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5Db250ZW50IC5ub0RhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIC5ub0RhdGFJbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluQ29udGVudCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluQ29udGVudCAucmVzdG5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLnBpbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAuY2hhbmdlQWRkcmVzcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmltYWdlX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnJhdHRpbmcge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdjIgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNvdXBvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyAuYmFkZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyAudGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5oZWFkZXJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmJvbGRDbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmhlYWRlclRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlVG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluQ29udGVudCAuaW5zdHJ1Y3Rpb25zIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let CartPage = class CartPage {
    constructor(api, router, util, navCtrl, chMod) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.haveItems = false;
        this.vid = '';
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.deliveryAddress = '';
        this.totalRatting = 0;
        this.cart = [];
        this.util.getCouponObservable().subscribe(data => {
            if (data) {
                console.log(data);
                this.coupon = data;
                console.log('coupon', this.coupon);
                console.log(this.totalPrice);
                localStorage.setItem('coupon', JSON.stringify(data));
                this.calculate();
            }
        });
    }
    ngOnInit() {
    }
    getAddress() {
        const add = JSON.parse(localStorage.getItem('deliveryAddress'));
        if (add && add.address) {
            this.deliveryAddress = add.address;
        }
        return this.deliveryAddress;
    }
    getVenueDetails() {
        // Venue Details
        this.api.getVenueDetails(this.vid).then(data => {
            console.log(data);
            if (data) {
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.time = data.time;
                this.totalRatting = data.totalRatting;
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    validate() {
        this.api.checkAuth().then((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (user) {
                const id = yield localStorage.getItem('vid');
                console.log('id', id);
                if (id) {
                    this.vid = id;
                    this.getVenueDetails();
                    // const foods = await localStorage.getItem('foods');
                    // if (foods) {
                    //   this.foods = await JSON.parse(foods);
                    //   let recheck = await this.foods.filter(x => x.quantiy > 0);
                    //   console.log('vid', this.vid);
                    //   console.log('foods', this.foods);
                    //   if (this.vid && this.foods && recheck.length > 0) {
                    //     this.haveItems = true;
                    //     this.calculate();
                    //     this.chMod.detectChanges();
                    //   }
                    // }
                    const cart = localStorage.getItem('userCart');
                    try {
                        if (cart && cart !== 'null' && cart !== undefined && cart !== 'undefined') {
                            this.cart = JSON.parse(localStorage.getItem('userCart'));
                            this.calculate();
                        }
                        else {
                            this.cart = [];
                        }
                    }
                    catch (error) {
                        console.log(error);
                        this.cart = [];
                    }
                    console.log('========================>', this.cart);
                }
                else {
                    this.haveItems = false;
                    this.chMod.detectChanges();
                }
                this.chMod.detectChanges();
                return true;
            }
            else {
                this.router.navigate(['login']);
            }
        })).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.validate();
    }
    getCart() {
        this.navCtrl.navigateRoot(['tabs/tab1']);
    }
    addQ(index) {
        this.cart[index].quantiy = this.cart[index].quantiy + 1;
        this.calculate();
    }
    removeQ(index) {
        if (this.cart[index].quantiy !== 0) {
            this.cart[index].quantiy = this.cart[index].quantiy - 1;
        }
        else {
            this.cart[index].quantiy = 0;
        }
        localStorage.setItem('userCart', JSON.stringify(this.foods));
        this.calculate();
    }
    addQAddos(i, j) {
        console.log(this.cart[i].selectedItem[j]);
        this.cart[i].selectedItem[j].total = this.cart[i].selectedItem[j].total + 1;
        this.calculate();
    }
    removeQAddos(i, j) {
        console.log(this.cart[i].selectedItem[j]);
        if (this.cart[i].selectedItem[j].total !== 0) {
            this.cart[i].selectedItem[j].total = this.cart[i].selectedItem[j].total - 1;
            if (this.cart[i].selectedItem[j].total === 0) {
                const newCart = [];
                this.cart[i].selectedItem.forEach(element => {
                    if (element.total > 0) {
                        newCart.push(element);
                    }
                });
                console.log('newCart', newCart);
                this.cart[i].selectedItem = newCart;
                this.cart[i].quantiy = newCart.length;
            }
        }
        this.calculate();
    }
    /// NEW calc
    calculate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.foods);
            // new
            let item = this.cart.filter(x => x.quantiy > 0);
            this.cart.forEach(element => {
                if (element.quantiy === 0) {
                    element.selectedItem = [];
                }
            });
            console.log('item=====>>', item);
            this.totalPrice = 0;
            this.totalItem = 0;
            this.cart = [];
            console.log('cart emplth', this.cart, item);
            item.forEach(element => {
                this.totalItem = this.totalItem + element.quantiy;
                console.log('itemsss----->>>', element);
                if (element && element.selectedItem && element.selectedItem.length > 0) {
                    let subPrice = 0;
                    element.selectedItem.forEach(subItems => {
                        subItems.item.forEach(realsItems => {
                            subPrice = subPrice + (realsItems.value);
                        });
                        subPrice = subPrice * subItems.total;
                    });
                    this.totalPrice = this.totalPrice + subPrice;
                }
                else {
                    this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
                }
                this.cart.push(element);
            });
            localStorage.removeItem('userCart');
            console.log('carrrrrrr---->>>', this.cart);
            localStorage.setItem('userCart', JSON.stringify(this.cart));
            this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            // new
            console.log('total item', this.totalItem);
            console.log('=====>', this.totalPrice);
            const tax = (parseFloat(this.totalPrice) * 21) / 100;
            this.serviceTax = tax.toFixed(2);
            console.log('tax->', this.serviceTax);
            this.deliveryCharge = 5;
            this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
            this.grandTotal = this.grandTotal.toFixed(2);
            if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                if (this.coupon.type === '%') {
                    console.log('per');
                    function percentage(num, per) {
                        return (num / 100) * per;
                    }
                    const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = totalPrice.toFixed(2);
                    this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                    // this.totalPrice = totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
                else {
                    console.log('curreny');
                    const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = this.coupon.discout;
                    this.totalPrice = totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
            }
            else {
                console.log('not satisfied');
                this.coupon = null;
                localStorage.removeItem('coupon');
            }
            console.log('grand totla', this.grandTotal);
            if (this.totalItem === 0) {
                const lng = localStorage.getItem('language');
                const selectedCity = localStorage.getItem('selectedCity');
                yield localStorage.clear();
                localStorage.setItem('language', lng);
                localStorage.setItem('selectedCity', selectedCity);
                this.totalItem = 0;
                this.totalPrice = 0;
                this.haveItems = false;
            }
        });
    }
    // NEW calc
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
    changeAddress() {
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
    }
    checkout() {
        console.log('check', this.grandTotal < 0);
        if (this.grandTotal < 0) {
            this.util.errorToast(this.util.translate('Something went wrong'));
            return false;
        }
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
        // this.router.navigate(['payments']);
    }
    openCoupon() {
        const navData = {
            queryParams: {
                restId: this.vid,
                name: this.name,
                totalPrice: this.totalPrice
            }
        };
        this.router.navigate(['coupons'], navData);
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map