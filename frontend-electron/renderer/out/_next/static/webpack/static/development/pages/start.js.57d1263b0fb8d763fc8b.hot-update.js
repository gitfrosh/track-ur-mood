webpackHotUpdate("static/development/pages/start.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyMenu; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react95 */ "../node_modules/react95/dist/index.js");
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react95__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _main_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../main/helpers */ "../main/helpers.js");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/logo.png */ "./static/logo.png");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_13__);













 // const LogoIcon = Logo.LogoIcon;

var MyMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyMenu, _Component);

  function MyMenu() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClose", function (e) {
      console.log(e.target.getAttribute('id'));
      var menuClicked = e.target.getAttribute('id');

      _this.props.setMenu(menuClicked);

      _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClick", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyMenu, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        //images: this.props.images
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var string = "Start"; // const logoIcon =

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          position: "relative",
          display: "inline-block"
        }
      }, this.state.open && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["List"], {
        horizontalAlign: "left",
        verticalAlign: "bottom",
        open: this.state.open,
        onClick: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
        id: "1"
      }, "\uD83D\uDE43 Track ur Mood"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
        id: "2"
      }, "\uD83D\uDCC3 My account"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
        id: "3",
        disabled: true
      }, "\uD83D\uDD19 Logout")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        onClick: this.handleClick,
        active: this.state.open,
        style: {
          fontWeight: "bold"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        // className={baseClass}
        style: {
          display: "inline-block",
          height: "22px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: _static_logo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        style: {
          height: "100%",
          width: "auto"
        }
      })), "Start"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyMenu;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.57d1263b0fb8d763fc8b.hot-update.js.map