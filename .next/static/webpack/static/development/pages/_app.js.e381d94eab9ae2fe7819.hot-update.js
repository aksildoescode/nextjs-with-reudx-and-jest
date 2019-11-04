webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/createPrefixer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/createPrefixer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPrefixer; });
/* harmony import */ var _utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/prefixProperty */ "./node_modules/inline-style-prefixer/es/utils/prefixProperty.js");
/* harmony import */ var _utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/prefixValue */ "./node_modules/inline-style-prefixer/es/utils/prefixValue.js");
/* harmony import */ var _utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js");
/* harmony import */ var _utils_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isObject */ "./node_modules/inline-style-prefixer/es/utils/isObject.js");






function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if (Object(_utils_isObject__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = Object(_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"])(plugins, property, value[i], style, prefixMap);
          Object(_utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__["default"])(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = Object(_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"])(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = Object(_utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/data.js":
/*!*******************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/data.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];

/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [],
  prefixMap: { "appearance": wm, "textEmphasisPosition": w, "textEmphasis": w, "textEmphasisStyle": w, "textEmphasisColor": w, "boxDecorationBreak": w, "maskImage": w, "maskMode": w, "maskRepeat": w, "maskPosition": w, "maskClip": w, "maskOrigin": w, "maskSize": w, "maskComposite": w, "mask": w, "maskBorderSource": w, "maskBorderMode": w, "maskBorderSlice": w, "maskBorderWidth": w, "maskBorderOutset": w, "maskBorderRepeat": w, "maskBorder": w, "maskType": w, "textDecorationStyle": w, "textDecorationSkip": w, "textDecorationLine": w, "textDecorationColor": w, "userSelect": wmms, "backdropFilter": w, "fontKerning": w, "scrollSnapType": wms, "scrollSnapPointsX": wms, "scrollSnapPointsY": wms, "scrollSnapDestination": wms, "scrollSnapCoordinate": wms, "clipPath": w, "shapeImageThreshold": w, "shapeImageMargin": w, "shapeImageOutside": w, "filter": w, "hyphens": wms, "flowInto": wms, "flowFrom": wms, "breakBefore": wms, "breakAfter": wms, "breakInside": wms, "regionFragment": wms, "writingMode": wms, "textOrientation": w, "tabSize": m, "fontFeatureSettings": w, "columnCount": w, "columnFill": w, "columnGap": w, "columnRule": w, "columnRuleColor": w, "columnRuleStyle": w, "columnRuleWidth": w, "columns": w, "columnSpan": w, "columnWidth": w, "wrapFlow": ms, "wrapThrough": ms, "wrapMargin": ms, "textSizeAdjust": wms }
});

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/index.js ***!
  \********************************************************/
/*! exports provided: createPrefixer, prefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony import */ var _createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPrefixer */ "./node_modules/inline-style-prefixer/es/createPrefixer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPrefixer", function() { return _createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/inline-style-prefixer/es/data.js");
/* harmony import */ var _plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/backgroundClip */ "./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js");
/* harmony import */ var _plugins_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cursor */ "./node_modules/inline-style-prefixer/es/plugins/cursor.js");
/* harmony import */ var _plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/crossFade */ "./node_modules/inline-style-prefixer/es/plugins/crossFade.js");
/* harmony import */ var _plugins_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/filter */ "./node_modules/inline-style-prefixer/es/plugins/filter.js");
/* harmony import */ var _plugins_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/flex */ "./node_modules/inline-style-prefixer/es/plugins/flex.js");
/* harmony import */ var _plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/flexboxOld */ "./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js");
/* harmony import */ var _plugins_gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/gradient */ "./node_modules/inline-style-prefixer/es/plugins/gradient.js");
/* harmony import */ var _plugins_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/grid */ "./node_modules/inline-style-prefixer/es/plugins/grid.js");
/* harmony import */ var _plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/imageSet */ "./node_modules/inline-style-prefixer/es/plugins/imageSet.js");
/* harmony import */ var _plugins_logical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/logical */ "./node_modules/inline-style-prefixer/es/plugins/logical.js");
/* harmony import */ var _plugins_position__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/position */ "./node_modules/inline-style-prefixer/es/plugins/position.js");
/* harmony import */ var _plugins_sizing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/sizing */ "./node_modules/inline-style-prefixer/es/plugins/sizing.js");
/* harmony import */ var _plugins_transition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/transition */ "./node_modules/inline-style-prefixer/es/plugins/transition.js");


















var plugins = [_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__["default"], _plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__["default"], _plugins_cursor__WEBPACK_IMPORTED_MODULE_3__["default"], _plugins_filter__WEBPACK_IMPORTED_MODULE_5__["default"], _plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__["default"], _plugins_gradient__WEBPACK_IMPORTED_MODULE_8__["default"], _plugins_grid__WEBPACK_IMPORTED_MODULE_9__["default"], _plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__["default"], _plugins_logical__WEBPACK_IMPORTED_MODULE_11__["default"], _plugins_position__WEBPACK_IMPORTED_MODULE_12__["default"], _plugins_sizing__WEBPACK_IMPORTED_MODULE_13__["default"], _plugins_transition__WEBPACK_IMPORTED_MODULE_14__["default"], _plugins_flex__WEBPACK_IMPORTED_MODULE_6__["default"]];

var prefix = Object(_createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"])({
  prefixMap: _data__WEBPACK_IMPORTED_MODULE_1__["default"].prefixMap,
  plugins: plugins
});



/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return backgroundClip; });

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/crossFade.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/crossFade.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return crossFade; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];

function crossFade(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/cursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/cursor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cursor; });
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/filter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/filter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];

function filter(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/flex.js":
/*!***************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/flex.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flex; });
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flexboxOld; });
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/gradient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/gradient.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gradient; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


var prefixes = ['-webkit-', '-moz-', ''];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/grid.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return grid; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else {
      var _value$split$map = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map2 = _slicedToArray(_value$split$map, 2),
          start = _value$split$map2[0],
          end = _value$split$map2[1];

      propertyConverters.gridColumnStart(start, style);
      propertyConverters.gridColumnEnd(end, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else {
      var _value$split$map3 = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map4 = _slicedToArray(_value$split$map3, 2),
          start = _value$split$map4[0],
          end = _value$split$map4[1];

      propertyConverters.gridRowStart(start, style);
      propertyConverters.gridRowEnd(end, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/imageSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/imageSet.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageSet; });
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__);


// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];

function imageSet(property, value) {
  if (typeof value === 'string' && !css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/logical.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/logical.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logical; });
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/position.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/position.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return position; });
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/sizing.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/sizing.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sizing; });
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/plugins/transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/plugins/transition.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");
/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");
/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js");





var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};

var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if (css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default()(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + Object(_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__["default"])(property)] = webkitOutput;
    style['Moz' + Object(_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__["default"])(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addNewValuesOnly; });
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/capitalizeString.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalizeString; });
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/isObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/isObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/prefixProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/prefixProperty.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixProperty; });
/* harmony import */ var _capitalizeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/es/utils/capitalizeString.js");



function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = Object(_capitalizeString__WEBPACK_IMPORTED_MODULE_0__["default"])(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/es/utils/prefixValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/es/utils/prefixValue.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixValue; });
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

