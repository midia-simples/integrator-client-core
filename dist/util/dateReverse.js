"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateToISO;

function dateToISO(date) {
  const numbers = date.split('/');
  numbers.reverse();
  return numbers.join('-');
}