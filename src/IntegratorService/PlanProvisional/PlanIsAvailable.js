import ShowPlanProvisional from './ShowPlanProvisional';

class PlanIsAvailable {
  async run({ codcli, codsercli }) {
    const plans = await ShowPlanProvisional.run({ codcli });

    const planFound = plans.find((plan) => plan.codsercli === codsercli);

    if (planFound) return { available: true };

    return {
      available: false,
    }
  }
}

export default new PlanIsAvailable();
