import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class ListContactData {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codcli }) {
    const { data: contactsList } = await this.integrator.Contact.list({
      codcli,
    });
    if (contactsList.data.results) {
      return contactsList.data.results.map((contact) => ({
        e_mail: contact.e_mail,
        celular: contact.celular,
      }));
    }
    throw new ServiceError(500, 'Erro desconhecido');
  }
}

export default new ListContactData();
