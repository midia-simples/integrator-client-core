import Integrator from '~/API/Integrator';

class ShowPlanProvisional {
  async run({ codcli }) {
    const { data } = await Integrator.Provisional.details({ codcli });
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
