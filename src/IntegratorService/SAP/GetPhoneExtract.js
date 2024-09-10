import Integrator from '~/API/Integrator';

class GetPhoneExtract {
  async run({ codsercli, data_ini, data_fim, data_venc, codflv }) {
    const { data } = await Integrator.PhoneExtract.list({
      codsercli,
      data_ini,
      data_fim,
      data_venc,
      codflv,
    });
    if (data.data) {
      const extracts = data.data.results;

      return extracts.map((extract) => {
        return {
          link_extract: extract.linkBoleto,
          codsercli,
          codflv,
        };
      });
    }
    return [];
  }
}

export default new GetPhoneExtract();