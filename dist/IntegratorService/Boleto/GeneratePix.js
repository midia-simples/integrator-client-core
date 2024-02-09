"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GeneratePix {
  async run({
    codfat
  }) {
    const response = await _Integrator.default.Bill.generatePix({
      codfat
    });
    const slashes = /(\\|\/)/g;
    const results = response.data.data.results;
    const pixData = results[0];
    const qrcode = pixData.imagemQrcode.split(',');
    const textPix = pixData.textoImagemQRcode;
    const metadata = qrcode[0];
    const payload = qrcode[1].replaceAll(slashes, '');
    const image = `${metadata},${payload}`;
    return {
      image,
      textPix
    };
  }

}

var _default = new GeneratePix();

exports.default = _default;