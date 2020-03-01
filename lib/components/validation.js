"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.username = exports.email = exports.minValue = exports.number = exports.percentage = exports.maxLength255 = exports.maxLength = exports.required = void 0;

var required = function required(value) {
  if (value && typeof value === 'string' && value.trim() !== '') {
    return undefined;
  }

  if (value && value.constructor === Array && value.length > 0) {
    return undefined;
  }

  if (value && typeof value === 'number') {
    return undefined;
  }

  if (typeof value === 'boolean') {
    return undefined;
  }

  return 'This field is required.';
}; // (value && value.trim() !== '' ? undefined : 'This is a required field.');


exports.required = required;

var maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? "Must be ".concat(max, " characters or less") : undefined;
  };
};

exports.maxLength = maxLength;
var maxLength255 = maxLength(255);
exports.maxLength255 = maxLength255;

var percentage = function percentage(value) {
  return value > 100 ? 'Invalid percentage amount' : undefined;
};

exports.percentage = percentage;

var number = function number(value) {
  return value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;
};

exports.number = number;

var minValue = function minValue(min) {
  return function (value) {
    return value && value < min ? "Must be at least ".concat(min) : undefined;
  };
};

exports.minValue = minValue;

var email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
};

exports.email = email;

var username = function username(value) {
  return value && !/^[A-Z0-9_]+$/i.test(value) ? 'Invalid username' : undefined;
};

exports.username = username;
//# sourceMappingURL=validation.js.map