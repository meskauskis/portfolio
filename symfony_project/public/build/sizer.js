(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sizer"],{

/***/ "./assets/js/button.js":
/*!*****************************!*\
  !*** ./assets/js/button.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Button = function Button(_ref) {
  var text = _ref.text,
      id = _ref.id,
      className = _ref.className,
      clickHandler = _ref.clickHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: id,
    className: className,
    onClick: clickHandler
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./assets/js/graph.js":
/*!****************************!*\
  !*** ./assets/js/graph.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button */ "./assets/js/button.js");
/* harmony import */ var _sizerPicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sizerPicker */ "./assets/js/sizerPicker.js");
/* harmony import */ var _sizerItems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sizerItems */ "./assets/js/sizerItems.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var firstItem = {
  'id': 'man',
  'name': 'man',
  'height': 1.7
};

var Graph = function Graph() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([firstItem]),
      _useState2 = _slicedToArray(_useState, 2),
      sizerList = _useState2[0],
      updateSizerList = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_sizerPicker__WEBPACK_IMPORTED_MODULE_15__["default"], {
    updateFunction: updateSizerList,
    sizerList: sizerList
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_sizerItems__WEBPACK_IMPORTED_MODULE_16__["default"], {
    updateFunction: updateSizerList,
    sizerList: sizerList
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./assets/js/sizer.js":
/*!****************************!*\
  !*** ./assets/js/sizer.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph */ "./assets/js/graph.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graph__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/sizerItem.js":
/*!********************************!*\
  !*** ./assets/js/sizerItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SizerItem = function SizerItem(_ref) {
  var itemId = _ref.itemId,
      itemSize = _ref.itemSize;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/".concat(itemId, ".svg"),
    className: "icon icon-".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SizerItem);

/***/ }),

/***/ "./assets/js/sizerItems.js":
/*!*********************************!*\
  !*** ./assets/js/sizerItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sizerItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sizerItem */ "./assets/js/sizerItem.js");
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ListItems = function ListItems(_ref) {
  var sizerList = _ref.sizerList,
      updateFunction = _ref.updateFunction;
  var heightsArray = sizerList.map(function (_ref2) {
    var height = _ref2.height;
    return height;
  });
  var tallestHeight = Math.max.apply(Math, _toConsumableArray(heightsArray));

  var clickHandler = function clickHandler(itemId) {
    var reducedList = sizerList.filter(function (obj) {
      return obj.id !== itemId;
    });
    updateFunction(function (sizerList) {
      return reducedList;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, sizerList.map(function (item, index) {
    var itemId = item.id;
    var itemHeight = item.height;
    var itemSize = itemHeight / tallestHeight * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "col",
      key: index + itemId
    }, index != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "remove",
      onClick: function onClick() {
        return clickHandler(itemId);
      }
    }, "X") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      itemId: itemId,
      itemSize: itemSize
    }));
  }));
};

var SizerItems = function SizerItems(_ref3) {
  var sizerList = _ref3.sizerList,
      updateFunction = _ref3.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ListItems, {
    sizerList: sizerList,
    updateFunction: updateFunction
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerItems);

/***/ }),

