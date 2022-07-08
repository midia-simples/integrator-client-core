"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _documentMasks = require("../../util/documentMasks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowAllPlans {
  async run({
    codcli
  }) {
    const data = {
      _consulta: '012I0L9WDV',
      codcli
    };
    const response = await _Integrator.default.View.execute(data);
    return this._getResponsePlans(response.list);
  }

  _getResponsePlans(plans) {
    return plans.filter(plano => plano.status_150.trim() === 'Serviço Habilitado').map(item => ({
      nome_plano: item.nome_do_plano_200,
      codigo_plano: item.codigo_plano,
      status_plano: item.status_150.trim(),
      endereco_plano: item.endereco_instalacao_200.trim()
    }));
  }

}

var _default = new ShowAllPlans();

exports.default = _default;