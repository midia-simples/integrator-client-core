"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetPhonePlans {
  async run({
    codcli
  }) {
    const {
      data
    } = await _Integrator.default.PhonePlan.list({
      codcli
    });

    if (data.data) {
      const plans = data.data.results;
      return plans.map(plan => {
        return {
          codsercli: plan.codsercli,
          status: plan.descricao_status,
          name: plan.descricao_plano
        };
      });
    }

    return [];
  }

}

var _default = new GetPhonePlans();

exports.default = _default;