/***/ "./node_modules/styletron-engine-atomic/dist/browser.es5.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/styletron-engine-atomic/dist/browser.es5.es.js ***!
  \*********************************************************************/
/*! exports provided: Client, Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return StyletronClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return StyletronServer; });
/* harmony import */ var inline_style_prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer */ "./node_modules/inline-style-prefixer/es/index.js");


var SequentialIDGenerator =
/*#__PURE__*/
function () {
  function SequentialIDGenerator(prefix$$1) {
    if (prefix$$1 === void 0) {
      prefix$$1 = "";
    }

    // ensure start with "ae" so "ad" is never produced
    this.prefix = prefix$$1;
    this.count = 0;
    this.offset = 374;
    this.msb = 1295;
    this.power = 2;
  }

  var _proto = SequentialIDGenerator.prototype;

  _proto.next = function next() {
    var id = this.increment().toString(36);
    return this.prefix ? "" + this.prefix + id : id;
  };

  _proto.increment = function increment() {
    var id = this.count + this.offset;

    if (id === this.msb) {
      this.offset += (this.msb + 1) * 9;
      this.msb = Math.pow(36, ++this.power) - 1;
    }

    this.count++;
    return id;
  };

  return SequentialIDGenerator;
}();

// adapted from https://github.com/dutchenkoOleg/sort-css-media-queries
var minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/i;
var minWidth = /\(\s*min(-device)?-width/i;
var maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/i;
var maxWidth = /\(\s*max(-device)?-width/i;

var isMinWidth = _testQuery(minMaxWidth, maxMinWidth, minWidth);

var isMaxWidth = _testQuery(maxMinWidth, minMaxWidth, maxWidth);

var minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/i;
var minHeight = /\(\s*min(-device)?-height/i;
var maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/i;
var maxHeight = /\(\s*max(-device)?-height/i;

var isMinHeight = _testQuery(minMaxHeight, maxMinHeight, minHeight);

var isMaxHeight = _testQuery(maxMinHeight, minMaxHeight, maxHeight);

var isPrint = /print/i;
var isPrintOnly = /^print$/i;
var maxValue = Number.MAX_VALUE;

function _getQueryLength(length) {
  var matches = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length);

  if (matches === null) {
    return maxValue;
  }

  var number = matches[1];
  var unit = matches[2];

  switch (unit) {
    case "ch":
      number = parseFloat(number) * 8.8984375;
      break;

    case "em":
    case "rem":
      number = parseFloat(number) * 16;
      break;

    case "ex":
      number = parseFloat(number) * 8.296875;
      break;

    case "px":
      number = parseFloat(number);
      break;
  }

  return +number;
}

function _testQuery(doubleTestTrue, doubleTestFalse, singleTest) {
  return function (query) {
    if (doubleTestTrue.test(query)) {
      return true;
    } else if (doubleTestFalse.test(query)) {
      return false;
    }

    return singleTest.test(query);
  };
}

function _testIsPrint(a, b) {
  var isPrintA = isPrint.test(a);
  var isPrintOnlyA = isPrintOnly.test(a);
  var isPrintB = isPrint.test(b);
  var isPrintOnlyB = isPrintOnly.test(b);

  if (isPrintA && isPrintB) {
    if (!isPrintOnlyA && isPrintOnlyB) {
      return 1;
    }

    if (isPrintOnlyA && !isPrintOnlyB) {
      return -1;
    }

    return a.localeCompare(b);
  }

  if (isPrintA) {
    return 1;
  }

  if (isPrintB) {
    return -1;
  }

  return null;
}

function sortCSSmq(a, b) {
  if (a === "") {
    return -1;
  }

  if (b === "") {
    return 1;
  }

  var testIsPrint = _testIsPrint(a, b);

  if (testIsPrint !== null) {
    return testIsPrint;
  }

  var minA = isMinWidth(a) || isMinHeight(a);
  var maxA = isMaxWidth(a) || isMaxHeight(a);
  var minB = isMinWidth(b) || isMinHeight(b);
  var maxB = isMaxWidth(b) || isMaxHeight(b);

  if (minA && maxB) {
    return -1;
  }

  if (maxA && minB) {
    return 1;
  }

  var lengthA = _getQueryLength(a);

  var lengthB = _getQueryLength(b);

  if (lengthA === maxValue && lengthB === maxValue) {
    return a.localeCompare(b);
  } else if (lengthA === maxValue) {
    return 1;
  } else if (lengthB === maxValue) {
    return -1;
  }

  if (lengthA > lengthB) {
    if (maxA) {
      return -1;
    }

    return 1;
  }

  if (lengthA < lengthB) {
    if (maxA) {
      return 1;
    }

    return -1;
  }

  return a.localeCompare(b);
}

var MultiCache =
/*#__PURE__*/
function () {
  function MultiCache(idGenerator, onNewCache, onNewValue) {
    this.idGenerator = idGenerator;
    this.onNewCache = onNewCache;
    this.onNewValue = onNewValue;
    this.sortedCacheKeys = [];
    this.caches = {};
  }

  var _proto = MultiCache.prototype;

  _proto.getCache = function getCache(key) {
    if (!this.caches[key]) {
      var _cache = new Cache(this.idGenerator, this.onNewValue);

      _cache.key = key;
      this.sortedCacheKeys.push(key);
      this.sortedCacheKeys.sort(sortCSSmq);
      var keyIndex = this.sortedCacheKeys.indexOf(key);
      var insertBeforeMedia = keyIndex < this.sortedCacheKeys.length - 1 ? this.sortedCacheKeys[keyIndex + 1] : void 0;
      this.caches[key] = _cache;
      this.onNewCache(key, _cache, insertBeforeMedia);
    }

    return this.caches[key];
  };

  _proto.getSortedCacheKeys = function getSortedCacheKeys() {
    return this.sortedCacheKeys;
  };

  return MultiCache;
}();
var Cache =
/*#__PURE__*/
function () {
  function Cache(idGenerator, onNewValue) {
    this.cache = {};
    this.idGenerator = idGenerator;
    this.onNewValue = onNewValue;
  }

  var _proto2 = Cache.prototype;

  _proto2.addValue = function addValue(key, value) {
    var cached = this.cache[key];

    if (cached) {
      return cached;
    }

    var id = this.idGenerator.next();
    this.cache[key] = id;
    this.onNewValue(this, id, value);
    return id;
  };

  return Cache;
}();

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function hyphenateStyleName(prop) {
  return prop in cache ? cache[prop] : cache[prop] = prop.replace(uppercasePattern, "-$&").toLowerCase().replace(msPattern, "-ms-");
}

/**
 * Adapted from https://github.com/gilmoreorless/css-shorthand-properties
 */
var shorthandMap = {
  // CSS 2.1: https://www.w3.org/TR/CSS2/propidx.html
  "list-style": ["list-style-type", "list-style-position", "list-style-image"],
  margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
  outline: ["outline-width", "outline-style", "outline-color"],
  padding: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
  // CSS Backgrounds and Borders Module Level 3: https://www.w3.org/TR/css3-background/
  background: ["background-image", "background-position", "background-size", "background-repeat", "background-origin", "background-clip", "background-attachment", "background-color"],
  border: ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-width", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-style", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-color"],
  "border-color": ["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"],
  "border-style": ["border-top-style", "border-right-style", "border-bottom-style", "border-left-style"],
  "border-width": ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"],
  "border-top": ["border-top-width", "border-top-style", "border-top-color"],
  "border-right": ["border-right-width", "border-right-style", "border-right-color"],
  "border-bottom": ["border-bottom-width", "border-bottom-style", "border-bottom-color"],
  "border-left": ["border-left-width", "border-left-style", "border-left-color"],
  "border-radius": ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius"],
  "border-image": ["border-image-source", "border-image-slice", "border-image-width", "border-image-outset", "border-image-repeat"],
  // CSS Fonts Module Level 3: https://www.w3.org/TR/css3-fonts/
  font: ["font-style", "font-variant-ligatures", "font-variant-alternates", "font-variant-caps", "font-variant-numeric", "font-variant-east-asian", "font-variant", "font-weight", "font-stretch", "font-size", "line-height", "font-family"],
  "font-variant": ["font-variant-ligatures", "font-variant-alternates", "font-variant-caps", "font-variant-numeric", "font-variant-east-asian"],
  // CSS Flexible Box Layout Module Level 1: https://www.w3.org/TR/css3-flexbox-1/
  flex: ["flex-grow", "flex-shrink", "flex-basis"],
  "flex-flow": ["flex-direction", "flex-wrap"],
  // CSS Grid Layout Module Level 1: https://www.w3.org/TR/css-grid-1/
  grid: ["grid-template-rows", "grid-template-columns", "grid-template-areas", "grid-auto-rows", "grid-auto-columns", "grid-auto-flow"],
  "grid-template": ["grid-template-rows", "grid-template-columns", "grid-template-areas"],
  "grid-row": ["grid-row-start", "grid-row-end"],
  "grid-column": ["grid-column-start", "grid-column-end"],
  "grid-area": ["grid-row-start", "grid-column-start", "grid-row-end", "grid-column-end"],
  "grid-gap": ["grid-row-gap", "grid-column-gap"],
  // CSS Masking Module Level 1: https://www.w3.org/TR/css-masking/
  mask: ["mask-image", "mask-mode", "mask-position", "mask-size", "mask-repeat", "mask-origin", "mask-clip"],
  "mask-border": ["mask-border-source", "mask-border-slice", "mask-border-width", "mask-border-outset", "mask-border-repeat", "mask-border-mode"],
  // CSS Multi-column Layout Module: https://www.w3.org/TR/css3-multicol/
  columns: ["column-width", "column-count"],
  "column-rule": ["column-rule-width", "column-rule-style", "column-rule-color"],
  // CSS Scroll Snap Module Level 1: https://www.w3.org/TR/css-scroll-snap-1/
  "scroll-padding": ["scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left"],
  "scroll-padding-block": ["scroll-padding-block-start", "scroll-padding-block-end"],
  "scroll-padding-inline": ["scroll-padding-inline-start", "scroll-padding-inline-end"],
  "scroll-snap-margin": ["scroll-snap-margin-top", "scroll-snap-margin-right", "scroll-snap-margin-bottom", "scroll-snap-margin-left"],
  "scroll-snap-margin-block": ["scroll-snap-margin-block-start", "scroll-snap-margin-block-end"],
  "scroll-snap-margin-inline": ["scroll-snap-margin-inline-start", "scroll-snap-margin-inline-end"],
  // CSS Speech Module: https://www.w3.org/TR/css3-speech/
  cue: ["cue-before", "cue-after"],
  pause: ["pause-before", "pause-after"],
  rest: ["rest-before", "rest-after"],
  // CSS Text Decoration Module Level 3: https://www.w3.org/TR/css-text-decor-3/
  "text-decoration": ["text-decoration-line", "text-decoration-style", "text-decoration-color"],
  "text-emphasis": ["text-emphasis-style", "text-emphasis-color"],
  // CSS Animations (WD): https://www.w3.org/TR/css3-animations
  animation: ["animation-name", "animation-duration", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-play-state"],
  // CSS Transitions (WD): https://www.w3.org/TR/css3-transitions/
  transition: ["transition-property", "transition-duration", "transition-timing-function", "transition-delay"]
};
function validateNoMixedHand(style) {
  var hyphenatedProperties = Object.keys(style).reduce(function (acc, property) {
    acc[hyphenateStyleName(property)] = property;
    return acc;
  }, {});
  var mixed = [];

  for (var property in hyphenatedProperties) {
    if (property in shorthandMap) {
      for (var _iterator = shorthandMap[property], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _longhand = _ref;

        if (_longhand in hyphenatedProperties) {
          var long = hyphenatedProperties[_longhand];
          var short = hyphenatedProperties[property];
          mixed.push({
            shorthand: {
              property: short,
              value: style[short]
            },
            longhand: {
              property: long,
              value: style[long]
            }
          });
        }
      }
    }
  }

  return mixed;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function injectStylePrefixed(styleCache, styles, media, pseudo) {
  var cache = styleCache.getCache(media);
  var classString = "";

  for (var originalKey in styles) {
    var originalVal = styles[originalKey];

    if (originalVal === void 0 || originalVal === null) {
      continue;
    }

    if (_typeof(originalVal) !== "object") {
      // Non-null and non-undefined primitive value
      if (true) {
        validateValueType(originalVal, originalKey);
      }

      var propValPair = hyphenateStyleName(originalKey) + ":" + originalVal;
      var key = "" + pseudo + propValPair;
      var cachedId = cache.cache[key];

      if (cachedId !== void 0) {
        // cache hit
        classString += " " + cachedId;
        continue;
      } else {
        var _prefix;

        // cache miss
        var block = "";
        var prefixed = Object(inline_style_prefixer__WEBPACK_IMPORTED_MODULE_0__["prefix"])((_prefix = {}, _prefix[originalKey] = originalVal, _prefix));

        for (var prefixedKey in prefixed) {
          var prefixedVal = prefixed[prefixedKey];

          var prefixedValType = _typeof(prefixedVal);

          if (prefixedValType === "string" || prefixedValType === "number") {
            var prefixedPair = hyphenateStyleName(prefixedKey) + ":" + prefixedVal;

            if (prefixedPair !== propValPair) {
              block += prefixedPair + ";";
            }
          } else if (Array.isArray(prefixedVal)) {
            var hyphenated = hyphenateStyleName(prefixedKey);

            for (var i = 0; i < prefixedVal.length; i++) {
              var _prefixedPair = hyphenated + ":" + prefixedVal[i];

              if (_prefixedPair !== propValPair) {
                block += _prefixedPair + ";";
              }
            }
          }
        }

        block += propValPair; // ensure original prop/val is last (for hydration)

        var id = cache.addValue(key, {
          pseudo: pseudo,
          block: block
        });
        classString += " " + id;
      }
    } else {
      // Non-null object value
      if (originalKey[0] === ":") {
        classString += " " + injectStylePrefixed(styleCache, originalVal, media, pseudo + originalKey);
      } else if (originalKey.substring(0, 6) === "@media") {
        classString += " " + injectStylePrefixed(styleCache, originalVal, originalKey.substr(7), pseudo);
      }
    }
  }

  if (true) {
    var conflicts = validateNoMixedHand(styles);

    if (conflicts.length) {
      conflicts.forEach(function (_ref) {
        var _JSON$stringify, _JSON$stringify2;

        var shorthand = _ref.shorthand,
            longhand = _ref.longhand;
        var short = JSON.stringify((_JSON$stringify = {}, _JSON$stringify[shorthand.property] = shorthand.value, _JSON$stringify));
        var long = JSON.stringify((_JSON$stringify2 = {}, _JSON$stringify2[longhand.property] = longhand.value, _JSON$stringify2)); // eslint-disable-next-line no-console

        console.warn("Styles `" + short + "` and `" + long + "` in object yielding class \"" + classString.slice(1) + "\" may result in unexpected behavior. Mixing shorthand and longhand properties within the same style object is unsupported with atomic rendering.");
      });
    }
  } // remove leading space


  return classString.slice(1);
}

function validateValueType(value, key) {
  if (value === null || Array.isArray(value) || typeof value !== "number" && typeof value !== "string") {
    throw new Error("Unsupported style value: " + JSON.stringify(value) + " used in property " + JSON.stringify(key));
  }
}

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

/* eslint-disable no-console */
var validAnimationState = /^(from|to|\+?(\d*\.)?\d+%)(\s*,\s*(from|to|\+?(\d*\.)?\d+%))*$/;
function validateKeyframesObject(keyframes) {
  var valid = true;

  for (var animationState in keyframes) {
    var value = keyframes[animationState];

    if (!validAnimationState.test(animationState)) {
      valid = false;
      console.warn("Warning: property \"" + animationState + "\" in keyframes object " + JSON.stringify(keyframes) + " is not a valid. Must be \"from\", \"to\", or a percentage.");
    }

    if (_typeof$1(value) !== "object") {
      valid = false;
      console.warn("Warning: value for \"" + animationState + "\" property in keyframes object " + JSON.stringify(keyframes) + " must be an object. Instead it was a " + _typeof$1(value) + ".");
    }

    if (!valid) {
      console.warn("Warning: object used as value for \"animationName\" style is invalid:", keyframes);
    }
  }
}

function atomicSelector(id, pseudo) {
  var selector = "." + id;

  if (pseudo) {
    selector += pseudo;
  }

  return selector;
}
function keyframesToBlock(keyframes) {
  if (true) {
    validateKeyframesObject(keyframes);
  }

  if ( true && typeof Object.getPrototypeOf(keyframes) !== "undefined") {
    if (Object.getPrototypeOf(keyframes) !== Object.getPrototypeOf({})) {
      // eslint-disable-next-line no-console
      console.warn("Only plain objects should be used as animation values. Unexpectedly recieved:", keyframes);
    }
  }

  var result = "";

  for (var animationState in keyframes) {
    result += animationState + "{" + declarationsToBlock(keyframes[animationState]) + "}";
  }

  return result;
}
function declarationsToBlock(style) {
  var css = "";

  for (var prop in style) {
    var val = style[prop];

    if (typeof val === "string" || typeof val === "number") {
      css += hyphenateStyleName(prop) + ":" + val + ";";
    }
  } // trim trailing semicolon


  return css.slice(0, -1);
}
function keyframesBlockToRule(id, block) {
  return "@keyframes " + id + "{" + block + "}";
}
function fontFaceBlockToRule(id, block) {
  return "@font-face{font-family:" + id + ";" + block + "}";
}
function styleBlockToRule(selector, block) {
  return selector + "{" + block + "}";
}

/* eslint-env browser */
var insertRuleIntoDevtools = function insertRuleIntoDevtools(selector, block) {
  // start after the . combinator and cut at the first : if there is one to cut out the pseudo classes
  var key = selector.substring(1, selector.indexOf(":") !== -1 ? selector.indexOf(":") : selector.length);
  var styles = {}; // split the declaration to catch vendor prefixing

  for (var _iterator = block.split(";"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _decl = _ref;
    if (_decl.trim() !== "" && !window.__STYLETRON_DEVTOOLS__.atomicMap[key]) styles[_decl.substring(0, _decl.indexOf(":"))] = _decl.substring(_decl.indexOf(":") + 1, _decl.length);
  }

  window.__STYLETRON_DEVTOOLS__.atomicMap[key] = styles;
};
var hydrateDevtoolsRule = function hydrateDevtoolsRule(cssString) {
  var id = cssString.substring(0, 3);
  var block = cssString.substring(4, cssString.length - 1);
  insertRuleIntoDevtools(id, block);
};

/* eslint-env browser */
var STYLES_HYDRATOR = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g;
var KEYFRAMES_HYRDATOR = /@keyframes ([^{]+)\{((?:[^{]+\{[^}]*\})*)\}/g;
var FONT_FACE_HYDRATOR = /@font-face\{font-family:([^;]+);([^}]*)\}/g;

function hydrateStyles(cache, hydrator, css) {
  var match;

  while (match = hydrator.exec(css)) {
    var _match = match,
        id = _match[1],
        pseudo = _match[2],
        key = _match[3];

    if ( true && window.__STYLETRON_DEVTOOLS__) {
      hydrateDevtoolsRule(match[0]);
    }

    var fullKey = pseudo ? "" + pseudo + key : key;
    cache.cache[fullKey] = id; // set cache without triggering side effects

    cache.idGenerator.increment(); // increment id
  }
}

function hydrate(cache, hydrator, css) {
  var match;

  while (match = hydrator.exec(css)) {
    var _match2 = match,
        id = _match2[1],
        key = _match2[2];

    if ( true && window.__STYLETRON_DEVTOOLS__) {
      hydrateDevtoolsRule(match[0]);
    }

    cache.cache[key] = id; // set cache without triggering side effects

    cache.idGenerator.increment(); // increment id
  }
}

var StyletronClient =
/*#__PURE__*/
function () {
  function StyletronClient(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    this.styleElements = {};
    var styleIdGenerator = new SequentialIDGenerator(opts.prefix);

    var onNewStyle = function onNewStyle(cache, id, value) {
      var pseudo = value.pseudo,
          block = value.block;
      var sheet = _this.styleElements[cache.key].sheet;
      var selector = atomicSelector(id, pseudo);
      var rule = styleBlockToRule(selector, block);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);

        if ( true && window.__STYLETRON_DEVTOOLS__) {
          insertRuleIntoDevtools(selector, block);
        }
      } catch (e) {
        if (true) {
          // eslint-disable-next-line no-console
          console.warn("Failed to inject CSS: \"" + rule + "\". Perhaps this has invalid or un-prefixed properties?");
        }
      }
    }; // Setup style cache


    this.styleCache = new MultiCache(styleIdGenerator, function (media, _cache, insertBeforeMedia) {
      var styleElement = document.createElement("style");
      styleElement.media = media;

      if (insertBeforeMedia === void 0) {
        _this.container.appendChild(styleElement);
      } else {
        var insertBeforeIndex = findSheetIndexWithMedia(_this.container.children, insertBeforeMedia);

        _this.container.insertBefore(styleElement, _this.container.children[insertBeforeIndex]);
      }

      _this.styleElements[media] = styleElement;
    }, onNewStyle);
    this.keyframesCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.styleCache.getCache("");

      var sheet = _this.styleElements[""].sheet;
      var rule = keyframesBlockToRule(id, keyframesToBlock(value));

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          // eslint-disable-next-line no-console
          console.warn("Failed to inject CSS: \"" + rule + "\". Perhaps this has invalid or un-prefixed properties?");
        }
      }
    });
    this.fontFaceCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.styleCache.getCache("");

      var sheet = _this.styleElements[""].sheet;
      var rule = fontFaceBlockToRule(id, declarationsToBlock(value));

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          // eslint-disable-next-line no-console
          console.warn("Failed to inject CSS: \"" + rule + "\". Perhaps this has invalid or un-prefixed properties?");
        }
      }
    });

    if (opts.container) {
      this.container = opts.container;
    } // Hydrate


    if (opts.hydrate && opts.hydrate.length > 0) {
      // infer container from parent element
      if (!this.container) {
        var parentElement = opts.hydrate[0].parentElement;

        if (parentElement !== null && parentElement !== void 0) {
          this.container = parentElement;
        }
      }

      for (var i = 0; i < opts.hydrate.length; i++) {
        var element = opts.hydrate[i];
        var hydrateType = element.dataset.hydrate;

        if (hydrateType === "font-face") {
          hydrate(this.fontFaceCache, FONT_FACE_HYDRATOR, element.textContent);
          continue;
        }

        if (hydrateType === "keyframes") {
          hydrate(this.keyframesCache, KEYFRAMES_HYRDATOR, element.textContent);
          continue;
        }

        var key = element.media ? element.media : "";
        this.styleElements[key] = element;
        var cache = new Cache(styleIdGenerator, onNewStyle);
        cache.key = key;
        hydrateStyles(cache, STYLES_HYDRATOR, element.textContent);
        this.styleCache.sortedCacheKeys.push(key);
        this.styleCache.caches[key] = cache;
      }
    }

    if (!this.container) {
      if (document.head === null) {
        throw new Error("No container provided and `document.head` was null");
      }

      this.container = document.head;
    }
  }

  var _proto = StyletronClient.prototype;

  _proto.renderStyle = function renderStyle(style) {
    return injectStylePrefixed(this.styleCache, style, "", "");
  };

  _proto.renderFontFace = function renderFontFace(fontFace) {
    var key = declarationsToBlock(fontFace);
    return this.fontFaceCache.addValue(key, fontFace);
  };

  _proto.renderKeyframes = function renderKeyframes(keyframes) {
    var key = keyframesToBlock(keyframes);
    return this.keyframesCache.addValue(key, keyframes);
  };

  return StyletronClient;
}();

