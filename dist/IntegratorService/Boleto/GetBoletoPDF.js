"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _GetBoletoData = _interopRequireDefault(require("./GetBoletoData"));

var _renderPDF = _interopRequireDefault(require("../../util/renderPDF"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetBoletoPDF {
  async run({
    codfat
  }) {
    try {
      const {
        download
      } = await _GetBoletoData.default.run({
        codfat
      });
      const {
        data: dataHtml
      } = await _axios.default.get(download);
      const [url = ''] = dataHtml.match(/(?<=<script>window\.location\.href=')(.*)(?='<\/script>)/);
      return (0, _renderPDF.default)(url);
    } catch (err) {
      var _err$response;

      throw new _ServiceError.default((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) || 500, (err === null || err === void 0 ? void 0 : err.message) || 'Erro ao buscar boleto no integrator');
    }
  }

}

var _default = new GetBoletoPDF();

exports.default = _default;