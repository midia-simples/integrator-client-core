"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EnablePlanProvisional {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codsercli
  }) {
    const data = {
      codsercli
    };
    const response = await this.integrator.Provisional.execute(data);

    if (response && response.data && !response.data.error) {
      return {
        status: true,
        retorno: 'Seu plano foi habilitado.'
      };
    }

    throw new _ServiceError.default(500, response.data.exception || 'Não foi possível habilitar provisória');
  }

}

var _default = new EnablePlanProvisional();

exports.default = _default;