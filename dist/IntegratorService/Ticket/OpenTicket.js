"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _isJSON = _interopRequireDefault(require("../../util/isJSON"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OpenTicket {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codcli,
    codsercli,
    descri_oco,
    codusu,
    codocop,
    codcatoco
  }) {
    const {
      data
    } = await this.integrator.Datasource.criarAtendimento({
      codcli,
      codsercli,
      codcar: process.env.NODE_ENV === 'development' ? process.env.API_INTEGRATOR_CODCAR_TESTE : process.env.API_INTEGRATOR_CODCAR_FINANCEIRO,
      codmvis: 'PROBLEMA',
      descri_oco,
      codusu,
      codocop,
      codcatoco
    });
    const {
      error,
      exception
    } = data;
    console.log(error, exception);

    if (error) {
      throw new _ServiceError.default(400, exception);
    } else if (typeof data === 'string' && !(0, _isJSON.default)(data) || !data.data.results) {
      throw new _ServiceError.default(400, 'Não foi possível abrir um atendimento');
    }

    const {
      codoco,
      numero_oco
    } = data.data.results[0];
    return {
      codoco,
      numero_oco
    };
  }

}

var _default = new OpenTicket();

exports.default = _default;