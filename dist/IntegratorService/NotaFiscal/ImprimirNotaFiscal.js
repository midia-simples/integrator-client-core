"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _renderPDF = _interopRequireDefault(require("../../util/renderPDF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImprimirNotaFiscal {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codnf,
    codtnf
  }) {
    const {
      data
    } = await this.integrator.NotaFiscal.imprimirNf({
      codnf,
      codtnf
    });

    if (data.data) {
      const url = `${process.env.API_INTEGRATOR_HOST_NAME}/${data.data.results[0].link}`;
      return (0, _renderPDF.default)(url);
    }

    return {};
  }

}

var _default = new ImprimirNotaFiscal();

exports.default = _default;