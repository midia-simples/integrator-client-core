"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _documentMasks = require("../../util/documentMasks");

var _GetPasswordCustomer = _interopRequireDefault(require("./GetPasswordCustomer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ChangePassword {
  async run({
    document,
    password: senha
  }) {
    const documentNum = (0, _removeNotNumbers.removeNotNumbers)(document);
    const {
      senha: senha_ant
    } = await _GetPasswordCustomer.default.run({
      document
    });
    const documentIsCpf = documentNum.length === 11;
    const response = await _Integrator.default.Customer.changePassword({
      senha_ant,
      senha,
      tipoPessoa: documentIsCpf ? 'F' : 'J',
      cpfCnpj: documentIsCpf ? (0, _documentMasks.cpfMask)(documentNum) : (0, _documentMasks.cnpjMask)(documentNum)
    });
    if (!response.error) return;
    throw new _ServiceError.default(500, 'Não foi possível alterar a senha');
  }

}

var _default = new ChangePassword();

exports.default = _default;