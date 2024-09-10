"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetPhoneExtract {
  async run({
    codsercli,
    data_ini,
    data_fim,
    data_venc,
    codflv
  }) {
    const {
      data
    } = await _Integrator.default.PhoneExtract.list({
      codsercli,
      data_ini,
      data_fim,
      data_venc,
      codflv
    });

    if (data.data) {
      const extracts = data.data.results;
      return extracts.map(extract => {
        return {
          link_extract: extract.linkBoleto,
          codsercli,
          codflv
        };
      });
    }

    return [];
  }

}

var _default = new GetPhoneExtract();

exports.default = _default;