function findSheetIndexWithMedia(children, media) {
  var index = 0;

  for (; index < children.length; index++) {
    var child = children[index];

    if (child.tagName === "STYLE" && child.media === media) {
      return index;
    }
  }

  return -1;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyletronServer =
/*#__PURE__*/
function () {
  function StyletronServer(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    this.styleRules = {
      "": ""
    };
    this.styleCache = new MultiCache(new SequentialIDGenerator(opts.prefix), function (media) {
      _this.styleRules[media] = "";
    }, function (cache, id, value) {
      var pseudo = value.pseudo,
          block = value.block;
      _this.styleRules[cache.key] += styleBlockToRule(atomicSelector(id, pseudo), block);
    });
    this.fontFaceRules = "";
    this.fontFaceCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.fontFaceRules += fontFaceBlockToRule(id, declarationsToBlock(value));
    });
    this.keyframesRules = "";
    this.keyframesCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.keyframesRules += keyframesBlockToRule(id, keyframesToBlock(value));
    });
  }

  var _proto = StyletronServer.prototype;

  _proto.renderStyle = function renderStyle(style) {
    return injectStylePrefixed(this.styleCache, style, "", "");
  };

  _proto.renderFontFace = function renderFontFace(fontFace) {
    var key = JSON.stringify(fontFace);
    return this.fontFaceCache.addValue(key, fontFace);
  };

  _proto.renderKeyframes = function renderKeyframes(keyframes) {
    var key = JSON.stringify(keyframes);
    return this.keyframesCache.addValue(key, keyframes);
  };

  _proto.getStylesheets = function getStylesheets() {
    return [].concat(this.keyframesRules.length ? [{
      css: this.keyframesRules,
      attrs: {
        "data-hydrate": "keyframes"
      }
    }] : [], this.fontFaceRules.length ? [{
      css: this.fontFaceRules,
      attrs: {
        "data-hydrate": "font-face"
      }
    }] : [], sheetify(this.styleRules, this.styleCache.getSortedCacheKeys()));
  };

  _proto.getStylesheetsHtml = function getStylesheetsHtml(className) {
    if (className === void 0) {
      className = "_styletron_hydrate_";
    }

    return generateHtmlString(this.getStylesheets(), className);
  };

  _proto.getCss = function getCss() {
    return this.keyframesRules + this.fontFaceRules + stringify(this.styleRules, this.styleCache.getSortedCacheKeys());
  };

  return StyletronServer;
}();

