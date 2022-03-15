"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EnablePlanProvisional {
  async run({
    codsercli
  }) {
    try {
      const response = await _Integrator.default.Provisional.execute({
        codsercli
      });
      const {
        error,
        exception
      } = response.data;

      if (error) {
        throw new _ServiceError.default(500, String(exception) || 'Ocorreu um erro ao se comunicar com o Integrator');
      }

      return {
        status: true,
        retorno: 'Seu plano foi habilitado.'
      };
    } catch (err) {
      if (err !== null && err !== void 0 && err.response || err !== null && err !== void 0 && err.request) {
        throw new _ServiceError.default(err.response.status || 500, '[Axios Error] Erro ao se comunicar com o Integrator');
      }

      throw new _ServiceError.default((err === null || err === void 0 ? void 0 : err.status) || 500, err.message);
    }
  }

}

var _default = new EnablePlanProvisional();

exports.default = _default;