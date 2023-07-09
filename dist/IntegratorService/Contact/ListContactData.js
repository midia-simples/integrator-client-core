"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListContactData {
  async run({
    codcli
  }) {
    const {
      data: contactsList
    } = await _Integrator.default.Contact.list({
      codcli
    });

    if (contactsList.data.results) {
      return contactsList.data.results.map(contact => ({
        e_mail: contact.e_mail,
        celular: contact.celular,
        codco_cl_p: contact.codco_cl_p
      }));
    }

    throw new _ServiceError.default(500, 'Erro desconhecido');
  }

}

var _default = new ListContactData();

exports.default = _default;