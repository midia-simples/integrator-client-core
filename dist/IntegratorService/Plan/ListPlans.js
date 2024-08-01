"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListPlans {
  async run({
    ibge_cidade
  }) {
    const {
      data: plansList
    } = await _Integrator.default.Plan.list({
      filtra_cidade: ibge_cidade
    });

    if (plansList.data.results) {
      const plans = plansList.data.results.filter(plan => plan.descri_ser_enc.indexOf('MAX FIBRA') !== -1);
      return plans.map(plan => {
        const descReplace = plan.descri_ser_enc.replace(/\s/g, '').split('|');
        const descArr = plan.descri_ser_enc.split('|');
        return {
          codser: plan.codser,
          codgser: plan.codgser,
          valor: Number(plan.valor),
          name: descArr[0].trim(),
          download: Number(descReplace[1].replace('MB', '')),
          descricao: plan.descri_ser_enc
        };
      });
    }

    throw new _ServiceError.default(500, 'Erro desconhecido');
  }

}

var _default = new ListPlans();

exports.default = _default;