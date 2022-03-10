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
    var _data$data;

    const {
      data
    } = await _Integrator.default.Provisional.details({
      codcli
    });
    const results = data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.results;

    if (Array.isArray(results)) {
      var _results$, _results$3;

      const qtd_planos = (_results$ = results[0]) === null || _results$ === void 0 ? void 0 : _results$.quant_planos;

      if (qtd_planos === '0') {
        return [];
      }

      if (Number(qtd_planos) > 1) {
        var _results$2;

        // pra quando tiver mais de 1 plano suspenso
        return ((_results$2 = results[0]) === null || _results$2 === void 0 ? void 0 : _results$2.planos) || [];
      }

      return [(_results$3 = results[0]) === null || _results$3 === void 0 ? void 0 : _results$3.planos];
    }

    return (results === null || results === void 0 ? void 0 : results.planos) || [];
  }

}

var _default = new ShowPlanProvisional();

exports.default = _default;