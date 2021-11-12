import Integrator from '~/API/Integrator';
import { removeNotNumbers } from '~/util/removeNotNumbers';

import { cpfMask, cnpjMask } from '~/util/documentMasks';

class ShowCustomer {
  async run({ document }) {
    const documentNum = removeNotNumbers(document);
    const documentIsCpf = documentNum.length === 11;

    const data = {
      [documentIsCpf ? 'cpf' : 'cnpj']: [
        documentIsCpf ? cpfMask(documentNum) : cnpjMask(documentNum),
      ],
    };
    const result = await Integrator.Customer.exists(data);

    return result;
  }
}

export default new ShowCustomer();
