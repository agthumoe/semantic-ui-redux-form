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

var renderField = function renderField(fields) {
  var id = fields.id,
      label = fields.label,
      placeholder = fields.placeholder,
      type = fields.type,
      className = fields.className,
      readOnly = fields.readOnly,
      disabled = fields.disabled,
      fluid = fields.fluid,
      icon = fields.icon,
      loading = fields.loading,
      size = fields.size,
      input = fields.input,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      handleOnChange = fields.handleOnChange;
  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, label && _react["default"].createElement("label", {
    htmlFor: id
  }, label, _react["default"].createElement("small", null, touched && error ? " ( ".concat(error, " )") : undefined)), _react["default"].createElement(_semanticUiReact.Input, _extends({}, input, {
    disabled: disabled,
    fluid: fluid,
    icon: icon || undefined,
    id: id,
    loading: loading,
    onChange: function onChange(event, data) {
      if (typeof handleOnChange === 'function') {
        handleOnChange(event, data);
      }

      input.onChange(event);
    },
    placeholder: placeholder,
    readOnly: readOnly,
    size: size || undefined,
    type: type
  })));
};

var Field = function Field(_ref) {
  var label = _ref.label,
      name = _ref.name,
      placeholder = _ref.placeholder,
      id = _ref.id,
      type = _ref.type,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      isRequired = _ref.isRequired,
      className = _ref.className,
      fluid = _ref.fluid,
      icon = _ref.icon,
      loading = _ref.loading,
      size = _ref.size,
      validate = _ref.validate,
      onChange = _ref.onChange;
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

  return _react["default"].createElement(_reduxForm.Field, {
    className: className,
    component: renderField,
    disabled: disabled,
    fluid: fluid,
    handleOnChange: onChange,
    icon: icon,
    id: id,
    label: label,
    loading: loading,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    size: size,
    type: type,
    validate: validate
  });
};

Field.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
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