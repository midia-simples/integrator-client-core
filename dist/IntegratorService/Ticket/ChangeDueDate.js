"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OpenTicket = _interopRequireDefault(require("./OpenTicket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChangeDueDate {
  async run({
    codcli,
    codsercli,
    nome_plano,
    name,
    telefone,
    dia_vencimento
  }) {
    const descri_oco = `
        ATENDIMENTO AUTOMATICO ABERTO PELO APLICATIVO CLIENTE DA WAVEMAX
        Pedido de troca de vencimento
        nome: ${name}
        código do cliente: ${codcli}
        nome do plano: ${nome_plano}
        telefone informado: ${telefone}
        novo dia de vencimento: ${dia_vencimento}
      `.toUpperCase();
    return _OpenTicket.default.run({
      codcli,
      codsercli,
      codocop: process.env.API_INTEGRATOR_CODOCOP,
      descri_oco,
      codusu: process.env.API_INTEGRATOR_CODUSU,
      codcatoco: process.env.API_INTEGRATOR_CODCATOCO
    });
  }

}

var _default = new ChangeDueDate();

exports.default = _default;