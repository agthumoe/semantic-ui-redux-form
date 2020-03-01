"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Options = /*#__PURE__*/function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props));
    _this.state = {
      selected: props.value
    };
    _this.toggleOption = _this.toggleOption.bind(_assertThisInitialized(_this));
    _this.renderOptions = _this.renderOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Options, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.selected) {
        this.setState({
          selected: nextProps.value
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.selected !== this.state.selected;
    }
  }, {
    key: "toggleOption",
    value: function toggleOption(option) {
      if (!option.disabled) {
        this.setState({
          selected: option.value
        });
        this.props.onChange(option.value);
      }
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this2 = this;

      return this.props.options.map(function (option) {
        return _react["default"].createElement(_semanticUiReact.Form.Radio, {
          key: option.value,
          checked: _this2.state.selected === option.value,
          className: _this2.props.className,
          label: option.label,
          onChange: function onChange() {
            return _this2.toggleOption(option);
          },
          value: option.value
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          inline = _this$props.inline;
      return _react["default"].createElement(_semanticUiReact.Form.Group, {
        inline: inline
      }, this.renderOptions(options));
    }
  }]);

  return Options;
}(_react["default"].Component);

Options.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]).isRequired,
    disabled: _propTypes["default"].bool
  })).isRequired,
  inline: _propTypes["default"].bool
};
Options.defaultProps = {
  inline: true
};
var _default = Options;
exports["default"] = _default;
//# sourceMappingURL=Options.js.map