webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/baseui/esm/button/button-internals.js":
/*!************************************************************!*\
  !*** ./node_modules/baseui/esm/button/button-internals.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonInternals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components.js */ "./node_modules/baseui/esm/button/styled-components.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/baseui/esm/button/utils.js");
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/overrides.js */ "./node_modules/baseui/esm/helpers/overrides.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




function ButtonInternals(props) {
  var children = props.children,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      startEnhancer = props.startEnhancer,
      endEnhancer = props.endEnhancer;

  var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__["getOverrides"])(overrides.StartEnhancer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["StartEnhancer"]),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      StartEnhancer = _getOverrides2[0],
      startEnhancerProps = _getOverrides2[1];

  var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_3__["getOverrides"])(overrides.EndEnhancer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["EndEnhancer"]),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      EndEnhancer = _getOverrides4[0],
      endEnhancerProps = _getOverrides4[1];

  var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getSharedProps"])(props);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, startEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StartEnhancer, _extends({}, sharedProps, startEnhancerProps), typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer), children, endEnhancer && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EndEnhancer, _extends({}, sharedProps, endEnhancerProps), typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer));
}

/***/ }),

/***/ "./node_modules/baseui/esm/button/button.js":
/*!**************************************************!*\
  !*** ./node_modules/baseui/esm/button/button.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components.js */ "./node_modules/baseui/esm/button/styled-components.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/baseui/esm/button/utils.js");
/* harmony import */ var _button_internals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-internals.js */ "./node_modules/baseui/esm/button/button-internals.js");
/* harmony import */ var _default_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-props.js */ "./node_modules/baseui/esm/button/default-props.js");
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/overrides.js */ "./node_modules/baseui/esm/helpers/overrides.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/







// eslint-disable-next-line flowtype/no-weak-types
var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "internalOnClick", function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          onClick = _this$props.onClick;

      if (isLoading) {
        return;
      }

      onClick && onClick.apply(void 0, arguments);
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          size = _this$props2.size,
          kind = _this$props2.kind,
          shape = _this$props2.shape,
          isLoading = _this$props2.isLoading,
          isSelected = _this$props2.isSelected,
          startEnhancer = _this$props2.startEnhancer,
          endEnhancer = _this$props2.endEnhancer,
          children = _this$props2.children,
          forwardedRef = _this$props2.forwardedRef,
          restProps = _objectWithoutProperties(_this$props2, ["overrides", "size", "kind", "shape", "isLoading", "isSelected", "startEnhancer", "endEnhancer", "children", "forwardedRef"]); // Get overrides


      var _getOverrides = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.BaseButton, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["BaseButton"]),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          BaseButton = _getOverrides2[0],
          baseButtonProps = _getOverrides2[1];

      var _getOverrides3 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.LoadingSpinner, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinner"]),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          LoadingSpinner = _getOverrides4[0],
          loadingSpinnerProps = _getOverrides4[1];

      var _getOverrides5 = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_5__["getOverrides"])(overrides.LoadingSpinnerContainer, _styled_components_js__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinnerContainer"]),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          LoadingSpinnerContainer = _getOverrides6[0],
          loadingSpinnerContainerProps = _getOverrides6[1];

      var sharedProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getSharedProps"])(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseButton, _extends({
        ref: forwardedRef,
        "data-baseweb": "button"
      }, sharedProps, restProps, baseButtonProps, {
        // Applies last to override passed in onClick
        onClick: this.internalOnClick
      }), isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          opacity: 0,
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_internals_js__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingSpinnerContainer, loadingSpinnerContainerProps, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingSpinner, _extends({}, sharedProps, loadingSpinnerProps)))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_internals_js__WEBPACK_IMPORTED_MODULE_3__["default"], this.props));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Button, "defaultProps", _default_props_js__WEBPACK_IMPORTED_MODULE_4__["defaultProps"]);

var ForwardedButton = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, _extends({
    forwardedRef: ref
  }, props));
});
ForwardedButton.displayName = 'Button';
/* harmony default export */ __webpack_exports__["default"] = (ForwardedButton);

/***/ }),

/***/ "./node_modules/baseui/esm/button/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/baseui/esm/button/constants.js ***!
  \*****************************************************/
/*! exports provided: KIND, SHAPE, SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return KIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return SIZE; });
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var KIND = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  minimal: 'minimal'
};
var SHAPE = {
  "default": 'default',
  pill: 'pill',
  round: 'round',
  square: 'square'
};
var SIZE = {
  "default": 'default',
  compact: 'compact',
  large: 'large'
};

/***/ }),

/***/ "./node_modules/baseui/esm/button/default-props.js":
/*!*********************************************************!*\
  !*** ./node_modules/baseui/esm/button/default-props.js ***!
  \*********************************************************/
/*! exports provided: defaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/button/constants.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var defaultProps = {
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: _constants_js__WEBPACK_IMPORTED_MODULE_0__["KIND"].primary,
  overrides: {},
  shape: _constants_js__WEBPACK_IMPORTED_MODULE_0__["SHAPE"]["default"],
  size: _constants_js__WEBPACK_IMPORTED_MODULE_0__["SIZE"]["default"]
};

/***/ }),

/***/ "./node_modules/baseui/esm/button/index.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/button/index.js ***!
  \*************************************************/
/*! exports provided: Button, KIND, SIZE, SHAPE, StyledBaseButton, StyledStartEnhancer, StyledEndEnhancer, StyledLoadingSpinner, StyledLoadingSpinnerContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ "./node_modules/baseui/esm/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/button/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KIND", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"]; });

/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components.js */ "./node_modules/baseui/esm/button/styled-components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledBaseButton", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["BaseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledStartEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["StartEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledEndEnhancer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["EndEnhancer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLoadingSpinner", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledLoadingSpinnerContainer", function() { return _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerContainer"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/baseui/esm/button/types.js");
/* empty/unused harmony star reexport *//*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
 // Constants

 // Styled elements

 // Types



/***/ }),

/***/ "./node_modules/baseui/esm/button/styled-components.js":
/*!*************************************************************!*\
  !*** ./node_modules/baseui/esm/button/styled-components.js ***!
  \*************************************************************/
/*! exports provided: BaseButton, EndEnhancer, StartEnhancer, LoadingSpinnerContainer, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndEnhancer", function() { return EndEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEnhancer", function() { return StartEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerContainer", function() { return LoadingSpinnerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.js */ "./node_modules/baseui/esm/styles/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/button/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var BaseButton = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', function (_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $kind = _ref.$kind,
      $shape = _ref.$shape,
      $isLoading = _ref.$isLoading,
      $isSelected = _ref.$isSelected,
      $disabled = _ref.$disabled;
  return _objectSpread({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderStyle: 'none',
    textDecoration: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: $theme.colors.buttonDisabledFill,
      color: $theme.colors.buttonDisabledText
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  }, getFontStyles({
    $theme: $theme,
    $size: $size
  }), {}, getBorderRadiiStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getPaddingStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getKindStyles({
    $theme: $theme,
    $kind: $kind,
    $isLoading: $isLoading,
    $isSelected: $isSelected,
    $disabled: $disabled
  }));
});
BaseButton.displayName = "BaseButton";
var EndEnhancer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', $theme.sizing.scale500);
});
EndEnhancer.displayName = "EndEnhancer";
var StartEnhancer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight', $theme.sizing.scale500);
});
StartEnhancer.displayName = "StartEnhancer";
var LoadingSpinnerContainer = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  // To center within parent
  position: 'absolute'
});
LoadingSpinnerContainer.displayName = "LoadingSpinnerContainer";
var LoadingSpinner = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $kind = _ref6.$kind,
      $disabled = _ref6.$disabled;

  var _getLoadingSpinnerCol = getLoadingSpinnerColors({
    $theme: $theme,
    $kind: $kind,
    $disabled: $disabled
  }),
      foreground = _getLoadingSpinnerCol.foreground,
      background = _getLoadingSpinnerCol.background;

  return {
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderStyle: 'solid',
    borderWidth: $theme.sizing.scale0,
    borderTopColor: foreground,
    borderLeftColor: background,
    borderBottomColor: background,
    borderRightColor: background,
    animationDuration: $theme.animation.timing700,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: {
      to: {
        transform: 'rotate(360deg)'
      },
      from: {
        transform: 'rotate(0deg)'
      }
    }
  };
});
LoadingSpinner.displayName = "LoadingSpinner";

