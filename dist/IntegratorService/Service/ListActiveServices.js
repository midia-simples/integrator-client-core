"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utf = _interopRequireDefault(require("utf8"));

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _GetServiceDetails = _interopRequireDefault(require("./GetServiceDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListActiveServices {
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
    } = await _Integrator.default.Service.list({
      codcli
    });

    if (data.data) {
      var _data$data;

      const list = (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.results;
      const statusExtractList = statusQuery ? list === null || list === void 0 ? void 0 : list.filter(service => service.descri_est === text === getEqual) : list;
      const extractList = statusExtractList === null || statusExtractList === void 0 ? void 0 : statusExtractList.map(async service => {
        const details = await _GetServiceDetails.default.run({
          codcli,
          codsercli: service.codsercli
        });
        return {
          name: _utf.default.decode(service.descri_ser),
          cobranca: service.descri_cob,
          obs: _utf.default.decode(service.obs),
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