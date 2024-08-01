"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListNotaFiscal {
  async run({
    codcli,
    desde,
    hasta
  }) {
    const {
      data
    } = await _Integrator.default.NotaFiscal.list({
      codcli,
      desde: `01/${desde}`,
      hasta: `31/${hasta}`
    });

    if (data.data) {
      return data.data.results.map(notaFiscal => ({
        modelo: notaFiscal.modelo,
        codnf: notaFiscal.codnf,
        codtnf: notaFiscal.codtnf,
        data_lancamento: notaFiscal.data_lan,
        valor: notaFiscal.valor_nf
      }));
    }

    return [];
  }

}

var _default = new ListNotaFiscal();

exports.default = _default;