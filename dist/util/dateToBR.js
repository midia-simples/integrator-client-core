"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateToBR;

function dateToBR(date) {
  return date.toISOString().split('T')[0].split('-').reverse().join('/');
}