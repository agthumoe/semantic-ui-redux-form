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
      appendCurrentTime = fields.appendCurrentTime,
      rest = _objectWithoutProperties(fields, ["id", "label", "className", "meta", "input", "handleOnChange", "dateFormat", "appendCurrentTime"]);

  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className
  }, label && _react["default"].createElement("label", {
    htmlFor: id
  }, label, _react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), _react["default"].createElement(_semanticUiCalendarReact.DateTimeInput, _extends({}, rest, input, {
    dateTimeFormat: dateFormat,
    animation: "fade",
    value: input.value ? (0, _moment["default"])(input.value).format(dateFormat) : '',
    onChange: function onChange(event, data) {
      var normalisedDate = null;

      if (data && data.value) {
        normalisedDate = (0, _moment["default"])(data.value, dateFormat);
      }

      if (typeof handleOnChange === 'function') {
        handleOnChange(event, normalisedDate);
      }

      input.onChange(normalisedDate);
    },
    onBlur: function onBlur() {
      return input.onBlur(input.value);
    }
  })));
};

var DateTimeField = function DateTimeField(_ref) {
  var dateFormat = _ref.dateFormat,
      isRequired = _ref.isRequired,
      validate = _ref.validate,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["dateFormat", "isRequired", "validate", "onChange"]);

  var newValidator = validate.slice();
  var timeFormat = '24';

  if (dateFormat) {
    if (dateFormat.includes('a')) {
      timeFormat = 'ampm';
    } else if (dateFormat.includes('A')) {
      timeFormat = 'AMPM';
    }
  }

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return _react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    dateFormat: dateFormat,
    timeFormat: timeFormat,
    validate: newValidator,
    handleOnChange: onChange,
    component: renderField
  }));
};

DateTimeField.propTypes = {
  id: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  isRequired: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  onChange: _propTypes["default"].func,
  popupPosition: _propTypes["default"].oneOf(['top left', 'top right', 'bottom left', 'bottom right', 'right center', 'left center', 'top center', 'bottom center']),
  dateFormat: _propTypes["default"].string,
  appendCurrentTime: _propTypes["default"].bool
};
DateTimeField.defaultProps = {
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
  popupPosition: 'top left',
  dateFormat: 'DD-MM-YYYY hh:mm A',
  appendCurrentTime: false
};
var _default = DateTimeField;
exports["default"] = _default;
//# sourceMappingURL=DateTimeField.js.map