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
  async run({
    codcar,
    codusu_d,
    codcli,
    codsercli,
    descri_oco,
    tipo_contato = 'Telefonico',
    celular,
    nome,
    email,
    codco_cl,
    codmvis = 'PROBLEMA',
    codusu,
    codocop,
    codcatoco,
    oco_criar_sms = 'S'
  }) {
    const {
      data
    } = await _Integrator.default.Datasource.criarAtendimento({
      codcli,
      codsercli,
      ...(codcar && {
        codcar
      }),
      ...(codusu_d && {
        codusu_d
      }),
      ...(codco_cl && {
        codco_cl
      }),
      nome_contato: nome,
      celular_resposta: celular,
      email_resposta: email,
      fone_resposta: '',
      tipo_contato,
      codmvis,
      descri_oco,
      codusu,
      codocop,
      codcatoco,
      oco_criar_sms
    });
    const {
      error,
      exception
    } = data;

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