function generateHtmlString(sheets, className) {
  var html = "";

  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];

    var _sheet$attrs = sheet.attrs,
        originalClassName = _sheet$attrs.class,
        rest = _objectWithoutProperties(_sheet$attrs, ["class"]);

    var attrs = Object.assign({
      class: originalClassName ? className + " " + originalClassName : className
    }, rest);
    html += "<style" + attrsToString(attrs) + ">" + sheet.css + "</style>";
  }

  return html;
}

function attrsToString(attrs) {
  var result = "";

  for (var attr in attrs) {
    var value = attrs[attr];

    if (value === true) {
      result += " " + attr;
    } else if (value !== false) {
      result += " " + attr + "=\"" + value + "\"";
    }
  }

  return result;
}

function stringify(styleRules, sortedCacheKeys) {
  var result = "";
  sortedCacheKeys.forEach(function (cacheKey) {
    var rules = styleRules[cacheKey];

    if (cacheKey !== "") {
      result += "@media " + cacheKey + "{" + rules + "}";
    } else {
      result += rules;
    }
  });
  return result;
}

function sheetify(styleRules, sortedCacheKeys) {
  if (sortedCacheKeys.length === 0) {
    return [{
      css: "",
      attrs: {}
    }];
  }

  var sheets = [];
  sortedCacheKeys.forEach(function (cacheKey) {
    // omit media (cacheKey) attribute if empty
    var attrs = cacheKey === "" ? {} : {
      media: cacheKey
    };
    sheets.push({
      css: styleRules[cacheKey],
      attrs: attrs
    });
  });
  return sheets;
}


