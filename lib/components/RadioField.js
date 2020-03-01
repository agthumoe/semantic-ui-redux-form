"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _Options = _interopRequireDefault(require("./Options"));

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderField = function renderField(fields) {
  var name = fields.name,
      label = fields.label,
      className = fields.className,
      id = fields.id,
      options = fields.options,
      _fields$input = fields.input,
      value = _fields$input.value,
      onChange = _fields$input.onChange,
      rest = _objectWithoutProperties(_fields$input, ["value", "onChange"]),
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error;

  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, _react["default"].createElement("label", {
    className: className,
    htmlFor: id
  }, label), _react["default"].createElement(_Options["default"], _extends({
    className: className,
    label: label,
    name: name,
    onChange: onChange,
    options: options,
    value: value
  }, rest, {
    id: id
  })));
};

var RadioField = function RadioField(_ref) {
  var validate = _ref.validate,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      isRequired = _ref.isRequired,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id,
      className = _ref.className,
      options = _ref.options;
  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return _react["default"].createElement(_reduxForm.Field, {
    className: className,
    component: renderField,
    disabled: disabled,
    id: id,
    label: label,
    name: name,
    onHandleChange: onChange,
    options: options,
    readOnly: readOnly,
    validate: newValidator
  });
};

RadioField.propTypes = {
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]).isRequired
  }))
};
RadioField.defaultProps = {
  validate: [],
  label: '',
  isRequired: false,
  disabled: false,
  readOnly: false,
  onChange: null,
  options: []
};
var _default = RadioField;
exports["default"] = _default;
//# sourceMappingURL=RadioField.js.map