function getLoadingSpinnerColors(_ref7) {
  var $theme = _ref7.$theme,
      $kind = _ref7.$kind,
      $disabled = _ref7.$disabled;

  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground
    };
  }

  switch ($kind) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].secondary:
      {
        return {
          foreground: $theme.colors.buttonSecondarySpinnerForeground,
          background: $theme.colors.buttonSecondarySpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].tertiary:
      {
        return {
          foreground: $theme.colors.buttonTertiarySpinnerForeground,
          background: $theme.colors.buttonTertiarySpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].minimal:
      {
        return {
          foreground: $theme.colors.buttonMinimalSpinnerForeground,
          background: $theme.colors.buttonMinimalSpinnerBackground
        };
      }

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].primary:
    default:
      {
        return {
          foreground: $theme.colors.buttonPrimarySpinnerForeground,
          background: $theme.colors.buttonPrimarySpinnerBackground
        };
      }
  }
}

function getBorderRadiiStyles(_ref8) {
  var $theme = _ref8.$theme,
      $size = _ref8.$size,
      $shape = _ref8.$shape;
  var value = $theme.borders.buttonBorderRadius;

  if ($shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].pill) {
    if ($size === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact) {
      value = '30px';
    } else if ($size === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  };
}

function getFontStyles(_ref9) {
  var $theme = _ref9.$theme,
      $size = _ref9.$size;

  switch ($size) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact:
      return $theme.typography.font350;

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large:
      return $theme.typography.font550;

    default:
      return $theme.typography.font450;
  }
}

function getPaddingStyles(_ref10) {
  var $theme = _ref10.$theme,
      $size = _ref10.$size,
      $shape = _ref10.$shape;
  var iconShape = $shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].square || $shape === _constants_js__WEBPACK_IMPORTED_MODULE_1__["SHAPE"].round;

  switch ($size) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].compact:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale500,
        paddingRight: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale500
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["SIZE"].large:
      return {
        paddingTop: $theme.sizing.scale550,
        paddingBottom: $theme.sizing.scale550,
        paddingLeft: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale700,
        paddingRight: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale700
      };

    default:
      return {
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        paddingLeft: iconShape ? $theme.sizing.scale500 : $theme.sizing.scale600,
        paddingRight: iconShape ? $theme.sizing.scale500 : $theme.sizing.scale600
      };
  }
}

function getKindStyles(_ref11) {
  var $theme = _ref11.$theme,
      $isLoading = _ref11.$isLoading,
      $isSelected = _ref11.$isSelected,
      $kind = _ref11.$kind,
      $disabled = _ref11.$disabled;

  if ($disabled) {
    return {};
  }

  switch ($kind) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].primary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimarySelectedText,
          backgroundColor: $theme.colors.buttonPrimarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonPrimaryText,
        backgroundColor: $theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonPrimaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].secondary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonSecondarySelectedText,
          backgroundColor: $theme.colors.buttonSecondarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonSecondaryText,
        backgroundColor: $theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonSecondaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].tertiary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonTertiarySelectedText,
          backgroundColor: $theme.colors.buttonTertiarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonTertiaryText,
        backgroundColor: $theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonTertiaryActive
        }
      };

    case _constants_js__WEBPACK_IMPORTED_MODULE_1__["KIND"].minimal:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonMinimalSelectedText,
          backgroundColor: $theme.colors.buttonMinimalSelectedFill
        };
      }

      return {
        color: $theme.colors.buttonMinimalText,
        backgroundColor: $theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonMinimalActive
        }
      };

    default:
      return {};
  }
}

/***/ }),

/***/ "./node_modules/baseui/esm/button/types.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/button/types.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/button/constants.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


/***/ }),

/***/ "./node_modules/baseui/esm/button/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/button/utils.js ***!
  \*************************************************/
/*! exports provided: getSharedProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedProps", function() { return getSharedProps; });
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function getSharedProps(_ref) {
  var disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      isSelected = _ref.isSelected,
      kind = _ref.kind,
      shape = _ref.shape,
      size = _ref.size;
  return {
    $disabled: disabled,
    $isLoading: isLoading,
    $isSelected: isSelected,
    $kind: kind,
    $shape: shape,
    $size: size
  };
}

/***/ }),

/***/ "./node_modules/baseui/esm/helpers/overrides.js":
/*!******************************************************!*\
  !*** ./node_modules/baseui/esm/helpers/overrides.js ***!
  \******************************************************/
/*! exports provided: getOverride, getOverrideProps, toObjectOverride, getOverrides, mergeOverrides, mergeOverride, mergeConfigurationOverrides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverride", function() { return getOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverrideProps", function() { return getOverrideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObjectOverride", function() { return toObjectOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverrides", function() { return getOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverrides", function() { return mergeOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverride", function() { return mergeOverride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfigurationOverrides", function() { return mergeConfigurationOverrides; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/baseui/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deep-merge.js */ "./node_modules/baseui/esm/utils/deep-merge.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line flowtype/no-weak-types
function getOverride(override) {
  if (Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isValidElementType"])(override)) {
    return override;
  } // Check if override is OverrideObjectT


  if (override && _typeof(override) === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line flowtype/no-weak-types
    return override.component;
  } // null/undefined


  return override;
}
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */

function getOverrideProps(override) {
  if (override && _typeof(override) === 'object') {
    var props = typeof override.props === 'function' ? override.props(override) : override.props;
    return _objectSpread({}, props, {
      $style: override.style
    });
  }

  return {};
}
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */

function toObjectOverride(override) {
  if (Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isValidElementType"])(override)) {
    return {
      // eslint-disable-next-line flowtype/no-weak-types
      component: override
    };
  } // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line flowtype/no-weak-types


  return override || {};
}
/**
 * Get a convenient override array that will always have [component, props]
 */

/* eslint-disable flowtype/no-weak-types */

function getOverrides(override, defaultComponent) {
  var component = getOverride(override) || defaultComponent;
  var props = getOverrideProps(override);
  return [component, props];
}
/* eslint-enable flowtype/no-weak-types */

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */

function mergeOverrides() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allIdentifiers = Object.keys(_objectSpread({}, target, {}, source));
  return allIdentifiers.reduce(function (acc, name) {
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */

function mergeOverride(target, source) {
  // Shallow merge should handle `component`
  var merged = _objectSpread({}, target, {}, source);

  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }

  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }

  return merged;
}
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */

function mergeConfigurationOverrides(target, source) {
  // Simple case of both objects
  if (_typeof(target) === 'object' && _typeof(source) === 'object') {
    return Object(_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target, source);
  } // At least one is a function, return a new composite function


  return function () {
    return Object(_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, typeof target === 'function' ? target.apply(void 0, arguments) : target, typeof source === 'function' ? source.apply(void 0, arguments) : source);
  };
}

/***/ }),

/***/ "./node_modules/baseui/esm/styles/index.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/styles/index.js ***!
  \*************************************************/
