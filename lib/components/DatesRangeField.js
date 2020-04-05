"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiCalendarReact = require("semantic-ui-calendar-react");

var _reduxForm = require("redux-form");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _moment = _interopRequireDefault(require("moment"));

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderField = function renderField(fields) {
  var label = fields.label,
      className = fields.className,
      id = fields.id,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error,
      input = fields.input,
      handleOnChange = fields.handleOnChange,
      dateFormat = fields.dateFormat,
      rest = _objectWithoutProperties(fields, ["label", "className", "id", "meta", "input", "handleOnChange", "dateFormat"]);

  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label, /*#__PURE__*/_react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), /*#__PURE__*/_react["default"].createElement(_semanticUiCalendarReact.DatesRangeInput, _extends({}, rest, {
    name: input.name,
    id: id,
    dateFormat: dateFormat,
    animation: "fade",
    value: input.value && (input.value.from || input.value.to) ? "".concat(input.value.from ? (0, _moment["default"])(input.value.from).format(dateFormat) : '', " - ").concat(input.value.to ? (0, _moment["default"])(input.value.to).format(dateFormat) : '') : '',
    onChange: function onChange(event, data) {
      var normalized = {
        from: '',
        to: ''
      };

      if (data && data.value) {
        var _data$value$split = data.value.split(' - '),
            _data$value$split2 = _slicedToArray(_data$value$split, 2),
            from = _data$value$split2[0],
            to = _data$value$split2[1];

        normalized.from = (0, _moment["default"])(from, dateFormat);
        normalized.to = to ? (0, _moment["default"])(to, dateFormat) : '';
      }

      input.onChange(normalized);

      if (typeof handleOnChange === 'function') {
        handleOnChange(normalized);
      }
    }
  })));
};

var DatesRangeField = function DatesRangeField(_ref) {
  var validate = _ref.validate,
      isRequired = _ref.isRequired,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["validate", "isRequired", "onChange"]);

  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    handleOnChange: onChange,
    component: renderField,
    validate: newValidator
  }));
};

DatesRangeField.propTypes = {
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
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func),
  dateFormat: _propTypes["default"].string
};
DatesRangeField.defaultProps = {
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
  dateFormat: 'DD-MM-YYYY'
};
var _default = DatesRangeField;
exports["default"] = _default;
//# sourceMappingURL=DatesRangeField.js.map