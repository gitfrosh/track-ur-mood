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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react95 */ "../node_modules/react95/dist/index.js");
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react95__WEBPACK_IMPORTED_MODULE_6__);








var Main =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);

  function Main() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).apply(this, arguments));
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Tabs"], {
        value: activeTab,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        value: 0
      }, "Shoes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        value: 1
      }, "Accesories"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        value: 2
      }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          height: 300
        }
      }, activeTab === 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["TabBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Fieldset"], {
        label: "Order:"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: "0.5em 0 0.5em 0"
        }
      }, "Amount:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["NumberField"], {
        width: "100%",
        min: 0,
        value: 0,
        onChange: function onChange() {
          return null;
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
        name: "shipping",
        value: "fast",
        label: "Fast shipping",
        onChange: function onChange() {
          return null;
        },
        checked: true
      }))), activeTab === 1 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["TabBody"], null, "Accesories stuff here"), activeTab === 2 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_6__["TabBody"], null, "Clothing stuff here")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.551c6d2c5e7fe67819a1.hot-update.js.map