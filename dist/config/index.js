"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const config = {};

function setConfig({
  host,
  url,
  user,
  pass,
  viewLogin,
  viewStatus
}) {
  config.url = url;
  config.host = host;
  config.user = user;
  config.pass = pass;
  config.viewLogin = viewLogin;
  config.viewStatus = viewStatus;
}

function getConfig() {
  return config;
}

var _default = {
  setConfig,
  getConfig
};
exports.default = _default;