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
      codco_cl
    } = contactsList.data.results[0];
    await _Integrator.default.Datasource.salvarContatoCliente({
      codcli,
      e_mail,
      celular: (0, _removeNotNumbers.removeNotNumbers)(celular)
    });
    return {
      msg: 'Dados atualizados'
    };
  }

}

var _default = new SaveContactData();

exports.default = _default;