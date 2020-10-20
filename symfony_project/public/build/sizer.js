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
  'height': 42.6
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
  'height': 22.5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwidW5pdCIsInVwZGF0ZVVuaXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTaXplckl0ZW0iLCJpdGVtU2l6ZSIsIml0ZW1EZWZhdWx0IiwiaXRlbUlkIiwiaWQiLCJjdXJyZW50SXRlbSIsIm1hcCIsImNsb3NlSXRlbSIsInJlZHVjZWRMaXN0IiwiZmlsdGVyIiwib2JqIiwiU2l6ZXJJdGVtcyIsImhlaWdodHNBcnJheSIsImhlaWdodCIsInRhbGxlc3RIZWlnaHQiLCJNYXRoIiwibWF4IiwiaW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXRlbU5hbWUiLCJuYW1lIiwiaXRlbUhlaWdodENvbnZlcnRlZCIsInJvdW5kIiwiU2l6ZXJOYXYiLCJzaXplckxpc3RJZHMiLCJjYXRlZ29yeUFycmF5IiwiY2F0ZWdvcnkiLCJhcnJheSIsImluZGV4T2YiLCJzb3J0IiwibmF2Q2F0ZWdvcnkiLCJ1cGRhdGVOYXZDYXRlZ29yeSIsImNoYW5nZUNhdGVnb3J5IiwiY2hhbmdlVW5pdCIsInRvZ2dsZUl0ZW0iLCJpc0l0ZW1Vc2VkIiwiYSIsImIiLCJpdGVtQ2F0ZWdvcnkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxFQUFqRjtBQUE3QixvQkFDSTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUErQixhQUFPLEVBQUU7QUFBQSxlQUFNTSxjQUFjLENBQUNOLFFBQUQsQ0FBcEI7QUFBQTtBQUF4QyxPQUNLQSxRQURMLENBREosZUFJSTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQ0t2QyxTQUFTLENBQ0wwQyxJQURKLENBQ1MsVUFBQ08sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUQsQ0FBQyxDQUFDaEIsSUFBRixHQUFTaUIsQ0FBQyxDQUFDakIsSUFBWCxHQUFrQixDQUFsQixHQUFzQixDQUFDLENBQWpDO0FBQUEsS0FEVCxFQUVJZCxHQUZKLENBRVEsVUFBQ2hCLElBQUQsRUFBVTtBQUNmLFVBQU1nRCxZQUFZLEdBQUdoRCxJQUFJLENBQUNvQyxRQUExQjtBQUNBLFVBQU12QixNQUFNLEdBQUdiLElBQUksQ0FBQ2MsRUFBcEI7QUFDQSxVQUFNZSxRQUFRLEdBQUc3QixJQUFJLENBQUM4QixJQUF0QjtBQUVBLFVBQU1lLFVBQVUsR0FBR1gsWUFBWSxDQUFDZSxRQUFiLENBQXNCcEMsTUFBdEIsQ0FBbkI7O0FBRUEsVUFBSXVCLFFBQVEsS0FBS1ksWUFBakIsRUFBK0I7QUFDM0IsNEJBQ0k7QUFBSSxhQUFHLEVBQUVuQyxNQUFUO0FBQWlCLG1CQUFTLDhCQUF1QmdDLFVBQVUsR0FBRyw2QkFBSCxHQUFtQyxFQUFwRSxDQUExQjtBQUNBLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsVUFBVSxDQUFDNUMsSUFBRCxFQUFPNkMsVUFBUCxDQUFoQjtBQUFBO0FBRFQsV0FFS2hCLFFBRkwsQ0FESjtBQU1IO0FBQ0osS0FqQkEsQ0FETCxDQUpKLENBREo7QUEyQkgsR0E1QkEsQ0FETCxDQU5KLENBREo7QUF3Q0gsQ0F2RUQ7O0FBeUVlSSx1RUFBZixFIiwiZmlsZSI6InNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNpemVyTmF2IGZyb20gJy4vc2l6ZXJOYXYnO1xyXG5pbXBvcnQgU2l6ZXJJdGVtcyBmcm9tICcuL3NpemVySXRlbXMnO1xyXG5cclxuY29uc3QgR3JhcGggPSAoeyBzaXplckRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEl0ZW0gPSBzaXplckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5kZWZhdWx0KTtcclxuXHJcbiAgICBjb25zdCBbc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3RdID0gdXNlU3RhdGUoW2RlZmF1bHRJdGVtXSk7XHJcbiAgICBjb25zdCBbdW5pdCwgdXBkYXRlVW5pdF0gPSB1c2VTdGF0ZSgnbScpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpemVyTmF2IHNpemVyRGF0YT17c2l6ZXJEYXRhfSBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9XHJcbiAgICAgICAgICAgIHVuaXQ9e3VuaXR9IHVwZGF0ZVVuaXQ9e3VwZGF0ZVVuaXR9Lz5cclxuXHJcbiAgICAgICAgICAgIDxTaXplckl0ZW1zIHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH0gdW5pdD17dW5pdH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuXG5jb25zdCBzaXplckRhdGEgPSBbXG4gICAgeydpZCc6ICdtYW4nLCAnbmFtZSc6ICdNYW4nLCAnaGVpZ2h0JzogMS43LCAnY2F0ZWdvcnknOiBudWxsLCAnZGVmYXVsdCc6IHRydWV9LFxuICAgIHsnaWQnOiAnZ2lyYWZmZScsICduYW1lJzogJ0dpcmFmZmUnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDZ9LFxuICAgIHsnaWQnOiAnZ3JpenpseScsICduYW1lJzogJ0dyaXp6bHkgQmVhcicsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMi40fSxcbiAgICB7J2lkJzogJ2dvZHppbGxhJywgJ25hbWUnOiAnR29kemlsbGEnLCAnY2F0ZWdvcnknOiAnZmFudGFzeScsICdoZWlnaHQnOiAxMDh9LFxuICAgIHsnaWQnOiAnZ3VuZGFtJywgJ25hbWUnOiAnR3VuZGFtJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogMTh9LFxuICAgIHsnaWQnOiAnZXZhbmdlbGlvbicsICduYW1lJzogJ0V2YS0wMScsICdjYXRlZ29yeSc6ICdmYW50YXN5JywgJ2hlaWdodCc6IDQyLjZ9LFxuICAgIHsnaWQnOiAnY2F0JywgJ25hbWUnOiAnQ2F0JywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAwLjI4fSxcbiAgICB7J2lkJzogJ2VpZmZlbCcsICduYW1lJzogJ0VpZmZlbCBUb3dlcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogMzI0fSxcbiAgICB7J2lkJzogJ2VtcGlyZScsICduYW1lJzogJ0VtcGlyZSBTdGF0ZScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNDQzfSxcbiAgICB7J2lkJzogJ2VsZXBoYW50JywgJ25hbWUnOiAnRWxlcGhhbnQnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDMuNH0sXG4gICAgeydpZCc6ICdvc3RyaWNoJywgJ25hbWUnOiAnT3N0cmljaCcsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMi42fSxcbiAgICB7J2lkJzogJ3ZvbHRyb24nLCAnbmFtZSc6ICdWb2x0cm9uJywgJ2NhdGVnb3J5JzogJ2ZhbnRhc3knLCAnaGVpZ2h0JzogMTAwfSxcbiAgICB7J2lkJzogJ2F0YXQnLCAnbmFtZSc6ICdBVC1BVCcsICdjYXRlZ29yeSc6ICdmYW50YXN5JywgJ2hlaWdodCc6IDIyLjV9LFxuICAgIHsnaWQnOiAnb3B0aW11cycsICduYW1lJzogJ09wdGltdXMgUHJpbWUnLCAnY2F0ZWdvcnknOiAnZmFudGFzeScsICdoZWlnaHQnOiA2Ljd9LFxuICAgIHsnaWQnOiAndGFpcGVpJywgJ25hbWUnOiAnVGFpcGVpIDEwMScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNTA4fSxcbiAgICB7J2lkJzogJ3dpbGxpcycsICduYW1lJzogJ1dpbGxpcyBUb3dlcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNTIwfSxcbiAgICB7J2lkJzogJ2J1cmonLCAnbmFtZSc6ICdCdXJqIEtoYWxpZmEnLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDgyOH0sXG4gICAgeydpZCc6ICdsaWJlcnR5JywgJ25hbWUnOiAnU3RhdHVlIE9mIExpYmVydHknLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDkzfSxcbl07XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8R3JhcGggc2l6ZXJEYXRhPXtzaXplckRhdGF9Lz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1JlYWN0Jylcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplckl0ZW0gPSAoeyBzaXplckxpc3QsIGl0ZW0sIGl0ZW1TaXplLCB1cGRhdGVTaXplckxpc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbURlZmF1bHQgPSB0eXBlb2YgaXRlbS5kZWZhdWx0ICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmRlZmF1bHQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gc2l6ZXJMaXN0Lm1hcCgoeyAuLi5pdGVtIH0pID0+IGl0ZW1JZCk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VJdGVtID0gKGl0ZW1EZWZhdWx0LCBpdGVtSWQpID0+IHtcclxuICAgICAgICBpZiAoaXRlbURlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IHJlZHVjZWRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzLyR7aXRlbUlkfS5zdmdgfSBjbGFzc05hbWU9e2BTaXplckNvbnRhaW5lci1pdGVtIFNpemVyQ29udGFpbmVyLWl0ZW0tLSR7aXRlbUlkfWB9IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IGl0ZW1TaXplICsgJyUnLCBcclxuICAgICAgICAgICAgfX0vPlxyXG5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvYnV0dG9uLXJlbW92ZS5zdmdgfSBjbGFzc05hbWU9e2BCdXR0b24tLWNsb3NlICR7aXRlbURlZmF1bHQgPyAnaXMtZGVmYXVsdCcgOiAnJ31gfSBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VJdGVtKGl0ZW1EZWZhdWx0LCBpdGVtSWQpfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNpemVySXRlbSBmcm9tICcuL3NpemVySXRlbSc7XG5cbmNvbnN0IFNpemVySXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdCwgdW5pdCB9KSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0c0FycmF5ID0gc2l6ZXJMaXN0Lm1hcCgoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0KTtcbiAgICBjb25zdCB0YWxsZXN0SGVpZ2h0ID0gTWF0aC5tYXgoLi4uaGVpZ2h0c0FycmF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXJXcmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyR3JvdW5kXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7c2l6ZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbURlZmF1bHQgPSBpdGVtLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVNpemUgPSAoaXRlbUhlaWdodCAvIHRhbGxlc3RIZWlnaHQpICogMTAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0Q29udmVydGVkID0gdW5pdCA9PSAnbScgPyBpdGVtSGVpZ2h0IDogTWF0aC5yb3VuZChpdGVtSGVpZ2h0ICogMy4yODEgKiAxMCkgLyAxMDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1JZH0gY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXItY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1pbmZvTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1pbmZvVW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSGVpZ2h0Q29udmVydGVkfSB7dW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplckl0ZW0gaXRlbT17aXRlbX0gaXRlbVNpemU9e2l0ZW1TaXplfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJOYXYgPSAoeyBzaXplckRhdGEsIHNpemVyTGlzdCwgdXBkYXRlU2l6ZXJMaXN0LCB1bml0LCB1cGRhdGVVbml0IH0pID0+IHtcclxuICAgIGNvbnN0IHNpemVyTGlzdElkcyA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtLmlkKTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gc2l6ZXJEYXRhXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSlcclxuICAgICAgICAuZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPyBhcnJheS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCA6IGZhbHNlKVxyXG4gICAgICAgIC5zb3J0KCk7XHJcblxyXG4gICAgY29uc3QgW25hdkNhdGVnb3J5LCB1cGRhdGVOYXZDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yeUFycmF5WzBdKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZU5hdkNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVbml0ID0gKHVuaXQpID0+IHtcclxuICAgICAgICB1cGRhdGVVbml0KHVuaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUl0ZW0gPSAoaXRlbSwgaXNJdGVtVXNlZCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0l0ZW1Vc2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmouaWQgIT09IGl0ZW1JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemVyTGlzdChzaXplckxpc3QgPT4gcmVkdWNlZExpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemVyTGlzdChzaXplckxpc3QgPT4gWy4uLnNpemVyTGlzdCwgaXRlbV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJTaXplck5hdkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyTmF2VW5pdHNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNoYW5nZVVuaXQoJ2Z0Jyl9IGNsYXNzTmFtZT17YFNpemVyTmF2VW5pdHMtdW5pdCAke3VuaXQgPT0gJ2Z0JyA/ICdTaXplck5hdlVuaXRzLXVuaXQtLXNlbGVjdGVkJyA6ICcnfWB9PkZlZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVbml0KCdtJyl9IGNsYXNzTmFtZT17YFNpemVyTmF2VW5pdHMtdW5pdCAke3VuaXQgPT0gJ20nID8gJ1NpemVyTmF2VW5pdHMtdW5pdC0tc2VsZWN0ZWQnIDogJyd9YH0+TWV0ZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlNpemVyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9e2BTaXplck5hdi1jYXRlZ29yeSAke25hdkNhdGVnb3J5ID09IGNhdGVnb3J5ID8gJ1NpemVyTmF2LWNhdGVnb3J5LS1zZWxlY3RlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJTaXplck5hdi10aXRsZVwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNhdGVnb3J5KGNhdGVnb3J5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJTaXplck5hdi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpemVyRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1DYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSXRlbVVzZWQgPSBzaXplckxpc3RJZHMuaW5jbHVkZXMoaXRlbUlkKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IGl0ZW1DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT17YFNpemVyTmF2LWxpc3RJdGVtICR7aXNJdGVtVXNlZCA/ICdTaXplck5hdi1saXN0SXRlbS0tZGlzYWJsZWQnIDogJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlSXRlbShpdGVtLCBpc0l0ZW1Vc2VkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=