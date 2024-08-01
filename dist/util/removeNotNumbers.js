"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNotNumbers = void 0;

// eslint-disable-next-line
const removeNotNumbers = str => String(str).replace(/[^\d]/g, '');

exports.removeNotNumbers = removeNotNumbers;