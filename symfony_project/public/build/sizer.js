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
    updateSizerList: updateSizerList
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

  var currentItem = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return itemId;
  });
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
      updateSizerList = _ref.updateSizerList;
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      key: itemId,
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "liner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "infoBox"
    }, itemName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), itemHeight, "m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwiaW5mb0JveElkIiwidXBkYXRlSW5mb0JveElkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2l6ZXJJdGVtIiwiaXRlbVNpemUiLCJpdGVtRGVmYXVsdCIsIml0ZW1JZCIsImlkIiwiY2xpY2tIYW5kbGVyQ2xvc2UiLCJyZWR1Y2VkTGlzdCIsImZpbHRlciIsIm9iaiIsImN1cnJlbnRJdGVtIiwibWFwIiwiU2l6ZXJJdGVtcyIsImhlaWdodHNBcnJheSIsImhlaWdodCIsInRhbGxlc3RIZWlnaHQiLCJNYXRoIiwibWF4IiwiaW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXRlbU5hbWUiLCJuYW1lIiwiU2l6ZXJOYXYiLCJzaXplckxpc3RJZHMiLCJjYXRlZ29yeUFycmF5IiwiY2F0ZWdvcnkiLCJhcnJheSIsImluZGV4T2YiLCJjbGlja0hhbmRsZXIiLCJpc0l0ZW1Vc2VkIiwiaXRlbUNhdGVnb3J5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdC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QUFTLENBQUN1QixHQUFWLENBQWMsVUFBQ3BCLElBQUQsRUFBVTtBQUNyQixVQUFNdUMsWUFBWSxHQUFHdkMsSUFBSSxDQUFDa0MsUUFBMUI7QUFDQSxVQUFNckIsTUFBTSxHQUFHYixJQUFJLENBQUNjLEVBQXBCO0FBQ0EsVUFBTWUsUUFBUSxHQUFHN0IsSUFBSSxDQUFDOEIsSUFBdEI7QUFFQSxVQUFNUSxVQUFVLEdBQUdOLFlBQVksQ0FBQ1EsUUFBYixDQUFzQjNCLE1BQXRCLENBQW5COztBQUVBLFVBQUlxQixRQUFRLEtBQUtLLFlBQWpCLEVBQStCO0FBQzNCLDRCQUNJO0FBQUksYUFBRyxFQUFFMUIsTUFBVDtBQUFpQixtQkFBUyw0QkFBcUJ5QixVQUFVLEdBQUcsMkJBQUgsR0FBaUMsRUFBaEUsQ0FBMUI7QUFDQSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFlBQVksQ0FBQ3JDLElBQUQsRUFBT3NDLFVBQVAsQ0FBbEI7QUFBQTtBQURULFdBRUtULFFBRkwsQ0FESjtBQU1IO0FBQ0osS0FmQSxDQURMLENBSkosQ0FESjtBQXlCSCxHQTFCQSxDQURMLENBREo7QUErQkgsQ0FwREQ7O0FBc0RlRSx1RUFBZixFIiwiZmlsZSI6InNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNpemVyTmF2IGZyb20gJy4vc2l6ZXJOYXYnO1xyXG5pbXBvcnQgU2l6ZXJJdGVtcyBmcm9tICcuL3NpemVySXRlbXMnO1xyXG5cclxuY29uc3QgR3JhcGggPSAoeyBzaXplckRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEl0ZW0gPSBzaXplckRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5kZWZhdWx0KTtcclxuXHJcbiAgICBjb25zdCBbc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3RdID0gdXNlU3RhdGUoW2RlZmF1bHRJdGVtXSk7XHJcbiAgICBjb25zdCBbaW5mb0JveElkLCB1cGRhdGVJbmZvQm94SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l6ZXJOYXYgc2l6ZXJEYXRhPXtzaXplckRhdGF9IHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH1cclxuICAgICAgICAgICAgdXBkYXRlSW5mb0JveElkPXt1cGRhdGVJbmZvQm94SWR9Lz5cclxuICAgICAgICAgICAgPFNpemVySXRlbXMgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5cbmNvbnN0IHNpemVyRGF0YSA9IFtcbiAgICB7J2lkJzogJ21hbicsICduYW1lJzogJ01hbicsICdoZWlnaHQnOiAxLjcsICdjYXRlZ29yeSc6IG51bGwsICdkZWZhdWx0JzogdHJ1ZX0sXG4gICAgeydpZCc6ICdnaXJhZmZlJywgJ25hbWUnOiAnR2lyYWZmZScsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogNn0sXG4gICAgeydpZCc6ICdncml6emx5JywgJ25hbWUnOiAnR3JpenpseSBCZWFyJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAyLjR9LFxuICAgIHsnaWQnOiAnZ29kemlsbGEnLCAnbmFtZSc6ICdHb2R6aWxsYScsICdjYXRlZ29yeSc6ICdtb25zdGVyJywgJ2hlaWdodCc6IDEyMn0sXG4gICAgeydpZCc6ICdjYXQnLCAnbmFtZSc6ICdDYXQnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDAuMjZ9LFxuICAgIHsnaWQnOiAncGFyaXMnLCAnbmFtZSc6ICdFaWZmZWwgVG93ZXInLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDMyNH0sXG4gICAgeydpZCc6ICdlbXBpcmUnLCAnbmFtZSc6ICdFbXBpcmUgU3RhdGUnLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDQ0M30sXG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdyYXBoIHNpemVyRGF0YT17c2l6ZXJEYXRhfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWFjdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJJdGVtID0gKHsgc2l6ZXJMaXN0LCBpdGVtLCBpdGVtU2l6ZSwgdXBkYXRlU2l6ZXJMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gdHlwZW9mIGl0ZW0uZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5kZWZhdWx0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuXHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXJDbG9zZSA9IChpdGVtRGVmYXVsdCwgaXRlbUlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW1EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbUlkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzLyR7aXRlbUlkfS5zdmdgfSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpdGVtSWR9YH0gc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScsIFxyXG4gICAgICAgICAgICB9fS8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9idXR0b24tcmVtb3ZlLnN2Z2B9IGNsYXNzTmFtZT17YENvbC1idXR0b24gQ29sLWJ1dHRvbi0tY2xvc2UgJHtpdGVtRGVmYXVsdCA/ICdpcy1kZWZhdWx0JyA6ICcnfWB9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXJDbG9zZShpdGVtRGVmYXVsdCwgaXRlbUlkKX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaXplckl0ZW0gZnJvbSAnLi9zaXplckl0ZW0nO1xuXG5jb25zdCBTaXplckl0ZW1zID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QgfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XG4gICAgY29uc3QgdGFsbGVzdEhlaWdodCA9IE1hdGgubWF4KC4uLmhlaWdodHNBcnJheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gaXRlbS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1TaXplID0gKGl0ZW1IZWlnaHQgLyB0YWxsZXN0SGVpZ2h0KSAqIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1JZH0gY2xhc3NOYW1lPVwiY29sXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUhlaWdodH1tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVySXRlbSBpdGVtPXtpdGVtfSBpdGVtU2l6ZT17aXRlbVNpemV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVTaXplckxpc3Q9e3VwZGF0ZVNpemVyTGlzdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVySXRlbXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplck5hdiA9ICh7IHNpemVyRGF0YSwgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QsIHVwZGF0ZUluZm9Cb3hJZCB9KSA9PiB7XHJcbiAgICBjb25zdCBzaXplckxpc3RJZHMgPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbS5pZCk7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IHNpemVyRGF0YVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpXHJcbiAgICAgICAgLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBpdGVtID8gYXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXggOiBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGl0ZW0sIGlzSXRlbVVzZWQpID0+IHtcclxuICAgICAgICBpZiAoaXNJdGVtVXNlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICBjb25zdCByZWR1Y2VkTGlzdCA9IHNpemVyTGlzdC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkICE9PSBpdGVtSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IHJlZHVjZWRMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGVTaXplckxpc3Qoc2l6ZXJMaXN0ID0+IFsuLi5zaXplckxpc3QsIGl0ZW1dKTtcclxuICAgICAgICAgICAgdXBkYXRlSW5mb0JveElkKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicGlja2VyXCI+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeUFycmF5Lm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9XCJwaWNrZXItY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBpY2tlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGlja2VyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXplckRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0l0ZW1Vc2VkID0gc2l6ZXJMaXN0SWRzLmluY2x1ZGVzKGl0ZW1JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gaXRlbUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT17YHBpY2tlci1saXN0SXRlbSAke2lzSXRlbVVzZWQgPyAncGlja2VyLWxpc3RJdGVtLS1kaXNhYmxlZCcgOiAnJ31gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihpdGVtLCBpc0l0ZW1Vc2VkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=