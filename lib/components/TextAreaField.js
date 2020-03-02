"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _reduxForm = require("redux-form");

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderField = function renderField(fields) {
  var placeholder = fields.placeholder,
      id = fields.id,
      input = fields.input,
      label = fields.label,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      className = fields.className,
      disabled = fields.disabled,
      size = fields.size,
      readOnly = fields.readOnly,
      handleOnChange = fields.handleOnChange;
  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, label && _react["default"].createElement("label", {
    htmlFor: id
  }, label, _react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), _react["default"].createElement(_semanticUiReact.TextArea, _extends({}, input, {
    disabled: disabled,
    id: id,
    onChange: function onChange(event, data) {
      if (typeof handleOnChange === 'function') {
        handleOnChange(event, data);
      }

      input.onChange(event);
    },
    placeholder: placeholder,
    readOnly: readOnly,
    size: size || undefined
  })));
};

var TextAreaField = function TextAreaField(_ref) {
  var name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      isRequired = _ref.isRequired,
      id = _ref.id,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      size = _ref.size,
      validate = _ref.validate,
      onChange = _ref.onChange,
      className = _ref.className;
  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return _react["default"].createElement(_reduxForm.Field, {
    className: className,
    component: renderField,
    disabled: disabled,
    handleOnChange: onChange,
    id: id,
    label: label,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    size: size,
    validate: newValidator
  });
};

TextAreaField.propTypes = {
  id: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  isRequired: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  onChange: _propTypes["default"].func
};
TextAreaField.defaultProps = {
  validate: [],
  label: '',
  className: '',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  size: null
};
var _default = TextAreaField;
exports["default"] = _default;
//# sourceMappingURL=TextAreaField.js.map