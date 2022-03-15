import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class EnablePlanProvisional {
  async run({ codsercli }) {
    try {
      const response = await Integrator.Provisional.execute({ codsercli });

      const { error, exception } = response.data;

      if (error) {
        throw new ServiceError(500, String(exception) || 'Ocorreu um erro ao se comunicar com o Integrator');
      }

      return { status: true, retorno: 'Seu plano foi habilitado.' };
    } catch (err) {
      if (err?.response || err?.request) {
        throw new ServiceError(err.response.status || 500, '[Axios Error] Erro ao se comunicar com o Integrator');
      }
      throw new ServiceError(err?.status || 500, err.message);
    }
  }
}

export default new EnablePlanProvisional();
