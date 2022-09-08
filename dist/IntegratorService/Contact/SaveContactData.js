"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SaveContactData {
  async run({
    codcli,
    e_mail,
    celular
  }) {
    const {
      data: contactsList
    } = await _Integrator.default.Contact.list({
      codcli
    });

    if (contactsList.data.results) {
      const {
        codco_cl
      } = contactsList.data.results[0];
      await _Integrator.default.Datasource.salvarContatoCliente({
        codco_cl,
        e_mail,
        celular: (0, _removeNotNumbers.removeNotNumbers)(celular)
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