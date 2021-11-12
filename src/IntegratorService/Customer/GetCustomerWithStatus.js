import Integrator from '~/API/Integrator';
import config from '~/config';

import { removeNotNumbers } from '~/util/removeNotNumbers';
import { cpfMask, cnpjMask } from '~/util/documentMasks';
import ServiceError from '~/util/ServiceError';

class GetCustomerWithStatus {
  async run({ document }) {
    document = removeNotNumbers(document);
    const documentIsCpf = document.length === 11;

    const { viewStatus } = config.getConfig();

    const data = {
      _consulta: viewStatus,
      [documentIsCpf ? 'cpf' : 'cnpj']: documentIsCpf
        ? cpfMask(document)
        : cnpjMask(document),
    };

    const response = await Integrator.Customer.exists(data);

    if (response) {
      const { codcli, nome } = response.data.data.results[0];

      return {
        codcli,
        name: nome,
      };
    }

    throw new ServiceError(401, 'Esse CNPJ/CPF não é cliente');
  }
}

export default new GetCustomerWithStatus();
