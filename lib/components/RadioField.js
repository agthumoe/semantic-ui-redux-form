"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderField = function renderField(fields) {
  var name = fields.name,
      label = fields.label,
      className = fields.className,
      id = fields.id,
      options = fields.options,
      inline = fields.inline,
      onHandleChange = fields.onHandleChange,
      _fields$input = fields.input,
      value = _fields$input.value,
      _onChange = _fields$input.onChange,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    error: touched && error && true,
    className: className
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: className
  }, label), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Group, {
    inline: inline,
    grouped: !inline
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Radio, {
      label: option.label,
      name: name,
      value: option.value,
      key: option.value,
      checked: value === option.value,
      onChange: function onChange(e, v) {
        if (typeof onHandleChange === 'function') {
          onHandleChange(e, v);
        }

        _onChange(v.value);
      }
    });
  })));
};

var RadioField = function RadioField(_ref) {
  var validate = _ref.validate,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      onChange = _ref.onChange,
      isRequired = _ref.isRequired,
      inline = _ref.inline,
      label = _ref.label,
      name = _ref.name,
      id = _ref.id,
      className = _ref.className,
      options = _ref.options;
  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    component: renderField,
    name: name,
    id: id,
    inline: inline,
    label: label,
    className: className,
    validate: newValidator,
    disabled: disabled,
    readOnly: readOnly,
    onHandleChange: onChange,
    options: options
  });
};

RadioField.propTypes = {
  className: _propTypes["default"].string,
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  inline: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object, _propTypes["default"].bool]).isRequired
  }))
};
RadioField.defaultProps = {
  className: '',
  validate: [],
  label: '',
  isRequired: false,
  disabled: false,
  readOnly: false,
  inline: true,
  onChange: null,
  options: []
};
var _default = RadioField;
exports["default"] = _default;
//# sourceMappingURL=RadioField.js.map