/*! exports provided: createThemedStyled, createThemedWithStyle, createThemedUseStyletron, styled, withStyle, useStyletron, hexToRgb, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled.js */ "./node_modules/baseui/esm/styles/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createThemedStyled", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["createThemedStyled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createThemedWithStyle", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["createThemedWithStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createThemedUseStyletron", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["createThemedUseStyletron"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["withStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStyletron", function() { return _styled_js__WEBPACK_IMPORTED_MODULE_0__["useStyletron"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/baseui/esm/styles/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]; });

/* harmony import */ var _theme_provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-provider.js */ "./node_modules/baseui/esm/styles/theme-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _theme_provider_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




/***/ }),

/***/ "./node_modules/baseui/esm/styles/styled.js":
/*!**************************************************!*\
  !*** ./node_modules/baseui/esm/styles/styled.js ***!
  \**************************************************/
/*! exports provided: createThemedStyled, styled, createThemedWithStyle, withStyle, createThemedUseStyletron, useStyletron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createThemedStyled", function() { return createThemedStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createThemedWithStyle", function() { return createThemedWithStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createThemedUseStyletron", function() { return createThemedUseStyletron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyletron", function() { return useStyletron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-standard */ "./node_modules/styletron-standard/dist/browser.es5.es.js");
/* harmony import */ var _theme_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-provider.js */ "./node_modules/baseui/esm/styles/theme-provider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/





var wrapper = function wrapper(StyledComponent) {
  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledComponent, _extends({
        ref: ref
      }, props, {
        $theme: theme
      }));
    });
  });
};
/* eslint-disable flowtype/generic-spacing */

/* eslint-disable flowtype/no-weak-types */


/* eslint-enable flowtype/generic-spacing */

/* eslint-enable flowtype/no-weak-types */
function createThemedStyled() {
  return Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["createStyled"])({
    wrapper: wrapper,
    getInitialStyle: styletron_standard__WEBPACK_IMPORTED_MODULE_2__["getInitialStyle"],
    driver: styletron_standard__WEBPACK_IMPORTED_MODULE_2__["driver"] // eslint-disable-next-line flowtype/no-weak-types

  });
}
var styled = createThemedStyled();
function createThemedWithStyle() {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletron_react__WEBPACK_IMPORTED_MODULE_1__["withStyle"];
}
var withStyle = createThemedWithStyle();
function createThemedUseStyletron() {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    var theme = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);

    var _styletronUseStyletro = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["useStyletron"])(),
        _styletronUseStyletro2 = _slicedToArray(_styletronUseStyletro, 1),
        useCss = _styletronUseStyletro2[0];

    return [useCss, theme];
  };
}
var useStyletron = createThemedUseStyletron();

/***/ }),

/***/ "./node_modules/baseui/esm/styles/theme-provider.js":
/*!**********************************************************!*\
  !*** ./node_modules/baseui/esm/styles/theme-provider.js ***!
  \**********************************************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/index.js */ "./node_modules/baseui/esm/themes/index.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](_themes_index_js__WEBPACK_IMPORTED_MODULE_1__["LightTheme"]);

var ThemeProvider = function ThemeProvider(props) {
  var theme = props.theme,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ThemeContext.Provider, {
    value: theme
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/baseui/esm/styles/util.js":
/*!************************************************!*\
  !*** ./node_modules/baseui/esm/styles/util.js ***!
  \************************************************/
/*! exports provided: hexToRgb, ellipsisText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsisText", function() { return ellipsisText; });
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function hexToRgb() {
  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgba(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ", ").concat(alpha, ")") : null;
}
var ellipsisText = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
};

/***/ }),

