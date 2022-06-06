"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utf = require("../../util/utf8");

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetServiceDetails {
  async run({
    codcli,
    codsercli
  }) {
    const {
      data
    } = await _Integrator.default.Service.detail({
      codcli,
      codsercli
    });

    if (data.data) {
      var _data$data, _data$data$results;

      const {
        nome_cid,
        endereco,
        bairro
      } = data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$results = _data$data.results) === null || _data$data$results === void 0 ? void 0 : _data$data$results.row;
      return {
        nome_cid: (0, _utf.safeDecode)(nome_cid),
        endereco: (0, _utf.safeDecode)(endereco),
        bairro: (0, _utf.safeDecode)(bairro)
      };
    }

    return {};
  }

}

var _default = new GetServiceDetails();

exports.default = _default;