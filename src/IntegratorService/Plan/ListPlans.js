import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class ListPlans {
  async run({ ibge_cidade }) {
    const { data: plansList } = await Integrator.Plan.list({
      filtra_cidade: ibge_cidade,
    });
    if (plansList.data.results) {
      const plans = plansList.data.results.filter(
        (plan) => plan.descri_ser_enc.indexOf('MAX FIBRA') !== -1,
      );

      return plans.map((plan) => {
        const descReplace = plan.descri_ser_enc.replace(/\s/g, '').split('|');
        const descArr = plan.descri_ser_enc.split('|');

        return {
          codser: plan.codser,
          codgser: plan.codgser,
          valor: Number(plan.valor),
          name: descArr[0].trim(),
          download: Number(descReplace[1].replace('MB', '')),
          descricao: plan.descri_ser_enc,
        };
      });
    }
    throw new ServiceError(500, 'Erro desconhecido');
  }
}

export default new ListPlans();
