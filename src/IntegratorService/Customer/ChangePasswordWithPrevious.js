import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';
import { removeNotNumbers } from '~/util/removeNotNumbers';
import { cpfMask, cnpjMask } from '~/util/documentMasks';
import GetPasswordCustomer from './GetPasswordCustomer';

class ChangePasswordWithPrevious {
  async run({ document, password: senha, previousPassword }) {
    const documentNum = removeNotNumbers(document);
    const { passwordIntegrator } = await GetPasswordCustomer.run({ document });

    if (passwordIntegrator !== previousPassword) throw new ServiceError(500, 'Senhas não conferem');

    const documentIsCpf = documentNum.length === 11;
    const response = await Integrator.Customer.changePassword({
      senha_ant: previousPassword,
      senha,
      tipoPessoa: documentIsCpf ? 'F' : 'J',
      cpfCnpj: documentIsCpf ? cpfMask(documentNum) : cnpjMask(documentNum),
    });

    console.log(response);

    if (!response.error) return;
    throw new ServiceError(500, 'Não foi possível alterar a senha');
  }
}

export default new ChangePasswordWithPrevious();
