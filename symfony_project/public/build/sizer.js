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
  'category': 'monster',
  'height': 122
}, {
  'id': 'gundam',
  'name': 'Gundam',
  'category': 'monster',
  'height': 18
}, {
  'id': 'evangelion',
  'name': 'Eva-01',
  'category': 'monster',
  'height': 42.6
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

  var clickHandlerClose = function clickHandlerClose(itemDefault, itemId) {
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
    className: "icon icon-".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "images/button-remove.svg",
    className: "Col-button Col-button--close ".concat(itemDefault ? 'is-default' : ''),
    onClick: function onClick() {
      return clickHandlerClose(itemDefault, itemId);
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
    className: "container2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "container"
  }, sizerList.map(function (item, index) {
    var itemDefault = item["default"];
    var itemHeight = item.height;
    var itemId = item.id;
    var itemName = item.name;
    var itemSize = itemHeight / tallestHeight * 100;
    var itemHeightConverted = unit == 'm' ? itemHeight : Math.round(itemHeight * 3.281 * 10) / 10;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      key: itemId,
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "liner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "infoBox"
    }, itemName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), itemHeightConverted, " ", unit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(categoryArray[0]),
      _useState2 = _slicedToArray(_useState, 2),
      navCategory = _useState2[0],
      updateNavCategory = _useState2[1];

  var changeCategory = function changeCategory(category) {
    updateNavCategory(category);
  };

  var changeUnit = function changeUnit(unit) {
    updateUnit(unit);
  };

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
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: "units"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
    onClick: function onClick() {
      return changeUnit('ft');
    },
    className: "unit ".concat(unit == 'ft' ? 'unit--selected' : '')
  }, "Feet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
    onClick: function onClick() {
      return changeUnit('m');
    },
    className: "unit ".concat(unit == 'm' ? 'unit--selected' : '')
  }, "Meters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("nav", {
    className: "picker"
  }, categoryArray.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
      key: category,
      className: "picker-category ".concat(navCategory == category ? 'picker-category--selected' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h5", {
      className: "picker-title",
      onClick: function onClick() {
        return changeCategory(category);
      }
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
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerNav);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwidW5pdCIsInVwZGF0ZVVuaXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTaXplckl0ZW0iLCJpdGVtU2l6ZSIsIml0ZW1EZWZhdWx0IiwiaXRlbUlkIiwiaWQiLCJjdXJyZW50SXRlbSIsIm1hcCIsImNsaWNrSGFuZGxlckNsb3NlIiwicmVkdWNlZExpc3QiLCJmaWx0ZXIiLCJvYmoiLCJTaXplckl0ZW1zIiwiaGVpZ2h0c0FycmF5IiwiaGVpZ2h0IiwidGFsbGVzdEhlaWdodCIsIk1hdGgiLCJtYXgiLCJpbmRleCIsIml0ZW1IZWlnaHQiLCJpdGVtTmFtZSIsIm5hbWUiLCJpdGVtSGVpZ2h0Q29udmVydGVkIiwicm91bmQiLCJTaXplck5hdiIsInNpemVyTGlzdElkcyIsImNhdGVnb3J5QXJyYXkiLCJjYXRlZ29yeSIsImFycmF5IiwiaW5kZXhPZiIsIm5hdkNhdGVnb3J5IiwidXBkYXRlTmF2Q2F0ZWdvcnkiLCJjaGFuZ2VDYXRlZ29yeSIsImNoYW5nZVVuaXQiLCJjbGlja0hhbmRsZXIiLCJpc0l0ZW1Vc2VkIiwiaXRlbUNhdGVnb3J5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFkLENBQWtCLFVBQUNvQixRQUFELEVBQWM7QUFDN0Isd0JBQ0k7QUFBSyxTQUFHLEVBQUVBLFFBQVY7QUFBb0IsZUFBUyw0QkFBcUJHLFdBQVcsSUFBSUgsUUFBZixHQUEwQiwyQkFBMUIsR0FBd0QsRUFBN0U7QUFBN0Isb0JBQ0k7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUE2QixhQUFPLEVBQUU7QUFBQSxlQUFNSyxjQUFjLENBQUNMLFFBQUQsQ0FBcEI7QUFBQTtBQUF0QyxPQUNLQSxRQURMLENBREosZUFJSTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQ0t2QyxTQUFTLENBQUNtQixHQUFWLENBQWMsVUFBQ2hCLElBQUQsRUFBVTtBQUNyQixVQUFNNkMsWUFBWSxHQUFHN0MsSUFBSSxDQUFDb0MsUUFBMUI7QUFDQSxVQUFNdkIsTUFBTSxHQUFHYixJQUFJLENBQUNjLEVBQXBCO0FBQ0EsVUFBTWUsUUFBUSxHQUFHN0IsSUFBSSxDQUFDOEIsSUFBdEI7QUFFQSxVQUFNYyxVQUFVLEdBQUdWLFlBQVksQ0FBQ1ksUUFBYixDQUFzQmpDLE1BQXRCLENBQW5COztBQUVBLFVBQUl1QixRQUFRLEtBQUtTLFlBQWpCLEVBQStCO0FBQzNCLDRCQUNJO0FBQUksYUFBRyxFQUFFaEMsTUFBVDtBQUFpQixtQkFBUyw0QkFBcUIrQixVQUFVLEdBQUcsMkJBQUgsR0FBaUMsRUFBaEUsQ0FBMUI7QUFDQSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFlBQVksQ0FBQzNDLElBQUQsRUFBTzRDLFVBQVAsQ0FBbEI7QUFBQTtBQURULFdBRUtmLFFBRkwsQ0FESjtBQU1IO0FBQ0osS0FmQSxDQURMLENBSkosQ0FESjtBQXlCSCxHQTFCQSxDQURMLENBTkosQ0FESjtBQXNDSCxDQXBFRDs7QUFzRWVJLHVFQUFmLEUiLCJmaWxlIjoic2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2l6ZXJOYXYgZnJvbSAnLi9zaXplck5hdic7XHJcbmltcG9ydCBTaXplckl0ZW1zIGZyb20gJy4vc2l6ZXJJdGVtcyc7XHJcblxyXG5jb25zdCBHcmFwaCA9ICh7IHNpemVyRGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0SXRlbSA9IHNpemVyRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmRlZmF1bHQpO1xyXG5cclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZGVmYXVsdEl0ZW1dKTtcclxuICAgIGNvbnN0IFt1bml0LCB1cGRhdGVVbml0XSA9IHVzZVN0YXRlKCdtJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l6ZXJOYXYgc2l6ZXJEYXRhPXtzaXplckRhdGF9IHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH1cclxuICAgICAgICAgICAgdW5pdD17dW5pdH0gdXBkYXRlVW5pdD17dXBkYXRlVW5pdH0vPlxyXG5cclxuICAgICAgICAgICAgPFNpemVySXRlbXMgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fSB1bml0PXt1bml0fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5cbmNvbnN0IHNpemVyRGF0YSA9IFtcbiAgICB7J2lkJzogJ21hbicsICduYW1lJzogJ01hbicsICdoZWlnaHQnOiAxLjcsICdjYXRlZ29yeSc6IG51bGwsICdkZWZhdWx0JzogdHJ1ZX0sXG4gICAgeydpZCc6ICdnaXJhZmZlJywgJ25hbWUnOiAnR2lyYWZmZScsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogNn0sXG4gICAgeydpZCc6ICdncml6emx5JywgJ25hbWUnOiAnR3JpenpseSBCZWFyJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAyLjR9LFxuICAgIHsnaWQnOiAnZ29kemlsbGEnLCAnbmFtZSc6ICdHb2R6aWxsYScsICdjYXRlZ29yeSc6ICdtb25zdGVyJywgJ2hlaWdodCc6IDEyMn0sXG4gICAgeydpZCc6ICdndW5kYW0nLCAnbmFtZSc6ICdHdW5kYW0nLCAnY2F0ZWdvcnknOiAnbW9uc3RlcicsICdoZWlnaHQnOiAxOH0sXG4gICAgeydpZCc6ICdldmFuZ2VsaW9uJywgJ25hbWUnOiAnRXZhLTAxJywgJ2NhdGVnb3J5JzogJ21vbnN0ZXInLCAnaGVpZ2h0JzogNDIuNn0sXG4gICAgeydpZCc6ICdjYXQnLCAnbmFtZSc6ICdDYXQnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDAuMjZ9LFxuICAgIHsnaWQnOiAncGFyaXMnLCAnbmFtZSc6ICdFaWZmZWwgVG93ZXInLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDMyNH0sXG4gICAgeydpZCc6ICdlbXBpcmUnLCAnbmFtZSc6ICdFbXBpcmUgU3RhdGUnLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDQ0M30sXG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdyYXBoIHNpemVyRGF0YT17c2l6ZXJEYXRhfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWFjdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJJdGVtID0gKHsgc2l6ZXJMaXN0LCBpdGVtLCBpdGVtU2l6ZSwgdXBkYXRlU2l6ZXJMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gdHlwZW9mIGl0ZW0uZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5kZWZhdWx0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtSWQpO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlckNsb3NlID0gKGl0ZW1EZWZhdWx0LCBpdGVtSWQpID0+IHtcclxuICAgICAgICBpZiAoaXRlbURlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IHJlZHVjZWRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzLyR7aXRlbUlkfS5zdmdgfSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpdGVtSWR9YH0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScsIFxyXG4gICAgICAgICAgICB9fS8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9idXR0b24tcmVtb3ZlLnN2Z2B9IGNsYXNzTmFtZT17YENvbC1idXR0b24gQ29sLWJ1dHRvbi0tY2xvc2UgJHtpdGVtRGVmYXVsdCA/ICdpcy1kZWZhdWx0JyA6ICcnfWB9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXJDbG9zZShpdGVtRGVmYXVsdCwgaXRlbUlkKX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaXplckl0ZW0gZnJvbSAnLi9zaXplckl0ZW0nO1xuXG5jb25zdCBTaXplckl0ZW1zID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QsIHVuaXQgfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XG4gICAgY29uc3QgdGFsbGVzdEhlaWdodCA9IE1hdGgubWF4KC4uLmhlaWdodHNBcnJheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gaXRlbS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1TaXplID0gKGl0ZW1IZWlnaHQgLyB0YWxsZXN0SGVpZ2h0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUhlaWdodENvbnZlcnRlZCA9IHVuaXQgPT0gJ20nID8gaXRlbUhlaWdodCA6IE1hdGgucm91bmQoaXRlbUhlaWdodCAqIDMuMjgxICogMTApIC8gMTA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvQm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbU5hbWV9PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSGVpZ2h0Q29udmVydGVkfSB7dW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2l6ZXJJdGVtIGl0ZW09e2l0ZW19IGl0ZW1TaXplPXtpdGVtU2l6ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNpemVyTmF2ID0gKHsgc2l6ZXJEYXRhLCBzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdCwgdW5pdCwgdXBkYXRlVW5pdCB9KSA9PiB7XHJcbiAgICBjb25zdCBzaXplckxpc3RJZHMgPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbS5pZCk7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IHNpemVyRGF0YVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpXHJcbiAgICAgICAgLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBpdGVtID8gYXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXggOiBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW25hdkNhdGVnb3J5LCB1cGRhdGVOYXZDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yeUFycmF5WzBdKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZU5hdkNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVbml0ID0gKHVuaXQpID0+IHtcclxuICAgICAgICB1cGRhdGVVbml0KHVuaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChpdGVtLCBpc0l0ZW1Vc2VkKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSXRlbVVzZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuICAgICAgICAgICAgY29uc3QgcmVkdWNlZExpc3QgPSBzaXplckxpc3QuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiBbLi4uc2l6ZXJMaXN0LCBpdGVtXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bml0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gY2hhbmdlVW5pdCgnZnQnKX0gY2xhc3NOYW1lPXtgdW5pdCAke3VuaXQgPT0gJ2Z0JyA/ICd1bml0LS1zZWxlY3RlZCcgOiAnJ31gfT5GZWV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gY2hhbmdlVW5pdCgnbScpfSBjbGFzc05hbWU9e2B1bml0ICR7dW5pdCA9PSAnbScgPyAndW5pdC0tc2VsZWN0ZWQnIDogJyd9YH0+TWV0ZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5QXJyYXkubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0gY2xhc3NOYW1lPXtgcGlja2VyLWNhdGVnb3J5ICR7bmF2Q2F0ZWdvcnkgPT0gY2F0ZWdvcnkgPyAncGlja2VyLWNhdGVnb3J5LS1zZWxlY3RlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwaWNrZXItdGl0bGVcIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDYXRlZ29yeShjYXRlZ29yeSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGlja2VyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l6ZXJEYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0ubmFtZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1Vc2VkID0gc2l6ZXJMaXN0SWRzLmluY2x1ZGVzKGl0ZW1JZCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09PSBpdGVtQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUlkfSBjbGFzc05hbWU9e2BwaWNrZXItbGlzdEl0ZW0gJHtpc0l0ZW1Vc2VkID8gJ3BpY2tlci1saXN0SXRlbS0tZGlzYWJsZWQnIDogJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKGl0ZW0sIGlzSXRlbVVzZWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplck5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==