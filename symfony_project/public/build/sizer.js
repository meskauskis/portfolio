(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sizer"],{

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
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _sizerNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sizerNav */ "./assets/js/sizerNav.js");
/* harmony import */ var _sizerItems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sizerItems */ "./assets/js/sizerItems.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Graph = function Graph(_ref) {
  var sizerData = _ref.sizerData;
  var defaultItem = sizerData.find(function (item) {
    return item["default"];
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([defaultItem]),
      _useState2 = _slicedToArray(_useState, 2),
      sizerList = _useState2[0],
      updateSizerList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      infoBoxId = _useState4[0],
      updateInfoBoxId = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerNav__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sizerData: sizerData,
    sizerList: sizerList,
    updateSizerList: updateSizerList,
    updateInfoBoxId: updateInfoBoxId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItems__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sizerList: sizerList,
    updateSizerList: updateSizerList,
    updateInfoBoxId: updateInfoBoxId,
    infoBoxId: infoBoxId
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



var sizerData = [{
  'id': 'man',
  'name': 'Man',
  'height': 1.7,
  'category': null,
  'default': true
}, {
  'id': 'giraffe',
  'name': 'Giraffe',
  'category': 'animal',
  'height': 6
}, {
  'id': 'grizzly',
  'name': 'Grizzly Bear',
  'category': 'animal',
  'height': 2.4
}, {
  'id': 'godzilla',
  'name': 'Godzilla',
  'category': 'monster',
  'height': 122
}, {
  'id': 'cat',
  'name': 'Cat',
  'category': 'animal',
  'height': 0.26
}, {
  'id': 'paris',
  'name': 'Eiffel Tower',
  'category': 'architecture',
  'height': 324
}, {
  'id': 'empire',
  'name': 'Empire State',
  'category': 'architecture',
  'height': 443
}];
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graph__WEBPACK_IMPORTED_MODULE_2__["default"], {
  sizerData: sizerData
}), document.getElementById('React'));

/***/ }),

/***/ "./assets/js/sizerItem.js":
/*!********************************!*\
  !*** ./assets/js/sizerItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var SizerItem = function SizerItem(_ref) {
  var sizerList = _ref.sizerList,
      item = _ref.item,
      itemSize = _ref.itemSize,
      updateSizerList = _ref.updateSizerList,
      updateInfoBoxId = _ref.updateInfoBoxId,
      infoBoxId = _ref.infoBoxId;
  var itemDefault = typeof item["default"] !== 'undefined' && item["default"] ? true : false;
  var itemId = item.id;

  var clickHandlerInfo = function clickHandlerInfo(itemId) {
    // Close if it's already open.
    updateInfoBoxId(infoBoxId == itemId ? null : itemId);
  };

  var clickHandlerClose = function clickHandlerClose(itemId) {
    var reducedList = sizerList.filter(function (obj) {
      return obj.id !== itemId;
    });
    updateSizerList(function (sizerList) {
      return reducedList;
    });
  };

  var currentItem = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return itemId;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "images/".concat(itemId, ".svg"),
    className: "icon icon-".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "images/button-info.svg",
    className: "Col-button Col-button--info",
    onClick: function onClick() {
      return clickHandlerInfo(itemId);
    }
  }), itemId == infoBoxId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "infoBox"
  }, item.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), item.height, "m", !itemDefault ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "images/button-info.svg",
    className: "closeButton",
    onClick: function onClick() {
      return clickHandlerClose(itemId);
    }
  }) : '') : '');
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
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
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
















function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SizerItems = function SizerItems(_ref) {
  var sizerList = _ref.sizerList,
      updateSizerList = _ref.updateSizerList,
      updateInfoBoxId = _ref.updateInfoBoxId,
      infoBoxId = _ref.infoBoxId;
  var heightsArray = sizerList.map(function (_ref2) {
    var height = _ref2.height;
    return height;
  });
  var tallestHeight = Math.max.apply(Math, _toConsumableArray(heightsArray));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "container2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "container"
  }, sizerList.map(function (item, index) {
    var itemId = item.id;
    var itemHeight = item.height;
    var itemSize = itemHeight / tallestHeight * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      key: itemId,
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
      className: "liner"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_16__["default"], _defineProperty({
      sizerList: sizerList,
      item: item,
      itemSize: itemSize,
      updateSizerList: updateSizerList,
      infoBoxId: infoBoxId,
      updateInfoBoxId: updateInfoBoxId
    }, "infoBoxId", infoBoxId)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerItems);

/***/ }),

