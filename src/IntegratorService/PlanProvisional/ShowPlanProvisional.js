import Integrator from '~/API/Integrator';

class ShowPlanProvisional {
  async run({ codcli }) {
    const { data } = await Integrator.Provisional.details({ codcli });

    const results = data?.data?.results;

    const qtd_planos = results[9]?.quant_planos;

    if (qtd_planos === '0') {
      return [];
    }

    if (qtd_planos !== '1') {
      return results[0]?.planos || [];
    }

    return [results[0]?.planos];
  }
}

export default new ShowPlanProvisional();