//# sourceMappingURL=browser.es5.es.js.map


/***/ }),

/***/ "./node_modules/styletron-react/dist/browser.es5.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/styletron-react/dist/browser.es5.es.js ***!
  \*************************************************************/
/*! exports provided: DebugEngine, Provider, DevConsumer, useStyletron, createStyled, styled, withTransform, withStyle, withStyleDeep, withWrapper, autoComposeShallow, autoComposeDeep, staticComposeShallow, staticComposeDeep, dynamicComposeShallow, dynamicComposeDeep, createShallowMergeReducer, createDeepMergeReducer, composeStatic, composeDynamic, createStyledElementComponent, resolveStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugEngine", function() { return DebugEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevConsumer", function() { return DevConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyletron", function() { return useStyletron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyled", function() { return createStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTransform", function() { return withTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyleDeep", function() { return withStyleDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWrapper", function() { return withWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeShallow", function() { return autoComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeDeep", function() { return autoComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeShallow", function() { return staticComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeDeep", function() { return staticComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeShallow", function() { return dynamicComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeDeep", function() { return dynamicComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShallowMergeReducer", function() { return createShallowMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeepMergeReducer", function() { return createDeepMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeStatic", function() { return composeStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeDynamic", function() { return composeDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledElementComponent", function() { return createStyledElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveStyle", function() { return resolveStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-standard */ "./node_modules/styletron-standard/dist/browser.es5.es.js");