/***/ "./assets/js/sizerPicker.js":
/*!**********************************!*\
  !*** ./assets/js/sizerPicker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Button = function Button(_ref) {
  var text = _ref.text,
      updateFunction = _ref.updateFunction,
      data = _ref.data;

  var clickHandler = function clickHandler(data) {
    updateFunction(function (sizerList) {
      return [].concat(_toConsumableArray(sizerList), [data]);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
    className: "ButtonAdd",
    onClick: function onClick() {
      return clickHandler(data);
    }
  }, text);
};

var SizerPicker = function SizerPicker(_ref2) {
  var sizerList = _ref2.sizerList,
      updateFunction = _ref2.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Eiffel Tower",
    updateFunction: updateFunction,
    data: {
      'id': 'paris',
      'height': 324
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Empire State Building",
    updateFunction: updateFunction,
    data: {
      'id': 'empire',
      'height': 443
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Cat",
    updateFunction: updateFunction,
    data: {
      'id': 'cat',
      'height': 0.26
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Godzilla",
    updateFunction: updateFunction,
    data: {
      'id': 'godzilla',
      'height': 122
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerPicker);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXJQaWNrZXIuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwidGV4dCIsImlkIiwiY2xhc3NOYW1lIiwiY2xpY2tIYW5kbGVyIiwiZmlyc3RJdGVtIiwiR3JhcGgiLCJ1c2VTdGF0ZSIsInNpemVyTGlzdCIsInVwZGF0ZVNpemVyTGlzdCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNpemVySXRlbSIsIml0ZW1JZCIsIml0ZW1TaXplIiwiTGlzdEl0ZW1zIiwidXBkYXRlRnVuY3Rpb24iLCJoZWlnaHRzQXJyYXkiLCJtYXAiLCJoZWlnaHQiLCJ0YWxsZXN0SGVpZ2h0IiwiTWF0aCIsIm1heCIsInJlZHVjZWRMaXN0IiwiZmlsdGVyIiwib2JqIiwiaXRlbSIsImluZGV4IiwiaXRlbUhlaWdodCIsIlNpemVySXRlbXMiLCJkYXRhIiwiU2l6ZXJQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyQztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsRUFBa0MsUUFBbENBLEVBQWtDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDdEQsc0JBQ0k7QUFBUSxNQUFFLEVBQUVGLEVBQVo7QUFBZ0IsYUFBUyxFQUFFQyxTQUEzQjtBQUFzQyxXQUFPLEVBQUVD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QURKO0FBS0gsQ0FWRDs7QUFZQSxJQUFNZ0MsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBbUM7QUFBQSxNQUFoQ3pCLFNBQWdDLFNBQWhDQSxTQUFnQztBQUFBLE1BQXJCVSxjQUFxQixTQUFyQkEsY0FBcUI7QUFDbkQsc0JBQ0ksdUlBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSw0REFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLGNBQWI7QUFBNEIsa0JBQWMsRUFBRUEsY0FBNUM7QUFBNEQsUUFBSSxFQUFHO0FBQUMsWUFBTSxPQUFQO0FBQWdCLGdCQUFVO0FBQTFCO0FBQW5FLElBREosZUFFSSw0REFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLHVCQUFiO0FBQXFDLGtCQUFjLEVBQUVBLGNBQXJEO0FBQXFFLFFBQUksRUFBRztBQUFDLFlBQU0sUUFBUDtBQUFpQixnQkFBVTtBQUEzQjtBQUE1RSxJQUZKLGVBR0ksNERBQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxLQUFiO0FBQW1CLGtCQUFjLEVBQUVBLGNBQW5DO0FBQW1ELFFBQUksRUFBRztBQUFDLFlBQU0sS0FBUDtBQUFjLGdCQUFVO0FBQXhCO0FBQTFELElBSEosZUFJSSw0REFBQyxNQUFEO0FBQVEsUUFBSSxFQUFDLFVBQWI7QUFBd0Isa0JBQWMsRUFBRUEsY0FBeEM7QUFBd0QsUUFBSSxFQUFHO0FBQUMsWUFBTSxVQUFQO0FBQW1CLGdCQUFVO0FBQTdCO0FBQS9ELElBSkosQ0FESixDQURKO0FBVUgsQ0FYRDs7QUFhZWUsMEVBQWYsRSIsImZpbGUiOiJzaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IHRleHQsIGlkLCBjbGFzc05hbWUsIGNsaWNrSGFuZGxlciB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xyXG5pbXBvcnQgU2l6ZXJQaWNrZXIgZnJvbSAnLi9zaXplclBpY2tlcic7XHJcbmltcG9ydCBTaXplckl0ZW1zIGZyb20gJy4vc2l6ZXJJdGVtcyc7XHJcblxyXG5jb25zdCBmaXJzdEl0ZW0gPSB7XHJcbiAgICAnaWQnOiAnbWFuJyxcclxuICAgICduYW1lJzogJ21hbicsXHJcbiAgICAnaGVpZ2h0JzogMS43LFxyXG59O1xyXG5cclxuY29uc3QgR3JhcGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3RdID0gdXNlU3RhdGUoW2ZpcnN0SXRlbV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpemVyUGlja2VyIHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVTaXplckxpc3R9IHNpemVyTGlzdD17c2l6ZXJMaXN0fS8+XHJcbiAgICAgICAgICAgIDxTaXplckl0ZW1zIHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVTaXplckxpc3R9IHNpemVyTGlzdD17c2l6ZXJMaXN0fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8R3JhcGgvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJJdGVtID0gKHsgaXRlbUlkLCBpdGVtU2l6ZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzLyR7aXRlbUlkfS5zdmdgfSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpdGVtSWR9YH0gc3R5bGU9e3sgJ2hlaWdodCc6IGl0ZW1TaXplICsgJyUnIH19Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVySXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNpemVySXRlbSBmcm9tICcuL3NpemVySXRlbSc7XHJcblxyXG5jb25zdCBMaXN0SXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcclxuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XHJcbiAgICBjb25zdCB0YWxsZXN0SGVpZ2h0ID0gTWF0aC5tYXgoLi4uaGVpZ2h0c0FycmF5KTtcclxuXHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoaXRlbUlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUZ1bmN0aW9uKHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2l6ZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVNpemUgPSAoaXRlbUhlaWdodCAvIHRhbGxlc3RIZWlnaHQpICogMTAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBrZXk9e2luZGV4ICsgaXRlbUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9IDAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlXCIgb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKGl0ZW1JZCl9Plg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZXJJdGVtIGl0ZW1JZD17aXRlbUlkfSBpdGVtU2l6ZT17aXRlbVNpemV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfSBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNpemVySXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPExpc3RJdGVtcyBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlRnVuY3Rpb249e3VwZGF0ZUZ1bmN0aW9ufS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW1zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0LCB1cGRhdGVGdW5jdGlvbiwgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUZ1bmN0aW9uKHNpemVyTGlzdCA9PiBbLi4uc2l6ZXJMaXN0LCBkYXRhXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvbkFkZFwiIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihkYXRhKX0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpemVyUGlja2VyID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJFaWZmZWwgVG93ZXJcIiB1cGRhdGVGdW5jdGlvbj17dXBkYXRlRnVuY3Rpb259IGRhdGE9eyB7J2lkJzogJ3BhcmlzJywgJ2hlaWdodCc6IDMyNH0gfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJFbXBpcmUgU3RhdGUgQnVpbGRpbmdcIiB1cGRhdGVGdW5jdGlvbj17dXBkYXRlRnVuY3Rpb259IGRhdGE9eyB7J2lkJzogJ2VtcGlyZScsICdoZWlnaHQnOiA0NDN9IH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2F0XCIgdXBkYXRlRnVuY3Rpb249e3VwZGF0ZUZ1bmN0aW9ufSBkYXRhPXsgeydpZCc6ICdjYXQnLCAnaGVpZ2h0JzogMC4yNn0gfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJHb2R6aWxsYVwiIHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17IHsnaWQnOiAnZ29kemlsbGEnLCAnaGVpZ2h0JzogMTIyfSB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplclBpY2tlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==