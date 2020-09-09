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
/* harmony import */ var _sizerPicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sizerPicker */ "./assets/js/sizerPicker.js");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerPicker__WEBPACK_IMPORTED_MODULE_15__["default"], {
    updateFunction: updateSizerList,
    sizerList: sizerList,
    sizerData: sizerData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItems__WEBPACK_IMPORTED_MODULE_16__["default"], {
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



var sizerData = [{
  'id': 'man',
  'name': 'Man',
  'height': 1.7,
  'default': true
}, {
  'id': 'paris',
  'name': 'Eiffel Tower',
  'height': 324
}, {
  'id': 'empire',
  'name': 'Empire State',
  'height': 443
}, {
  'id': 'cat',
  'name': 'Cat',
  'height': 0.26
}, {
  'id': 'godzilla',
  'name': 'Godzilla',
  'height': 122
}];
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graph__WEBPACK_IMPORTED_MODULE_2__["default"], {
  sizerData: sizerData
}), document.getElementById('root'));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SizerItem = function SizerItem(_ref) {
  var itemId = _ref.itemId,
      itemSize = _ref.itemSize,
      index = _ref.index,
      sizerList = _ref.sizerList,
      updateFunction = _ref.updateFunction;

  var clickHandler = function clickHandler(itemId) {
    var reducedList = sizerList.filter(function (obj) {
      return obj.id !== itemId;
    });
    updateFunction(function (sizerList) {
      return reducedList;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/".concat(itemId, ".svg"),
    className: "icon icon-".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  }), index != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "remove",
    onClick: function onClick() {
      return clickHandler(itemId);
    }
  }, "X") : '');
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




var ListItems = function ListItems(_ref) {
  var sizerList = _ref.sizerList,
      updateFunction = _ref.updateFunction;
  var heightsArray = sizerList.map(function (_ref2) {
    var height = _ref2.height;
    return height;
  });
  var tallestHeight = Math.max.apply(Math, _toConsumableArray(heightsArray));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, sizerList.map(function (item, index) {
    var itemId = item.id;
    var itemHeight = item.height;
    var itemSize = itemHeight / tallestHeight * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "colBig",
      key: itemId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      itemId: itemId,
      itemSize: itemSize,
      index: index,
      sizerList: sizerList,
      updateFunction: updateFunction
    })), itemSize != 100 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "line",
      style: {
        'top': 100 - itemSize + '%'
      }
    }) : '');
  }));
};

