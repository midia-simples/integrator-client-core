"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetBoletoData {
  async run({
    codfat
  }) {
    const responseDownload = await _Integrator.default.Datasource.verBoleto({
      codfat
    });
    const linhaDigitavel = await _Integrator.default.Datasource.linhaDigitavel({
      codfat
    });
    const resultsDownload = responseDownload.data.data.results;
    const resultsLinha = linhaDigitavel.data.data.results;

    const {
      host
    } = _config.default.getConfig();

    return {
      linha: resultsLinha[0].codigo_barras,
      download: `${host}/${resultsDownload[0].linkBoleto}`
    };
  }

}

var _default = new GetBoletoData();

exports.default = _default;