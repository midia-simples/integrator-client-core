"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OpenTicket = _interopRequireDefault(require("./OpenTicket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChangePaymentMethod {
  async run({
    codcli,
    codsercli,
    nome_plano,
    name,
    telefone,
    email,
    forma_pagamento,
    conta_bancaria,
    agencia
  }) {
    const debito = agencia && conta_bancaria ? `AGENCIA: ${agencia}
        CONTA BANCARIA: ${conta_bancaria}` : '';
    const descri_oco = `
        ATENDIMENTO AUTOMATICO ABERTO PELO APLICATIVO CLIENTE DA CERTTO
        Pedido de troca de forma de pagamento
        nome: ${name}
        código do cliente: ${codcli}
        nome do plano: ${nome_plano}
        telefone informado: ${telefone}
        email informado: ${email}
        nova forma de pagamento: ${forma_pagamento}
        ${debito}
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

var _default = new ChangePaymentMethod();

exports.default = _default;