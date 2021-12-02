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
    var _responseDownload$dat, _responseDownload$dat2, _linhaDigitavel$data, _linhaDigitavel$data$;

    const responseDownload = await _Integrator.default.Datasource.verBoleto({
      codfat
    });
    const linhaDigitavel = await _Integrator.default.Datasource.linhaDigitavel({
      codfat
    });
    const resultsDownload = (_responseDownload$dat = responseDownload.data) === null || _responseDownload$dat === void 0 ? void 0 : (_responseDownload$dat2 = _responseDownload$dat.data) === null || _responseDownload$dat2 === void 0 ? void 0 : _responseDownload$dat2.results;
    const resultsLinha = (_linhaDigitavel$data = linhaDigitavel.data) === null || _linhaDigitavel$data === void 0 ? void 0 : (_linhaDigitavel$data$ = _linhaDigitavel$data.data) === null || _linhaDigitavel$data$ === void 0 ? void 0 : _linhaDigitavel$data$.results;
    if (!resultsDownload || !resultsLinha) throw new Error('Boleto não existe');

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