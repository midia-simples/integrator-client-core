import Integrator from '~/API/Integrator';

class GetConnectionExtract {
  async run({
    codcli, codsercli, login, data_ini, data_fim,
  }) {
    const { data } = await Integrator.ConnectionExtract.list({
      codcli,
      codsercli,
      login,
      data_ini,
      data_fim,
    });
    if (data.data) {
      const list = data.data.results;

      return list.map((extrato) => ({
        comeco: extrato.acctstarttime,
        fim: extrato.acctstoptime,
        tempo_acesso: extrato.acctsessiontime,
        tempo_acesso_formatado: extrato.acctsessiontime_formatado,
        upload_bytes: extrato.acctinputoctets,
        download_bytes: extrato.acctoutputoctets,
        ip: extrato.framedipaddress,
        servidor_ip: extrato.nasipaddress,
        mac: extrato.callingstationid,
      }));
    }
    return [];
  }
}

export default new GetConnectionExtract();