/***/ "./node_modules/baseui/esm/themes/creator.js":
/*!***************************************************!*\
  !*** ./node_modules/baseui/esm/themes/creator.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTheme; });
/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deep-merge.js */ "./node_modules/baseui/esm/utils/deep-merge.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var WHITE = '#FFFFFF';
var BLACK = '#000000';
function createTheme(primitives, overrides) {
  var theme = {
    breakpoints: {
      small: 320,
      medium: 600,
      large: 1136
    },
    colors: {
      // Primary Palette
      primary: primitives.primary,
      primary50: primitives.primary50,
      primary100: primitives.primary100,
      primary200: primitives.primary200,
      primary300: primitives.primary300,
      primary400: primitives.primary400,
      primary500: primitives.primary500,
      primary600: primitives.primary600,
      primary700: primitives.primary700,
      // Accent Palette
      accent: primitives.accent,
      accent50: primitives.accent50,
      accent100: primitives.accent100,
      accent200: primitives.accent200,
      accent300: primitives.accent300,
      accent400: primitives.accent400,
      accent500: primitives.accent500,
      accent600: primitives.accent600,
      accent700: primitives.accent700,
      // Negative Palette
      negative: primitives.negative,
      negative50: primitives.negative50,
      negative100: primitives.negative100,
      negative200: primitives.negative200,
      negative300: primitives.negative300,
      negative400: primitives.negative400,
      negative500: primitives.negative500,
      negative600: primitives.negative600,
      negative700: primitives.negative700,
      // Warning Palette
      warning: primitives.warning,
      warning50: primitives.warning50,
      warning100: primitives.warning100,
      warning200: primitives.warning200,
      warning300: primitives.warning300,
      warning400: primitives.warning400,
      warning500: primitives.warning500,
      warning600: primitives.warning600,
      warning700: primitives.warning700,
      // Positive Palette
      positive: primitives.positive,
      positive50: primitives.positive50,
      positive100: primitives.positive100,
      positive200: primitives.positive200,
      positive300: primitives.positive300,
      positive400: primitives.positive400,
      positive500: primitives.positive500,
      positive600: primitives.positive600,
      positive700: primitives.positive700,
      // Monochrome Palette
      white: WHITE,
      mono100: primitives.mono100,
      mono200: primitives.mono200,
      mono300: primitives.mono300,
      mono400: primitives.mono400,
      mono500: primitives.mono500,
      mono600: primitives.mono600,
      mono700: primitives.mono700,
      mono800: primitives.mono800,
      mono900: primitives.mono900,
      mono1000: primitives.mono1000,
      black: BLACK,
      // Rating Palette,
      rating200: primitives.rating200,
      rating400: primitives.rating400,
      // Semantic Colors
      // Font Color
      colorPrimary: primitives.mono1000,
      colorSecondary: primitives.mono800,
      // Background
      background: primitives.mono100,
      backgroundAlt: primitives.mono100,
      backgroundInv: primitives.mono1000,
      // Foreground
      foreground: primitives.mono1000,
      foregroundAlt: primitives.mono800,
      foregroundInv: primitives.mono100,
      // Borders
      border: primitives.mono500,
      borderAlt: primitives.mono600,
      borderFocus: primitives.primary,
      borderError: primitives.negative,
      // Buttons
      buttonPrimaryFill: primitives.primary,
      buttonPrimaryText: WHITE,
      buttonPrimaryHover: primitives.primary700,
      buttonPrimaryActive: primitives.primary600,
      buttonPrimarySelectedFill: primitives.primary600,
      buttonPrimarySelectedText: WHITE,
      buttonPrimarySpinnerForeground: primitives.primary50,
      buttonPrimarySpinnerBackground: primitives.primary500,
      buttonSecondaryFill: primitives.primary100,
      buttonSecondaryText: primitives.primary,
      buttonSecondaryHover: primitives.primary200,
      buttonSecondaryActive: primitives.primary300,
      buttonSecondarySelectedFill: primitives.primary200,
      buttonSecondarySelectedText: primitives.primary,
      buttonSecondarySpinnerForeground: primitives.primary700,
      buttonSecondarySpinnerBackground: primitives.primary300,
      buttonTertiaryFill: 'transparent',
      buttonTertiaryText: primitives.primary,
      buttonTertiaryHover: primitives.primary50,
      buttonTertiaryActive: primitives.primary100,
      buttonTertiarySelectedFill: primitives.primary100,
      buttonTertiarySelectedText: primitives.primary,
      buttonTertiarySpinnerForeground: primitives.primary700,
      buttonTertiarySpinnerBackground: primitives.primary300,
      buttonMinimalFill: 'transparent',
      buttonMinimalText: primitives.primary,
      buttonMinimalHover: primitives.primary50,
      buttonMinimalActive: primitives.primary100,
      buttonMinimalSelectedFill: primitives.primary100,
      buttonMinimalSelectedText: primitives.primary,
      buttonMinimalSpinnerForeground: primitives.primary700,
      buttonMinimalSpinnerBackground: primitives.primary300,
      buttonDisabledFill: primitives.mono200,
      buttonDisabledText: primitives.mono600,
      buttonDisabledSpinnerForeground: primitives.mono600,
      buttonDisabledSpinnerBackground: primitives.mono400,
      // Breadcrumbs
      breadcrumbsText: primitives.mono900,
      breadcrumbsSeparatorFill: primitives.mono700,
      // Datepicker
      datepickerBackground: primitives.mono100,
      datepickerDayFont: primitives.mono1000,
      datepickerDayFontDisabled: primitives.mono500,
      datepickerDayPseudoSelected: primitives.primary100,
      datepickerDayPseudoHighlighted: primitives.primary200,
      // Calendar
      calendarBackground: primitives.mono100,
      calendarForeground: primitives.mono1000,
      calendarForegroundDisabled: primitives.mono500,
      calendarHeaderBackground: primitives.primary,
      calendarHeaderForeground: WHITE,
      calendarHeaderBackgroundActive: primitives.primary700,
      calendarHeaderForegroundDisabled: primitives.primary500,
      calendarDayBackgroundPseudoSelected: primitives.primary100,
      calendarDayForegroundPseudoSelected: primitives.mono1000,
      calendarDayBackgroundPseudoSelectedHighlighted: primitives.primary200,
      calendarDayForegroundPseudoSelectedHighlighted: primitives.mono1000,
      calendarDayBackgroundSelected: WHITE,
      calendarDayForegroundSelected: BLACK,
      calendarDayBackgroundSelectedHighlighted: BLACK,
      calendarDayForegroundSelectedHighlighted: WHITE,
      // FileUploader
      fileUploaderBackgroundColor: primitives.mono200,
      fileUploaderBackgroundColorActive: primitives.primary50,
      fileUploaderBorderColorActive: primitives.primary,
      fileUploaderBorderColorDefault: primitives.mono500,
      fileUploaderMessageColor: primitives.mono600,
      // Links
      linkText: primitives.primary,
      linkVisited: primitives.primary700,
      linkHover: primitives.primary600,
      linkActive: primitives.primary500,
      // Shadow
      shadowFocus: 'rgba(39, 110, 241, 0.32)',
      shadowError: 'rgba(229, 73, 55, 0.32)',
      // List
      listHeaderFill: WHITE,
      listBodyFill: primitives.mono200,
      listIconFill: primitives.mono500,
      listBorder: primitives.mono500,
      // ProgressSteps
      progressStepsCompletedText: WHITE,
      progressStepsCompletedFill: primitives.primary,
      progressStepsActiveText: WHITE,
      progressStepsActiveFill: primitives.primary,
      progressStepsIconActiveFill: primitives.primary,
      // Tick
      tickFill: primitives.mono100,
      tickFillHover: primitives.mono200,
      tickFillActive: primitives.mono300,
      tickFillSelected: primitives.primary,
      tickFillSelectedHover: primitives.primary700,
      tickFillSelectedHoverActive: primitives.primary600,
      tickFillError: primitives.negative50,
      tickFillErrorHover: primitives.negative100,
      tickFillErrorHoverActive: primitives.negative200,
      tickFillErrorSelected: primitives.negative400,
      tickFillErrorSelectedHover: primitives.negative500,
      tickFillErrorSelectedHoverActive: primitives.negative600,
      tickFillDisabled: primitives.mono300,
      tickBorder: primitives.mono700,
      tickBorderError: primitives.negative400,
      tickMarkFill: WHITE,
      tickMarkFillError: WHITE,
      tickMarkFillDisabled: primitives.mono600,
      // Slider/Toggle
      sliderTrackFill: primitives.mono400,
      sliderTrackFillHover: primitives.mono500,
      sliderTrackFillActive: primitives.mono600,
      sliderTrackFillSelected: primitives.primary,
      sliderTrackFillSelectedHover: primitives.primary,
      sliderTrackFillSelectedActive: primitives.primary500,
      sliderTrackFillDisabled: primitives.mono300,
      sliderHandleFill: WHITE,
      sliderHandleFillHover: WHITE,
      sliderHandleFillActive: WHITE,
      sliderHandleFillSelected: WHITE,
      sliderHandleFillSelectedHover: WHITE,
      sliderHandleFillSelectedActive: WHITE,
      sliderHandleFillDisabled: primitives.mono500,
      sliderHandleInnerFill: primitives.mono400,
      sliderHandleInnerFillDisabled: primitives.mono400,
      sliderHandleInnerFillSelectedHover: primitives.primary,
      sliderHandleInnerFillSelectedActive: primitives.primary500,
      sliderBorder: primitives.mono500,
      sliderBorderHover: primitives.primary,
      sliderBorderDisabled: primitives.mono600,
      // Inputs
      inputFill: primitives.mono300,
      inputFillError: primitives.negative50,
      inputFillDisabled: primitives.mono200,
      inputFillActive: primitives.mono200,
      inputFillPositive: primitives.positive50,
      inputTextDisabled: primitives.mono600,
      inputBorderError: primitives.negative200,
      inputBorderPositive: primitives.positive200,
      inputEnhancerFill: primitives.mono300,
      inputEnhancerFillDisabled: primitives.mono300,
      inputEnhancerTextDisabled: primitives.mono600,
      // Menu
      menuFill: primitives.mono100,
      menuFillHover: primitives.mono200,
      menuFontDefault: primitives.mono800,
      menuFontDisabled: primitives.mono500,
      menuFontHighlighted: primitives.mono1000,
      menuFontSelected: primitives.mono1000,
      // Modal
      modalCloseColor: primitives.primary,
      modalCloseColorHover: primitives.primary600,
      modalCloseColorFocus: primitives.primary600,
      // Pagination
      paginationTriangleDown: primitives.mono800,
      // Header navigation
      headerNavigationFill: 'transparent',
      // Tab
      tabBarFill: primitives.mono200,
      tabColor: primitives.mono800,
      // Notification
      notificationPrimaryBackground: primitives.primary50,
      notificationPrimaryText: primitives.primary500,
      notificationInfoBackground: primitives.accent50,
      notificationInfoText: primitives.accent500,
      notificationPositiveBackground: primitives.positive50,
      notificationPositiveText: primitives.positive500,
      notificationWarningBackground: primitives.warning50,
      notificationWarningText: primitives.warning500,
      notificationNegativeBackground: primitives.negative50,
      notificationNegativeText: primitives.negative500,
      // Tag
      tagSolidRampUnit: '400',
      tagSolidHoverRampUnit: '50',
      tagSolidActiveRampUnit: '100',
      tagSolidDisabledRampUnit: '50',
      tagSolidFontRampUnit: '50',
      tagSolidFontHoverRampUnit: '500',
      tagLightRampUnit: '50',
      tagLightHoverRampUnit: '100',
      tagLightActiveRampUnit: '100',
      tagLightDisabledRampUnit: '50',
      tagLightFontRampUnit: '500',
      tagLightFontHoverRampUnit: '500',
      tagOutlinedRampUnit: '400',
      tagOutlinedHoverRampUnit: '500',
      tagOutlinedActiveRampUnit: '600',
      tagOutlinedDisabledRampUnit: '50',
      tagOutlinedFontRampUnit: '500',
      tagOutlinedFontHoverRampUnit: '50',
      tagFontDisabledRampUnit: '200',
      tagNeutralSolidBackground: primitives.mono900,
      tagNeutralSolidHover: primitives.mono300,
      tagNeutralSolidActive: primitives.mono400,
      tagNeutralSolidDisabled: primitives.mono200,
      tagNeutralSolidFont: primitives.mono100,
      tagNeutralSolidFontHover: primitives.mono900,
      tagNeutralLightBackground: primitives.mono300,
      tagNeutralLightHover: primitives.mono300,
      tagNeutralLightActive: primitives.mono400,
      tagNeutralLightDisabled: primitives.mono200,
      tagNeutralLightFont: primitives.mono900,
      tagNeutralLightFontHover: primitives.mono900,
      tagNeutralOutlinedBackground: primitives.mono900,
      tagNeutralOutlinedHover: primitives.mono800,
      tagNeutralOutlinedActive: primitives.mono900,
      tagNeutralOutlinedDisabled: primitives.mono200,
      tagNeutralOutlinedFont: primitives.mono900,
      tagNeutralOutlinedFontHover: primitives.mono200,
      tagNeutralFontDisabled: primitives.mono500,
      tagPrimarySolidBackground: primitives.primary,
      tagPrimarySolidHover: primitives.primary100,
      tagPrimarySolidActive: primitives.primary200,
      tagPrimarySolidDisabled: primitives.primary50,
      tagPrimarySolidFont: primitives.primary50,
      tagPrimarySolidFontHover: primitives.primary700,
      tagPrimaryLightBackground: primitives.primary50,
      tagPrimaryLightHover: primitives.primary100,
      tagPrimaryLightActive: primitives.primary100,
      tagPrimaryLightDisabled: primitives.primary50,
      tagPrimaryLightFont: primitives.primary500,
      tagPrimaryLightFontHover: primitives.primary500,
      tagPrimaryOutlinedBackground: primitives.primary,
      tagPrimaryOutlinedHover: primitives.primary700,
      tagPrimaryOutlinedActive: primitives.primary600,
      tagPrimaryOutlinedDisabled: primitives.primary50,
      tagPrimaryOutlinedFont: primitives.primary,
      tagPrimaryOutlinedFontHover: primitives.primary50,
      tagPrimaryFontDisabled: primitives.primary400,
      tagAccentSolidBackground: primitives.accent400,
      tagAccentSolidHover: primitives.accent50,
      tagAccentSolidActive: primitives.accent100,
      tagAccentSolidDisabled: primitives.accent50,
      tagAccentSolidFont: primitives.accent50,
      tagAccentSolidFontHover: primitives.accent500,
      tagAccentLightBackground: primitives.accent50,
      tagAccentLightHover: primitives.accent100,
      tagAccentLightActive: primitives.accent100,
      tagAccentLightDisabled: primitives.accent50,
      tagAccentLightFont: primitives.accent500,
      tagAccentLightFontHover: primitives.accent500,
      tagAccentOutlinedBackground: primitives.accent400,
      tagAccentOutlinedHover: primitives.accent500,
      tagAccentOutlinedActive: primitives.accent600,
      tagAccentOutlinedDisabled: primitives.accent50,
      tagAccentOutlinedFont: primitives.accent500,
      tagAccentOutlinedFontHover: primitives.accent50,
      tagAccentFontDisabled: primitives.accent200,
      tagPositiveSolidBackground: primitives.positive400,
      tagPositiveSolidHover: primitives.positive50,
      tagPositiveSolidActive: primitives.positive100,
      tagPositiveSolidDisabled: primitives.positive50,
      tagPositiveSolidFont: primitives.positive50,
      tagPositiveSolidFontHover: primitives.positive500,
      tagPositiveLightBackground: primitives.positive50,
      tagPositiveLightHover: primitives.positive100,
      tagPositiveLightActive: primitives.positive100,
      tagPositiveLightDisabled: primitives.positive50,
      tagPositiveLightFont: primitives.positive500,
      tagPositiveLightFontHover: primitives.positive500,
      tagPositiveOutlinedBackground: primitives.positive400,
      tagPositiveOutlinedHover: primitives.positive500,
      tagPositiveOutlinedActive: primitives.positive600,
      tagPositiveOutlinedDisabled: primitives.positive50,
      tagPositiveOutlinedFont: primitives.positive500,
      tagPositiveOutlinedFontHover: primitives.positive50,
      tagPositiveFontDisabled: primitives.positive200,
      tagWarningSolidBackground: primitives.warning400,
      tagWarningSolidHover: primitives.warning50,
      tagWarningSolidActive: primitives.warning100,
      tagWarningSolidDisabled: primitives.warning50,
      tagWarningSolidFont: primitives.warning50,
      tagWarningSolidFontHover: primitives.warning500,
      tagWarningLightBackground: primitives.warning50,
      tagWarningLightHover: primitives.warning100,
      tagWarningLightActive: primitives.warning100,
      tagWarningLightDisabled: primitives.warning50,
      tagWarningLightFont: primitives.warning500,
      tagWarningLightFontHover: primitives.warning500,
      tagWarningOutlinedBackground: primitives.warning400,
      tagWarningOutlinedHover: primitives.warning500,
      tagWarningOutlinedActive: primitives.warning600,
      tagWarningOutlinedDisabled: primitives.warning50,
      tagWarningOutlinedFont: primitives.warning500,
      tagWarningOutlinedFontHover: primitives.warning50,
      tagWarningFontDisabled: primitives.warning200,
      tagNegativeSolidBackground: primitives.negative400,
      tagNegativeSolidHover: primitives.negative50,
      tagNegativeSolidActive: primitives.negative100,
      tagNegativeSolidDisabled: primitives.negative50,
      tagNegativeSolidFont: primitives.negative50,
      tagNegativeSolidFontHover: primitives.negative500,
      tagNegativeLightBackground: primitives.negative50,
      tagNegativeLightHover: primitives.negative100,
      tagNegativeLightActive: primitives.negative100,
      tagNegativeLightDisabled: primitives.negative50,
      tagNegativeLightFont: primitives.negative500,
      tagNegativeLightFontHover: primitives.negative500,
      tagNegativeOutlinedBackground: primitives.negative400,
      tagNegativeOutlinedHover: primitives.negative500,
      tagNegativeOutlinedActive: primitives.negative600,
      tagNegativeOutlinedDisabled: primitives.negative50,
      tagNegativeOutlinedFont: primitives.negative500,
      tagNegativeOutlinedFontHover: primitives.negative50,
      tagNegativeFontDisabled: primitives.negative200,
      // Table
      tableHeadBackgroundColor: primitives.mono100,
      tableBackground: primitives.mono100,
      tableStripedBackground: primitives.mono200,
      tableFilter: primitives.mono600,
      tableFilterHeading: primitives.mono700,
      tableFilterBackground: primitives.mono100,
      tableFilterFooterBackground: primitives.mono200,
      // Toast
      toastText: WHITE,
      toastPrimaryBackground: primitives.primary500,
      toastInfoBackground: primitives.accent500,
      toastPositiveBackground: primitives.positive500,
      toastWarningBackground: primitives.warning500,
      toastNegativeBackground: primitives.negative500,
      // Spinner
      spinnerTrackFill: primitives.mono900,
      // Progress bar
      progressbarTrackFill: primitives.mono900,
      // Tooltip
      tooltipBackground: primitives.mono900,
      tooltipText: primitives.mono100
    },
    typography: {
      font100: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '20px'
      },
      font150: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '20px'
      },
      font200: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '20px'
      },
      font250: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px'
      },
      font300: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '24px'
      },
      font350: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px'
      },
      font400: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '18px',
        fontWeight: 'normal',
        lineHeight: '28px'
      },
      font450: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px'
      },
      font550: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '28px'
      },
      font650: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '32px'
      },
      font750: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '28px',
        fontWeight: 500,
        lineHeight: '36px'
      },
      font850: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '40px'
      },
      font950: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: '44px'
      },
      font1050: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '52px'
      },
      font1150: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: '44px'
      },
      font1250: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '44px',
        fontWeight: 500,
        lineHeight: '52px'
      },
      font1350: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '52px',
        fontWeight: 500,
        lineHeight: '64px'
      },
      font1450: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '96px',
        fontWeight: 500,
        lineHeight: '112px'
      }
    },
    sizing: {
      scale0: '2px',
      scale100: '4px',
      scale200: '6px',
      scale300: '8px',
      scale400: '10px',
      scale500: '12px',
      scale550: '14px',
      scale600: '16px',
      scale650: '18px',
      scale700: '20px',
      scale750: '22px',
      scale800: '24px',
      scale900: '32px',
      scale1000: '40px',
      scale1200: '48px',
      scale1400: '56px',
      scale1600: '64px',
      scale2400: '96px',
      scale3200: '128px',
      scale4800: '192px'
    },
    lighting: {
      shadow400: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
      shadow500: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
      shadow600: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
      shadow700: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
      overlay0: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',
      overlay100: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',
      overlay200: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',
      overlay300: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',
      overlay400: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',
      overlay500: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',
      overlay600: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)'
    },
    borders: {
      border100: {
        borderColor: 'hsla(0, 0%, 0%, 0.04)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border200: {
        borderColor: 'hsla(0, 0%, 0%, 0.08)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border300: {
        borderColor: 'hsla(0, 0%, 0%, 0.12)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border400: {
        borderColor: 'hsla(0, 0%, 0%, 0.16)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border500: {
        borderColor: 'hsla(0, 0%, 0%, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border600: {
        borderColor: 'hsla(0, 0%, 0%, 0.24)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      radius100: '2px',
      radius200: '4px',
      radius300: '8px',
      radius400: '12px',

      /** Checkbox, Datepicker (Range), Progress Bar, Slider, Tag */
      useRoundedCorners: true,

      /** Button, ButtonGroup */
      buttonBorderRadius: '0px',

      /** Input, Select, Textarea */
      inputBorderRadius: '0px',

      /** Popover, Menu, Tooltip */
      popoverBorderRadius: '0px',

      /** Card, Datepicker, Modal, Toast, Notification */
      surfaceBorderRadius: '0px'
    },
    animation: {
      timing100: '0.25s',
      timing400: '0.4s',
      timing700: '0.6s',
      timing1000: '1s',
      easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
      easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
      easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    direction: 'auto',
    zIndex: {
      modal: 2000
    }
  }; // to remove the FlowFixMe, we have to make deepMerge accept a ThemeT
  // $FlowFixMe

  return Object(_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__["default"])(theme, overrides);
}

