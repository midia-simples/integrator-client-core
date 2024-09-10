import Integrator from '~/API/Integrator';

class GetPhonePlans {
  async run({ codcli }) {
    const { data } = await Integrator.PhonePlan.list({ codcli });
    if (data.data) {
      const plans = data.data.results;

      return plans.map((plan) => {
        return {
          codsercli: plan.codsercli,
          status: plan.descricao_status,
          name: plan.descricao_plano,
        };
      });
    }
    return [];
  }
}

export default new GetPhonePlans();
