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
    var _data$data;

    const {
      data
    } = await _Integrator.default.View.execute({
      _consulta: '012I0L9WDV',
      codcli
    });
    return this._getResponsePlans((_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.results);
  }

  _getResponsePlans(plans) {
    var _plans$filter;

    return plans === null || plans === void 0 ? void 0 : (_plans$filter = plans.filter(plano => plano.status_150.trim() === 'Serviço Habilitado')) === null || _plans$filter === void 0 ? void 0 : _plans$filter.map(item => ({
      nome_plano: item.nome_do_plano_200,
      codigo_plano: item.codigo_plano,
      status_plano: item.status_150.trim(),
      endereco_plano: item.endereco_instalacao_200.trim()
    }));
  }

}

var _default = new ShowAllPlans();

exports.default = _default;