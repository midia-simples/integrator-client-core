"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const config = {};

function setConfig({
  url,
  user,
  pass
}) {
  config.url = url;
  config.user = user;
  config.pass = pass;
}

function getConfig() {
  return mainConfig;
}

var _default = {
  setConfig,
  getConfig
};
exports.default = _default;