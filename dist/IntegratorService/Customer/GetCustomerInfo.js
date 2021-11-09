"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetCustomerInfo {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codcli
  }) {
    const {
      data
    } = await this.integrator.Customer.getInfo({
      codcli
    });
    if (data.data.results) return data.data.results[0];
    throw new _ServiceError.default(400, 'Não foi possível retorna informações sobre o cliente');
  }

}

var _default = new GetCustomerInfo();

exports.default = _default;