"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fileExists;

var _promises = require("fs/promises");

var _fs = require("fs");

async function fileExists(path) {
  try {
    /* eslint no-bitwise: ["error", { "allow": ["|"] }] */
    await (0, _promises.access)(path, _fs.constants.R_OK | _fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}