"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetConnectionExtract {
  async run({
    codcli,
    codsercli,
    login,
    data_ini,
    data_fim
  }) {
    const {
      data
    } = await _Integrator.default.ConnectionExtract.list({
      codcli,
      codsercli,
      login,
      data_ini,
      data_fim
    });

    if (data.data) {
      const list = data.data.results;
      return list.map(extrato => ({
        comeco: extrato.acctstarttime,
        comeco_formatado: extrato.acctstarttime.split(' ')[0].split('-').reverse().join('/'),
        fim_formatado: extrato.acctstoptime.split(' ')[0].split('-').reverse().join('/'),
        fim: extrato.acctstoptime,
        tempo_acesso: extrato.acctsessiontime,
        tempo_acesso_formatado: extrato.acctsessiontime_formatado,
        upload_bytes: extrato.acctinputoctets,
        download_bytes: extrato.acctoutputoctets,
        ip: extrato.framedipaddress,
        servidor_ip: extrato.nasipaddress,
        mac: extrato.callingstationid
      }));
    }

    return [];
  }

}

var _default = new GetConnectionExtract();

exports.default = _default;