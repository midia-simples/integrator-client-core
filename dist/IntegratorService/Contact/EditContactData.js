"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EditContactData {
  async run({
    codco_cl_p,
    codcli,
    e_mail,
    celular
  }) {
    const {
      data
    } = await _Integrator.default.Contact.edit({
      codcli,
      codco_cl_p,
      e_mail,
      celular: (0, _removeNotNumbers.removeNotNumbers)(celular)
    });

    if (data.error) {
      return {
        msg: data.exception
      };
    }

    return {
      msg: 'Dados atualizados'
    };
  }

}

var _default = new EditContactData();

exports.default = _default;