/* eslint-env browser */

/* global module */
function addDebugMetadata(instance, stackIndex) {
  var _ref = new Error("stacktrace source"),
      stack = _ref.stack,
      stacktrace = _ref.stacktrace,
      message = _ref.message;

  instance.debug = {
    stackInfo: {
      stack: stack,
      stacktrace: stacktrace,
      message: message
    },
    stackIndex: stackIndex
  };
} // DEVTOOLS SETUP

var setupDevtoolsExtension = function setupDevtoolsExtension() {
  var atomicMap = {};
  var extensionsMap = new Map();
  var stylesMap = new Map();

  var getStyles = function getStyles(className) {
    var styles = {};

    if (typeof className !== "string") {
      return styles;
    }

    if (stylesMap.has(className)) {
      styles.styles = stylesMap.get(className);
      var classList = className.split(" ");

      if (classList.length) {
        var classes = {};
        classList.forEach(function (singleClassName) {
          classes[singleClassName] = atomicMap[singleClassName];
        });
        styles.classes = classes;
      }

      if (extensionsMap.has(className)) {
        var extension = extensionsMap.get(className);
        styles.extends = extension;
      }

      return styles;
    }
  };

  window.__STYLETRON_DEVTOOLS__ = {
    atomicMap: atomicMap,
    extensionsMap: extensionsMap,
    stylesMap: stylesMap,
    getStyles: getStyles
  };
};

var BrowserDebugEngine =
/*#__PURE__*/
function () {
  function BrowserDebugEngine(worker) {
    if (!worker) {
      var workerBlob = new Blob(["importScripts(\"https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/worker.js\")"], {
        type: "application/javascript"
      });
      worker = new Worker(URL.createObjectURL(workerBlob));
      worker.postMessage({
        id: "init_wasm",
        url: "https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/mappings.wasm"
      });
      worker.postMessage({
        id: "set_render_interval",
        interval: 120
      });

      if (true) {
        module.hot.addStatusHandler(function (status) {
          if (status === "dispose") {
            worker.postMessage({
              id: "invalidate"
            });
          }
        });
      }
    }

    this.worker = worker;
    this.counter = 0;

    this.worker.onmessage = function (msg) {
      var _msg$data = msg.data,
          id = _msg$data.id,
          css = _msg$data.css;

      if (id === "render_css" && css) {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      }
    };
  }

  var _proto = BrowserDebugEngine.prototype;

  _proto.debug = function debug(_ref2) {
    var stackIndex = _ref2.stackIndex,
        stackInfo = _ref2.stackInfo;
    var className = "__debug-" + this.counter++;
    this.worker.postMessage({
      id: "add_mapped_class",
      className: className,
      stackInfo: stackInfo,
      stackIndex: stackIndex
    });
    return className;
  };

  return BrowserDebugEngine;
}();

var DebugEngine = BrowserDebugEngine;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint-env browser */

/* eslint-disable no-unused-vars, no-redeclare, no-shadow */
var noopEngine = {
  renderStyle: function renderStyle() {
    return "";
  },
  renderKeyframes: function renderKeyframes() {
    return "";
  },
  renderFontFace: function renderFontFace() {
    return "";
  }
};
var StyletronContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(noopEngine);
var HydrationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
var DebugEngineContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var DevProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DevProvider, _React$Component);

  function DevProvider(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      hydrating: Boolean(props.debugAfterHydration)
    };
    return _this;
  }

  var _proto = DevProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    {
      if (this.state.hydrating === true) {
        this.setState({
          hydrating: false
        });
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StyletronContext.Provider, {
      value: this.props.value
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DebugEngineContext.Provider, {
      value: this.props.debug
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydrationContext.Provider, {
      value: this.state.hydrating
    }, this.props.children)));
  };

  return DevProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Provider =  true ? DevProvider : undefined;

if ( true && !window.__STYLETRON_DEVTOOLS__) {
  setupDevtoolsExtension();
} // TODO: more precise types


