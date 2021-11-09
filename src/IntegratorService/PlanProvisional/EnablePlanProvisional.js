import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class EnablePlanProvisional {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codsercli }) {
    const data = {
      codsercli,
    };

    const response = await this.integrator.Provisional.execute(data);

    if (response && response.data && !response.data.error) {
      return { status: true, retorno: 'Seu plano foi habilitado.' };
    }

    throw new ServiceError(
      500,
      response.data.exception || 'Não foi possível habilitar provisória',
    );
  }
}

export default new EnablePlanProvisional();
