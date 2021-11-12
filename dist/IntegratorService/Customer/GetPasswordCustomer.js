"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _config = _interopRequireDefault(require("../../config"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _documentMasks = require("../../util/documentMasks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetPasswordCustomer {
  async run({
    document
  }) {
    const documentHandle = (0, _removeNotNumbers.removeNotNumbers)(document);
    const documentIsCpf = documentHandle.length === 11;

    const {
      viewLogin
    } = _config.default.getConfig();

    const params = {
      _consulta: viewLogin,
      [documentIsCpf ? 'cpf' : 'cnpj']: documentIsCpf ? (0, _documentMasks.cpfMask)(documentHandle) : (0, _documentMasks.cnpjMask)(documentHandle)
    };
    const response = await _Integrator.default.View.execute(params);

    if (response && !response.data.error) {
      const {
        SenhaCentral
      } = response.data.data.results[0];
      return {
        passwordIntegrator: SenhaCentral
      };
    }

    return null;
  }

}

var _default = new GetPasswordCustomer();

exports.default = _default;