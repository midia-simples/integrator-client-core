"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SaveContactData {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codcli,
    e_mail,
    celular
  }) {
    const {
      data: contactsList
    } = await this.integrator.Contact.list({
      codcli
    });

    if (contactsList.data.results) {
      const {
        codco_cl
      } = contactsList.data.results[0];
      await this.integrator.Datasource.salvarContatoCliente({
        codco_cl,
        e_mail,
        celular
      });
      return {
        msg: 'Dados atualizados'
      };
    }

    throw new _ServiceError.default(500, 'Erro desconhecido');
  }

}

var _default = new SaveContactData();

exports.default = _default;