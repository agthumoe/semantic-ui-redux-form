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

var renderField = function renderField(fields) {
  var label = fields.label,
      className = fields.className,
      input = fields.input,
      toggle = fields.toggle,
      disabled = fields.disabled,
      slider = fields.slider,
      id = fields.id,
      readOnly = fields.readOnly,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error;
  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, _react["default"].createElement(_semanticUiReact.Checkbox, {
    checked: input.value || false,
    disabled: disabled,
    id: id,
    label: _react["default"].createElement("label", {
      htmlFor: id
    }, label, _react["default"].createElement("small", null, touched && error ? " ( ".concat(error, " )") : undefined)),
    name: input.name,
    onChange: function onChange(event, data) {
      return input.onChange(data.checked);
    },
    readOnly: readOnly,
    slider: slider,
    toggle: toggle
  }));
};

var CheckboxField = function CheckboxField(_ref) {
  var label = _ref.label,
      name = _ref.name,
      id = _ref.id,
      toggle = _ref.toggle,
      slider = _ref.slider,
      disabled = _ref.disabled,
      isRequired = _ref.isRequired,
      readOnly = _ref.readOnly,
      className = _ref.className;
  var validate = [];

  if (isRequired) {
    validate.push(_validation.required);
  }

  return _react["default"].createElement(_reduxForm.Field, {
    className: className,
    component: renderField,
    disabled: disabled,
    id: id,
    label: label,
    name: name,
    readOnly: readOnly,
    slider: slider,
    toggle: toggle,
    validate: validate
  });
};

CheckboxField.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  name: _propTypes["default"].string.isRequired,
  readOnly: _propTypes["default"].bool,
  slider: _propTypes["default"].bool,
  toggle: _propTypes["default"].bool
};
CheckboxField.defaultProps = {
  className: null,
  disabled: false,
  readOnly: false,
  isRequired: false,
  slider: false,
  toggle: false
};
var _default = CheckboxField;
exports["default"] = _default;
//# sourceMappingURL=CheckboxField.js.map