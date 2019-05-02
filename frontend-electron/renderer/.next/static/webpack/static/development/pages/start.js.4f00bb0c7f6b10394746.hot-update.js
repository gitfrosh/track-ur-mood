webpackHotUpdate("static/development/pages/start.js",{

/***/ "./pages/mood.js":
/*!***********************!*\
  !*** ./pages/mood.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react95 */ "../node_modules/react95/dist/index.js");
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react95__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_star_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/star-rating */ "./components/star-rating.js");
/* harmony import */ var _components_fingerprint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/fingerprint */ "./components/fingerprint.js");












var Main =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _Component);

  function Main() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeTab", function (e) {
      _this.setState({
        activeTab: e
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        //images: this.props.images
        activeTab: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeTab = this.state.activeTab;
      var _this$props = this.props,
          today = _this$props.today,
          mood = _this$props.mood;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Tabs"], {
        value: activeTab,
        onChange: this.changeTab
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
        value: 0
      }, "Rate it!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
        value: 1
      }, "\uD83D\uDCC8 Stats"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
        value: 2
      }, "Fingerprint"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Tab"], {
        value: 3
      }, "Random stuff")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          height: 300
        }
      }, activeTab === 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["TabBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Fieldset"], {
        label: "Rate your day (".concat(today, "):")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_star_rating__WEBPACK_IMPORTED_MODULE_9__["default"], {
        mood: mood,
        today: today
      }))), activeTab === 1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["TabBody"], null, "wow wow.."), activeTab === 2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["TabBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_fingerprint__WEBPACK_IMPORTED_MODULE_10__["default"], null)), activeTab === 3 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["TabBody"], null, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Fieldset"], {
        label: "Order:"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          padding: "0.5em 0 0.5em 0"
        }
      }, "Amount:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["NumberField"], {
        width: "100%",
        min: 0,
        value: 0,
        onChange: function onChange() {
          return null;
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        name: "shipping",
        value: "fast",
        label: "Fast shipping",
        onChange: function onChange() {
          return null;
        },
        checked: true
      })))));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.4f00bb0c7f6b10394746.hot-update.js.map