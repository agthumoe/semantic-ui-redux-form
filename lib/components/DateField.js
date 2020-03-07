"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiCalendarReact = require("semantic-ui-calendar-react");

var _reduxForm = require("redux-form");

var _semanticUiReact = require("semantic-ui-react");

var _moment = _interopRequireDefault(require("moment"));

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderField = function renderField(fields) {
  var id = fields.id,
      label = fields.label,
      className = fields.className,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      input = fields.input,
      handleOnChange = fields.handleOnChange,
      dateFormat = fields.dateFormat,
      rest = _objectWithoutProperties(fields, ["id", "label", "className", "meta", "input", "handleOnChange", "dateFormat"]);

  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className
  }, label && _react["default"].createElement("label", {
    htmlFor: id
  }, label, _react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), _react["default"].createElement(_semanticUiCalendarReact.DateInput, _extends({}, rest, input, {
    dateFormat: dateFormat,
    id: id,
    animation: "fade",
    onChange: function onChange(event, data) {
      var normalised = (0, _moment["default"])(data.value, dateFormat);

      if (typeof handleOnChange === 'function') {
        handleOnChange(event, normalised);
      }

      input.onChange(normalised);
    },
    value: _moment["default"].isMoment(input.value) || _moment["default"].isDate(input.value) ? (0, _moment["default"])(input.value).format(dateFormat) : input.value
  })));
};

var DateField = function DateField(_ref) {
  var isRequired = _ref.isRequired,
      validate = _ref.validate,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["isRequired", "validate", "onChange"]);

  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return _react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    component: renderField,
    handleOnChange: onChange,
    validate: newValidator
  }));
};

DateField.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  name: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  popupPosition: _propTypes["default"].oneOf(['top left', 'top right', 'bottom left', 'bottom right', 'right center', 'left center', 'top center', 'bottom center']),
  readOnly: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func)
};
DateField.defaultProps = {
  validate: [],
  label: '',
  className: '',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  fluid: false,
  icon: '',
  size: null,
  popupPosition: 'top left'
};
var _default = DateField;
exports["default"] = _default;
//# sourceMappingURL=DateField.js.map