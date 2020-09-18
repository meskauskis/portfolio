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
  'id': 'giraffe',
  'name': 'Giraffe',
  'height': 6
}, {
  'id': 'grizzly',
  'name': 'Grizzly Bear',
  'height': 2.4
}, {
  'id': 'cat',
  'name': 'Cat',
  'height': 0.26
}, {
  'id': 'godzilla',
  'name': 'Godzilla',
  'height': 122
}, {
  'id': 'paris',
  'name': 'Eiffel Tower',
  'height': 324
}, {
  'id': 'empire',
  'name': 'Empire State',
  'height': 443
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var SizerItem = function SizerItem(_ref) {
  var sizerList = _ref.sizerList,
      item = _ref.item,
      itemSize = _ref.itemSize,
      updateFunction = _ref.updateFunction,
      infoBoxId = _ref.infoBoxId,
      setinfoBoxId = _ref.setinfoBoxId;
  var itemId = item.id;

  var clickHandler = function clickHandler(itemId) {
    console.log('id');
    console.log(itemId);
    /*
    const reducedList = sizerList.filter(function(obj) {
        return obj.id !== itemId;
    });
      updateFunction(sizerList => reducedList);
    */

    setinfoBoxId(infoBoxId == itemId ? null : itemId);
  };

  var currentItem = sizerList.map(function (_ref2) {
    var item = Object.assign({}, _ref2);
    return itemId;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "images/".concat(itemId, ".svg"),
    className: "icon icon-".concat(itemId),
    style: {
      'height': itemSize + '%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "images/button-info.svg",
    className: "Col-button Col-button--info",
    onClick: function onClick() {
      return clickHandler(itemId);
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















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      infoBoxId = _useState2[0],
      setinfoBoxId = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, sizerList.map(function (item, index) {
    var itemId = item.id;
    var itemHeight = item.height;
    var itemSize = itemHeight / tallestHeight * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "col",
      key: itemId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "liner"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_sizerItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      sizerList: sizerList,
      item: item,
      itemSize: itemSize,
      updateFunction: updateFunction,
      infoBoxId: infoBoxId,
      setinfoBoxId: setinfoBoxId
    }));
  }));
};

var SizerItems = function SizerItems(_ref3) {
  var sizerList = _ref3.sizerList,
      updateFunction = _ref3.updateFunction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "container2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(ListItems, {
    sizerList: sizerList,
    updateFunction: updateFunction
  })));
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
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);

















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
  var isItemUsed = false; //sizerListIds.includes(data.id);

  var clickHandler = function clickHandler(data) {
    updateFunction(function (sizerList) {
      return [].concat(_toConsumableArray(sizerList), [data]);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    className: "picker"
  }, sizerData.map(function (item) {
    var itemId = item.id;
    var itemName = item.name;

    if (!item["default"]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXplckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyUGlja2VyLmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwic2l6ZXJEYXRhIiwiZGVmYXVsdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInVzZVN0YXRlIiwic2l6ZXJMaXN0IiwidXBkYXRlU2l6ZXJMaXN0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2l6ZXJJdGVtIiwiaXRlbVNpemUiLCJ1cGRhdGVGdW5jdGlvbiIsImluZm9Cb3hJZCIsInNldGluZm9Cb3hJZCIsIml0ZW1JZCIsImlkIiwiY2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRJdGVtIiwibWFwIiwiTGlzdEl0ZW1zIiwiaGVpZ2h0c0FycmF5IiwiaGVpZ2h0IiwidGFsbGVzdEhlaWdodCIsIk1hdGgiLCJtYXgiLCJpbmRleCIsIml0ZW1IZWlnaHQiLCJTaXplckl0ZW1zIiwiQnV0dG9uIiwidGV4dCIsImRhdGEiLCJzaXplckxpc3RJZHMiLCJpc0l0ZW1Vc2VkIiwidW5kZWZpbmVkIiwiU2l6ZXJQaWNrZXIiLCJpdGVtTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzdCLE1BQU1DLFdBQVcsR0FBR0QsU0FBUyxDQUFDRSxJQUFWLENBQWUsVUFBQ0Ms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WUFBUSxFQUFFQSxVQUFVLEdBQUcsVUFBSCxHQUFnQkMsU0FBcEc7QUFDQSxXQUFPLEVBQUU7QUFBQSxhQUFNbkIsWUFBWSxDQUFDZ0IsSUFBRCxDQUFsQjtBQUFBO0FBRFQsS0FFS0QsSUFGTCxDQURKO0FBTUgsQ0FkRDs7QUFnQkEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBOEM7QUFBQSxNQUEzQ2pDLFNBQTJDLFNBQTNDQSxTQUEyQztBQUFBLE1BQWhDTCxTQUFnQyxTQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQmEsY0FBcUIsU0FBckJBLGNBQXFCO0FBQzlELHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDS2IsU0FBUyxDQUFDc0IsR0FBVixDQUFjLFVBQUNuQixJQUFELEVBQVU7QUFDckIsUUFBTWEsTUFBTSxHQUFHYixJQUFJLENBQUNjLEVBQXBCO0FBQ0EsUUFBTXNCLFFBQVEsR0FBR3BDLElBQUksQ0FBQ3FDLElBQXRCOztBQUVBLFFBQUksQ0FBQ3JDLElBQUksV0FBVCxFQUFtQjtBQUNmLDBCQUFPLDREQUFDLE1BQUQ7QUFBUSxXQUFHLEVBQUVhLE1BQWI7QUFBcUIsWUFBSSxFQUFFdUIsUUFBM0I7QUFBcUMsaUJBQVMsRUFBRWxDLFNBQWhEO0FBQTJELHNCQUFjLEVBQUVRLGNBQTNFO0FBQTJGLFlBQUksRUFBRVY7QUFBakcsUUFBUDtBQUNIO0FBQ0osR0FQQSxDQURMLENBREo7QUFZSCxDQWJEOztBQWVlbUMsMEVBQWYsRSIsImZpbGUiOiJzaXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTaXplclBpY2tlciBmcm9tICcuL3NpemVyUGlja2VyJztcclxuaW1wb3J0IFNpemVySXRlbXMgZnJvbSAnLi9zaXplckl0ZW1zJztcclxuXHJcbmNvbnN0IEdyYXBoID0gKHsgc2l6ZXJEYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRJdGVtID0gc2l6ZXJEYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGVmYXVsdCk7XHJcblxyXG4gICAgY29uc3QgW3NpemVyTGlzdCwgdXBkYXRlU2l6ZXJMaXN0XSA9IHVzZVN0YXRlKFtkZWZhdWx0SXRlbV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpemVyUGlja2VyIHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVTaXplckxpc3R9IHNpemVyTGlzdD17c2l6ZXJMaXN0fSBzaXplckRhdGE9e3NpemVyRGF0YX0vPlxyXG4gICAgICAgICAgICA8U2l6ZXJJdGVtcyB1cGRhdGVGdW5jdGlvbj17dXBkYXRlU2l6ZXJMaXN0fSBzaXplckxpc3Q9e3NpemVyTGlzdH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuXG5jb25zdCBzaXplckRhdGEgPSBbXG4gICAgeydpZCc6ICdtYW4nLCAnbmFtZSc6ICdNYW4nLCAnaGVpZ2h0JzogMS43LCAnZGVmYXVsdCc6IHRydWV9LFxuICAgIHsnaWQnOiAnZ2lyYWZmZScsICduYW1lJzogJ0dpcmFmZmUnLCAnaGVpZ2h0JzogNn0sXG4gICAgeydpZCc6ICdncml6emx5JywgJ25hbWUnOiAnR3JpenpseSBCZWFyJywgJ2hlaWdodCc6IDIuNH0sXG4gICAgeydpZCc6ICdjYXQnLCAnbmFtZSc6ICdDYXQnLCAnaGVpZ2h0JzogMC4yNn0sXG4gICAgeydpZCc6ICdnb2R6aWxsYScsICduYW1lJzogJ0dvZHppbGxhJywgJ2hlaWdodCc6IDEyMn0sXG4gICAgeydpZCc6ICdwYXJpcycsICduYW1lJzogJ0VpZmZlbCBUb3dlcicsICdoZWlnaHQnOiAzMjR9LFxuICAgIHsnaWQnOiAnZW1waXJlJywgJ25hbWUnOiAnRW1waXJlIFN0YXRlJywgJ2hlaWdodCc6IDQ0M30sXG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdyYXBoIHNpemVyRGF0YT17c2l6ZXJEYXRhfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTaXplckl0ZW0gPSAoeyBzaXplckxpc3QsIGl0ZW0sIGl0ZW1TaXplLCB1cGRhdGVGdW5jdGlvbiwgaW5mb0JveElkLCBzZXRpbmZvQm94SWQgfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcclxuXHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoaXRlbUlkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUlkKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IHJlZHVjZWRMaXN0ID0gc2l6ZXJMaXN0LmZpbHRlcihmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaXRlbUlkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVGdW5jdGlvbihzaXplckxpc3QgPT4gcmVkdWNlZExpc3QpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgc2V0aW5mb0JveElkKGluZm9Cb3hJZCA9PSBpdGVtSWQgPyBudWxsIDogaXRlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHNpemVyTGlzdC5tYXAoKHsgLi4uaXRlbSB9KSA9PiBpdGVtSWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtpdGVtSWR9LnN2Z2B9IGNsYXNzTmFtZT17YGljb24gaWNvbi0ke2l0ZW1JZH1gfSBzdHlsZT17eyAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScgfX0vPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy9idXR0b24taW5mby5zdmdgfSBjbGFzc05hbWU9XCJDb2wtYnV0dG9uIENvbC1idXR0b24tLWluZm9cIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0vPlxyXG5cclxuICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgIHtpdGVtSWQgPT0gaW5mb0JveElkXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmhlaWdodH1tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6ICcnIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTaXplckl0ZW0gZnJvbSAnLi9zaXplckl0ZW0nO1xuXG5jb25zdCBMaXN0SXRlbXMgPSAoeyBzaXplckxpc3QsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcbiAgICBjb25zdCBoZWlnaHRzQXJyYXkgPSBzaXplckxpc3QubWFwKCh7IGhlaWdodCB9KSA9PiBoZWlnaHQpO1xuICAgIGNvbnN0IHRhbGxlc3RIZWlnaHQgPSBNYXRoLm1heCguLi5oZWlnaHRzQXJyYXkpO1xuXG5jb25zdCBbaW5mb0JveElkLCBzZXRpbmZvQm94SWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3NpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtU2l6ZSA9IChpdGVtSGVpZ2h0IC8gdGFsbGVzdEhlaWdodCkgKiAxMDA7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGtleT17aXRlbUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXplckl0ZW0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IGl0ZW09e2l0ZW19IGl0ZW1TaXplPXtpdGVtU2l6ZX0gdXBkYXRlRnVuY3Rpb249e3VwZGF0ZUZ1bmN0aW9ufSBpbmZvQm94SWQ9e2luZm9Cb3hJZH0gc2V0aW5mb0JveElkPXtzZXRpbmZvQm94SWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfSBcbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgU2l6ZXJJdGVtcyA9ICh7IHNpemVyTGlzdCwgdXBkYXRlRnVuY3Rpb24gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1zIHNpemVyTGlzdD17c2l6ZXJMaXN0fSB1cGRhdGVGdW5jdGlvbj17dXBkYXRlRnVuY3Rpb259Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaXplckl0ZW1zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiwgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBzaXplckxpc3RJZHMgPSBzaXplckxpc3QubWFwKCh7IC4uLml0ZW0gfSkgPT4gaXRlbS5pZCk7XHJcbiAgICBjb25zdCBpc0l0ZW1Vc2VkID0gZmFsc2U7IC8vc2l6ZXJMaXN0SWRzLmluY2x1ZGVzKGRhdGEuaWQpO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlRnVuY3Rpb24oc2l6ZXJMaXN0ID0+IFsuLi5zaXplckxpc3QsIGRhdGFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgQnV0dG9uQWRkICR7aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiAnJ31gfSBkaXNhYmxlZD17aXNJdGVtVXNlZCA/ICdkaXNhYmxlZCcgOiB1bmRlZmluZWR9IFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihkYXRhKX0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpemVyUGlja2VyID0gKHsgc2l6ZXJMaXN0LCBzaXplckRhdGEsIHVwZGF0ZUZ1bmN0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNrZXJcIj5cclxuICAgICAgICAgICAge3NpemVyRGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIGtleT17aXRlbUlkfSB0ZXh0PXtpdGVtTmFtZX0gc2l6ZXJMaXN0PXtzaXplckxpc3R9IHVwZGF0ZUZ1bmN0aW9uPXt1cGRhdGVGdW5jdGlvbn0gZGF0YT17aXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVyUGlja2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9