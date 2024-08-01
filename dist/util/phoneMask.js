"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.celphoneMask = void 0;

// eslint-disable-next-line
const celphoneMask = str => String(str).replace(/(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3');

exports.celphoneMask = celphoneMask;