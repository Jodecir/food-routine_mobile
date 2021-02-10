(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Recent Orders' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"noData\" *ngIf=\"!haveItems && !dummy?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{\"You haven't ordered anything\" | translate}}</ion-label>\n      <ion-label>{{'Please order your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div class=\"haveData\">\n\n      <div class=\"card_div\" *ngFor=\"let item of myOrders\" (click)=\"goToHistoryDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.vid.cover+')'\"></div>\n          <div style=\"margin-left: 20px;\">\n            <ion-label class=\"res_name\">{{item.vid.name}}</ion-label>\n            <ion-label class=\"res_location\">\n              {{item.vid.address}}\n            </ion-label>\n          </div>\n        </div>\n\n        <div class=\"line_div\"></div>\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getDate(item.time)}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\"> {{getCurrency()}} {{item.grandTotal}}</ion-label>\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"status_detail\" *ngIf=\"item.status =='completed' || item.status == 'delivered'\">\n          <div class=\"deliver_div\">\n            {{'Delivered' | translate}}\n          </div>\n        </div>\n        <div class=\"status_detail\" *ngIf=\"item.status =='rejected' || item.status == 'cancel'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n        </div>\n        <div class=\"status_detail\"\n          *ngIf=\"item.status =='created' || item.status =='ongoing' || item.status === 'accepted'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n          <div class=\"repeat_div\" style=\"color: green;\">\n            <ion-icon name=\"map-outline\"></ion-icon>{{'Track Order' | translate}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/history/history-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/pages/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainContent {\n  padding: 20px;\n}\n.mainContent ion-label {\n  display: block !important;\n}\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n.mainContent .haveData .myOrders {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 10px;\n}\n.mainContent .haveData .myOrders .restInfo .cover {\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  position: absolute;\n  left: 20px;\n}\n.mainContent .haveData .myOrders .restInfo .restName {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: black;\n  text-transform: capitalize;\n  display: block;\n}\n.mainContent .haveData .myOrders .restInfo .deliveryAddress {\n  font-size: 0.7rem;\n  display: block;\n  color: gray;\n}\n.mainContent .haveData .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.mainContent .haveData .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.mainContent .haveData .card_div .resto_detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.mainContent .haveData .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  min-width: 50px;\n}\n.mainContent .haveData .card_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.mainContent .haveData .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.mainContent .haveData .card_div .order_detail .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.mainContent .haveData .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.mainContent .haveData .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.mainContent .haveData .card_div .order_detail .subNames .flex_titles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.mainContent .haveData .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.mainContent .haveData .card_div .status_detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: lightgray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9DOlxcVXNlcnNcXGRvdWdsXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXEZvb2RBcHBfRm9vZERlbGl2ZXJpbmdfSW9uaWNfRmlyZWJhc2UtbWFpblxcQXBwX0NvZGVcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxoaXN0b3J5XFxoaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDRVI7QURBUTtFQUNJLFdBQUE7QUNFWjtBREVRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBWjtBREVnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBcEI7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0FwQjtBREVnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBcEI7QURNUTtFQUNJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNKWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKaEI7QURNWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKaEI7QURNZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pwQjtBRE9nQjtFQUNFLGdCQUFBO0FDTGxCO0FET2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDTHBCO0FEc0JnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDcEJwQjtBRHNCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNwQnBCO0FEc0JnQjtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNwQnBCO0FEc0JnQjtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUNwQnBCO0FEcUJvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ25CeEI7QURxQm9CO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ25CeEI7QURvQndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDbEI1QjtBRHVCWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNyQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5vRGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIFxuICAgICAgICAubm9EYXRhSW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhhdmVEYXRhe1xuICAgICAgICAubXlPcmRlcnN7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLnJlc3RJbmZve1xuICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXN0TmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAvLyAgICAgLmhlYWRfZ3JheXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9yZGVyX2JvdHRvbXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdWJOYW1lc3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZsZXhfdGl0bGVze1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXNfZGV0YWlse1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgICAvLyAucmF0ZV9sYmx7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsIi5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG4ubWFpbkNvbnRlbnQgLm5vRGF0YSAubm9EYXRhSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5teU9yZGVycyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAubXlPcmRlcnMgLnJlc3RJbmZvIC5jb3ZlciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAubXlPcmRlcnMgLnJlc3RJbmZvIC5yZXN0TmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5teU9yZGVycyAucmVzdEluZm8gLmRlbGl2ZXJ5QWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuYm9yZGVyX2JvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc3ViTmFtZXMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyAuc3ViX25hbWUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAuc3RhdHVzX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);







let HistoryPage = class HistoryPage {
    constructor(api, util, router, adb) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.haveItems = false;
        this.myOrders = [];
        this.dummy = Array(50);
        if (localStorage.getItem('uid')) {
            this.adb.collection('orders', ref => ref.where('userId', '==', localStorage.getItem('uid'))).snapshotChanges().subscribe(data => {
                if (data) {
                    this.getMyOrders();
                }
            });
        }
        this.util.subscribeLoggedIn().subscribe(data => {
            this.getMyOrders();
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.validate();
        });
    }
    getMyOrders() {
        this.api.getMyOrders(localStorage.getItem('uid')).then((data) => {
            console.log('my orders', data);
            if (data && data.length) {
                this.haveItems = true;
                data.forEach(element => {
                    element.time = new Date(element.time);
                });
                data.sort((a, b) => b.time - a.time);
                this.myOrders = data;
                this.myOrders.forEach(element => {
                    element.order = JSON.parse(element.order);
                });
                console.log('my order==>', this.myOrders);
            }
            this.dummy = [];
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    validate() {
        this.api.checkAuth().then((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (user) {
                localStorage.setItem('uid', user.uid);
                this.getMyOrders();
            }
            else {
                this.router.navigate(['login']);
            }
        })).catch(error => {
            console.log(error);
        });
    }
    getCart() {
        this.router.navigate(['/tabs']);
    }
    goToHistoryDetail(orderId) {
        const navData = {
            queryParams: {
                id: orderId
            }
        };
        this.router.navigate(['/history-detail'], navData);
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('llll');
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map