/***/ }),

/***/ "./node_modules/baseui/esm/themes/dark-theme-colors.js":
/*!*************************************************************!*\
  !*** ./node_modules/baseui/esm/themes/dark-theme-colors.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark-theme-primitives.js */ "./node_modules/baseui/esm/themes/dark-theme-primitives.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var WHITE = '#FFFFFF';
var BLACK = '#000000';
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    // Semantic Colors
    // Font Color
    colorPrimary: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    colorSecondary: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    // Background
    background: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono1000,
    backgroundAlt: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    backgroundInv: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    // Foreground
    foreground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    foregroundAlt: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    foregroundInv: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono1000,
    // Borders
    border: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    borderAlt: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    borderFocus: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    borderError: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative,
    // Buttons
    buttonPrimaryFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonPrimaryText: BLACK,
    buttonPrimaryHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    buttonPrimaryActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary200,
    buttonPrimarySelectedText: BLACK,
    buttonPrimarySelectedFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary200,
    buttonPrimarySpinnerForeground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    buttonPrimarySpinnerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary300,
    buttonSecondaryFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    buttonSecondaryText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonSecondaryHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    buttonSecondaryActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    buttonSecondarySelectedText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonSecondarySelectedFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    buttonSecondarySpinnerForeground: WHITE,
    buttonSecondarySpinnerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary400,
    buttonTertiaryFill: 'transparent',
    buttonTertiaryText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonTertiaryHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    buttonTertiaryActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    buttonTertiarySelectedText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonTertiarySelectedFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    buttonTertiarySpinnerForeground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary50,
    buttonTertiarySpinnerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    buttonMinimalFill: 'transparent',
    buttonMinimalText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonMinimalHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    buttonMinimalActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    buttonMinimalSelectedText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    buttonMinimalSelectedFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    buttonMinimalSpinnerForeground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary50,
    buttonMinimalSpinnerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    buttonDisabledFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    buttonDisabledText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    buttonDisabledSpinnerForeground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    buttonDisabledSpinnerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    // Breadcrumbs
    breadcrumbsText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    breadcrumbsSeparatorFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    // Datepicker
    datepickerBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    datepickerDayFont: WHITE,
    datepickerDayFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    datepickerDayPseudoSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    datepickerDayPseudoHighlighted: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    // Calendar
    calendarBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    calendarForeground: WHITE,
    calendarForegroundDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    calendarHeaderBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    calendarHeaderForeground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    calendarHeaderBackgroundActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    calendarHeaderForegroundDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    calendarDayBackgroundPseudoSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    calendarDayForegroundPseudoSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    calendarDayBackgroundPseudoSelectedHighlighted: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    calendarDayForegroundPseudoSelectedHighlighted: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    calendarDayBackgroundSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    calendarDayForegroundSelected: BLACK,
    calendarDayBackgroundSelectedHighlighted: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    calendarDayForegroundSelectedHighlighted: BLACK,
    // FileUploader
    fileUploaderBackgroundColor: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    fileUploaderBackgroundColorActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    fileUploaderBorderColorActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    fileUploaderBorderColorDefault: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    fileUploaderMessageColor: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    // Links
    linkText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    linkVisited: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    linkHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary200,
    linkActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary300,
    // List
    listHeaderFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    listBodyFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    listIconFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    listBorder: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    // ProgressSteps
    progressStepsCompletedText: BLACK,
    progressStepsCompletedFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    progressStepsActiveText: BLACK,
    progressStepsActiveFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    // Modal
    modalCloseColor: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    modalCloseColorHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    modalCloseColorFocus: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    // Notification
    notificationPrimaryBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    notificationPrimaryText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary200,
    notificationInfoBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    notificationInfoText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent200,
    notificationPositiveBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    notificationPositiveText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive200,
    notificationWarningBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    notificationWarningText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning200,
    notificationNegativeBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    notificationNegativeText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative200,
    // Tag
    tagSolidRampUnit: '500',
    tagSolidHoverRampUnit: '500',
    tagSolidActiveRampUnit: '400',
    tagSolidDisabledRampUnit: '700',
    tagSolidFontRampUnit: '100',
    tagSolidFontHoverRampUnit: '100',
    tagLightRampUnit: '700',
    tagLightHoverRampUnit: '700',
    tagLightActiveRampUnit: '600',
    tagLightDisabledRampUnit: '700',
    tagLightFontRampUnit: '100',
    tagLightFontHoverRampUnit: '100',
    tagOutlinedRampUnit: '500',
    tagOutlinedHoverRampUnit: '400',
    tagOutlinedActiveRampUnit: '300',
    tagOutlinedDisabledRampUnit: '700',
    tagOutlinedFontRampUnit: '200',
    tagOutlinedFontHoverRampUnit: '700',
    tagFontDisabledRampUnit: '500',
    tagNeutralSolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    tagNeutralSolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    tagNeutralSolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    tagNeutralSolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tagNeutralSolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tagNeutralSolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tagNeutralLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    tagNeutralLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    tagNeutralLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tagNeutralLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tagNeutralLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tagNeutralLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tagNeutralOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    tagNeutralOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    tagNeutralOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    tagNeutralOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tagNeutralOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tagNeutralOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono900,
    tagNeutralFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    tagPrimarySolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    tagPrimarySolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimarySolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary400,
    tagPrimarySolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimarySolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimarySolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    tagPrimaryLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimaryLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimaryLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    tagPrimaryLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimaryLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    tagPrimaryLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    tagPrimaryOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    tagPrimaryOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimaryOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    tagPrimaryOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    tagPrimaryOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    tagPrimaryOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary50,
    tagPrimaryFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    tagAccentSolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent500,
    tagAccentSolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent500,
    tagAccentSolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent400,
    tagAccentSolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentSolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent100,
    tagAccentSolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent100,
    tagAccentLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent600,
    tagAccentLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent100,
    tagAccentLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent100,
    tagAccentOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent500,
    tagAccentOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent400,
    tagAccentOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent300,
    tagAccentOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent200,
    tagAccentOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent700,
    tagAccentFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].accent500,
    tagPositiveSolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive500,
    tagPositiveSolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive500,
    tagPositiveSolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive400,
    tagPositiveSolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveSolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive100,
    tagPositiveSolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive100,
    tagPositiveLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive600,
    tagPositiveLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive100,
    tagPositiveLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive100,
    tagPositiveOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive500,
    tagPositiveOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive400,
    tagPositiveOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive300,
    tagPositiveOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive200,
    tagPositiveOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    tagPositiveFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive500,
    tagWarningSolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning500,
    tagWarningSolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning500,
    tagWarningSolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning400,
    tagWarningSolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningSolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning100,
    tagWarningSolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning100,
    tagWarningLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning600,
    tagWarningLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning100,
    tagWarningLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning100,
    tagWarningOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning500,
    tagWarningOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning400,
    tagWarningOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning300,
    tagWarningOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning200,
    tagWarningOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning700,
    tagWarningFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].warning500,
    tagNegativeSolidBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    tagNegativeSolidHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    tagNegativeSolidActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative400,
    tagNegativeSolidDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeSolidFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative100,
    tagNegativeSolidFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative100,
    tagNegativeLightBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeLightHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeLightActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative600,
    tagNegativeLightDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeLightFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative100,
    tagNegativeLightFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative100,
    tagNegativeOutlinedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    tagNegativeOutlinedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative400,
    tagNegativeOutlinedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative300,
    tagNegativeOutlinedDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeOutlinedFont: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative200,
    tagNegativeOutlinedFontHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tagNegativeFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    // Table
    tableHeadBackgroundColor: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tableBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    tableStripedBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tableFilter: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    tableFilterHeading: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    tableFilterBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tableFilterFooterBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    // Tick
    tickFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono1000,
    tickFillHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tickFillActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    tickFillSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary,
    tickFillSelectedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary50,
    tickFillSelectedHoverActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary100,
    tickFillError: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tickFillErrorHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative600,
    tickFillErrorHoverActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    tickFillErrorSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative500,
    tickFillErrorSelectedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative600,
    tickFillErrorSelectedHoverActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    tickFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    tickBorder: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    tickBorderError: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative400,
    tickMarkFill: BLACK,
    tickMarkFillError: WHITE,
    tickMarkFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    // Slider/Toggle
    sliderTrackFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    sliderTrackFillHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    sliderTrackFillActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    sliderTrackFillSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    sliderTrackFillSelectedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    sliderTrackFillSelectedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    sliderTrackFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    sliderHandleFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    sliderHandleFillHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    sliderHandleFillActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    sliderHandleFillSelected: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary500,
    sliderHandleFillSelectedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    sliderHandleFillSelectedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    sliderHandleFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    sliderHandleInnerFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    sliderHandleInnerFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    sliderHandleInnerFillSelectedHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary600,
    sliderHandleInnerFillSelectedActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].primary700,
    sliderBorder: WHITE,
    sliderBorderHover: WHITE,
    sliderBorderDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    // Input
    inputFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    inputFillActive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    inputFillError: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative700,
    inputFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono800,
    inputFillPositive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive700,
    inputTextDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    inputBorderError: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].negative400,
    inputBorderPositive: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].positive400,
    inputEnhancerFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    inputEnhancerFillDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    inputEnhancerTextDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono500,
    // Menu
    menuFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono600,
    menuFillHover: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    menuFontDefault: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    menuFontDisabled: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono400,
    menuFontHighlighted: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    menuFontSelected: WHITE,
    // Pagination
    paginationTriangleDown: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    // Header navigation
    headerNavigationFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono700,
    // Tab
    tabBarFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono1000,
    tabColor: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono300,
    // Spinner
    spinnerTrackFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    // Progress bar
    progressbarTrackFill: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono100,
    // Tooltip
    tooltipBackground: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono200,
    tooltipText: _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_0__["primitives"].mono1000
  }
});

