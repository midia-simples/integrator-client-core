import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class ListContactData {
  async run({ codcli }) {
    const { data: contactsList } = await Integrator.Contact.list({
      codcli,
    });
    if (contactsList.data.results) {
      return contactsList.data.results.map((contact) => ({
        e_mail: contact.e_mail,
        celular: contact.celular,
        codco_cl_p: contact.codco_cl_p,
      }));
    }
    throw new ServiceError(500, 'Erro desconhecido');
  }
}

export default new ListContactData();
