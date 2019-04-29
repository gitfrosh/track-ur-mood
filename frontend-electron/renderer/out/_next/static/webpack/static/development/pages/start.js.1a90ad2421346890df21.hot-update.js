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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react95 */ "../node_modules/react95/dist/index.js");
/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react95__WEBPACK_IMPORTED_MODULE_7__);









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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Tabs"], {
        value: activeTab,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
        value: 0
      }, "Shoes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
        value: 1
      }, "Accesories"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
        value: 2
      }, "Clothing")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          height: 300
        }
      }, activeTab === 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["TabBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", {
        class: "rating",
        className: "jsx-35943395"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "35943395"
      }, "fieldset,label{margin:0;padding:0;}body{margin:20px;}h1{font-size:1.5em;margin:10px;}.rating{border:none;float:left;}.rating>input{display:none;}.rating>label:before{margin:5px;font-size:1.25em;font-family:FontAwesome;display:inline-block;content:\"\\f005\";}.rating>.half:before{content:\"\\f089\";position:absolute;}.rating>label{color:#ddd;float:right;}.rating>input:checked~label,.rating:not(:checked)>label:hover,.rating:not(:checked)>label:hover~label{color:#ffd700;}.rating>input:checked+label:hover,.rating>input:checked~label:hover,.rating>label:hover~input:checked~label,.rating>input:checked~label:hover~label{color:#ffed85;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS91bHJpa2UvRGF0ZW4vQ09ESU5HL3Byb2plY3RzL3RyYWNrLXVyLW1vb2QvZnJvbnRlbmQtZWxlY3Ryb24vcmVuZGVyZXIvcGFnZXMvbW9vZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q21DLEFBSThCLEFBSUcsQUFHSSxBQU9KLEFBS0MsQUFHRixBQVFJLEFBS0osQUFTRyxBQU9BLFNBbERKLEVBc0JPLEFBYUwsQ0EvQmQsQUFVYSxDQUtiLENBeUJBLEFBT0EsRUE1Q2MsQUF1Qk0sR0E3QnBCLElBY0EsQUFxQkEsS0E1QkEsQUFlMEIsTUFRMUIsa0JBUHVCLHFCQUNOLGdCQUNqQiIsImZpbGUiOiIvbWVkaWEvdWxyaWtlL0RhdGVuL0NPRElORy9wcm9qZWN0cy90cmFjay11ci1tb29kL2Zyb250ZW5kLWVsZWN0cm9uL3JlbmRlcmVyL3BhZ2VzL21vb2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIHJlc2V0LFxuICB0aGVtZXMsXG4gIExpc3QsXG4gIEJ1dHRvbixcbiAgQXBwQmFyLFxuICBUb29sYmFyLFxuICBNZW51LFxuICBMb2dvSWNvbixcbiAgVGV4dEZpZWxkLFxuICBMaXN0SXRlbSxcbiAgV2luZG93LFxuICBXaW5kb3dDb250ZW50LFxuICBXaW5kb3dIZWFkZXIsXG4gIFRhYnMsXG4gIFRhYixcbiAgVGFiQm9keSxcbiAgRmllbGRzZXQsXG4gIE51bWJlckZpZWxkLFxuICBDaGVja2JveCxcbiAgRGl2aWRlclxufSBmcm9tIFwicmVhY3Q5NVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy9pbWFnZXM6IHRoaXMucHJvcHMuaW1hZ2VzXG4gICAgICBhY3RpdmVUYWI6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZVRhYiB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRhYnMgdmFsdWU9e2FjdGl2ZVRhYn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICA8VGFiIHZhbHVlPXswfT5TaG9lczwvVGFiPlxuICAgICAgICAgIDxUYWIgdmFsdWU9ezF9PkFjY2Vzb3JpZXM8L1RhYj5cbiAgICAgICAgICA8VGFiIHZhbHVlPXsyfT5DbG90aGluZzwvVGFiPlxuICAgICAgICA8L1RhYnM+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAgfX0+XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8VGFiQm9keT5cbiAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LFxuICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8qKioqKiogU3R5bGUgU3RhciBSYXRpbmcgV2lkZ2V0ICoqKioqL1xuXG4gICAgICAgICAgICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnJhdGluZyA+IGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucmF0aW5nID4gLmhhbGY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwODlcIjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucmF0aW5nID4gbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvKioqKiogQ1NTIE1hZ2ljIHRvIEhpZ2hsaWdodCBTdGFycyBvbiBIb3ZlciAqKioqKi9cblxuICAgICAgICAgICAgICAgICAgLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgLyogc2hvdyBnb2xkIHN0YXIgd2hlbiBjbGlja2VkICovXG4gICAgICAgICAgLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsIC8qIGhvdmVyIGN1cnJlbnQgc3RhciAqL1xuICAgICAgICAgIC5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZDcwMDtcbiAgICAgICAgICAgICAgICAgIH0gLyogaG92ZXIgcHJldmlvdXMgc3RhcnMgaW4gbGlzdCAqL1xuXG4gICAgICAgICAgICAgICAgICAucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLCAvKiBob3ZlciBjdXJyZW50IHN0YXIgd2hlbiBjaGFuZ2luZyByYXRpbmcgKi9cbiAgICAgICAgICAucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxuICAgICAgICAgIC5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgLyogbGlnaHRlbiBjdXJyZW50IHNlbGVjdGlvbiAqL1xuICAgICAgICAgIC5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZlZDg1O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdGFyNVwiIG5hbWU9XCJyYXRpbmdcIiB2YWx1ZT1cIjVcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZ1bGxcIiBmb3I9XCJzdGFyNVwiIHRpdGxlPVwiQXdlc29tZSAtIDUgc3RhcnNcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhcjRoYWxmXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYXRpbmdcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0IGFuZCBhIGhhbGZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImhhbGZcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwic3RhcjRoYWxmXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJldHR5IGdvb2QgLSA0LjUgc3RhcnNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwic3RhcjRcIiBuYW1lPVwicmF0aW5nXCIgdmFsdWU9XCI0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmdWxsXCIgZm9yPVwic3RhcjRcIiB0aXRsZT1cIlByZXR0eSBnb29kIC0gNCBzdGFyc1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFyM2hhbGZcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjMgYW5kIGEgaGFsZlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJoYWxmXCIgZm9yPVwic3RhcjNoYWxmXCIgdGl0bGU9XCJNZWggLSAzLjUgc3RhcnNcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXIzXCIgbmFtZT1cInJhdGluZ1wiIHZhbHVlPVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZnVsbFwiIGZvcj1cInN0YXIzXCIgdGl0bGU9XCJNZWggLSAzIHN0YXJzXCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInN0YXIyaGFsZlwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmF0aW5nXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMiBhbmQgYSBoYWxmXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInN0YXIyaGFsZlwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIktpbmRhIGJhZCAtIDIuNSBzdGFyc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdGFyMlwiIG5hbWU9XCJyYXRpbmdcIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZ1bGxcIiBmb3I9XCJzdGFyMlwiIHRpdGxlPVwiS2luZGEgYmFkIC0gMiBzdGFyc1wiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFyMWhhbGZcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhdGluZ1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjEgYW5kIGEgaGFsZlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJoYWxmXCIgZm9yPVwic3RhcjFoYWxmXCIgdGl0bGU9XCJNZWggLSAxLjUgc3RhcnNcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXIxXCIgbmFtZT1cInJhdGluZ1wiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwic3RhcjFcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdWNrcyBiaWcgdGltZSAtIDEgc3RhclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdGFyaGFsZlwiIG5hbWU9XCJyYXRpbmdcIiB2YWx1ZT1cImhhbGZcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInN0YXJoYWxmXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU3Vja3MgYmlnIHRpbWUgLSAwLjUgc3RhcnNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L1RhYkJvZHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAxICYmIChcbiAgICAgICAgICAgIDxUYWJCb2R5PlxuICAgICAgICAgICAgICA8RmllbGRzZXQgbGFiZWw9XCJPcmRlcjpcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMC41ZW0gMCAwLjVlbSAwXCIgfX0+QW1vdW50OjwvZGl2PlxuICAgICAgICAgICAgICAgIDxOdW1iZXJGaWVsZFxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9ezB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gbnVsbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFzdFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkZhc3Qgc2hpcHBpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG51bGx9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZHNldD5cbiAgICAgICAgICAgIDwvVGFiQm9keT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09IDIgJiYgPFRhYkJvZHk+Q2xvdGhpbmcgc3R1ZmYgaGVyZTwvVGFiQm9keT59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/media/ulrike/Daten/CODING/projects/track-ur-mood/frontend-electron/renderer/pages/mood.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star5",
        name: "rating",
        value: "5",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "full",
        for: "star5",
        title: "Awesome - 5 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star4half",
        name: "rating",
        value: "4 and a half",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "half",
        for: "star4half",
        title: "Pretty good - 4.5 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star4",
        name: "rating",
        value: "4",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "full",
        for: "star4",
        title: "Pretty good - 4 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star3half",
        name: "rating",
        value: "3 and a half",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "half",
        for: "star3half",
        title: "Meh - 3.5 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star3",
        name: "rating",
        value: "3",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "full",
        for: "star3",
        title: "Meh - 3 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star2half",
        name: "rating",
        value: "2 and a half",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "half",
        for: "star2half",
        title: "Kinda bad - 2.5 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star2",
        name: "rating",
        value: "2",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "full",
        for: "star2",
        title: "Kinda bad - 2 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star1half",
        name: "rating",
        value: "1 and a half",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "half",
        for: "star1half",
        title: "Meh - 1.5 stars",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "star1",
        name: "rating",
        value: "1",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "full",
        for: "star1",
        title: "Sucks big time - 1 star",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        id: "starhalf",
        name: "rating",
        value: "half",
        className: "jsx-35943395"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        class: "half",
        for: "starhalf",
        title: "Sucks big time - 0.5 stars",
        className: "jsx-35943395"
      }))), activeTab === 1 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["TabBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Fieldset"], {
        label: "Order:"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: "0.5em 0 0.5em 0"
        }
      }, "Amount:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["NumberField"], {
        width: "100%",
        min: 0,
        value: 0,
        onChange: function onChange() {
          return null;
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        name: "shipping",
        value: "fast",
        label: "Fast shipping",
        onChange: function onChange() {
          return null;
        },
        checked: true
      }))), activeTab === 2 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react95__WEBPACK_IMPORTED_MODULE_7__["TabBody"], null, "Clothing stuff here")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=start.js.1a90ad2421346890df21.hot-update.js.map