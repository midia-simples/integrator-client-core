"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _documentMasks = require("../../util/documentMasks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowCustomer {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    document
  }) {
    const documentNum = (0, _removeNotNumbers.removeNotNumbers)(document);
    const documentIsCpf = documentNum.length === 11;
    const data = {
      [documentIsCpf ? 'cpf' : 'cnpj']: [documentIsCpf ? (0, _documentMasks.cpfMask)(documentNum) : (0, _documentMasks.cnpjMask)(documentNum)]
    };
    const result = await this.integrator.Customer.exists(data);
    return result;
  }

}

var _default = new ShowCustomer();

exports.default = _default;