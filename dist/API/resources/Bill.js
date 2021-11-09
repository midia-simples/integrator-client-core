"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Bill extends _Resource.default {
  list(data) {
    return this.request('faturas.cliente', data);
  }

  details(data) {
    return this.request('fatura.detalhe', data);
  }

}

var _default = Bill;
exports.default = _default;