/***/ }),

/***/ "./node_modules/baseui/esm/themes/dark-theme-primitives.js":
/*!*****************************************************************!*\
  !*** ./node_modules/baseui/esm/themes/dark-theme-primitives.js ***!
  \*****************************************************************/
/*! exports provided: primitives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitives", function() { return primitives; });
/* harmony import */ var _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/index.js */ "./node_modules/baseui/esm/tokens/index.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// color constants
var primitives = {
  primary: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
  primary50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
  primary100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
  primary200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
  primary300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
  primary400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
  primary500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
  primary600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
  primary700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
  accent: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
  accent50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue50,
  accent100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue100,
  accent200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue200,
  accent300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue300,
  accent400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
  accent500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue500,
  accent600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue600,
  accent700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue700,
  negative: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
  negative50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red50,
  negative100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red100,
  negative200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red200,
  negative300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red300,
  negative400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
  negative500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red500,
  negative600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red600,
  negative700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red700,
  warning: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange400,
  warning50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange50,
  warning100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange100,
  warning200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange200,
  warning300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange300,
  warning400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange400,
  warning500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange500,
  warning600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange600,
  warning700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange700,
  positive: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
  positive50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green50,
  positive100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green100,
  positive200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green200,
  positive300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green300,
  positive400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
  positive500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green500,
  positive600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green600,
  positive700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green700,
  mono100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
  mono200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
  mono300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
  mono400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
  mono500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
  // mono600-900 are not in official brand tokens atm
  mono600: '#292929',
  mono700: '#1F1F1F',
  mono800: '#141414',
  mono900: '#111111',
  mono1000: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
  rating200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
  rating400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400,
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
};

