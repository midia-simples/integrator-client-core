import Integrator from '~/API/Integrator';

import { removeNotNumbers } from '~/util/removeNotNumbers';

class EditContactData {
  async run({ codco_cl_p, codcli, e_mail, celular, phone }) {
    const { data } = await Integrator.Contact.edit({
      codcli,
      codco_cl_p,
      e_mail,
      celular: removeNotNumbers(celular),
      phone,
    });

    if (data.error) {
      return { msg: data.exception };
    }
    return { msg: 'Dados atualizados' };
  }
}

export default new EditContactData();
