import Integrator from '~/API/Integrator';
import config from '~/config';

import { removeNotNumbers } from '~/util/removeNotNumbers';
import { cpfMask, cnpjMask } from '~/util/documentMasks';

class GetPasswordCustomer {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ document }) {
    const documentHandle = removeNotNumbers(document);

    const documentIsCpf = documentHandle.length === 11;

    const { viewLogin } = config.getConfig();

    const params = {
      _consulta: viewLogin,
      [documentIsCpf ? 'cpf' : 'cnpj']: documentIsCpf
        ? cpfMask(documentHandle)
        : cnpjMask(documentHandle),
    };

    const response = await this.integrator.View.execute(params);

    if (response && !response.data.error) {
      console.log(response);
      const { SenhaCentral } = response.data.data.results[0];

      return {
        passwordIntegrator: SenhaCentral,
      };
    }
    return null;
  }
}

export default new GetPasswordCustomer();
