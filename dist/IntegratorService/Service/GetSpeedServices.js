"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetSpeedServices {
  async run({
    codsercli
  }) {
    var _response$data2, _response$data2$resul;

    const {
      data: response
    } = await _Integrator.default.Service.speed({
      codsercli
    });

    if (response.error) {
      var _response$data;

      throw new _ServiceError.default(500, ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.exception) || 'Erro ao buscar a velocidade do plano');
    }

    return (response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$resul = _response$data2.results) === null || _response$data2$resul === void 0 ? void 0 : _response$data2$resul[0]) || {};
  }

}

var _default = new GetSpeedServices();

exports.default = _default;