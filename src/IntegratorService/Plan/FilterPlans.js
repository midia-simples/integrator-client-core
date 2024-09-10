import Integrator from '~/API/Integrator';

class FilterPlans {
  async run({ codcli, status }) {
    const { data } = await Integrator.View.execute({
      _consulta: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE,
      codcli,
    });

    console.log(data, 'XXXX');

    return this.getResponsePlans(data.data?.results, status);
  }

  formatPlan(plan) {
    return {
      nome_plano: plan.Nome_do_Plano_200,
      codigo_plano: plan.Codigo_plano,
      status_plano: plan.Status_150.trim(),
      endereco_plano: plan.endereco_instalacao_200.trim(),
    };
  }

  getResponsePlans(plans, status) {
    if (status) {
      return plans
        ?.filter((plano) => plano.Status_150.trim() === status)
        ?.map(this.formatPlan);
    }
    return plans.map(this.formatPlan);
  }
}

export default new FilterPlans();
