"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _renderPDF = _interopRequireDefault(require("../../util/renderPDF"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImprimirNotaFiscal {
  async run({
    codnf,
    codtnf
  }) {
    const {
      data
    } = await _Integrator.default.NotaFiscal.imprimirNf({
      codnf,
      codtnf
    });

    if (data.data) {
      const {
        host
      } = _config.default.getConfig();

      const url = `${host}/${data.data.results[0].link}`;
      return (0, _renderPDF.default)(url);
    }

    return {};
  }

}

var _default = new ImprimirNotaFiscal();

exports.default = _default;