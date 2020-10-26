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
  'name': 'Human',
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
  'category': 'creature',
  'height': 108
}, {
  'id': 'gundam',
  'name': 'Gundam',
  'category': 'mech',
  'height': 18
}, {
  'id': 'evangelion',
  'name': 'Eva-01',
  'category': 'mech',
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
  'category': 'mech',
  'height': 100
}, {
  'id': 'atat',
  'name': 'AT-AT',
  'category': 'mech',
  'height': 22
}, {
  'id': 'optimus',
  'name': 'Optimus Prime',
  'category': 'mech',
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
  'height': 526
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
  'category': 'creature',
  'height': 31
}, {
  'id': 'stay-puft',
  'name': 'Stay Puft Marshmallow',
  'category': 'creature',
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
}, {
  'id': 'barad',
  'name': 'Barad-dur',
  'category': 'architecture',
  'height': 1400
}, {
  'id': 'one-world',
  'name': 'One World Trade Center',
  'category': 'architecture',
  'height': 546
}, {
  'id': 'notre-dame',
  'name': 'Notre Dame de Paris',
  'category': 'architecture',
  'height': 69
}, {
  'id': 'big-ben',
  'name': 'Big Ben',
  'category': 'architecture',
  'height': 96
}, {
  'id': 'cloverfield',
  'name': 'Cloverfield',
  'category': 'creature',
  'height': 76
}, {
  'id': 'gipsy',
  'name': 'Gipsy Danger',
  'category': 'mech',
  'height': 79
}, {
  'id': 'rex',
  'name': 'Metal Gear Rex',
  'category': 'mech',
  'height': 13
}, {
  'id': 'abrams',
  'name': 'M1 Abrams',
  'category': 'mech',
  'height': 2.5
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
    src: "images/items/".concat(itemId, ".svg"),
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
    var itemSizeInFeet = itemHeight * 3.281;
    var itemHeightConverted = unit == 'm' ? itemHeight : itemSizeInFeet < 10 ? Math.round(itemSizeInFeet * 10) / 10 : Math.round(itemSizeInFeet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyTmF2LmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwidW5pdCIsInVwZGF0ZVVuaXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTaXplckl0ZW0iLCJpdGVtU2l6ZSIsIml0ZW1EZWZhdWx0IiwiaXRlbUlkIiwiaWQiLCJjdXJyZW50SXRlbSIsIm1hcCIsImNsb3NlSXRlbSIsInJlZHVjZWRMaXN0IiwiZmlsdGVyIiwib2JqIiwiU2l6ZXJJdGVtcyIsImhlaWdodHNBcnJheSIsImhlaWdodCIsInRhbGxlc3RIZWlnaHQiLCJNYXRoIiwibWF4IiwiaW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXRlbU5hbWUiLCJuYW1lIiwiaXRlbVNpemVJbkZlZXQiLCJpdGVtSGVpZ2h0Q29udmVydGVkIiwicm91bmQiLCJTaXplck5hdiIsInNpemVyTGlzdElkcyIsImNhdGVnb3J5QXJyYXkiLCJjYXRlZ29yeSIsImFycmF5IiwiaW5kZXhPZiIsInNvcnQiLCJuYXZDYXRlZ29yeSIsInVwZGF0ZU5hdkNhdGVnb3J5IiwiY2hhbmdlQ2F0ZWdvcnkiLCJjaGFuZ2VVbml0IiwidG9nZ2xlSXRlbSIsImlzSXRlbVVzZWQiLCJhIiwiYiIsIml0ZW1DYXRlZ29yeSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TzhDLFVBQVAsQ0FBaEI7QUFBQTtBQURULFdBRUtqQixRQUZMLENBREo7QUFNSDtBQUNKLEtBakJBLENBREwsQ0FKSixDQURKO0FBMkJILEdBNUJBLENBREwsQ0FOSixDQURKO0FBd0NILENBdkVEOztBQXlFZUssdUVBQWYsRSIsImZpbGUiOiJzaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTaXplck5hdiBmcm9tICcuL3NpemVyTmF2JztcclxuaW1wb3J0IFNpemVySXRlbXMgZnJvbSAnLi9zaXplckl0ZW1zJztcclxuXHJcbmNvbnN0IEdyYXBoID0gKHsgc2l6ZXJEYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRJdGVtID0gc2l6ZXJEYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGVmYXVsdCk7XHJcblxyXG4gICAgY29uc3QgW3NpemVyTGlzdCwgdXBkYXRlU2l6ZXJMaXN0XSA9IHVzZVN0YXRlKFtkZWZhdWx0SXRlbV0pO1xyXG4gICAgY29uc3QgW3VuaXQsIHVwZGF0ZVVuaXRdID0gdXNlU3RhdGUoJ20nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTaXplck5hdiBzaXplckRhdGE9e3NpemVyRGF0YX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZVNpemVyTGlzdD17dXBkYXRlU2l6ZXJMaXN0fVxyXG4gICAgICAgICAgICB1bml0PXt1bml0fSB1cGRhdGVVbml0PXt1cGRhdGVVbml0fS8+XHJcblxyXG4gICAgICAgICAgICA8U2l6ZXJJdGVtcyBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9IHVuaXQ9e3VuaXR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcblxuY29uc3Qgc2l6ZXJEYXRhID0gW1xuICAgIHsnaWQnOiAnbWFuJywgJ25hbWUnOiAnSHVtYW4nLCAnaGVpZ2h0JzogMS43LCAnY2F0ZWdvcnknOiBudWxsLCAnZGVmYXVsdCc6IHRydWV9LFxuICAgIHsnaWQnOiAnZ2lyYWZmZScsICduYW1lJzogJ0dpcmFmZmUnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDZ9LFxuICAgIHsnaWQnOiAnZ3JpenpseScsICduYW1lJzogJ0dyaXp6bHkgQmVhcicsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMi40fSxcbiAgICB7J2lkJzogJ2dvZHppbGxhJywgJ25hbWUnOiAnR29kemlsbGEnLCAnY2F0ZWdvcnknOiAnY3JlYXR1cmUnLCAnaGVpZ2h0JzogMTA4fSxcbiAgICB7J2lkJzogJ2d1bmRhbScsICduYW1lJzogJ0d1bmRhbScsICdjYXRlZ29yeSc6ICdtZWNoJywgJ2hlaWdodCc6IDE4fSxcbiAgICB7J2lkJzogJ2V2YW5nZWxpb24nLCAnbmFtZSc6ICdFdmEtMDEnLCAnY2F0ZWdvcnknOiAnbWVjaCcsICdoZWlnaHQnOiA0Mn0sXG4gICAgeydpZCc6ICdjYXQnLCAnbmFtZSc6ICdDYXQnLCAnY2F0ZWdvcnknOiAnYW5pbWFsJywgJ2hlaWdodCc6IDAuMjh9LFxuICAgIHsnaWQnOiAnZWlmZmVsJywgJ25hbWUnOiAnRWlmZmVsIFRvd2VyJywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiAzMjR9LFxuICAgIHsnaWQnOiAnZW1waXJlJywgJ25hbWUnOiAnRW1waXJlIFN0YXRlJywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiA0NDN9LFxuICAgIHsnaWQnOiAnZWxlcGhhbnQnLCAnbmFtZSc6ICdFbGVwaGFudCcsICdjYXRlZ29yeSc6ICdhbmltYWwnLCAnaGVpZ2h0JzogMy40fSxcbiAgICB7J2lkJzogJ29zdHJpY2gnLCAnbmFtZSc6ICdPc3RyaWNoJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiAyLjZ9LFxuICAgIHsnaWQnOiAndm9sdHJvbicsICduYW1lJzogJ1ZvbHRyb24nLCAnY2F0ZWdvcnknOiAnbWVjaCcsICdoZWlnaHQnOiAxMDB9LFxuICAgIHsnaWQnOiAnYXRhdCcsICduYW1lJzogJ0FULUFUJywgJ2NhdGVnb3J5JzogJ21lY2gnLCAnaGVpZ2h0JzogMjJ9LFxuICAgIHsnaWQnOiAnb3B0aW11cycsICduYW1lJzogJ09wdGltdXMgUHJpbWUnLCAnY2F0ZWdvcnknOiAnbWVjaCcsICdoZWlnaHQnOiA2Ljd9LFxuICAgIHsnaWQnOiAndGFpcGVpJywgJ25hbWUnOiAnVGFpcGVpIDEwMScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNTA4fSxcbiAgICB7J2lkJzogJ3dpbGxpcycsICduYW1lJzogJ1dpbGxpcyBUb3dlcicsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNTI2fSxcbiAgICB7J2lkJzogJ2J1cmonLCAnbmFtZSc6ICdCdXJqIEtoYWxpZmEnLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDgyOH0sXG4gICAgeydpZCc6ICdsaWJlcnR5JywgJ25hbWUnOiAnU3RhdHVlIE9mIExpYmVydHknLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDkzfSxcbiAgICB7J2lkJzogJ3R5cmFubm9zYXVydXMnLCAnbmFtZSc6ICdUeXJhbm5vc2F1cnVzJywgJ2NhdGVnb3J5JzogJ2FuaW1hbCcsICdoZWlnaHQnOiA2fSxcbiAgICB7J2lkJzogJ2tvbmcnLCAnbmFtZSc6ICdLaW5nIEtvbmcnLCAnY2F0ZWdvcnknOiAnY3JlYXR1cmUnLCAnaGVpZ2h0JzogMzF9LFxuICAgIHsnaWQnOiAnc3RheS1wdWZ0JywgJ25hbWUnOiAnU3RheSBQdWZ0IE1hcnNobWFsbG93JywgJ2NhdGVnb3J5JzogJ2NyZWF0dXJlJywgJ2hlaWdodCc6IDM0fSxcbiAgICB7J2lkJzogJ3NwcmluZy10ZW1wbGUnLCAnbmFtZSc6ICdTcHJpbmcgVGVtcGxlIEJ1ZGRoYScsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogMjA4fSxcbiAgICB7J2lkJzogJ2NocmlzdCcsICduYW1lJzogJ0NocmlzdCBUaGUgUmVkZWVtZXInLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDMwfSxcbiAgICB7J2lkJzogJ2JhcmFkJywgJ25hbWUnOiAnQmFyYWQtZHVyJywgJ2NhdGVnb3J5JzogJ2FyY2hpdGVjdHVyZScsICdoZWlnaHQnOiAxNDAwfSxcbiAgICB7J2lkJzogJ29uZS13b3JsZCcsICduYW1lJzogJ09uZSBXb3JsZCBUcmFkZSBDZW50ZXInLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDU0Nn0sXG4gICAgeydpZCc6ICdub3RyZS1kYW1lJywgJ25hbWUnOiAnTm90cmUgRGFtZSBkZSBQYXJpcycsICdjYXRlZ29yeSc6ICdhcmNoaXRlY3R1cmUnLCAnaGVpZ2h0JzogNjl9LFxuICAgIHsnaWQnOiAnYmlnLWJlbicsICduYW1lJzogJ0JpZyBCZW4nLCAnY2F0ZWdvcnknOiAnYXJjaGl0ZWN0dXJlJywgJ2hlaWdodCc6IDk2fSxcbiAgICB7J2lkJzogJ2Nsb3ZlcmZpZWxkJywgJ25hbWUnOiAnQ2xvdmVyZmllbGQnLCAnY2F0ZWdvcnknOiAnY3JlYXR1cmUnLCAnaGVpZ2h0JzogNzZ9LFxuICAgIHsnaWQnOiAnZ2lwc3knLCAnbmFtZSc6ICdHaXBzeSBEYW5nZXInLCAnY2F0ZWdvcnknOiAnbWVjaCcsICdoZWlnaHQnOiA3OX0sXG4gICAgeydpZCc6ICdyZXgnLCAnbmFtZSc6ICdNZXRhbCBHZWFyIFJleCcsICdjYXRlZ29yeSc6ICdtZWNoJywgJ2hlaWdodCc6IDEzfSxcbiAgICB7J2lkJzogJ2FicmFtcycsICduYW1lJzogJ00xIEFicmFtcycsICdjYXRlZ29yeSc6ICdtZWNoJywgJ2hlaWdodCc6IDIuNX0sXG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdyYXBoIHNpemVyRGF0YT17c2l6ZXJEYXRhfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdSZWFjdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJJdGVtID0gKHsgc2l6ZXJMaXN0LCBpdGVtLCBpdGVtU2l6ZSwgdXBkYXRlU2l6ZXJMaXN0IH0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gdHlwZW9mIGl0ZW0uZGVmYXVsdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5kZWZhdWx0ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtSWQpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlSXRlbSA9IChpdGVtRGVmYXVsdCwgaXRlbUlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW1EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdXBkYXRlU2l6ZXJMaXN0KHNpemVyTGlzdCA9PiByZWR1Y2VkTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9pdGVtcy8ke2l0ZW1JZH0uc3ZnYH0gY2xhc3NOYW1lPXtgU2l6ZXJDb250YWluZXItaXRlbSBTaXplckNvbnRhaW5lci1pdGVtLS0ke2l0ZW1JZH1gfSBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiBpdGVtU2l6ZSArICclJywgXHJcbiAgICAgICAgICAgIH19Lz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzL2J1dHRvbi1yZW1vdmUuc3ZnYH0gY2xhc3NOYW1lPXtgQnV0dG9uLS1jbG9zZSAke2l0ZW1EZWZhdWx0ID8gJ2lzLWRlZmF1bHQnIDogJyd9YH0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlSXRlbShpdGVtRGVmYXVsdCwgaXRlbUlkKX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaXplckl0ZW0gZnJvbSAnLi9zaXplckl0ZW0nO1xuXG5jb25zdCBTaXplckl0ZW1zID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVTaXplckxpc3QsIHVuaXQgfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XG4gICAgY29uc3QgdGFsbGVzdEhlaWdodCA9IE1hdGgubWF4KC4uLmhlaWdodHNBcnJheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyQ29udGFpbmVyV3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckdyb3VuZFwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZWZhdWx0ID0gaXRlbS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1TaXplID0gKGl0ZW1IZWlnaHQgLyB0YWxsZXN0SGVpZ2h0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVNpemVJbkZlZXQgPSBpdGVtSGVpZ2h0ICogMy4yODE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWlnaHRDb252ZXJ0ZWQgPSB1bml0ID09ICdtJyA/IGl0ZW1IZWlnaHQgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TaXplSW5GZWV0IDwgMTAgPyBNYXRoLnJvdW5kKGl0ZW1TaXplSW5GZWV0ICogMTApIC8gMTAgOiBNYXRoLnJvdW5kKGl0ZW1TaXplSW5GZWV0KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1JZH0gY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXItY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2l6ZXJDb250YWluZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1pbmZvTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaXplckNvbnRhaW5lci1pbmZvVW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSGVpZ2h0Q29udmVydGVkfSB7dW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplckl0ZW0gaXRlbT17aXRlbX0gaXRlbVNpemU9e2l0ZW1TaXplfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplckxpc3Q9e3NpemVyTGlzdH0gdXBkYXRlU2l6ZXJMaXN0PXt1cGRhdGVTaXplckxpc3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJOYXYgPSAoeyBzaXplckRhdGEsIHNpemVyTGlzdCwgdXBkYXRlU2l6ZXJMaXN0LCB1bml0LCB1cGRhdGVVbml0IH0pID0+IHtcclxuICAgIGNvbnN0IHNpemVyTGlzdElkcyA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtLmlkKTtcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gc2l6ZXJEYXRhXHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSlcclxuICAgICAgICAuZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGl0ZW0gPyBhcnJheS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCA6IGZhbHNlKVxyXG4gICAgICAgIC5zb3J0KCk7XHJcblxyXG4gICAgY29uc3QgW25hdkNhdGVnb3J5LCB1cGRhdGVOYXZDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yeUFycmF5WzBdKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZU5hdkNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVbml0ID0gKHVuaXQpID0+IHtcclxuICAgICAgICB1cGRhdGVVbml0KHVuaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUl0ZW0gPSAoaXRlbSwgaXNJdGVtVXNlZCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0l0ZW1Vc2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmouaWQgIT09IGl0ZW1JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemVyTGlzdChzaXplckxpc3QgPT4gcmVkdWNlZExpc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemVyTGlzdChzaXplckxpc3QgPT4gWy4uLnNpemVyTGlzdCwgaXRlbV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJTaXplck5hdkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpemVyTmF2VW5pdHNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNoYW5nZVVuaXQoJ2Z0Jyl9IGNsYXNzTmFtZT17YFNpemVyTmF2VW5pdHMtdW5pdCAke3VuaXQgPT0gJ2Z0JyA/ICdTaXplck5hdlVuaXRzLXVuaXQtLXNlbGVjdGVkJyA6ICcnfWB9PkZlZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVbml0KCdtJyl9IGNsYXNzTmFtZT17YFNpemVyTmF2VW5pdHMtdW5pdCAke3VuaXQgPT0gJ20nID8gJ1NpemVyTmF2VW5pdHMtdW5pdC0tc2VsZWN0ZWQnIDogJyd9YH0+TWV0ZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlNpemVyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9e2BTaXplck5hdi1jYXRlZ29yeSAke25hdkNhdGVnb3J5ID09IGNhdGVnb3J5ID8gJ1NpemVyTmF2LWNhdGVnb3J5LS1zZWxlY3RlZCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJTaXplck5hdi10aXRsZVwiIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNhdGVnb3J5KGNhdGVnb3J5KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJTaXplck5hdi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpemVyRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1DYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSXRlbVVzZWQgPSBzaXplckxpc3RJZHMuaW5jbHVkZXMoaXRlbUlkKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IGl0ZW1DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtSWR9IGNsYXNzTmFtZT17YFNpemVyTmF2LWxpc3RJdGVtICR7aXNJdGVtVXNlZCA/ICdTaXplck5hdi1saXN0SXRlbS0tZGlzYWJsZWQnIDogJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlSXRlbShpdGVtLCBpc0l0ZW1Vc2VkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=