function DevConsumer(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StyletronContext.Consumer, null, function (styletronEngine) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DebugEngineContext.Consumer, null, function (debugEngine) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydrationContext.Consumer, null, function (hydrating) {
        return props.children(styletronEngine, debugEngine, hydrating);
      });
    });
  });
}
var Consumer =  true ? DevConsumer : undefined;

function checkNoopEngine(engine) {
  // if no engine provided, we default to no-op, handy for tests
  // however, print a warning in other envs
  if (true) {
    engine === noopEngine && // eslint-disable-next-line no-console
    console.warn( true ? "\nStyletron has been switched to a no-op (test) mode.\n\nA Styletron styled component was rendered, but no Styletron engine instance was provided in React context.\n\nDid you forget to provide a Styletron engine instance to React context via using the Styletron provider component?\n\nNote: Providers and Consumers must come from the exact same React.createContext call to work.\nIf your app has multiple instances of the \"styletron-react\" package in your node_module tree,\nyour Provider may be coming from a different React.createContext call, which means the styled components\nwill not recieve the provided engine instance. This scenario can arise, for example, when using \"npm link\".\n" : undefined);
  }
}

function useStyletron() {
  var styletronEngine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StyletronContext);
  var debugEngine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DebugEngineContext);
  var hydrating = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(HydrationContext);
  checkNoopEngine(styletronEngine);
  var debugClassName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])("");
  var prevDebugClassNameDeps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  return [function css(style) {
    var className = Object(styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"])(style, styletronEngine);

    if (false) {}

    var _ref = new Error("stacktrace source"),
        stack = _ref.stack,
        message = _ref.message;

    var nextDeps = [debugEngine, hydrating];

    if (prevDebugClassNameDeps[0] !== nextDeps[0] || prevDebugClassNameDeps[1] !== nextDeps[1]) {
      if (debugEngine && !hydrating) {
        debugClassName.current = debugEngine.debug({
          stackInfo: {
            stack: stack,
            message: message
          },
          stackIndex: 1
        });
      }

      prevDebugClassNameDeps.current = nextDeps;
    }

    if (debugClassName.current) {
      return debugClassName.current + " " + className;
    }

    return className;
  }];
}
function createStyled(_ref2) {
  var getInitialStyle$$1 = _ref2.getInitialStyle,
      driver$$1 = _ref2.driver,
      wrapper = _ref2.wrapper;

  function styled(base, styleArg) {
    if (true) {
      if (base.__STYLETRON__) {
        /* eslint-disable no-console */
        console.warn("It appears you are passing a styled component into `styled`.");
        console.warn("For composition with existing styled components, use `withStyle` or `withTransform` instead.");
        /* eslint-enable no-console */
      }
    }

    var baseStyletron = {
      reducers: [],
      base: base,
      driver: driver$$1,
      getInitialStyle: getInitialStyle$$1,
      wrapper: wrapper
    };

    if (true) {
      addDebugMetadata(baseStyletron, 2);
    }

    return createStyledElementComponent(autoComposeShallow(baseStyletron, styleArg));
  }

  return styled;
}
var styled = createStyled({
  getInitialStyle: styletron_standard__WEBPACK_IMPORTED_MODULE_1__["getInitialStyle"],
  driver: styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"],
  wrapper: function wrapper(Component$$1) {
    return Component$$1;
  }
});
function withTransform(component, transformer) {
  var styletron = component.__STYLETRON__;

  if (true) {
    addDebugMetadata(styletron, 2);
  }

  return createStyledElementComponent(composeDynamic(styletron, transformer));
}
var withStyle = withStyleDeep;
function withStyleDeep(component, styleArg) {
  var styletron = component.__STYLETRON__;

  if (true) {
    if (!styletron) {
      /* eslint-disable no-console */
      console.warn("The first parameter to `withStyle` must be a styled component (without extra wrappers).");
      /* eslint-enable no-console */
    }
  }

  if (true) {
    addDebugMetadata(styletron, 2);
    return createStyledElementComponent(addExtension(autoComposeDeep(styletron, styleArg), component, styleArg));
  } else {}
}
function withWrapper(component, wrapper) {
  var styletron = component.__STYLETRON__;

  if (true) {
    if (!styletron) {
      /* eslint-disable no-console */
      console.warn("The first parameter to `withWrapper` must be a styled component (without extra wrappers).");
      /* eslint-enable no-console */
    }
  }

  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: wrapper,
    reducers: styletron.reducers
  };

  if (true) {
    addDebugMetadata(composed, 2);
  }

  return createStyledElementComponent(composed);
}
function autoComposeShallow(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeShallow(styletron, styleArg);
  }

  return staticComposeShallow(styletron, styleArg);
}

function addExtension(composed, component, styleArg) {
  return Object.assign({}, composed, {
    ext: {
      with: styleArg,
      name: component.displayName,
      base: component.__STYLETRON__.base,
      getInitialStyle: component.__STYLETRON__.reducers.length ? component.__STYLETRON__.reducers[0].reducer : component.__STYLETRON__.getInitialStyle
    }
  });
}

