"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ShowPlanProvisional = _interopRequireDefault(require("./ShowPlanProvisional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlanIsAvailable {
  async run({
    codcli,
    codsercli
  }) {
    const plans = await _ShowPlanProvisional.default.run({
      codcli
    });

    if (plans) {
      if (Array.isArray(plans)) {
        const planFound = plans.filter(plan => plan.codsercli === codsercli);
        if (planFound) return {
          available: true
        };
      } else {
        const {
          codsercli: planCodsercli
        } = plans;
        return codsercli === planCodsercli;
      }
    }

    return {
      available: false
    };
  }

}

var _default = new PlanIsAvailable();

exports.default = _default;