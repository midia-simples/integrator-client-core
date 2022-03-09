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
    var _results$;

    const {
      data
    } = await _Integrator.default.Provisional.details({
      codcli
    });
    const {
      results
    } = data.data;

    if (!Array.isArray(results)) {
      if ((results === null || results === void 0 ? void 0 : results.quant_planos) === '0') {
        return [];
      }

      return [results];
    }

    return ((_results$ = results[0]) === null || _results$ === void 0 ? void 0 : _results$.planos) || [];
  }

}

var _default = new ShowPlanProvisional();

exports.default = _default;