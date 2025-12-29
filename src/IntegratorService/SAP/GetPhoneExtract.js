import Integrator from '~/API/Integrator';
import config from '~/config';

class GetPhoneExtract {
  async run({
    codsercli, data_ini, data_fim, data_venc, codflv,
  }) {
    const { data } = await Integrator.PhoneExtract.list({
      codsercli,
      data_ini,
      data_fim,
      data_venc,
      codflv,
    });
    if (data.data) {
      const extracts = data.data.results;

      const { host } = config.getConfig();

      return extracts.map((extract) => ({
        link_extract: `${host}/${extract.linkBoleto}`,
        codsercli,
        codflv,
      }));
    }
    return [];
  }
}

export default new GetPhoneExtract();
