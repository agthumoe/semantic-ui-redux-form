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

var renderField = function renderField(_ref) {
  var placeholder = _ref.placeholder,
      id = _ref.id,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      className = _ref.className,
      disabled = _ref.disabled,
      size = _ref.size,
      readOnly = _ref.readOnly,
      handleOnChange = _ref.handleOnChange;
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

var TextAreaField = function TextAreaField(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      placeholder = _ref2.placeholder,
      isRequired = _ref2.isRequired,
      id = _ref2.id,
      disabled = _ref2.disabled,
      readOnly = _ref2.readOnly,
      size = _ref2.size,
      validate = _ref2.validate,
      onChange = _ref2.onChange,
      className = _ref2.className;
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
    validate: validate
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