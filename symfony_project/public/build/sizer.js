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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])('m'),
      _useState4 = _slicedToArray(_useState3, 2),
      unit = _useState4[0],
      updateUnit = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerNav__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sizerData: sizerData,
    sizerList: sizerList,
    updateSizerList: updateSizerList,
    unit: unit,
    updateUnit: updateUnit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItems__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sizerList: sizerList,
    updateSizerList: updateSizerList,
    unit: unit
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
  'category': 'fantasy',
  'height': 108
}, {
  'id': 'gundam',
  'name': 'Gundam',
  'category': 'fantasy',
  'height': 18
}, {
  'id': 'evangelion',
  'name': 'Eva-01',
  'category': 'fantasy',
  'height': 42
}, {
  'id': 'cat',
  'name': 'Cat',
  'category': 'animal',
  'height': 0.28
}, {
  'id': 'eiffel',
  'name': 'Eiffel Tower',
  'category': 'architecture',
  'height': 324
}, {
  'id': 'empire',
  'name': 'Empire State',
  'category': 'architecture',
  'height': 443
}, {
  'id': 'elephant',
  'name': 'Elephant',
  'category': 'animal',
  'height': 3.4
}, {
  'id': 'ostrich',
  'name': 'Ostrich',
  'category': 'animal',
  'height': 2.6
}, {
  'id': 'voltron',
  'name': 'Voltron',
  'category': 'fantasy',
  'height': 100
}, {
  'id': 'atat',
  'name': 'AT-AT',
  'category': 'fantasy',
  'height': 22
}, {
  'id': 'optimus',
  'name': 'Optimus Prime',
  'category': 'fantasy',
  'height': 6.7
}, {
  'id': 'taipei',
  'name': 'Taipei 101',
  'category': 'architecture',
  'height': 508
}, {
  'id': 'willis',
  'name': 'Willis Tower',
  'category': 'architecture',
  'height': 520
}, {
  'id': 'burj',
  'name': 'Burj Khalifa',
  'category': 'architecture',
  'height': 828
}, {
  'id': 'liberty',
  'name': 'Statue Of Liberty',
  'category': 'architecture',
  'height': 93
}, {
  'id': 'tyrannosaurus',
  'name': 'Tyrannosaurus',
  'category': 'animal',
  'height': 6
}, {
  'id': 'kong',
  'name': 'King Kong',
  'category': 'fantasy',
  'height': 31
}, {
  'id': 'stay-puft',
  'name': 'Stay Puft Marshmallow',
  'category': 'fantasy',
  'height': 34
}, {
  'id': 'spring-temple',
  'name': 'Spring Temple Buddha',
  'category': 'architecture',
  'height': 208
}, {
  'id': 'christ',
  'name': 'Christ The Redeemer',
  'category': 'architecture',
  'height': 30
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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var SizerItem = function SizerItem(_ref) {
  var sizerList = _ref.sizerList,
      item = _ref.item,
      itemSize = _ref.itemSize,
      updateSizerList = _ref.updateSizerList;
  var itemDefault = typeof item["default"] !== 'undefined' && item["default"] ? true : false;
  var itemId = item.id;
  var currentItem = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return itemId;
  });

  var closeItem = function closeItem(itemDefault, itemId) {
    if (itemDefault) {
      return false;
    }

    var reducedList = sizerList.filter(function (obj) {
      return obj.id !== itemId;
    });
    updateSizerList(function (sizerList) {
      return reducedList;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "images/".concat(itemId, ".svg"),
    className: "SizerContainer-item SizerContainer-item--".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "images/button-remove.svg",
    className: "Button--close ".concat(itemDefault ? 'is-default' : ''),
    onClick: function onClick() {
      return closeItem(itemDefault, itemId);
    }
  }));
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
/* harmony import */ var _sizerItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sizerItem */ "./assets/js/sizerItem.js");















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SizerItems = function SizerItems(_ref) {
  var sizerList = _ref.sizerList,
      updateSizerList = _ref.updateSizerList,
      unit = _ref.unit;
  var heightsArray = sizerList.map(function (_ref2) {
    var height = _ref2.height;
    return height;
  });
  var tallestHeight = Math.max.apply(Math, _toConsumableArray(heightsArray));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "SizerContainerWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "SizerGround"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "SizerContainer"
  }, sizerList.map(function (item, index) {
    var itemDefault = item["default"];
    var itemHeight = item.height;
    var itemId = item.id;
    var itemName = item.name;
    var itemSize = itemHeight / tallestHeight * 100;
    var itemHeightConverted = unit == 'm' ? itemHeight : Math.round(itemHeight * 3.281 * 10) / 10;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      key: itemId,
      className: "SizerContainer-col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "SizerContainer-line"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "SizerContainer-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "SizerContainer-infoName"
    }, itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "SizerContainer-infoUnit"
    }, itemHeightConverted, " ", unit))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      item: item,
      itemSize: itemSize,
      sizerList: sizerList,
      updateSizerList: updateSizerList
    }));
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
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);






















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SizerNav = function SizerNav(_ref) {
  var sizerData = _ref.sizerData,
      sizerList = _ref.sizerList,
      updateSizerList = _ref.updateSizerList,
      unit = _ref.unit,
      updateUnit = _ref.updateUnit;
  var sizerListIds = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return item.id;
  });
  var categoryArray = sizerData.map(function (item) {
    return item.category;
  }).filter(function (item, index, array) {
    return item ? array.indexOf(item) === index : false;
  }).sort();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(categoryArray[0]),
      _useState2 = _slicedToArray(_useState, 2),
      navCategory = _useState2[0],
      updateNavCategory = _useState2[1];

  var changeCategory = function changeCategory(category) {
    updateNavCategory(category);
  };

  var changeUnit = function changeUnit(unit) {
    updateUnit(unit);
  };

  var toggleItem = function toggleItem(item, isItemUsed) {
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
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("aside", {
    className: "SizerNavContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    className: "SizerNavUnits"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
    onClick: function onClick() {
      return changeUnit('ft');
    },
    className: "SizerNavUnits-unit ".concat(unit == 'ft' ? 'SizerNavUnits-unit--selected' : '')
  }, "Feet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
    onClick: function onClick() {
      return changeUnit('m');
    },
    className: "SizerNavUnits-unit ".concat(unit == 'm' ? 'SizerNavUnits-unit--selected' : '')
  }, "Meters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("nav", {
    className: "SizerNav"
  }, categoryArray.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
      key: category,
      className: "SizerNav-category ".concat(navCategory == category ? 'SizerNav-category--selected' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("h5", {
      className: "SizerNav-title",
      onClick: function onClick() {
        return changeCategory(category);
      }
    }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("ul", {
      className: "SizerNav-list"
    }, sizerData.sort(function (a, b) {
      return a.name > b.name ? 1 : -1;
    }).map(function (item) {
      var itemCategory = item.category;
      var itemId = item.id;
      var itemName = item.name;
      var isItemUsed = sizerListIds.includes(itemId);

      if (category === itemCategory) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("li", {
          key: itemId,
          className: "SizerNav-listItem ".concat(isItemUsed ? 'SizerNav-listItem--disabled' : ''),
          onClick: function onClick() {
            return toggleItem(item, isItemUsed);
          }
        }, itemName);
      }
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerNav);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwidW5pdCIsInVwZGF0ZVVuaXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTaXplckl0ZW0iLCJpdGVtU2l6ZSIsIml0ZW1EZWZhdWx0IiwiaXRlbUlkIiwiaWQiLCJjdXJyZW50SXRlbSIsIm1hcCIsImNsb3NlSXRlbSIsInJlZHVjZWRMaXN0IiwiZmlsdGVyIiwib2JqIiwiU2l6ZXJJdGVtcyIsImhlaWdodHNBcnJheSIsImhlaWdodCIsInRhbGxlc3RIZWlnaHQiLCJNYXRoIiwibWF4IiwiaW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXRlbU5hbWUiLCJuYW1lIiwiaXRlbUhlaWdodENvbnZlcnRlZCIsInJvdW5kIiwiU2l6ZXJOYXYiLCJzaXplckxpc3RJZHMiLCJjYXRlZ29yeUFycmF5IiwiY2F0ZWdvcnkiLCJhcnJheSIsImluZGV4T2YiLCJzb3J0IiwibmF2Q2F0ZWdvcnkiLCJ1cGRhdGVOYXZDYXRlZ29yeSIsImNoYW5nZUNhdGVnb3J5IiwiY2hhbmdlVW5pdCIsInRvZ2dsZUl0ZW0iLCJpc0l0ZW1Vc2VkIiwiYSIsImIiLCJpdGVtQ2F0ZWdvcnkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dUIsUUFBUSxLQUFLWSxZQUFqQixFQUErQjtBQUMzQiw0QkFDSTtBQUFJLGFBQUcsRUFBRW5DLE1BQVQ7QUFBaUIsbUJBQVMsOEJBQXVCZ0MsVUFBVSxHQUFHLDZCQUFILEdBQW1DLEVBQXBFLENBQTFCO0FBQ0EsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxVQUFVLENBQUM1QyxJQUFELEVBQU82QyxVQUFQLENBQWhCO0FBQUE7QUFEVCxXQUVLaEIsUUFGTCxDQURKO0FBTUg7QUFDSixLQWpCQSxDQURMLENBSkosQ0FESjtBQTJCSCxHQTVCQSxDQURMLENBTkosQ0FESjtBQXdDSCxDQXZFRDs7QUF5RWVJLHVFQUFmLEUiLCJmaWxlIjoic2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2l6ZXJOYXYgZnJvbSAnLi9zaXplck5hdic7XHJcbmltcG9ydCBTaXplckl0ZW1zIGZyb20gJy4vc2l6ZXJJdGVtcyc7XHJcblxyXG5jb25zdCBHcmFwaCA9ICh7IHNpemVyRGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0SXRlbSA9IHNpemVyRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmRlZmF1bHQpO1xyXG5cclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZGVmYXVsdEl0ZW1dKTtcclxuICAgIGNvbnN0IFt1bml0LCB1cGRhdGVVbml0XSA9IHVzZVN0YXRlKCdtJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l6ZXJOYXYgc2l6ZXJEYXRhPXtzaXplckRhdGF9IHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH1cclxuICAgICAgICAgICAgdW5pdD17dW5pdH0gdXBkYXRlVW5pdD17dXBkYXRlVW5pdH0vPlxyXG5cclxuICAgICAgICAgICAgPFNpemVySXRlbXMgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fSB1bml0PXt1bml0fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5cbmNvbnN0IHNpemVyRGF0YSA9IFtcbiAgICB7J2lkJzogJ21hbicsICduYW1lJzogJ01hbicsICdoZWlnaHQnOiAxLjcsICdjYXRlZ29yeSc6IG51bGwsICdkZWZhdWx0JzogdHJ1ZX0sXG4gICAgeydpZCc6ICdnaXJhZmZlJywgJ25hbWUnOiAnR2lyYWZmZScsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogNn0sXG4gICAgeydpZCc6ICdncml6emx5JywgJ25hbWUnOiAnR3JpenpseSBCZWFyJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAyLjR9LFxuICAgIHsnaWQnOiAnZ29kemlsbGEnLCAnbmFtZSc6ICdHb2R6aWxsYScsICdjYXRlZ29yeSc6ICdmYW50YXN5JywgJ2hlaWdodCc6IDEwOH0sXG4gICAgeydpZCc6ICdndW5kYW0nLCAnbmFtZSc6ICdHdW5kYW0nLCAnY2F0ZWdvcnknOiAnZmFudGFzeScsICdoZWlnaHQnOiAxOH0sXG4gICAgeydpZCc6ICdldmFuZ2VsaW9uJywgJ25hbWUnOiAnRXZhLTAxJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogNDJ9LFxuICAgIHsnaWQnOiAnY2F0JywgJ25hbWUnOiAnQ2F0JywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAwLjI4fSxcbiAgICB7J2lkJzogJ2VpZmZlbCcsICduYW1lJzogJ0VpZmZlbCBUb3dlcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogMzI0fSxcbiAgICB7J2lkJzogJ2VtcGlyZScsICduYW1lJzogJ0VtcGlyZSBTdGF0ZScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNDQzfSxcbiAgICB7J2lkJzogJ2VsZXBoYW50JywgJ25hbWUnOiAnRWxlcGhhbnQnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDMuNH0sXG4gICAgeydpZCc6ICdvc3RyaWNoJywgJ25hbWUnOiAnT3N0cmljaCcsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMi42fSxcbiAgICB7J2lkJzogJ3ZvbHRyb24nLCAnbmFtZSc6ICdWb2x0cm9uJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogMTAwfSxcbiAgICB7J2lkJzogJ2F0YXQnLCAnbmFtZSc6ICdBVC1BVCcsICdjYXRlZ29yeSc6ICdmYW50YXN5JywgJ2hlaWdodCc6IDIyfSxcbiAgICB7J2lkJzogJ29wdGltdXMnLCAnbmFtZSc6ICdPcHRpbXVzIFByaW1lJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogNi43fSxcbiAgICB7J2lkJzogJ3RhaXBlaScsICduYW1lJzogJ1RhaXBlaSAxMDEnLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDUwOH0sXG4gICAgeydpZCc6ICd3aWxsaXMnLCAnbmFtZSc6ICdXaWxsaXMgVG93ZXInLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDUyMH0sXG4gICAgeydpZCc6ICdidXJqJywgJ25hbWUnOiAnQnVyaiBLaGFsaWZhJywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiA4Mjh9LFxuICAgIHsnaWQnOiAnbGliZXJ0eScsICduYW1lJzogJ1N0YXR1ZSBPZiBMaWJlcnR5JywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiA5M30sXG4gICAgeydpZCc6ICd0eXJhbm5vc2F1cnVzJywgJ25hbWUnOiAnVHlyYW5ub3NhdXJ1cycsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogNn0sXG4gICAgeydpZCc6ICdrb25nJywgJ25hbWUnOiAnS2luZyBLb25nJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogMzF9LFxuICAgIHsnaWQnOiAnc3RheS1wdWZ0JywgJ25hbWUnOiAnU3RheSBQdWZ0IE1hcnNobWFsbG93JywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogMzR9LFxuICAgIHsnaWQnOiAnc3ByaW5nLXRlbXBsZScsICduYW1lJzogJ1NwcmluZyBUZW1wbGUgQnVkZGhhJywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiAyMDh9LFxuICAgIHsnaWQnOiAnY2hyaXN0JywgJ25hbWUnOiAnQ2hyaXN0IFRoZSBSZWRlZW1lcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogMzB9LFxuXTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxHcmFwaCBzaXplckRhdGE9e3NpemVyRGF0YX0vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUmVhY3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNpemVySXRlbSA9ICh7IHNpemVyTGlzdCwgaXRlbSwgaXRlbVNpemUsIHVwZGF0ZVNpemVyTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtRGVmYXVsdCA9IHR5cGVvZiBpdGVtLmRlZmF1bHQgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uZGVmYXVsdCA/IHRydWUgOiBmYWxzZTtcclxuICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbUlkKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUl0ZW0gPSAoaXRlbURlZmF1bHQsIGl0ZW1JZCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtRGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZWR1Y2VkTGlzdCA9IHNpemVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouaWQgIT09IGl0ZW1JZDtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZVNpemVyTGlzdChzaXplckxpc3QgPT4gcmVkdWNlZExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpdGVtSWR9LnN2Z2B9IGNsYXNzTmFtZT17YFNpemVyQ29udGFpbmVyLWl0ZW0gU2l6ZXJDb250YWluZXItaXRlbS0tJHtpdGVtSWR9YH0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScsIFxyXG4gICAgICAgICAgICB9fS8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9idXR0b24tcmVtb3ZlLnN2Z2B9IGNsYXNzTmFtZT17YEJ1dHRvbi0tY2xvc2UgJHtpdGVtRGVmYXVsdCA/ICdpcy1kZWZhdWx0JyA6ICcnfWB9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZUl0ZW0oaXRlbURlZmF1bHQsIGl0ZW1JZCl9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVySXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2l6ZXJJdGVtIGZyb20gJy4vc2l6ZXJJdGVtJztcblxuY29uc3QgU2l6ZXJJdGVtcyA9ICh7IHNpemVyTGlzdCwgdXBkYXRlU2l6ZXJMaXN0LCB1bml0IH0pID0+IHtcbiAgICBjb25zdCBoZWlnaHRzQXJyYXkgPSBzaXplckxpc3QubWFwKCh7IGhlaWdodCB9KSA9PiBoZWlnaHQpO1xuICAgIGNvbnN0IHRhbGxlc3RIZWlnaHQgPSBNYXRoLm1heCguLi5oZWlnaHRzQXJyYXkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lcldyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJHcm91bmRcIj48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtzaXplckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGVmYXVsdCA9IGl0ZW0uZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0ubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IChpdGVtSGVpZ2h0IC8gdGFsbGVzdEhlaWdodCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHRDb252ZXJ0ZWQgPSB1bml0ID09ICdtJyA/IGl0ZW1IZWlnaHQgOiBNYXRoLnJvdW5kKGl0ZW1IZWlnaHQgKiAzLjI4MSAqIDEwKSAvIDEwO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbUlkfSBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyQ29udGFpbmVyLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyQ29udGFpbmVyLWluZm9OYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyQ29udGFpbmVyLWluZm9Vbml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1IZWlnaHRDb252ZXJ0ZWR9IHt1bml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVySXRlbSBpdGVtPXtpdGVtfSBpdGVtU2l6ZT17aXRlbVNpemV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVySXRlbXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplck5hdiA9ICh7IHNpemVyRGF0YSwgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QsIHVuaXQsIHVwZGF0ZVVuaXQgfSkgPT4ge1xyXG4gICAgY29uc3Qgc2l6ZXJMaXN0SWRzID0gc2l6ZXJMaXN0Lm1hcCgoeyAuLi5pdGVtIH0pID0+IGl0ZW0uaWQpO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBzaXplckRhdGFcclxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KVxyXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gaXRlbSA/IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4IDogZmFsc2UpXHJcbiAgICAgICAgLnNvcnQoKTtcclxuXHJcbiAgICBjb25zdCBbbmF2Q2F0ZWdvcnksIHVwZGF0ZU5hdkNhdGVnb3J5XSA9IHVzZVN0YXRlKGNhdGVnb3J5QXJyYXlbMF0pO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgdXBkYXRlTmF2Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVuaXQgPSAodW5pdCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVVuaXQodW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlSXRlbSA9IChpdGVtLCBpc0l0ZW1Vc2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSXRlbVVzZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiBbLi4uc2l6ZXJMaXN0LCBpdGVtXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIlNpemVyTmF2Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJOYXZVbml0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gY2hhbmdlVW5pdCgnZnQnKX0gY2xhc3NOYW1lPXtgU2l6ZXJOYXZVbml0cy11bml0ICR7dW5pdCA9PSAnZnQnID8gJ1NpemVyTmF2VW5pdHMtdW5pdC0tc2VsZWN0ZWQnIDogJyd9YH0+RmVldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNoYW5nZVVuaXQoJ20nKX0gY2xhc3NOYW1lPXtgU2l6ZXJOYXZVbml0cy11bml0ICR7dW5pdCA9PSAnbScgPyAnU2l6ZXJOYXZVbml0cy11bml0LS1zZWxlY3RlZCcgOiAnJ31gfT5NZXRlcnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiU2l6ZXJOYXZcIj5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT17YFNpemVyTmF2LWNhdGVnb3J5ICR7bmF2Q2F0ZWdvcnkgPT0gY2F0ZWdvcnkgPyAnU2l6ZXJOYXYtY2F0ZWdvcnktLXNlbGVjdGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIlNpemVyTmF2LXRpdGxlXCIgb25DbGljaz17KCkgPT4gY2hhbmdlQ2F0ZWdvcnkoY2F0ZWdvcnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlNpemVyTmF2LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l6ZXJEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLm5hbWU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJdGVtVXNlZCA9IHNpemVyTGlzdElkcy5pbmNsdWRlcyhpdGVtSWQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1JZH0gY2xhc3NOYW1lPXtgU2l6ZXJOYXYtbGlzdEl0ZW0gJHtpc0l0ZW1Vc2VkID8gJ1NpemVyTmF2LWxpc3RJdGVtLS1kaXNhYmxlZCcgOiAnJ31gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVJdGVtKGl0ZW0sIGlzSXRlbVVzZWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplck5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==