function autoComposeDeep(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeDeep(styletron, styleArg);
  }

  return staticComposeDeep(styletron, styleArg);
}
function staticComposeShallow(styletron, style) {
  return composeStatic(styletron, createShallowMergeReducer(style));
}
function staticComposeDeep(styletron, style) {
  return composeStatic(styletron, createDeepMergeReducer(style));
}
function dynamicComposeShallow(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return shallowMerge(style, styleFn(props));
  });
}
function dynamicComposeDeep(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return deepMerge(style, styleFn(props));
  });
}
function createShallowMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return shallowMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createShallowMergeReducer,
    style: style
  };
}
function createDeepMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return deepMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createDeepMergeReducer,
    style: style
  };
}
function composeStatic(styletron, reducerContainer) {
  if (styletron.reducers.length === 0) {
    var style = reducerContainer.reducer(styletron.getInitialStyle());
    var result = {
      reducers: styletron.reducers,
      base: styletron.base,
      driver: styletron.driver,
      wrapper: styletron.wrapper,
      getInitialStyle: function getInitialStyle$$1() {
        return style;
      }
    };

    if (true) {
      result.debug = styletron.debug;
    }

    return result;
  } else {
    var last = styletron.reducers[0];

    if (last.assignmentCommutative === true && reducerContainer.assignmentCommutative === true) {
      var composed = reducerContainer.reducer(last.style);
      var _result = {
        getInitialStyle: styletron.getInitialStyle,
        base: styletron.base,
        driver: styletron.driver,
        wrapper: styletron.wrapper,
        reducers: [last.factory(composed)].concat(styletron.reducers.slice(1))
      };

      if (true) {
        _result.debug = styletron.debug;
      }

      return _result;
    }

    return composeDynamic(styletron, reducerContainer.reducer);
  }
}
function composeDynamic(styletron, reducer) {
  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: styletron.wrapper,
    reducers: [{
      assignmentCommutative: false,
      reducer: reducer
    }].concat(styletron.reducers)
  };

  if (true) {
    composed.debug = styletron.debug;
  }

  return composed;
}
function createStyledElementComponent(styletron) {
  var reducers = styletron.reducers,
      base = styletron.base,
      driver$$1 = styletron.driver,
      wrapper = styletron.wrapper,
      getInitialStyle$$1 = styletron.getInitialStyle,
      ext = styletron.ext;

  if (true) {
    var debugStackInfo, debugStackIndex;

    if (styletron.debug) {
      debugStackInfo = styletron.debug.stackInfo;
      debugStackIndex = styletron.debug.stackIndex;
    }
  }

  if (true) {
    var debugClassName;
  }

  var StyledElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (styletron, debugEngine, hydrating) {
      checkNoopEngine(styletron);
      var elementProps = omitPrefixedKeys(props);
      var style = resolveStyle(getInitialStyle$$1, reducers, props);

      if (props.$style) {
        if (typeof props.$style === "function") {
          style = deepMerge(style, props.$style(props));
        } else {
          style = deepMerge(style, props.$style);
        }
      }

      var styleClassString = driver$$1(style, styletron);
      var Element = props.$as ? props.$as : base;
      elementProps.className = props.className ? props.className + " " + styleClassString : styleClassString;

      if ( true && debugEngine && !hydrating) {
        if (!debugClassName) {
          debugClassName = debugEngine.debug({
            stackInfo: debugStackInfo,
            stackIndex: debugStackIndex
          });
        }

        var joined = debugClassName + " " + elementProps.className;
        elementProps.className = joined;
      }

      if ( true && window.__STYLETRON_DEVTOOLS__) {
        window.__STYLETRON_DEVTOOLS__.stylesMap.set(elementProps.className, style);

        if (ext) {
          window.__STYLETRON_DEVTOOLS__.extensionsMap.set(elementProps.className, {
            base: ext.base,
            displayName: ext.name,
            initialStyles: ext.getInitialStyle({}, props),
            styleOverrides: typeof ext.with === "function" ? ext.with(props) : ext.with
          });
        }
      }

      if (props.$ref) {
        // eslint-disable-next-line no-console
        console.warn("The prop `$ref` has been deprecated. Use `ref` instead. Refs are now forwarded with React.forwardRef.");
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Element, _extends({}, elementProps, {
        ref: ref || props.$ref
      }));
    });
  });
  var Wrapped = wrapper(StyledElement);
  Wrapped.__STYLETRON__ = {
    base: base,
    reducers: reducers,
    driver: driver$$1,
    wrapper: wrapper,
    getInitialStyle: getInitialStyle$$1
  };

  if (true) {
    var displayName;

    if (typeof base === "string") {
      displayName = base;
    } else if (base.displayName) {
      displayName = base.displayName;
    } else if (base.name) {
      displayName = base.name;
    } else {
      displayName = "Unknown";
    }

    Wrapped.displayName = "Styled(" + displayName + ")";
  }

  return Wrapped;
} // Utility functions

function resolveStyle(getInitialStyle$$1, reducers, props) {
  var result = getInitialStyle$$1();
  var i = reducers.length;

  while (i--) {
    // Cast to allow passing unused props param in case of static reducer
    var reducer = reducers[i].reducer;
    result = reducer(result, props);
  }

  return result;
}

function isObject(x) {
  return _typeof(x) === "object" && x !== null;
}

function omitPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== "$") {
      result[key] = source[key];
    }
  }

  return result;
}

function deepMerge(a, b) {
  var result = assign({}, a);

  for (var key in b) {
    var val = b[key];

    if (isObject(val) && isObject(a[key])) {
      result[key] = deepMerge(a[key], val);
    } else {
      result[key] = val;
    }
  }

  return result;
}

function shallowMerge(a, b) {
  return assign(assign({}, a), b);
}

function assign(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }

  return target;
}


//# sourceMappingURL=browser.es5.es.js.map


/***/ }),

/***/ "./node_modules/styletron-standard/dist/browser.es5.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/styletron-standard/dist/browser.es5.es.js ***!
  \****************************************************************/
/*! exports provided: driver, getInitialStyle, renderDeclarativeRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driver", function() { return driver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialStyle", function() { return getInitialStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDeclarativeRules", function() { return renderDeclarativeRules; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Note: $Shape is needed to make polymorphic withStyle refinements work correctly
// It seems functions satisfy this type without $Shape
// See: https://github.com/facebook/flow/issues/6784
//
//
//
//
//
//
function driver(style, styletron) {
  var tx = renderDeclarativeRules(style, styletron);
  return styletron.renderStyle(tx);
}
function getInitialStyle() {
  return {};
}
function renderDeclarativeRules(style, styletron) {
  for (var key in style) {
    var val = style[key];

    if (key === "animationName" && typeof val !== "string") {
      style.animationName = styletron.renderKeyframes(val);
      continue;
    }

    if (key === "fontFamily" && typeof val !== "string") {
      if (Array.isArray(val)) {
        var result = "";

        for (var _iterator = val, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var _font = _ref;

          if (_typeof(_font) === "object") {
            result += styletron.renderFontFace(_font) + ",";
          } else if (typeof _font === "string") {
            result += _font + ",";
          }
        }

        style.fontFamily = result.slice(0, -1);
        continue;
      } else {
        style.fontFamily = styletron.renderFontFace(val);
        continue;
      }
    }

    if (_typeof(val) === "object" && val !== null) {
      renderDeclarativeRules(val, styletron);
    }
  }

  return style;
}


//# sourceMappingURL=browser.es5.es.js.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styletron */ "./styletron.js");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");








var _jsxFileName = "/home/koceila/Documents/Lab/Project/ecomlib-base/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

var makeStore = _redux_configureStore__WEBPACK_IMPORTED_MODULE_15__["default"];

var EcomlibApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(EcomlibApp, _App);

  function EcomlibApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, EcomlibApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(EcomlibApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(EcomlibApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "EcomLib | Find the Best E-commerce Courses & Tutorials")), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return EcomlibApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__["default"])(makeStore)(EcomlibApp));

/***/ }),

/***/ "./styletron.js":
/*!**********************!*\
  !*** ./styletron.js ***!
  \**********************/
/*! exports provided: styletron, debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styletron", function() { return styletron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styletron-engine-atomic */ "./node_modules/styletron-engine-atomic/dist/browser.es5.es.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");



var getHydrateClass = function getHydrateClass() {
  return document.getElementsByClassName('_styletron_hydrate_');
};

var styletron = false ? undefined : new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__["Client"]({
  hydrate: getHydrateClass()
});
var debug =  false ? undefined : new styletron_react__WEBPACK_IMPORTED_MODULE_1__["DebugEngine"]();

/***/ })

})
//# sourceMappingURL=_app.js.e381d94eab9ae2fe7819.hot-update.js.map