"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeDecode = safeDecode;

var _utf = _interopRequireDefault(require("utf8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
function safeDecode(data) {
  try {
    const decoded = _utf.default.decoded(data);

    return decoded;
  } catch (e) {
    return data;
  }
}