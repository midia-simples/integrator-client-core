"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ServiceError from '~/util/ServiceError';
class GetSpeedServices {
  async run({
    codsercli
  }) {
    var _response$data, _response$data$result;

    const {
      data: response
    } = await _Integrator.default.Service.speed({
      codsercli
    }); // if (response.error) {
    //   throw new ServiceError(
    //     500,
    //     response.data?.exception || 'Erro ao buscar a velocidade do plano',
    //   );
    // }

    return (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$result = _response$data.results) === null || _response$data$result === void 0 ? void 0 : _response$data$result[0]) || {};
  }

}

var _default = new GetSpeedServices();

exports.default = _default;