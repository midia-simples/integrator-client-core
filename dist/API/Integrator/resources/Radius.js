"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Radius extends _Resource.default {
  getLogin({
    codcli
  }) {
    return this.request('services.details', {
      codcli,
      status: 'I'
    });
  }

}

var _default = new Radius();

exports.default = _default;