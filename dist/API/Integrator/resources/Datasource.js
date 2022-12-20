"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Datasource extends _Resource.default {
  criarAtendimento(data) {
    return this.request('datasource.criarAtendimento', data);
  }

  ocorrenciaStatus(data) {
    return this.request('datasource.ocorrencia.status', data);
  }

  linhaDigitavel(data) {
    return this.request('datasource.linhaDigitavel', data);
  }

  verBoleto({
    codfat
  }) {
    return this.request('datasource.verBoleto', {
      codfat
    });
  }

  listaEmails({
    codcli
  }) {
    return this.request('datasource.lista_emails', {
      codcli
    });
  }

  salvarContatoCliente({
    codcli,
    codco_cl,
    e_mail,
    celular
  }) {
    return this.request('datasource.salvar_contato_cliente', {
      codcli,
      codco_cl,
      e_mail,
      celular
    });
  }

}

var _default = new Datasource();

exports.default = _default;