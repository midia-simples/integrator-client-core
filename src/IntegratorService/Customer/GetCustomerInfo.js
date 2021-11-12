import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class GetCustomerInfo {
  async run({ codcli }) {
    const { data } = await Integrator.Customer.getInfo({ codcli });
    if (data.data.results) return data.data.results[0];
    throw new ServiceError(
      400,
      'Não foi possível retorna informações sobre o cliente',
    );
  }
}

export default new GetCustomerInfo();
