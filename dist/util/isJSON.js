"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

function isJSON(json) {
  try {
    JSON.parse(json);
    return true;
  } catch (err) {
    return false;
  }
}