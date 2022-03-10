import Integrator from '~/API/Integrator';

class ShowPlanProvisional {
  async run({ codcli }) {
    const { data } = await Integrator.Provisional.details({ codcli });

    const results = data?.data?.results;

    if (Array.isArray(results)) {
      const qtd_planos = results[0]?.quant_planos;

      if (qtd_planos === '0') {
        return [];
      }

      if (Number(qtd_planos) > 1) {
        // pra quando tiver mais de 1 plano suspenso
        return results[0]?.planos || [];
      }

      return [results[0]?.planos];
    }

    return results?.planos || [];
  }
}

export default new ShowPlanProvisional();
