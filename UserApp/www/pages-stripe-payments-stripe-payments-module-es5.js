function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stripe-payments-stripe-payments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStripePaymentsStripePaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Pay with' | translate}} Stripe</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length\">\n      <p class=\"ion-text-center\">{{'No Card Found Please Add Card' | translate}}</p>\n    </div>\n    <ion-radio-group [(ngModel)]=\"card_token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\">\n          <img src=\"assets/visa.png\" class=\"img_visa\" />\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> Expiry {{card.exp_month}} / {{card.exp_year}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">{{'Payment' | translate}}\n      {{getCurrency()}}\n      {{grandTotal}}\n    </ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: StripePaymentsPageRoutingModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function () {
      return StripePaymentsPageRoutingModule;
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


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");

    var routes = [{
      path: '',
      component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }];

    var StripePaymentsPageRoutingModule = function StripePaymentsPageRoutingModule() {
      _classCallCheck(this, StripePaymentsPageRoutingModule);
    };

    StripePaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StripePaymentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
    \*****************************************************************/

  /*! exports provided: StripePaymentsPageModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function () {
      return StripePaymentsPageModule;
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


    var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stripe-payments-routing.module */
    "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts");
    /* harmony import */


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var StripePaymentsPageModule = function StripePaymentsPageModule() {
      _classCallCheck(this, StripePaymentsPageModule);
    };

    StripePaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })], StripePaymentsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn_right {\n  position: relative;\n  z-index: 999999;\n}\n\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL0M6XFxVc2Vyc1xcZG91Z2xcXE9uZURyaXZlXFzDgXJlYSBkZSBUcmFiYWxob1xcRm9vZEFwcF9Gb29kRGVsaXZlcmluZ19Jb25pY19GaXJlYmFzZS1tYWluXFxBcHBfQ29kZVxcVXNlckFwcC9zcmNcXGFwcFxccGFnZXNcXHN0cmlwZS1wYXltZW50c1xcc3RyaXBlLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0dSOztBRERRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0daOztBRERRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNHWjs7QUREUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDR1o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHJpcGUtcGF5bWVudHMvc3RyaXBlLXBheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fcmlnaHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn1cbi5pbWdfbWVudXtcbiAgICB3aWR0aDogMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAuZGl2X2lubmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLnJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX251bWJlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3Zpc2F7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5idG5fYWRkY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSIsIi5idG5fcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmltZ19tZW51IHtcbiAgd2lkdGg6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2lubmVyIC5yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmRpdl9jb250ZW50IC5kaXZfaW5uZXIgLmxibF9udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciAuaW1nX3Zpc2Ege1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9hZGRjYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
    \***************************************************************/

  /*! exports provided: StripePaymentsPage */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function () {
      return StripePaymentsPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var StripePaymentsPage =
    /*#__PURE__*/
    function () {
      function StripePaymentsPage(router, api, util, navCtrl) {
        _classCallCheck(this, StripePaymentsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cards = [];
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.venueFCM = '';
        this.vid = '';
        this.payKey = '';
        this.cart = [];
      }

      _createClass(StripePaymentsPage, [{
        key: "getCards",
        value: function getCards() {
          var _this = this;

          this.api.httpGet('https://api.stripe.com/v1/customers/' + this.cid + '/sources?object=card').subscribe(function (cards) {
            _this.util.hide();

            console.log(cards);

            if (cards && cards.data) {
              _this.cards = cards.data;
              _this.card_token = _this.cards[0].id;
            }
          }, function (error) {
            _this.util.hide();

            console.log(error);

            _this.util.hide();

            if (error && error.error && error.error.error && error.error.error.message) {
              _this.util.showErrorAlert(error.error.error.message);

              return false;
            }

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this2 = this;

          this.util.show();
          console.log('loca', localStorage.getItem('uid'));
          this.api.getProfile(localStorage.getItem('uid')).then(function (data) {
            console.log('data', data);

            if (data && data.cid) {
              _this2.cid = data.cid;

              _this2.getCards();
            } else {
              _this2.util.hide();
            }
          }, function (error) {
            console.log(error);

            _this2.util.hide();

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          }).catch(function (error) {
            console.log(error);

            _this2.util.hide();

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var foods, recheck, add, cart;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return JSON.parse(localStorage.getItem('foods'));

                  case 2:
                    foods = _context.sent;
                    _context.next = 5;
                    return foods.filter(function (x) {
                      return x.quantiy > 0;
                    });

                  case 5:
                    recheck = _context.sent;
                    console.log(recheck);
                    add = JSON.parse(localStorage.getItem('deliveryAddress'));
                    this.vid = localStorage.getItem('vid');
                    this.api.getVenueUser(this.vid).then(function (data) {
                      console.log('venue', data);

                      if (data && data.fcm_token) {
                        _this3.venueFCM = data.fcm_token;
                      }
                    }, function (error) {
                      _this3.util.errorToast(_this3.util.translate('Something went wrong'));

                      _this3.router.navigate(['tabs']);
                    }).catch(function (error) {
                      _this3.util.errorToast(_this3.util.translate('Something went wrong'));

                      _this3.router.navigate(['tabs']);

                      console.log(error);
                    });

                    if (add && add.address) {
                      this.deliveryAddress = add;
                    }

                    this.coupon = JSON.parse(localStorage.getItem('coupon'));
                    cart = localStorage.getItem('userCart');

                    try {
                      if (cart && cart !== 'null' && cart !== undefined && cart !== 'undefined') {
                        this.cart = JSON.parse(localStorage.getItem('userCart'));
                        this.calculate();
                      } else {
                        this.cart = [];
                      }
                    } catch (error) {
                      console.log(error);
                      this.cart = [];
                    }

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "calculate",
        value: function calculate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var item, tax, percentage, totalPrice, _tax, _totalPrice, _tax2, lng, selectedCity;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('cart--->,', this.cart); // new

                    item = this.cart.filter(function (x) {
                      return x.quantiy > 0;
                    });
                    this.cart.forEach(function (element) {
                      if (element.quantiy === 0) {
                        element.selectedItem = [];
                      }
                    });
                    console.log('item=====>>', item);
                    this.totalPrice = 0;
                    this.totalItem = 0;
                    this.cart = [];
                    console.log('cart emplth', this.cart, item);
                    item.forEach(function (element) {
                      _this4.totalItem = _this4.totalItem + element.quantiy;
                      console.log('itemsss----->>>', element);

                      if (element && element.selectedItem && element.selectedItem.length > 0) {
                        var subPrice = 0;
                        element.selectedItem.forEach(function (subItems) {
                          subItems.item.forEach(function (realsItems) {
                            subPrice = subPrice + realsItems.value;
                          });
                          subPrice = subPrice * subItems.total;
                        });
                        _this4.totalPrice = _this4.totalPrice + subPrice; // this.totalPrice = this.totalPrice + (subPrice * parseInt(element.quantiy));
                      } else {
                        _this4.totalPrice = _this4.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
                      }

                      _this4.cart.push(element);
                    });
                    localStorage.removeItem('userCart');
                    console.log('carrrrrrr---->>>', this.cart);
                    localStorage.setItem('userCart', JSON.stringify(this.cart));
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2); // new

                    console.log('total item', this.totalItem);
                    console.log('=====>', this.totalPrice);
                    tax = parseFloat(this.totalPrice) * 21 / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);

                    if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                      if (this.coupon.type === '%') {
                        percentage = function percentage(num, per) {
                          return num / 100 * per;
                        };

                        console.log('per');
                        totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                        console.log('============>>>>>>>>>>>>>>>', totalPrice);
                        this.dicount = totalPrice.toFixed(2);
                        this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                        console.log('------------>>>>', this.totalPrice);
                        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                        _tax = parseFloat(this.totalPrice) * 21 / 100;
                        this.serviceTax = _tax.toFixed(2);
                        console.log('tax->', this.serviceTax);
                        this.deliveryCharge = 5;
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                        this.grandTotal = this.grandTotal.toFixed(2);
                      } else {
                        console.log('$');
                        _totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                        console.log('============>>>>>>>>>>>>>>>', _totalPrice);
                        this.dicount = this.coupon.discout;
                        this.totalPrice = _totalPrice;
                        console.log('------------>>>>', this.totalPrice);
                        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                        _tax2 = parseFloat(this.totalPrice) * 21 / 100;
                        this.serviceTax = _tax2.toFixed(2);
                        console.log('tax->', this.serviceTax);
                        this.deliveryCharge = 5;
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                        this.grandTotal = this.grandTotal.toFixed(2);
                      }
                    } else {
                      console.log('not satisfied');
                      this.coupon = null;
                      localStorage.removeItem('coupon');
                    }

                    console.log('grand totla', this.grandTotal);

                    if (!(this.totalItem === 0)) {
                      _context2.next = 32;
                      break;
                    }

                    lng = localStorage.getItem('language');
                    selectedCity = localStorage.getItem('selectedCity');
                    _context2.next = 28;
                    return localStorage.clear();

                  case 28:
                    localStorage.setItem('language', lng);
                    localStorage.setItem('selectedCity', selectedCity);
                    this.totalItem = 0;
                    this.totalPrice = 0;

                  case 32:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } /// OLD calc
        // async calculate(foods) {
        //   console.log(foods);
        //   let item = foods.filter(x => x.quantiy > 0);
        //   console.log(item);
        //   this.totalPrice = 0;
        //   this.totalItem = 0;
        //   await item.forEach(element => {
        //     this.totalItem = this.totalItem + element.quantiy;
        //     this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
        //   });
        //   this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        //   console.log('total item', this.totalItem);
        //   console.log('=====>', this.totalPrice);
        //   const tax = (parseFloat(this.totalPrice) * 21) / 100;
        //   this.serviceTax = tax.toFixed(2);
        //   console.log('tax->', this.serviceTax);
        //   this.deliveryCharge = 5;
        //   this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        //   this.grandTotal = this.grandTotal.toFixed(2);
        //   console.log('grand totla', this.grandTotal);
        //   if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
        //     if (this.coupon.type === '%') {
        //       console.log('per');
        //       function percentage(totalValue, partialValue) {
        //         return (100 * partialValue) / totalValue;
        //       }
        //       const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
        //       console.log('============>>>>>>>>>>>>>>>', totalPrice);
        //       this.dicount = totalPrice.toFixed(2);
        //       this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
        //       console.log('------------>>>>', this.totalPrice);
        //       this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        //       const tax = (parseFloat(this.totalPrice) * 21) / 100;
        //       this.serviceTax = tax.toFixed(2);
        //       console.log('tax->', this.serviceTax);
        //       this.deliveryCharge = 5;
        //       this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        //       this.grandTotal = this.grandTotal.toFixed(2);
        //     } else {
        //       console.log('$');
        //       console.log('per');
        //       const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
        //       console.log('============>>>>>>>>>>>>>>>', totalPrice);
        //       this.dicount = this.coupon.discout;
        //       this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
        //       console.log('------------>>>>', this.totalPrice);
        //       this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        //       const tax = (parseFloat(this.totalPrice) * 21) / 100;
        //       this.serviceTax = tax.toFixed(2);
        //       console.log('tax->', this.serviceTax);
        //       this.deliveryCharge = 5;
        //       this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        //       this.grandTotal = this.grandTotal.toFixed(2);
        //     }
        //   } else {
        //     console.log('not satisfied');
        //     this.coupon = null;
        //     localStorage.removeItem('coupon');
        //   }
        // }
        // OLD calc

      }, {
        key: "payment",
        value: function payment() {
          var _this5 = this;

          console.log('place order');
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              console.log('go to procesed');
              var options = {
                amount: parseInt(_this5.grandTotal) * 100,
                currency: 'inr',
                customer: _this5.cid,
                card: _this5.card_token
              };
              console.log('options', options);
              var url = 'https://api.stripe.com/v1/charges';

              _this5.util.show();

              _this5.api.httpPost(url, options).subscribe(function (data) {
                console.log('------------------------->', data);
                _this5.payKey = data.id;

                _this5.util.hide();

                _this5.util.showToast(_this5.util.translate('Payment Success'), 'success', 'bottom');

                _this5.createOrder();
              }, function (error) {
                _this5.util.hide();

                console.log(error);

                _this5.util.hide();

                if (error && error.error && error.error.error && error.error.error.message) {
                  _this5.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this5.util.errorToast('Something went wrong');
              });
            }
          });
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.util.show('creating order');
                    this.api.checkAuth().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4() {
                        var _this7 = this;

                        var addressId, newAddress, id, uid, lng, selectedCity, param;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log(data);

                                if (!data) {
                                  _context4.next = 27;
                                  break;
                                }

                                if (!(!this.deliveryAddress.id || this.deliveryAddress.id === '')) {
                                  _context4.next = 7;
                                  break;
                                }

                                addressId = this.util.makeid(10);
                                newAddress = {
                                  id: addressId,
                                  uid: data.uid,
                                  address: this.deliveryAddress.address,
                                  lat: this.deliveryAddress.lat,
                                  lng: this.deliveryAddress.lng,
                                  title: 'home',
                                  house: '',
                                  landmark: ''
                                };
                                _context4.next = 7;
                                return this.api.addNewAddress(data.uid, addressId, newAddress).then(function (data) {
                                  _this7.deliveryAddress.id = addressId;
                                }, function (error) {
                                  console.log(error);
                                }).catch(function (error) {
                                  console.log(error);
                                });

                              case 7:
                                // const foods = await JSON.parse(localStorage.getItem('foods'));
                                // let recheck = await foods.filter(x => x.quantiy > 0);
                                // console.log('ordered food', recheck);
                                id = this.util.makeid(10);
                                _context4.next = 10;
                                return localStorage.removeItem('foods');

                              case 10:
                                _context4.next = 12;
                                return localStorage.removeItem('vid');

                              case 12:
                                _context4.next = 14;
                                return localStorage.removeItem('totalItem');

                              case 14:
                                uid = localStorage.getItem('uid');
                                lng = localStorage.getItem('language');
                                selectedCity = localStorage.getItem('selectedCity');
                                _context4.next = 19;
                                return localStorage.clear();

                              case 19:
                                localStorage.setItem('uid', uid);
                                localStorage.setItem('language', lng);
                                localStorage.setItem('selectedCity', selectedCity);
                                param = {
                                  uid: data.uid,
                                  userId: data.uid,
                                  orderId: id,
                                  vid: this.vid,
                                  order: JSON.stringify(this.cart),
                                  time: moment__WEBPACK_IMPORTED_MODULE_5__().format('llll'),
                                  address: this.deliveryAddress,
                                  total: this.totalPrice,
                                  grandTotal: this.grandTotal,
                                  serviceTax: this.serviceTax,
                                  deliveryCharge: 5,
                                  status: 'created',
                                  restId: this.vid,
                                  paid: 'stripe',
                                  paykey: this.payKey,
                                  appliedCoupon: this.coupon ? true : false,
                                  couponId: this.coupon ? this.coupon.id : 'NA',
                                  coupon: this.coupon ? JSON.stringify(this.coupon) : 'NA',
                                  dicount: this.coupon ? this.dicount : 0
                                };
                                console.log('sent', param);
                                this.api.createOrder(id, param).then(function (data) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee3() {
                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            this.util.hide();

                                            if (this.venueFCM && this.venueFCM !== '') {
                                              this.api.sendNotification(this.util.translate('New Order Received'), this.util.translate('New Order'), this.venueFCM).subscribe(function (data) {
                                                console.log('send notifications', data);
                                              }, function (error) {
                                                console.log(error);
                                              });
                                            }

                                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                              title: this.util.translate('Success'),
                                              text: this.util.translate('Your is created succesfully'),
                                              icon: 'success',
                                              backdrop: false
                                            });
                                            this.navCtrl.navigateRoot(['tabs/tab2']);
                                            console.log(data);

                                          case 5:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                }, function (error) {
                                  _this7.util.hide();

                                  _this7.util.errorToast(_this7.util.translate('Something went wrong'));

                                  _this7.router.navigate(['tabs']);
                                }).catch(function (error) {
                                  _this7.util.hide();

                                  _this7.util.errorToast(_this7.util.translate('Something went wrong'));

                                  _this7.router.navigate(['tabs']);

                                  console.log(error);
                                });
                                _context4.next = 30;
                                break;

                              case 27:
                                this.util.hide();
                                this.util.errorToast(this.util.translate('Session expired'));
                                this.router.navigate(['login']);

                              case 30:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (error) {
                      _this6.util.hide();

                      _this6.util.errorToast(_this6.util.translate('Session expired'));

                      _this6.router.navigate(['login']);
                    }).catch(function (error) {
                      _this6.util.hide();

                      _this6.util.errorToast(_this6.util.translate('Session expired'));

                      _this6.router.navigate(['login']);

                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getProfile();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.router.navigate(['add-card']);
        }
      }, {
        key: "changeMethod",
        value: function changeMethod(id) {
          this.card_token = id;
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return StripePaymentsPage;
    }();

    StripePaymentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }];
    };

    StripePaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stripe-payments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stripe-payments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stripe-payments.page.scss */
      "./src/app/pages/stripe-payments/stripe-payments.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], StripePaymentsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-stripe-payments-stripe-payments-module-es5.js.map