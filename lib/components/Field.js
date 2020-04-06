"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _semanticUiReact = require("semantic-ui-react");

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderField = function renderField(fields) {
  var id = fields.id,
      label = fields.label,
      className = fields.className,
      icon = fields.icon,
      size = fields.size,
      input = fields.input,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      handleOnChange = fields.handleOnChange,
      rest = _objectWithoutProperties(fields, ["id", "label", "className", "icon", "size", "input", "meta", "handleOnChange"]);

  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label, /*#__PURE__*/_react["default"].createElement("small", null, touched && error ? " ( ".concat(error, " )") : undefined)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Input, _extends({}, rest, input, {
    icon: icon || undefined,
    onChange: function onChange(event, data) {
      if (typeof handleOnChange === 'function') {
        handleOnChange(event, data);
      }

      input.onChange(event);
    },
    size: size || undefined
  })));
};

var Field = function Field(_ref) {
  var type = _ref.type,
      isRequired = _ref.isRequired,
      validate = _ref.validate,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["type", "isRequired", "validate", "onChange"]);

  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  if (type === 'number') {
    newValidator.push(_validation.number);
  }

  if (type === 'email') {
    newValidator.push(_validation.email);
  }

  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    type: type,
    component: renderField,
    handleOnChange: onChange,
    validate: newValidator
  }));
};

Field.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  loading: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  type: _propTypes["default"].oneOf(['number', 'text', 'password', 'email']),
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func)
};
Field.defaultProps = {
  validate: [],
  label: '',
  className: '',
  type: 'text',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  fluid: false,
  icon: '',
  size: null,
  loading: false
};
var _default = Field;
exports["default"] = _default;
//# sourceMappingURL=Field.js.map