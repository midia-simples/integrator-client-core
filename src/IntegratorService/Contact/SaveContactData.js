import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

import { removeNotNumbers } from '~/util/removeNotNumbers';

class SaveContactData {
  async run({ codcli, e_mail, celular }) {
    const { codco_cl } = contactsList.data.results[0];
    await Integrator.Datasource.salvarContatoCliente({
      codcli,
      e_mail,
      celular: removeNotNumbers(celular),
    });
    return { msg: 'Dados atualizados' };
  }
}

export default new SaveContactData();
