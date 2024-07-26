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

  generatePix({
    codfat
  }) {
    return this.request('fatura.getPix', {
      codfat
    });
  }

  extract(data) {
    return this.request('extrato.financeiro', data);
  }

}

var _default = new Bill();

exports.default = _default;