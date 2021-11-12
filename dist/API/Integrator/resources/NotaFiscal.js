"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotaFiscal extends _Resource.default {
  list({
    codcli,
    desde,
    hasta
  }) {
    return this.request('notas_fiscais.list', {
      codcli,
      desde,
      hasta
    });
  }

  imprimirNf({
    codnf,
    codtnf
  }) {
    return this.request('notas_fiscais.ImprimirNf', {
      codnf,
      codtnf
    });
  }

}

var _default = new NotaFiscal();

exports.default = _default;