/***/ }),

/***/ "./node_modules/baseui/esm/themes/dark-theme-with-move.js":
/*!****************************************************************!*\
  !*** ./node_modules/baseui/esm/themes/dark-theme-with-move.js ***!
  \****************************************************************/
/*! exports provided: DarkThemeMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkThemeMove", function() { return DarkThemeMove; });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/baseui/esm/themes/creator.js");
/* harmony import */ var _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark-theme-primitives.js */ "./node_modules/baseui/esm/themes/dark-theme-primitives.js");
/* harmony import */ var _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-theme-colors.js */ "./node_modules/baseui/esm/themes/dark-theme-colors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



var primaryFontFamily = 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var secondaryFontFamily = 'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var DarkThemeMove = Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({}, _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__["primitives"], {
  primaryFontFamily: primaryFontFamily
}), _objectSpread({
  name: 'dark-theme-with-move'
}, _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  typography: {
    font1450: {
      fontFamily: secondaryFontFamily
    },
    font1350: {
      fontFamily: secondaryFontFamily
    },
    font1250: {
      fontFamily: secondaryFontFamily
    },
    font1150: {
      fontFamily: secondaryFontFamily
    }
  }
}));

/***/ }),

/***/ "./node_modules/baseui/esm/themes/dark-theme.js":
/*!******************************************************!*\
  !*** ./node_modules/baseui/esm/themes/dark-theme.js ***!
  \******************************************************/
/*! exports provided: DarkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkTheme", function() { return DarkTheme; });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/baseui/esm/themes/creator.js");
/* harmony import */ var _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark-theme-primitives.js */ "./node_modules/baseui/esm/themes/dark-theme-primitives.js");
/* harmony import */ var _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-theme-colors.js */ "./node_modules/baseui/esm/themes/dark-theme-colors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/



var DarkTheme = Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({}, _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__["primitives"]), _objectSpread({
  name: 'dark-theme'
}, _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./node_modules/baseui/esm/themes/index.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/themes/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightTheme", function() { return LightTheme; });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/baseui/esm/themes/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-theme-primitives.js */ "./node_modules/baseui/esm/themes/light-theme-primitives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightThemePrimitives", function() { return _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__["primitives"]; });

/* harmony import */ var _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-theme-primitives.js */ "./node_modules/baseui/esm/themes/dark-theme-primitives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkThemePrimitives", function() { return _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_2__["primitives"]; });

