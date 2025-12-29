import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class ListCredits {
  async run() {
    const { data: creditsList } = await Integrator.Credits.list();

    if (creditsList.data.results) {
      return creditsList.data.results;
    }
    throw new ServiceError(500, 'Erro desconhecido');
  }
}

export default new ListCredits();
