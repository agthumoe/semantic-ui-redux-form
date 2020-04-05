"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _lodash = _interopRequireDefault(require("lodash"));

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderField = function renderField(fields) {
  var id = fields.id,
      label = fields.label,
      className = fields.className,
      multiple = fields.multiple,
      search = fields.search,
      handleOnSearch = fields.handleOnSearch,
      handleOnChange = fields.handleOnChange,
      input = fields.input,
      data = fields.data,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      rest = _objectWithoutProperties(fields, ["id", "label", "className", "multiple", "search", "handleOnSearch", "handleOnChange", "input", "data", "meta"]);

  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label, /*#__PURE__*/_react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, _extends({}, rest, {
    onChange: function onChange(event, d) {
      if (typeof handleOnChange === 'function') {
        handleOnChange(event, d);
      }

      if (multiple) {
        input.onChange(_toConsumableArray(d.value));
      } else {
        input.onChange(d.value);
      }
    },
    onSearchChange: function onSearchChange(e, v) {
      handleOnSearch(e, v);
    },
    options: data,
    search: !!search,
    selection: true,
    value: input.value
  })));
};

var AsnycDropdownField = function AsnycDropdownField(_ref) {
  var validate = _ref.validate,
      isRequired = _ref.isRequired,
      search = _ref.search,
      searchBy = _ref.searchBy,
      onSearch = _ref.onSearch,
      onAddNew = _ref.onAddNew,
      onChange = _ref.onChange,
      keyFieldName = _ref.keyFieldName,
      valueFieldName = _ref.valueFieldName,
      textFieldName = _ref.textFieldName,
      apiKey = _ref.apiKey,
      api = _ref.api,
      rest = _objectWithoutProperties(_ref, ["validate", "isRequired", "search", "searchBy", "onSearch", "onAddNew", "onChange", "keyFieldName", "valueFieldName", "textFieldName", "apiKey", "api"]);

  var headers = new Headers();

  if (apiKey) {
    headers.append('Authorization', "Bearer ".concat(apiKey));
  }

  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0, _react.useEffect)(function () {
    setLoading(true);
    fetch(api, {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      setLoading(false);
      setData(_lodash["default"].map(response, function (x) {
        return {
          key: x[keyFieldName],
          text: x[textFieldName],
          value: x[valueFieldName]
        };
      }));
    });
  }, [keyFieldName, textFieldName, valueFieldName, api]);
  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    allowAdditions: typeof onAddNew === 'function',
    component: renderField,
    data: data,
    handleOnAddNew: onAddNew,
    handleOnChange: onChange,
    handleOnSearch: function handleOnSearch(e, v) {
      if (typeof onSearch === 'function') {
        onSearch(e, v);
      }

      if (searchBy && e.target.value) {
        setLoading(true);
        fetch("".concat(api, "?").concat(searchBy, "=").concat(e.target.value), {
          headers: headers
        }).then(function (response) {
          return response.json();
        }).then(function (response) {
          setLoading(false);
          setData(_lodash["default"].map(response, function (x) {
            return {
              key: x[keyFieldName],
              text: x[textFieldName],
              value: x[valueFieldName]
            };
          }));
        });
      }
    },
    loading: loading,
    search: search || searchBy || false,
    validate: newValidator
  }));
};

AsnycDropdownField.propTypes = {
  api: _propTypes["default"].string.isRequired,
  clearable: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  keyFieldName: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  multiple: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  onAddNew: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onSearch: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  search: _propTypes["default"].bool,
  searchBy: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  textFieldName: _propTypes["default"].string,
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  valueFieldName: _propTypes["default"].string,
  apiKey: _propTypes["default"].string
};
AsnycDropdownField.defaultProps = {
  validate: [],
  clearable: false,
  label: '',
  readOnly: false,
  className: '',
  fluid: false,
  search: false,
  multiple: false,
  icon: 'dropdown',
  size: 'normal',
  disabled: false,
  isRequired: false,
  onAddNew: null,
  onChange: null,
  onSearch: null,
  searchBy: null,
  placeholder: '',
  keyFieldName: 'key',
  textFieldName: 'text',
  valueFieldName: 'value',
  apiKey: null
};
var _default = AsnycDropdownField;
exports["default"] = _default;
//# sourceMappingURL=AsyncDropdownField.js.map