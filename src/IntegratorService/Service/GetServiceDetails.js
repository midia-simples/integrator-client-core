import Integrator from '~/API/Integrator';

class GetServiceDetails {
  async run({ codcli, codsercli }) {
    const { data } = await Integrator.Service.detail({
      codcli,
      codsercli,
    });
    if (data.data) {
      const { nome_cid, endereco, bairro } = data.data.results.row;
      return { nome_cid, endereco, bairro };
    }
    return {};
  }
}

export default new GetServiceDetails();
