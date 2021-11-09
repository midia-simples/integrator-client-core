"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _GetBoletoData = _interopRequireDefault(require("./GetBoletoData"));

var _renderPDF = _interopRequireDefault(require("../../util/renderPDF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetBoletoPDF {
  async run({
    codfat
  }) {
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
  }

}

var _default = new GetBoletoPDF();

exports.default = _default;