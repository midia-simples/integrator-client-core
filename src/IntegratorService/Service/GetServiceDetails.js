import utf8 from 'utf8';
import Integrator from '~/API/Integrator';

class GetServiceDetails {
  async run({ codcli, codsercli }) {
    const { data } = await Integrator.Service.detail({
      codcli,
      codsercli,
    });
    if (data.data) {
      const { nome_cid, endereco, bairro } = data?.data?.results?.row;
      return {
        nome_cid: utf8.decode(nome_cid),
        endereco: utf8.decode(endereco),
        bairro: utf8.decode(bairro),
      };
    }
    return {};
  }
}

export default new GetServiceDetails();
