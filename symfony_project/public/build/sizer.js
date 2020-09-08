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
      className: "colBig"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "col",
      key: index + itemId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      itemId: itemId,
      itemSize: itemSize
    }), index != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "remove",
      onClick: function onClick() {
        return clickHandler(itemId);
      }
    }, "X") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "line",
      style: {
        'top': 100 - itemSize + '%'
      }
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
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);



















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Button = function Button(_ref) {
  var text = _ref.text,
      sizerList = _ref.sizerList,
      updateFunction = _ref.updateFunction,
      data = _ref.data;

  var clickHandler = function clickHandler(data) {
    updateFunction(function (sizerList) {
      return [].concat(_toConsumableArray(sizerList), [data]);
    });
  };

  var sizerListIds = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return item.id;
  });
  var isItemUsed = sizerListIds.includes(data.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("button", {
    className: "ButtonAdd ".concat(isItemUsed ? 'disabled' : ''),
    disabled: isItemUsed ? 'disabled' : undefined,
    onClick: function onClick() {
      return clickHandler(data);
    }
  }, text);
};

var SizerPicker = function SizerPicker(_ref3) {
  var sizerList = _ref3.sizerList,
      updateFunction = _ref3.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Button, {
    text: "Eiffel Tower",
    sizerList: sizerList,
    updateFunction: updateFunction,
    data: {
      'id': 'paris',
      'height': 324
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Button, {
    text: "Empire State Building",
    sizerList: sizerList,
    updateFunction: updateFunction,
    data: {
      'id': 'empire',
      'height': 443
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Button, {
    text: "Cat",
    disabled: true,
    sizerList: sizerList,
    updateFunction: updateFunction,
    data: {
      'id': 'cat',
      'height': 0.26
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Button, {
    text: "Godzilla",
    disabled: true,
    sizerList: sizerList,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXJQaWNrZXIuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwidGV4dCIsImlkIiwiY2xhc3NOYW1lIiwiY2xpY2tIYW5kbGVyIiwiZmlyc3RJdGVtIiwiR3JhcGgiLCJ1c2VTdGF0ZSIsInNpemVyTGlzdCIsInVwZGF0ZVNpemVyTGlzdCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNpemVySXRlbSIsIml0ZW1JZCIsIml0ZW1TaXplIiwiTGlzdEl0ZW1zIiwidXBkYXRlRnVuY3Rpb24iLCJoZWlnaHRzQXJyYXkiLCJtYXAiLCJoZWlnaHQiLCJ0YWxsZXN0SGVpZ2h0IiwiTWF0aCIsIm1heCIsInJlZHVjZWRMaXN0IiwiZmlsdGVyIiwib2JqIiwiaXRlbSIsImluZGV4IiwiaXRlbUhlaWdodCIsIlNpemVySXRlbXMiLCJkYXRhIiwic2l6ZXJMaXN0SWRzIiwiaXNJdGVtVXNlZCIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiU2l6ZXJQaWNrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyQztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsRUFBa0MsUUFBbENBLEVBQWtDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDdEQsc0JBQ0k7QUFBUSxNQUFF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SUFGSixlQUdJLDREQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsS0FBYjtBQUFtQixZQUFRLEVBQUUsSUFBN0I7QUFBbUMsYUFBUyxFQUFFVixTQUE5QztBQUF5RCxrQkFBYyxFQUFFVSxjQUF6RTtBQUF5RixRQUFJLEVBQUc7QUFBQyxZQUFNLEtBQVA7QUFBYyxnQkFBVTtBQUF4QjtBQUFoRyxJQUhKLGVBSUksNERBQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxVQUFiO0FBQXdCLFlBQVEsRUFBRSxJQUFsQztBQUF3QyxhQUFTLEVBQUVWLFNBQW5EO0FBQThELGtCQUFjLEVBQUVVLGNBQTlFO0FBQThGLFFBQUksRUFBRztBQUFDLFlBQU0sVUFBUDtBQUFtQixnQkFBVTtBQUE3QjtBQUFyRyxJQUpKLENBREosQ0FESjtBQVVILENBWEQ7O0FBYWVtQiwwRUFBZixFIiwiZmlsZSI6InNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgaWQsIGNsYXNzTmFtZSwgY2xpY2tIYW5kbGVyIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XHJcbmltcG9ydCBTaXplclBpY2tlciBmcm9tICcuL3NpemVyUGlja2VyJztcclxuaW1wb3J0IFNpemVySXRlbXMgZnJvbSAnLi9zaXplckl0ZW1zJztcclxuXHJcbmNvbnN0IGZpcnN0SXRlbSA9IHtcclxuICAgICdpZCc6ICdtYW4nLFxyXG4gICAgJ25hbWUnOiAnbWFuJyxcclxuICAgICdoZWlnaHQnOiAxLjcsXHJcbn07XHJcblxyXG5jb25zdCBHcmFwaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZmlyc3RJdGVtXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l6ZXJQaWNrZXIgdXBkYXRlRnVuY3Rpb249e3VwZGF0ZVNpemVyTGlzdH0gc2l6ZXJMaXN0PXtzaXplckxpc3R9Lz5cclxuICAgICAgICAgICAgPFNpemVySXRlbXMgdXBkYXRlRnVuY3Rpb249e3VwZGF0ZVNpemVyTGlzdH0gc2l6ZXJMaXN0PXtzaXplckxpc3R9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxHcmFwaC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplckl0ZW0gPSAoeyBpdGVtSWQsIGl0ZW1TaXplIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpdGVtSWR9LnN2Z2B9IGNsYXNzTmFtZT17YGljb24gaWNvbi0ke2l0ZW1JZH1gfSBzdHlsZT17eyAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScgfX0vPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaXplckl0ZW0gZnJvbSAnLi9zaXplckl0ZW0nO1xuXG5jb25zdCBMaXN0SXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcbiAgICBjb25zdCBoZWlnaHRzQXJyYXkgPSBzaXplckxpc3QubWFwKCh7IGhlaWdodCB9KSA9PiBoZWlnaHQpO1xuICAgIGNvbnN0IHRhbGxlc3RIZWlnaHQgPSBNYXRoLm1heCguLi5oZWlnaHRzQXJyYXkpO1xuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGl0ZW1JZCkgPT4ge1xuICAgICAgICBjb25zdCByZWR1Y2VkTGlzdCA9IHNpemVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUZ1bmN0aW9uKHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtzaXplckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0uaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVNpemUgPSAoaXRlbUhlaWdodCAvIHRhbGxlc3RIZWlnaHQpICogMTAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xCaWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIga2V5PXtpbmRleCArIGl0ZW1JZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVySXRlbSBpdGVtSWQ9e2l0ZW1JZH0gaXRlbVNpemU9e2l0ZW1TaXplfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0+WDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBzdHlsZT17eyAndG9wJzogKDEwMCAtIGl0ZW1TaXplKSArICclJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfSBcbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgU2l6ZXJJdGVtcyA9ICh7IHNpemVyTGlzdCwgdXBkYXRlRnVuY3Rpb24gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8TGlzdEl0ZW1zIHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVGdW5jdGlvbj17dXBkYXRlRnVuY3Rpb259Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IHRleHQsIHNpemVyTGlzdCwgdXBkYXRlRnVuY3Rpb24sIGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRhdGEpID0+IHtcclxuICAgICAgICB1cGRhdGVGdW5jdGlvbihzaXplckxpc3QgPT4gWy4uLnNpemVyTGlzdCwgZGF0YV0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2l6ZXJMaXN0SWRzID0gc2l6ZXJMaXN0Lm1hcCgoeyAuLi5pdGVtIH0pID0+IGl0ZW0uaWQpO1xyXG4gICAgY29uc3QgaXNJdGVtVXNlZCA9IHNpemVyTGlzdElkcy5pbmNsdWRlcyhkYXRhLmlkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgQnV0dG9uQWRkICR7aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiAnJ31gfSBkaXNhYmxlZD17aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiB1bmRlZmluZWR9IG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihkYXRhKX0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpemVyUGlja2VyID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJFaWZmZWwgVG93ZXJcIiBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlRnVuY3Rpb249e3VwZGF0ZUZ1bmN0aW9ufSBkYXRhPXsgeydpZCc6ICdwYXJpcycsICdoZWlnaHQnOiAzMjR9IH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRW1waXJlIFN0YXRlIEJ1aWxkaW5nXCIgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17IHsnaWQnOiAnZW1waXJlJywgJ2hlaWdodCc6IDQ0M30gfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDYXRcIiBkaXNhYmxlZD17dHJ1ZX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17IHsnaWQnOiAnY2F0JywgJ2hlaWdodCc6IDAuMjZ9IH0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiR29kemlsbGFcIiBkaXNhYmxlZD17dHJ1ZX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17IHsnaWQnOiAnZ29kemlsbGEnLCAnaGVpZ2h0JzogMTIyfSB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplclBpY2tlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==