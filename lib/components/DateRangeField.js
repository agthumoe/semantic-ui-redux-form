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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      rest = _objectWithoutProperties(fields, ["label", "className", "id", "meta", "input", "handleOnChange"]);

  return _react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className
  }, label && _react["default"].createElement("label", {
    htmlFor: id
  }, label, _react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), _react["default"].createElement(_semanticUiCalendarReact.DatesRangeInput, _extends({}, rest, {
    name: input.name,
    id: id,
    value: input.value ? "".concat(input.value.from, " - ").concat(input.value.to) : '',
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

        normalized.from = from;
        normalized.to = to;
      }

      input.onChange(normalized);

      if (typeof handleOnChange === 'function') {
        handleOnChange(normalized);
      }
    }
  })));
};

var DateRangeField = function DateRangeField(_ref) {
  var onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["onChange"]);

  return _react["default"].createElement(_reduxForm.Field, _extends({}, rest, {
    handleOnChange: onChange,
    component: renderField
  }));
};

DateRangeField.propTypes = {
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
DateRangeField.defaultProps = {
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
var _default = DateRangeField;
exports["default"] = _default;
//# sourceMappingURL=DateRangeField.js.map