/* harmony import */ var _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark-theme-colors.js */ "./node_modules/baseui/esm/themes/dark-theme-colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkThemeOverrides", function() { return _dark_theme_colors_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _light_theme_with_move_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light-theme-with-move.js */ "./node_modules/baseui/esm/themes/light-theme-with-move.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightThemeMove", function() { return _light_theme_with_move_js__WEBPACK_IMPORTED_MODULE_4__["LightThemeMove"]; });

/* harmony import */ var _dark_theme_with_move_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dark-theme-with-move.js */ "./node_modules/baseui/esm/themes/dark-theme-with-move.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkThemeMove", function() { return _dark_theme_with_move_js__WEBPACK_IMPORTED_MODULE_5__["DarkThemeMove"]; });

/* harmony import */ var _dark_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dark-theme.js */ "./node_modules/baseui/esm/themes/dark-theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkTheme", function() { return _dark_theme_js__WEBPACK_IMPORTED_MODULE_6__["DarkTheme"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/baseui/esm/themes/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_7__) if(["LightTheme","createTheme","LightThemeMove","lightThemePrimitives","darkThemePrimitives","darkThemeOverrides","DarkTheme","DarkThemeMove","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/







var LightTheme = Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__["primitives"], {
  name: 'light-theme'
});



/***/ }),

/***/ "./node_modules/baseui/esm/themes/light-theme-primitives.js":
/*!******************************************************************!*\
  !*** ./node_modules/baseui/esm/themes/light-theme-primitives.js ***!
  \******************************************************************/
/*! exports provided: primitives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primitives", function() { return primitives; });
/* harmony import */ var _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/index.js */ "./node_modules/baseui/esm/tokens/index.js");
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// color constants
var primitives = {
  primary: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
  primary50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
  primary100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
  primary200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
  primary300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
  primary400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
  primary500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
  primary600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
  primary700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
  accent: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
  accent50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue50,
  accent100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue100,
  accent200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue200,
  accent300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue300,
  accent400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
  accent500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue500,
  accent600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue600,
  accent700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue700,
  negative: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
  negative50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red50,
  negative100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red100,
  negative200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red200,
  negative300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red300,
  negative400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
  negative500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red500,
  negative600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red600,
  negative700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red700,
  warning: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange400,
  warning50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange50,
  warning100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange100,
  warning200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange200,
  warning300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange300,
  warning400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange400,
  warning500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange500,
  warning600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange600,
  warning700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].orange700,
  positive: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
  positive50: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green50,
  positive100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green100,
  positive200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green200,
  positive300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green300,
  positive400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
  positive500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green500,
  positive600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green600,
  positive700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green700,
  mono100: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
  mono200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
  mono300: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
  mono400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
  mono500: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
  mono600: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
  mono700: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
  mono800: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
  mono900: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
  mono1000: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
  rating200: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
  rating400: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400,
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
};

/***/ }),

/***/ "./node_modules/baseui/esm/themes/light-theme-with-move.js":
/*!*****************************************************************!*\
  !*** ./node_modules/baseui/esm/themes/light-theme-with-move.js ***!
  \*****************************************************************/
/*! exports provided: LightThemeMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightThemeMove", function() { return LightThemeMove; });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/baseui/esm/themes/creator.js");
/* harmony import */ var _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-theme-primitives.js */ "./node_modules/baseui/esm/themes/light-theme-primitives.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var primaryFontFamily = 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var secondaryFontFamily = 'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var LightThemeMove = Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({}, _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_1__["primitives"], {
  primaryFontFamily: primaryFontFamily
}), {
  name: 'light-theme-with-move',
  typography: {
    font1450: {
      fontFamily: secondaryFontFamily
    },
    font1350: {
      fontFamily: secondaryFontFamily
    },
    font1250: {
      fontFamily: secondaryFontFamily
    },
    font1150: {
      fontFamily: secondaryFontFamily
    }
  }
});

/***/ }),

/***/ "./node_modules/baseui/esm/themes/types.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/themes/types.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/baseui/esm/tokens/colors.js":
/*!**************************************************!*\
  !*** ./node_modules/baseui/esm/tokens/colors.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F6F6F6',
  gray100: '#EEEEEE',
  gray200: '#E2E2E2',
  gray300: '#CBCBCB',
  gray400: '#AFAFAF',
  gray500: '#757575',
  gray600: '#545454',
  gray700: '#333333',
  blue50: '#EEF3FE',
  blue100: '#D4E2FC',
  blue200: '#A0BFF9',
  blue300: '#5B91F4',
  blue400: '#276EF1',
  blue500: '#1E54B7',
  blue600: '#174291',
  blue700: '#102C60',
  red50: '#FDF0EF',
  red100: '#FADBD7',
  red200: '#F4AFA7',
  red300: '#EB7567',
  red400: '#D44333',
  red500: '#AE372A',
  red600: '#892C21',
  red700: '#5C1D16',
  green50: '#F0F9F4',
  green100: '#DAF0E3',
  green200: '#AEDDC2',
  green300: '#73C496',
  green400: '#3AA76D',
  green500: '#368759',
  green600: '#2B6B46',
  green700: '#1C472F',
  orange50: '#FEF3EF',
  orange100: '#FBE2D6',
  orange200: '#F7BFA5',
  orange300: '#F19164',
  orange400: '#ED6E33',
  orange500: '#B45427',
  orange600: '#8E421F',
  orange700: '#5F2C14',
  purple50: '#F4F1FA',
  purple100: '#F4F1FA',
  purple200: '#C1B5E3',
  purple300: '#957FCE',
  purple400: '#7356BF',
  purple500: '#574191',
  purple600: '#453473',
  purple700: '#2E224C',
  yellow50: '#FFFAF0',
  yellow100: '#FFF2D9',
  yellow200: '#FFE3AC',
  yellow300: '#FFCF70',
  yellow400: '#FFC043',
  yellow500: '#BC8B2C',
  yellow600: '#997328',
  yellow700: '#664D1B',
  brown50: '#F7F3F1',
  brown100: '#EBE0DB',
  brown200: '#D2BBB0',
  brown300: '#B18977',
  brown400: '#99644C',
  brown500: '#744C3A',
  brown600: '#5C3C2E',
  brown700: '#3D281E'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./node_modules/baseui/esm/tokens/index.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/tokens/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./node_modules/baseui/esm/tokens/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/baseui/esm/tokens/types.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_1__) if(["colors","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/




/***/ }),

/***/ "./node_modules/baseui/esm/tokens/types.js":
/*!*************************************************!*\
  !*** ./node_modules/baseui/esm/tokens/types.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/baseui/esm/utils/deep-merge.js":
/*!*****************************************************!*\
  !*** ./node_modules/baseui/esm/utils/deep-merge.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepMerge; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function deepMerge(target) {
  target = target || {};
  var len = arguments.length <= 1 ? 0 : arguments.length - 1;
  var obj;
  var value;

  for (var i = 0; i < len; i++) {
    obj = (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) || {};

    for (var key in obj) {
      if (_typeof(obj[key]) !== undefined) {
        value = obj[key];

        if (isCloneable(value)) {
          target[key] = deepMerge(target[key] || Array.isArray(value) && [] || {}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }

  return target;
}
/* eslint-disable-next-line flowtype/no-weak-types */

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

/***/ }),

/***/ "./node_modules/baseui/node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/baseui/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/baseui/node_modules/react-is/index.js":
/*!************************************************************!*\
  !*** ./node_modules/baseui/node_modules/react-is/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/baseui/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/button */ "./node_modules/baseui/esm/button/index.js");


var _jsxFileName = "/home/koceila/Documents/Lab/Project/ecomlib-base/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var IndexPage = function IndexPage() {
  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, " index page");
};

IndexPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var store;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.3268b2ef19e62ab73ef6.hot-update.js.map