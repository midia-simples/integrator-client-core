"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _config = _interopRequireDefault(require("../../config"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _documentMasks = require("../../util/documentMasks");

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetCustomerWithStatus {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    document
  }) {
    document = (0, _removeNotNumbers.removeNotNumbers)(document);
    const documentIsCpf = document.length === 11;

    const {
      viewStatus
    } = _config.default.getConfig();

    const data = {
      _consulta: viewStatus,
      [documentIsCpf ? 'cpf' : 'cnpj']: documentIsCpf ? (0, _documentMasks.cpfMask)(document) : (0, _documentMasks.cnpjMask)(document)
    };
    const response = await this.integrator.Customer.exists(data);

    if (response) {
      const {
        codcli,
        nome
      } = response.data.data.results[0];
      return {
        codcli,
        name: nome
      };
    }

    throw new _ServiceError.default(401, 'Esse CNPJ/CPF não é cliente');
  }

}

var _default = new GetCustomerWithStatus();

exports.default = _default;