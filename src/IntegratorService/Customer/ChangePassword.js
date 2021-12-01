import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';
import { removeNotNumbers } from '~/util/removeNotNumbers';
import { cpfMask, cnpjMask } from '~/util/documentMasks';
import GetPasswordCustomer from './GetPasswordCustomer';

class ChangePassword {
  async run({ document, password: senha }) {
    const documentNum = removeNotNumbers(document);
    const { passwordIntegrator: senha_ant } = await GetPasswordCustomer.run({ document });

    const documentIsCpf = documentNum.length === 11;
    const response = await Integrator.Customer.changePassword({
      senha_ant,
      senha,
      tipoPessoa: documentIsCpf ? 'F' : 'J',
      cpfCnpj: documentIsCpf ? cpfMask(documentNum) : cnpjMask(documentNum),
    });

    if (!response.error) return;
    throw new ServiceError(500, 'Não foi possível alterar a senha');
  }
}

export default new ChangePassword();
