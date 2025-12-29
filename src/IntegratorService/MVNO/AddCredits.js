import Integrator from '~/API/Integrator';
import isJSON from '~/util/isJSON';
import ServiceError from '~/util/ServiceError';

class AddCredits {
  async run({ codvcre, codsercli }) {
    const { data } = await Integrator.Credits.add({ codvcre, codsercli });

    const { error, exception } = data;

    if (error) {
      throw new ServiceError(400, exception);
    } else if (
      // eslint-disable-next-line operator-linebreak
      (typeof data === 'string' && !isJSON(data)) ||
      !data.data.results
    ) {
      throw new ServiceError(400, 'Não foi possível adicionar créditos');
    }

    return data.data.results[0];
  }
}

export default new AddCredits();
