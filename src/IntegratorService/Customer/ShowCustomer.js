import Integrator from '~/API/Integrator';
import { removeNotNumbers } from '~/util/removeNotNumbers';

import { cpfMask, cnpjMask } from '~/util/documentMasks';

class ShowCustomer {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ document }) {
    const documentNum = removeNotNumbers(document);
    const documentIsCpf = documentNum.length === 11;

    const data = {
      [documentIsCpf ? 'cpf' : 'cnpj']: [
        documentIsCpf ? cpfMask(documentNum) : cnpjMask(documentNum),
      ],
    };
    const result = await this.integrator.Customer.exists(data);

    return result;
  }
}

export default new ShowCustomer();
