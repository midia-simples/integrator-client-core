import { safeDecode } from '~/util/utf8';
import Integrator from '~/API/Integrator';

class GetServiceDetails {
  async run({ codcli, codsercli }) {
    const { data } = await Integrator.Service.detail({
      codcli,
      codsercli,
    });
    if (data.data) {
      const { nome_cid, endereco, bairro } = data?.data?.results[0];
      return {
        nome_cid: safeDecode(nome_cid),
        endereco: safeDecode(endereco),
        bairro: safeDecode(bairro),
      };
    }
    return {};
  }
}

export default new GetServiceDetails();