var SizerItems = function SizerItems(_ref3) {
  var sizerList = _ref3.sizerList,
      updateFunction = _ref3.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(ListItems, {
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
  var sizerListIds = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return item.id;
  });
  var isItemUsed = sizerListIds.includes(data.id);

  var clickHandler = function clickHandler(data) {
    updateFunction(function (sizerList) {
      return [].concat(_toConsumableArray(sizerList), [data]);
    });
  };

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
      sizerData = _ref3.sizerData,
      updateFunction = _ref3.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
    className: "picker"
  }, sizerData.map(function (item) {
    var itemId = item.id;
    var itemName = item.name;

    if (!item["default"]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Button, {
        key: itemId,
        text: itemName,
        sizerList: sizerList,
        updateFunction: updateFunction,
        data: item
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerPicker);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyUGlja2VyLmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2l6ZXJJdGVtIiwiaXRlbUlkIiwiaXRlbVNpemUiLCJpbmRleCIsInVwZGF0ZUZ1bmN0aW9uIiwiY2xpY2tIYW5kbGVyIiwicmVkdWNlZExpc3QiLCJmaWx0ZXIiLCJvYmoiLCJpZCIsIkxpc3RJdGVtcyIsImhlaWdodHNBcnJheSIsIm1hcCIsImhlaWdodCIsInRhbGxlc3RIZWlnaHQiLCJNYXRoIiwibWF4IiwiaXRlbUhlaWdodCIsIlNpemVySXRlbXMiLCJCdXR0b24iLCJ0ZXh0IiwiZGF0YSIsInNpemVyTGlzdElkcyIsImlzSXRlbVVzZWQiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsIlNpemVyUGlja2VyIiwiaXRlbU5hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM3QixNQUFNQyxXQUFXLEdBQUdELFNBQVMsQ0FBQ0UsSUFBVixDQUFlLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJ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ckJBLGNBQXFCO0FBQzlELHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDS2YsU0FBUyxDQUFDdUIsR0FBVixDQUFjLFVBQUNwQixJQUFELEVBQVU7QUFDckIsUUFBTVMsTUFBTSxHQUFHVCxJQUFJLENBQUNpQixFQUFwQjtBQUNBLFFBQU1rQixRQUFRLEdBQUduQyxJQUFJLENBQUNvQyxJQUF0Qjs7QUFFQSxRQUFJLENBQUNwQyxJQUFJLFdBQVQsRUFBbUI7QUFDZiwwQkFBTyw0REFBQyxNQUFEO0FBQVEsV0FBRyxFQUFFUyxNQUFiO0FBQXFCLFlBQUksRUFBRTBCLFFBQTNCO0FBQXFDLGlCQUFTLEVBQUVqQyxTQUFoRDtBQUEyRCxzQkFBYyxFQUFFVSxjQUEzRTtBQUEyRixZQUFJLEVBQUVaO0FBQWpHLFFBQVA7QUFDSDtBQUNKLEdBUEEsQ0FETCxDQURKO0FBWUgsQ0FiRDs7QUFlZWtDLDBFQUFmLEUiLCJmaWxlIjoic2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2l6ZXJQaWNrZXIgZnJvbSAnLi9zaXplclBpY2tlcic7XHJcbmltcG9ydCBTaXplckl0ZW1zIGZyb20gJy4vc2l6ZXJJdGVtcyc7XHJcblxyXG5jb25zdCBHcmFwaCA9ICh7IHNpemVyRGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0SXRlbSA9IHNpemVyRGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmRlZmF1bHQpO1xyXG5cclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZGVmYXVsdEl0ZW1dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTaXplclBpY2tlciB1cGRhdGVGdW5jdGlvbj17dXBkYXRlU2l6ZXJMaXN0fSBzaXplckxpc3Q9e3NpemVyTGlzdH0gc2l6ZXJEYXRhPXtzaXplckRhdGF9Lz5cclxuICAgICAgICAgICAgPFNpemVySXRlbXMgdXBkYXRlRnVuY3Rpb249e3VwZGF0ZVNpemVyTGlzdH0gc2l6ZXJMaXN0PXtzaXplckxpc3R9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcblxuY29uc3Qgc2l6ZXJEYXRhID0gW1xuICAgIHsnaWQnOiAnbWFuJywgJ25hbWUnOiAnTWFuJywgJ2hlaWdodCc6IDEuNywgJ2RlZmF1bHQnOiB0cnVlfSxcbiAgICB7J2lkJzogJ3BhcmlzJywgJ25hbWUnOiAnRWlmZmVsIFRvd2VyJywgJ2hlaWdodCc6IDMyNH0sXG4gICAgeydpZCc6ICdlbXBpcmUnLCAnbmFtZSc6ICdFbXBpcmUgU3RhdGUnLCAnaGVpZ2h0JzogNDQzfSxcbiAgICB7J2lkJzogJ2NhdCcsICduYW1lJzogJ0NhdCcsICdoZWlnaHQnOiAwLjI2fSxcbiAgICB7J2lkJzogJ2dvZHppbGxhJywgJ25hbWUnOiAnR29kemlsbGEnLCAnaGVpZ2h0JzogMTIyfSxcbl07XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxHcmFwaCBzaXplckRhdGE9e3NpemVyRGF0YX0vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2l6ZXJJdGVtID0gKHsgaXRlbUlkLCBpdGVtU2l6ZSwgaW5kZXgsIHNpemVyTGlzdCwgdXBkYXRlRnVuY3Rpb24gfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGl0ZW1JZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVGdW5jdGlvbihzaXplckxpc3QgPT4gcmVkdWNlZExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpdGVtSWR9LnN2Z2B9IGNsYXNzTmFtZT17YGljb24gaWNvbi0ke2l0ZW1JZH1gfSBzdHlsZT17eyAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScgfX0vPlxyXG4gICAgICAgICAgICB7aW5kZXggIT0gMCBcclxuICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0+WDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNpemVySXRlbSBmcm9tICcuL3NpemVySXRlbSc7XG5cbmNvbnN0IExpc3RJdGVtcyA9ICh7IHNpemVyTGlzdCwgdXBkYXRlRnVuY3Rpb24gfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodHNBcnJheSA9IHNpemVyTGlzdC5tYXAoKHsgaGVpZ2h0IH0pID0+IGhlaWdodCk7XG4gICAgY29uc3QgdGFsbGVzdEhlaWdodCA9IE1hdGgubWF4KC4uLmhlaWdodHNBcnJheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IChpdGVtSGVpZ2h0IC8gdGFsbGVzdEhlaWdodCkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbEJpZ1wiIGtleT17aXRlbUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpemVySXRlbSBpdGVtSWQ9e2l0ZW1JZH0gaXRlbVNpemU9e2l0ZW1TaXplfSBpbmRleD17aW5kZXh9IHNpemVyTGlzdD17c2l6ZXJMaXN0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGdW5jdGlvbj17dXBkYXRlRnVuY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1TaXplICE9IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgc3R5bGU9e3sgJ3RvcCc6ICgxMDAgLSBpdGVtU2l6ZSkgKyAnJScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9IFxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBTaXplckl0ZW1zID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxMaXN0SXRlbXMgc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiwgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBzaXplckxpc3RJZHMgPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbS5pZCk7XHJcbiAgICBjb25zdCBpc0l0ZW1Vc2VkID0gc2l6ZXJMaXN0SWRzLmluY2x1ZGVzKGRhdGEuaWQpO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlRnVuY3Rpb24oc2l6ZXJMaXN0ID0+IFsuLi5zaXplckxpc3QsIGRhdGFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgQnV0dG9uQWRkICR7aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiAnJ31gfSBkaXNhYmxlZD17aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiB1bmRlZmluZWR9IFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihkYXRhKX0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpemVyUGlja2VyID0gKHsgc2l6ZXJMaXN0LCBzaXplckRhdGEsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNrZXJcIj5cclxuICAgICAgICAgICAge3NpemVyRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIGtleT17aXRlbUlkfSB0ZXh0PXtpdGVtTmFtZX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17aXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVyUGlja2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9