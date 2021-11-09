"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetServiceDetails {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codcli,
    codsercli
  }) {
    const {
      data
    } = await this.integrator.Service.detail({
      codcli,
      codsercli
    });

    if (data.data) {
      const {
        nome_cid,
        endereco,
        bairro
      } = data.data.results.row;
      return {
        nome_cid,
        endereco,
        bairro
      };
    }

    return {};
  }

}

var _default = new GetServiceDetails();

exports.default = _default;