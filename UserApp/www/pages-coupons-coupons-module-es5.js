function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupons-coupons-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCouponsCouponsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Coupons' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !list?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-row *ngFor=\"let item of list\" class=\"coupons\" (click)=\"claim(item)\">\n    <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">{{item.desc}} <br>\n        <span class=\"code\">{{'CODE'  | translate }} : {{item.code}} </span><br>\n        <span class=\"expire\">{{expire(item.exire)}}</span><br>\n        <span class=\"desc\">{{'Get' | translate}} {{item.discout}} {{item.type}} {{'to' | translate}} {{item.upto}}\n          {{item.type}} {{'discount on minimum order' | translate}}\n          {{'of' | translate}}\n          {{item.min}} {{getCurrency()}}\n        </span></p>\n    </ion-col>\n    <ion-badge color=\"primary\" class=\"ion-padding\" mode=\"ios\">{{'CLAIM' | translate}}</ion-badge>\n  </ion-row>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/coupons/coupons-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CouponsPageRoutingModule */

  /***/
  function srcAppPagesCouponsCouponsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function () {
      return CouponsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coupons.page */
    "./src/app/pages/coupons/coupons.page.ts");

    var routes = [{
      path: '',
      component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
    }];

    var CouponsPageRoutingModule = function CouponsPageRoutingModule() {
      _classCallCheck(this, CouponsPageRoutingModule);
    };

    CouponsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CouponsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/coupons/coupons.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/coupons/coupons.module.ts ***!
    \*************************************************/

  /*! exports provided: CouponsPageModule */

  /***/
  function srcAppPagesCouponsCouponsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function () {
      return CouponsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./coupons-routing.module */
    "./src/app/pages/coupons/coupons-routing.module.ts");
    /* harmony import */


    var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coupons.page */
    "./src/app/pages/coupons/coupons.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var CouponsPageModule = function CouponsPageModule() {
      _classCallCheck(this, CouponsPageModule);
    };

    CouponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
    })], CouponsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/coupons/coupons.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/coupons/coupons.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCouponsCouponsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.coupons {\n  border-bottom: 1px solid lightgray;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: normal;\n  color: var(--ion-color-primary);\n}\n\n.coupons .info .title .expire {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cG9ucy9DOlxcVXNlcnNcXGRvdWdsXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXEZvb2RBcHBfRm9vZERlbGl2ZXJpbmdfSW9uaWNfRmlyZWJhc2UtbWFpblxcQXBwX0NvZGVcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjb3Vwb25zXFxjb3Vwb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGtDQUFBO0FDRUo7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNFWjs7QUREWTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUNHaEI7O0FERFk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNHaEI7O0FERFk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNHaEI7O0FEQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0RhdGF7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cbi5jb3Vwb25ze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLmluZm97XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAuY29kZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwaXJle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idG5ze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59IiwiLm5vRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmNvdXBvbnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLmNvdXBvbnMgLmluZm8gLnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvdXBvbnMgLmluZm8gLnRpdGxlIC5jb2RlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5jb3Vwb25zIC5pbmZvIC50aXRsZSAuZXhwaXJlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvdXBvbnMgLmluZm8gLnRpdGxlIC5kZXNjIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvdXBvbnMgLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/coupons/coupons.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/coupons/coupons.page.ts ***!
    \***********************************************/

  /*! exports provided: CouponsPage */

  /***/
  function srcAppPagesCouponsCouponsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsPage", function () {
      return CouponsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CouponsPage =
    /*#__PURE__*/
    function () {
      function CouponsPage(api, route, util, navCtrl) {
        _classCallCheck(this, CouponsPage);

        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.list = [];
        this.dummy = Array(10);
        this.getOffers();
      }

      _createClass(CouponsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (data) {
            console.log(data);

            if (data && data.restId) {
              _this.restId = data.restId;
              _this.name = data.name;
              _this.total = parseFloat(data.totalPrice);
              console.log(_this.restId);
            } else {
              _this.dummy = [];
            }
          });
        }
      }, {
        key: "getOffers",
        value: function getOffers() {
          var _this2 = this;

          this.api.getOffers().then(function (data) {
            _this2.dummy = [];
            console.log('list=====>', data);
            _this2.list = [];

            if (data && data.length) {
              var currnetDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
              data.forEach(function (element) {
                console.log(moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate));

                if (element && element.status === 'active' && moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate)) {
                  console.log('yes=>', element);

                  _this2.list.push(element);
                }
              }); // this.list = data;
            }
          }).catch(function (error) {
            _this2.dummy = [];
            console.log(error);
          });
        }
      }, {
        key: "claim",
        value: function claim(item) {
          var _this3 = this;

          console.log(item);

          if (item && item.available && item.available.length) {
            var data = item.available.filter(function (x) {
              return x.id === _this3.restId;
            });
            console.log(data);

            if (data && data.length) {
              if (this.total >= item.min) {
                console.log('ok');
                this.util.showToast(this.util.translate('Coupon Applied'), 'success', 'bottom');
                this.util.publishCoupon(item);
                this.navCtrl.back();
              } else {
                this.util.errorToast(this.util.translate('For claiming this coupon your order required minimum order  of $') + item.min);
              }
            } else {
              this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
            }
          } else {
            this.util.errorToast(this.util.translate('This coupon is not valid for ') + this.name);
          }
        }
      }, {
        key: "expire",
        value: function expire(date) {
          return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('llll');
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return CouponsPage;
    }();

    CouponsPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    CouponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coupons.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coupons.page.scss */
      "./src/app/pages/coupons/coupons.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], CouponsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-coupons-coupons-module-es5.js.map