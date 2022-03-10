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
    const planFound = plans === null || plans === void 0 ? void 0 : plans.find(plan => (plan === null || plan === void 0 ? void 0 : plan.codsercli) === codsercli);
    if (planFound) return {
      available: true
    };
    return {
      available: false
    };
  }

}

var _default = new PlanIsAvailable();

exports.default = _default;