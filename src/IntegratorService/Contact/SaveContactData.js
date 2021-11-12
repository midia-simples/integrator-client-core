import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class SaveContactData {
  async run({ codcli, e_mail, celular }) {
    const { data: contactsList } = await Integrator.Contact.list({
      codcli,
    });
    if (contactsList.data.results) {
      const { codco_cl } = contactsList.data.results[0];
      await Integrator.Datasource.salvarContatoCliente({
        codco_cl,
        e_mail,
        celular,
      });
      return { msg: 'Dados atualizados' };
    }
    throw new ServiceError(500, 'Erro desconhecido');
  }
}

export default new SaveContactData();