/***/ "./assets/js/sizerNav.js":
/*!*******************************!*\
  !*** ./assets/js/sizerNav.js ***!
  \*******************************/
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);





















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var SizerNav = function SizerNav(_ref) {
  var sizerData = _ref.sizerData,
      sizerList = _ref.sizerList,
      updateSizerList = _ref.updateSizerList,
      updateInfoBoxId = _ref.updateInfoBoxId;
  var sizerListIds = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return item.id;
  });
  var categoryArray = sizerData.map(function (item) {
    return item.category;
  }).filter(function (item, index, array) {
    return item ? array.indexOf(item) === index : false;
  });

  var clickHandler = function clickHandler(item, isItemUsed) {
    if (isItemUsed) {
      var itemId = item.id;
      var reducedList = sizerList.filter(function (obj) {
        return obj.id !== itemId;
      });
      updateSizerList(function (sizerList) {
        return reducedList;
      });
    } else {
      updateSizerList(function (sizerList) {
        return [].concat(_toConsumableArray(sizerList), [item]);
      });
      updateInfoBoxId(null);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("nav", {
    className: "picker"
  }, categoryArray.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
      key: category,
      className: "picker-category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", {
      className: "picker-title"
    }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("ul", {
      className: "picker-list"
    }, sizerData.map(function (item) {
      var itemCategory = item.category;
      var itemId = item.id;
      var itemName = item.name;
      var isItemUsed = sizerListIds.includes(itemId);

      if (category === itemCategory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("li", {
          key: itemId,
          className: "picker-listItem ".concat(isItemUsed ? 'picker-listItem--disabled' : ''),
          onClick: function onClick() {
            return clickHandler(item, isItemUsed);
          }
        }, itemName);
      }
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerNav);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwiaW5mb0JveElkIiwidXBkYXRlSW5mb0JveElkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2l6ZXJJdGVtIiwiaXRlbVNpemUiLCJpdGVtRGVmYXVsdCIsIml0ZW1JZCIsImlkIiwiY2xpY2tIYW5kbGVySW5mbyIsImNsaWNrSGFuZGxlckNsb3NlIiwicmVkdWNlZExpc3QiLCJmaWx0ZXIiLCJvYmoiLCJjdXJyZW50SXRlbSIsIm1hcCIsIm5hbWUiLCJoZWlnaHQiLCJTaXplckl0ZW1zIiwiaGVpZ2h0c0FycmF5IiwidGFsbGVzdEhlaWdodCIsIk1hdGgiLCJtYXgiLCJpbmRleCIsIml0ZW1IZWlnaHQiLCJTaXplck5hdiIsInNpemVyTGlzdElkcyIsImNhdGVnb3J5QXJyYXkiLCJjYXRlZ29yeSIsImFycmF5IiwiaW5kZXhPZiIsImNsaWNrSGFuZGxlciIsImlzSXRlbVVzZWQiLCJpdGVtQ2F0ZWdvcnkiLCJpdGVtTmFtZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUEsTUFBaEJD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Q0FESjtBQStCSCxDQXBERDs7QUFzRGVULHVFQUFmLEUiLCJmaWxlIjoic2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2l6ZXJOYXYgZnJvbSAnLi9zaXplck5hdic7XHJcbmltcG9ydCBTaXplckl0ZW1zIGZyb20gJy4vc2l6ZXJJdGVtcyc7XHJcblxyXG5jb25zdCBHcmFwaCA9ICh7IHNpemVyRGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0SXRlbSA9IHNpemVyRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmRlZmF1bHQpO1xyXG5cclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZGVmYXVsdEl0ZW1dKTtcclxuICAgIGNvbnN0IFtpbmZvQm94SWQsIHVwZGF0ZUluZm9Cb3hJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTaXplck5hdiBzaXplckRhdGE9e3NpemVyRGF0YX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fVxyXG4gICAgICAgICAgICB1cGRhdGVJbmZvQm94SWQ9e3VwZGF0ZUluZm9Cb3hJZH0vPlxyXG4gICAgICAgICAgICA8U2l6ZXJJdGVtcyBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9IHVwZGF0ZUluZm9Cb3hJZD17dXBkYXRlSW5mb0JveElkfSBcclxuICAgICAgICAgICAgaW5mb0JveElkPXtpbmZvQm94SWR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcblxuY29uc3Qgc2l6ZXJEYXRhID0gW1xuICAgIHsnaWQnOiAnbWFuJywgJ25hbWUnOiAnTWFuJywgJ2hlaWdodCc6IDEuNywgJ2NhdGVnb3J5JzogbnVsbCwgJ2RlZmF1bHQnOiB0cnVlfSxcbiAgICB7J2lkJzogJ2dpcmFmZmUnLCAnbmFtZSc6ICdHaXJhZmZlJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiA2fSxcbiAgICB7J2lkJzogJ2dyaXp6bHknLCAnbmFtZSc6ICdHcml6emx5IEJlYXInLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDIuNH0sXG4gICAgeydpZCc6ICdnb2R6aWxsYScsICduYW1lJzogJ0dvZHppbGxhJywgJ2NhdGVnb3J5JzogJ21vbnN0ZXInLCAnaGVpZ2h0JzogMTIyfSxcbiAgICB7J2lkJzogJ2NhdCcsICduYW1lJzogJ0NhdCcsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMC4yNn0sXG4gICAgeydpZCc6ICdwYXJpcycsICduYW1lJzogJ0VpZmZlbCBUb3dlcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogMzI0fSxcbiAgICB7J2lkJzogJ2VtcGlyZScsICduYW1lJzogJ0VtcGlyZSBTdGF0ZScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNDQzfSxcbl07XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8R3JhcGggc2l6ZXJEYXRhPXtzaXplckRhdGF9Lz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlYWN0Jylcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplckl0ZW0gPSAoeyBzaXplckxpc3QsIGl0ZW0sIGl0ZW1TaXplLCB1cGRhdGVTaXplckxpc3QsIHVwZGF0ZUluZm9Cb3hJZCwgaW5mb0JveElkIH0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gdHlwZW9mIGl0ZW0uZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5kZWZhdWx0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuXHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXJJbmZvID0gKGl0ZW1JZCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIGlmIGl0J3MgYWxyZWFkeSBvcGVuLlxyXG4gICAgICAgIHVwZGF0ZUluZm9Cb3hJZChpbmZvQm94SWQgPT0gaXRlbUlkID8gbnVsbCA6IGl0ZW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyQ2xvc2UgPSAoaXRlbUlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IHJlZHVjZWRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtSWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpdGVtSWR9LnN2Z2B9IGNsYXNzTmFtZT17YGljb24gaWNvbi0ke2l0ZW1JZH1gfSBzdHlsZT17eyAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScgfX0vPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9idXR0b24taW5mby5zdmdgfSBjbGFzc05hbWU9XCJDb2wtYnV0dG9uIENvbC1idXR0b24tLWluZm9cIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXJJbmZvKGl0ZW1JZCl9Lz5cclxuXHJcbiAgICAgICAgICAgIHtpdGVtSWQgPT0gaW5mb0JveElkXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmhlaWdodH1tXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW1EZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxpbWcgc3JjPXtgaW1hZ2VzL2J1dHRvbi1pbmZvLnN2Z2B9IGNsYXNzTmFtZT1cImNsb3NlQnV0dG9uXCIgb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyQ2xvc2UoaXRlbUlkKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6ICcnIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNpemVySXRlbSBmcm9tICcuL3NpemVySXRlbSc7XG5cbmNvbnN0IFNpemVySXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdCwgdXBkYXRlSW5mb0JveElkLCBpbmZvQm94SWQgfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XG4gICAgY29uc3QgdGFsbGVzdEhlaWdodCA9IE1hdGgubWF4KC4uLmhlaWdodHNBcnJheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IChpdGVtSGVpZ2h0IC8gdGFsbGVzdEhlaWdodCkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplckl0ZW0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IGl0ZW09e2l0ZW19IGl0ZW1TaXplPXtpdGVtU2l6ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9IGluZm9Cb3hJZD17aW5mb0JveElkfSB1cGRhdGVJbmZvQm94SWQ9e3VwZGF0ZUluZm9Cb3hJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQm94SWQ9e2luZm9Cb3hJZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVySXRlbXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplck5hdiA9ICh7IHNpemVyRGF0YSwgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QsIHVwZGF0ZUluZm9Cb3hJZCB9KSA9PiB7XHJcbiAgICBjb25zdCBzaXplckxpc3RJZHMgPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbS5pZCk7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IHNpemVyRGF0YVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpXHJcbiAgICAgICAgLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBpdGVtID8gYXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXggOiBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGl0ZW0sIGlzSXRlbVVzZWQpID0+IHtcclxuICAgICAgICBpZiAoaXNJdGVtVXNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICBjb25zdCByZWR1Y2VkTGlzdCA9IHNpemVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IHJlZHVjZWRMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IFsuLi5zaXplckxpc3QsIGl0ZW1dKTtcclxuICAgICAgICAgICAgdXBkYXRlSW5mb0JveElkKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicGlja2VyXCI+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9XCJwaWNrZXItY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBpY2tlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGlja2VyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXplckRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1Vc2VkID0gc2l6ZXJMaXN0SWRzLmluY2x1ZGVzKGl0ZW1JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT17YHBpY2tlci1saXN0SXRlbSAke2lzSXRlbVVzZWQgPyAncGlja2VyLWxpc3RJdGVtLS1kaXNhYmxlZCcgOiAnJ31gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihpdGVtLCBpc0l0ZW1Vc2VkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=