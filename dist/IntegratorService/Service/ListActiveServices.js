"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _GetServiceDetails = _interopRequireDefault(require("./GetServiceDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListActiveServices {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async run({
    codcli,
    statusQuery
  }) {
    const {
      getEqual,
      text
    } = statusQuery || {};
    const {
      data
    } = await this.integrator.Service.list({
      codcli
    });

    if (data.data) {
      const list = data.data.results;
      const statusExtractList = statusQuery ? list.filter(service => service.descri_est === text === getEqual) : list;
      const extractList = statusExtractList.map(async service => {
        const details = await _GetServiceDetails.default.run({
          codcli,
          codsercli: service.codsercli
        });
        return {
          name: service.descri_ser,
          cobranca: service.descri_cob,
          obs: service.obs,
          dia_vencimento: service.dia,
          codsercli: service.codsercli,
          status: service.descri_est,
          ...details
        };
      });
      return Promise.all(extractList);
    }

    return [];
  }

}

var _default = new ListActiveServices();

exports.default = _default;