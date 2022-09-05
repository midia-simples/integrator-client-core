"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FilterPlans {
  async run({
    codcli
  }) {
    var _data$data;

    const {
      data
    } = await _Integrator.default.View.execute({
      _consulta: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE,
      codcli
    });
    return this.getResponsePlans((_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.results);
  }

  formatPlan(plan) {
    return {
      nome_plano: plan.Nome_do_Plano_200,
      codigo_plano: plan.Codigo_plano,
      status_plano: plan.Status_150.trim(),
      endereco_plano: plan.endereco_instalacao_200.trim()
    };
  }

  getResponsePlans(plans, status) {
    if (status) {
      var _plans$filter;

      return plans === null || plans === void 0 ? void 0 : (_plans$filter = plans.filter(plano => plano.Status_150.trim() === status)) === null || _plans$filter === void 0 ? void 0 : _plans$filter.map(this.formatPlan);
    }

    return plans.map(this.formatPlan);
  }

}

var _default = new FilterPlans();

exports.default = _default;