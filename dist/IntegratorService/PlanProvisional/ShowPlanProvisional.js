"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowPlanProvisional {
  async run({
    codcli
  }) {
    const {
      data
    } = await _Integrator.default.Provisional.details({
      codcli
    });
    const {
      results
    } = data.data;

    if (Array.isArray(results)) {
      if (results.quant_planos === '0') {
        return [];
      }
    }

    return results.planos;
  }

}

var _default = new ShowPlanProvisional();

exports.default = _default;