"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetBoletoData {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codfat
  }) {
    const responseDownload = await this.integrator.Datasource.verBoleto({
      codfat
    });
    const linhaDigitavel = await this.integrator.Datasource.linhaDigitavel({
      codfat
    });
    const resultsDownload = responseDownload.data.data.results;
    const resultsLinha = linhaDigitavel.data.data.results;
    return {
      linha: resultsLinha[0].codigo_barras,
      download: `${process.env.API_INTEGRATOR_HOST_NAME}/${resultsDownload[0].linkBoleto}`
    };
  }

}

var _default = new GetBoletoData();

exports.default = _default;