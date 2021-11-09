import Integrator from '~/API/Integrator';

class ShowPlanProvisional {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codcli }) {
    const { data } = await this.integrator.Provisional.details({ codcli });
    const { results } = data.data;
    if (Array.isArray(results)) {
      if (results.quant_planos === '0') {
        return [];
      }
    }
    return results.planos;
  }
}

export default new ShowPlanProvisional();
