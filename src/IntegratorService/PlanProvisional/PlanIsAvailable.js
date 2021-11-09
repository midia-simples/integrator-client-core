import ShowPlanProvisional from './ShowPlanProvisional';

class PlanIsAvailable {
  async run({ codcli, codsercli }) {
    const plans = await ShowPlanProvisional.run({ codcli });

    if (plans) {
      if (Array.isArray(plans)) {
        const planFound = plans.filter((plan) => plan.codsercli === codsercli);

        if (planFound) return { available: true };
      } else {
        const { codsercli: planCodsercli } = plans;
        return codsercli === planCodsercli;
      }
    }
    return { available: false };
  }
}

export default new PlanIsAvailable();
