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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderField = function renderField(fields) {
  var id = fields.id,
      label = fields.label,
      placeholder = fields.placeholder,
      loading = fields.loading,
      disabled = fields.disabled,
      clearable = fields.clearable,
      readOnly = fields.readOnly,
      className = fields.className,
      fluid = fields.fluid,
      icon = fields.icon,
      search = fields.search,
      size = fields.size,
      handleOnSearch = fields.handleOnSearch,
      handleOnChange = fields.handleOnChange,
      input = fields.input,
      multiple = fields.multiple,
      data = fields.data,
      _fields$meta = fields.meta,
      touched = _fields$meta.touched,
      error = _fields$meta.error;
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    className: className,
    error: touched && error && true
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label, /*#__PURE__*/_react["default"].createElement("small", null, touched && error ? "* ( ".concat(error, " )") : undefined)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dropdown, {
    disabled: disabled,
    fluid: fluid,
    icon: icon,
    id: id,
    clearable: clearable,
    name: input.name,
    loading: loading,
    multiple: multiple,
    onChange: function onChange(event, d) {
      if (typeof handleOnChange === 'function') {
        handleOnChange(event, d);
      }

      if (multiple) {
        input.onChange(_toConsumableArray(d.value));
      } else {
        input.onChange(d.value);
      }
    },
    onSearchChange: function onSearchChange(event) {
      if (typeof handleOnSearch === 'function') {
        handleOnSearch(event.target.value);
      }
    },
    options: data,
    placeholder: placeholder,
    readOnly: readOnly,
    search: search || typeof handleOnSearch === 'function',
    selection: true,
    size: size,
    value: multiple ? _toConsumableArray(input.value) : input.value
  }));
};

var DropdownField = function DropdownField(_ref) {
  var validate = _ref.validate,
      id = _ref.id,
      clearable = _ref.clearable,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      isRequired = _ref.isRequired,
      loading = _ref.loading,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      className = _ref.className,
      fluid = _ref.fluid,
      icon = _ref.icon,
      size = _ref.size,
      search = _ref.search,
      data = _ref.data,
      onSearch = _ref.onSearch,
      onAddNew = _ref.onAddNew,
      multiple = _ref.multiple,
      onChange = _ref.onChange;
  var newValidator = validate.slice();

  if (isRequired) {
    newValidator.push(_validation.required);
  }

  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    clearable: clearable,
    className: className,
    component: renderField,
    data: data,
    disabled: disabled,
    fluid: fluid,
    handleOnAddNew: onAddNew,
    handleOnChange: onChange,
    handleOnSearch: onSearch,
    icon: icon,
    id: id,
    label: label,
    loading: loading,
    multiple: multiple,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    search: search,
    size: size,
    validate: newValidator
  });
};

DropdownField.propTypes = {
  className: _propTypes["default"].string,
  clearable: _propTypes["default"].bool,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    key: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object, _propTypes["default"].bool]).isRequired
  })),
  disabled: _propTypes["default"].bool,
  fluid: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  isRequired: _propTypes["default"].bool,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  loading: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  onAddNew: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onSearch: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  search: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive', 'normal']),
  validate: _propTypes["default"].arrayOf(_propTypes["default"].func)
};
DropdownField.defaultProps = {
  validate: [],
  clearable: false,
  label: '',
  readOnly: false,
  search: false,
  className: '',
  data: [],
  fluid: false,
  icon: 'dropdown',
  loading: false,
  size: 'normal',
  disabled: false,
  isRequired: false,
  multiple: false,
  onChange: null,
  onSearch: null,
  onAddNew: null,
  placeholder: ''
};
var _default = DropdownField;
exports["default"] = _default;
//# sourceMappingURL=DropdownField.js.map