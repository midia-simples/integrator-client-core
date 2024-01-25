import Integrator from '~/API/Integrator';

import { removeNotNumbers } from '~/util/removeNotNumbers';

class SaveContactData {
  async run({
    codco_cl, codcli, e_mail, celular,
  }) {
    await Integrator.Datasource.salvarContatoCliente({
      codcli,
      codco_cl,
      e_mail,
      celular: removeNotNumbers(celular),
    });
    return { msg: 'Dados atualizados' };
  }
}

export default new SaveContactData();
