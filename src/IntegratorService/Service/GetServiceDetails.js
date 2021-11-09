import Integrator from '~/API/Integrator';

class GetServiceDetails {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codcli, codsercli }) {
    const { data } = await this.integrator.Service.detail({
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
