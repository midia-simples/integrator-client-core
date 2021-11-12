"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _documentMasks = require("../../util/documentMasks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowAllPlans {
  async run({
    document
  }) {
    const documentHandle = (0, _removeNotNumbers.removeNotNumbers)(document);
    const documentIsCpf = documentHandle.length === 11;
    const data = {
      _consulta: '012I0L9WDV',
      [documentIsCpf ? 'cpf' : 'cnpj']: [documentIsCpf ? (0, _documentMasks.cpfMask)(documentHandle) : (0, _documentMasks.cnpjMask)(documentHandle)]
    };
    const response = await _Integrator.default.View.execute(data);

    const plans = this._getResponsePlans(response.list);

    return plans;
  }

  _getResponsePlans(plans) {
    const planos = plans.filter(plano => plano.status_150.trim() === 'Serviço Habilitado');
    const planosFormat = planos.map(item => ({
      nome_plano: item.nome_do_plano_200,
      codigo_plano: item.codigo_plano,
      status_plano: item.status_150.trim(),
      endereco_plano: item.endereco_instalacao_200.trim()
    }));
    return planosFormat;
  }

}

var _default = new ShowAllPlans();

exports.default = _default;