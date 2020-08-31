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
  'name': 'man',
  'height': 100
};

var Graph = function Graph() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([firstItem]),
      _useState2 = _slicedToArray(_useState, 2),
      sizerList = _useState2[0],
      updateSizerList = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_sizerPicker__WEBPACK_IMPORTED_MODULE_15__["default"], {
    updateFunction: updateSizerList,
    sizerList: sizerList
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_sizerItems__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sizerList: sizerList
  })));
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

/***/ "./assets/js/sizerItems.js":
/*!*********************************!*\
  !*** ./assets/js/sizerItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var SizerItems = function SizerItems(_ref) {
  var sizerList = _ref.sizerList;
  console.log(sizerList);
  var listItems = sizerList.map(function (item, index) {
    var itemName = item.name;
    var itemHeight = item.height;
    var itemSize = itemHeight / 1000 * 100;
    /*
                var height = $(this).attr('data-height');
                var size = (height / base) * 100
    
                if (height != base) {
                    $(this).css('height', size + '%');
                }
    */

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col",
      key: index + itemName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "images/".concat(itemName, ".svg"),
      className: "icon icon-".concat(itemName),
      style: {
        'height': itemSize + '%'
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, listItems);
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
      clickHandler = _ref.clickHandler,
      data = _ref.data;
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

  var clickHandler = function clickHandler(data) {
    console.log(name);
    updateFunction(function (sizerList) {
      return [].concat(_toConsumableArray(sizerList), [data]);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Tower",
    clickHandler: clickHandler,
    data: {
      'name': 'paris',
      'height': 1000
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Cat",
    clickHandler: clickHandler,
    data: {
      'name': 'cat',
      'height': 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Button, {
    text: "Godzilla",
    clickHandler: clickHandler,
    data: {
      'name': 'godzilla',
      'height': 1300
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SizerPicker);

/***/ })

},[["./assets/js/sizer.js","runtime","vendors~sizer"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpemVyUGlja2VyLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRleHQiLCJpZCIsImNsYXNzTmFtZSIsImNsaWNrSGFuZGxlciIsImZpcnN0SXRlbSIsIkdyYXBoIiwidXNlU3RhdGUiLCJzaXplckxpc3QiLCJ1cGRhdGVTaXplckxpc3QiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTaXplckl0ZW1zIiwiY29uc29sZSIsImxvZyIsImxpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIml0ZW1OYW1lIiwibmFtZSIsIml0ZW1IZWlnaHQiLCJoZWlnaHQiLCJpdGVtU2l6ZSIsImRhdGEiLCJTaXplclBpY2tlciIsInVwZGF0ZUZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBMkM7QUFBQSxNQUF4Q0MsSUFBd0MsUUFBeENBLElBQXdDO0FBQUEsTUFBbENDLEVBQWtDLFFBQWxDQSxFQUFrQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3RELHNCQUNJO0FBQVEsTUFBRSxFQUFFRixFQUFaO0FBQWdCLGFBQVMsRUFBRUMsU0FBM0I7QUFBc0MsV0FBTyxFQUFFQztBQUEvQyxLQUNLSCxJQURMLENBREo7QUFLSCxDQU5EOztBQVFlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLEdBQUc7QUFDZCxVQUFRLEtBRE07QUFFZCxZQUFVO0FBRkksQ0FBbEI7O0FBS0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBLGtCQUNxQkMsdURBQVEsQ0FBQyxDQUFDRixTQUFELENBQUQsQ0FEN0I7QUFBQTtBQUFBLE1BQ1RHLFNBRFM7QUFBQSxNQUNFQyxlQURGOztBQUdoQixzQkFDSSx1SUFDSSw0REFBQyxxREFBRDtBQUFhLGtCQUFjLEVBQUVBLGVBQTdCO0FBQThDLGFBQVMsRUFBRUQ7QUFBekQsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksNERBQUMsb0RBQUQ7QUFBWSxhQUFTLEVBQUVBO0FBQXZCLElBREosQ0FGSixDQURKO0FBUUgsQ0FYRDs7QUFhZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBSSxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsOENBQUQsT0FESixFQUVJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQjtBQUFBLE1BQWhCTixTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbENPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixTQUFaO0FBQ0EsTUFBTVMsU0FBUyxHQUFHVCxTQUFTLENBQUNVLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDN0MsUUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNHLElBQXRCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHSixJQUFJLENBQUNLLE1BQXhCO0FBRUEsUUFBTUMsUUFBUSxHQUFJRixVQUFVLEdBQUcsSUFBZCxHQUFzQixHQUF2QztBQUVSOzs7Ozs7Ozs7QUFTUSx3QkFDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUcsRUFBRUgsS0FBSyxHQUFHQztBQUFsQyxvQkFDSTtBQUFLLFNBQUcsbUJBQVlBLFFBQVosU0FBUjtBQUFvQyxlQUFTLHNCQUFlQSxRQUFmLENBQTdDO0FBQXdFLFdBQUssRUFBRTtBQUFFLGtCQUFVSSxRQUFRLEdBQUc7QUFBdkI7QUFBL0UsTUFESixDQURKO0FBS0gsR0FwQmlCLENBQWxCO0FBc0JBLHNCQUNJLHdIQUNLUixTQURMLENBREo7QUFLSCxDQTdCRDs7QUErQmVILHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7O0FBRUEsSUFBTWQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0M7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJHLFlBQXlCLFFBQXpCQSxZQUF5QjtBQUFBLE1BQVhzQixJQUFXLFFBQVhBLElBQVc7QUFDN0Msc0JBQ0k7QUFBUSxhQUFTLEVBQUMsV0FBbEI7QUFBOEIsV0FBTyxFQUFFO0FBQUEsYUFBTXRCLFlBQVksQ0FBQ3NCLElBQUQsQ0FBbEI7QUFBQTtBQUF2QyxLQUNLekIsSUFETCxDQURKO0FBS0gsQ0FORDs7QUFRQSxJQUFNMEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBbUM7QUFBQSxNQUFoQ25CLFNBQWdDLFNBQWhDQSxTQUFnQztBQUFBLE1BQXJCb0IsY0FBcUIsU0FBckJBLGNBQXFCOztBQUNuRCxNQUFNeEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3NCLElBQUQsRUFBVTtBQUMzQlgsV0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVo7QUFDQU0sa0JBQWMsQ0FBQyxVQUFBcEIsU0FBUztBQUFBLDBDQUFRQSxTQUFSLElBQW1Ca0IsSUFBbkI7QUFBQSxLQUFWLENBQWQ7QUFDSCxHQUhEOztBQUtBLHNCQUNJLHVJQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksNERBQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGdCQUFZLEVBQUV0QixZQUFuQztBQUFpRCxRQUFJLEVBQUc7QUFBQyxjQUFRLE9BQVQ7QUFBa0IsZ0JBQVU7QUFBNUI7QUFBeEQsSUFESixlQUVJLDREQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsS0FBYjtBQUFtQixnQkFBWSxFQUFFQSxZQUFqQztBQUErQyxRQUFJLEVBQUc7QUFBQyxjQUFRLEtBQVQ7QUFBZ0IsZ0JBQVU7QUFBMUI7QUFBdEQsSUFGSixlQUdJLDREQUFDLE1BQUQ7QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixnQkFBWSxFQUFFQSxZQUF0QztBQUFvRCxRQUFJLEVBQUc7QUFBQyxjQUFRLFVBQVQ7QUFBcUIsZ0JBQVU7QUFBL0I7QUFBM0QsSUFISixDQURKLENBREo7QUFTSCxDQWZEOztBQWlCZXVCLDBFQUFmLEUiLCJmaWxlIjoic2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0LCBpZCwgY2xhc3NOYW1lLCBjbGlja0hhbmRsZXIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IFNpemVyUGlja2VyIGZyb20gJy4vc2l6ZXJQaWNrZXInO1xyXG5pbXBvcnQgU2l6ZXJJdGVtcyBmcm9tICcuL3NpemVySXRlbXMnO1xyXG5cclxuY29uc3QgZmlyc3RJdGVtID0ge1xyXG4gICAgJ25hbWUnOiAnbWFuJyxcclxuICAgICdoZWlnaHQnOiAxMDAsXHJcbn07XHJcblxyXG5jb25zdCBHcmFwaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaXplckxpc3QsIHVwZGF0ZVNpemVyTGlzdF0gPSB1c2VTdGF0ZShbZmlyc3RJdGVtXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2l6ZXJQaWNrZXIgdXBkYXRlRnVuY3Rpb249e3VwZGF0ZVNpemVyTGlzdH0gc2l6ZXJMaXN0PXtzaXplckxpc3R9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTaXplckl0ZW1zIHNpemVyTGlzdD17c2l6ZXJMaXN0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEdyYXBoLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNpemVySXRlbXMgPSAoeyBzaXplckxpc3QgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2l6ZXJMaXN0KTtcclxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IHNpemVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0uaGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1TaXplID0gKGl0ZW1IZWlnaHQgLyAxMDAwKSAqIDEwMDtcclxuXHJcbi8qXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gKGhlaWdodCAvIGJhc2UpICogMTAwXHJcblxyXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ICE9IGJhc2UpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCBzaXplICsgJyUnKTtcclxuICAgICAgICAgICAgfVxyXG4qL1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIGtleT17aW5kZXggKyBpdGVtTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGltYWdlcy8ke2l0ZW1OYW1lfS5zdmdgfSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpdGVtTmFtZX1gfSBzdHlsZT17eyAnaGVpZ2h0JzogaXRlbVNpemUgKyAnJScgfX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bGlzdEl0ZW1zfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZXJJdGVtcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgY2xpY2tIYW5kbGVyLCBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b25BZGRcIiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoZGF0YSl9PlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufTtcclxuXHJcbmNvbnN0IFNpemVyUGlja2VyID0gKHsgc2l6ZXJMaXN0LCB1cGRhdGVGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgIHVwZGF0ZUZ1bmN0aW9uKHNpemVyTGlzdCA9PiBbLi4uc2l6ZXJMaXN0LCBkYXRhXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVG93ZXJcIiBjbGlja0hhbmRsZXI9e2NsaWNrSGFuZGxlcn0gZGF0YT17IHsnbmFtZSc6ICdwYXJpcycsICdoZWlnaHQnOiAxMDAwfSB9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNhdFwiIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfSBkYXRhPXsgeyduYW1lJzogJ2NhdCcsICdoZWlnaHQnOiAyMH0gfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJHb2R6aWxsYVwiIGNsaWNrSGFuZGxlcj17Y2xpY2tIYW5kbGVyfSBkYXRhPXsgeyduYW1lJzogJ2dvZHppbGxhJywgJ2hlaWdodCc6IDEzMDB9IH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVyUGlja2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9