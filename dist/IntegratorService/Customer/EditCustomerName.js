"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EditCustomerName {
  async run({
    codcli,
    nome_cli
  }) {
    const {
      data
    } = await _Integrator.default.Customer.edit({
      codcli,
      nome_cli
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

var _default = new EditCustomerName();

exports.default = _default;