import Integrator from '~/API/Integrator';
import GetCustomerWithStatus from '../Customer/GetCustomerWithStatus';
import GetCustomerEmail from '../Customer/GetCustomerEmail';
import { removeNotNumbers } from '~/util/removeNotNumbers';
import ServiceError from '~/util/ServiceError';

class RetrieveEmails {
  constructor() {
    this.integrator = new Integrator();
  }

  async emailsRaw(emails, mainEmail) {
    const filteredEmails = emails
      .map((emailObject) => emailObject.e_mail)
      .filter((email) => email !== mainEmail);
    return [mainEmail, ...filteredEmails];
  }

  async emailsCensored(emails, mainEmail) {
    function censor(email) {
      const [prefix, domain] = email.split('@');
      return `*******${prefix.slice(
        prefix.length - 3,
        prefix.length,
      )}@${domain}`;
    }
    const filteredEmails = emails
      .map((emailObject) => emailObject.e_mail)
      .filter((email) => email !== mainEmail)
      .map((email) => censor(email));

    return [censor(mainEmail), ...filteredEmails];
  }

  async run({ document, censored }) {
    if (!document) {
      throw new ServiceError(
        400,
        'É necessário enviar o número do seu documento',
      );
    }

    const documentNum = removeNotNumbers(document);
    const mainEmail = await GetCustomerEmail.run({ document: documentNum });
    const { codcli } = await GetCustomerWithStatus.run({
      document: documentNum,
    });
    const { data } = await this.integrator.Datasource.listaEmails({ codcli });
    if (data.data?.results) {
      if (censored) return this.emailsCensored(data.data.results, mainEmail);
      return this.emailsRaw(data.data.results, mainEmail);
    }
    throw new ServiceError(
      500,
      'Não foi possível listar os emails do documento',
    );
  }
}

export default new RetrieveEmails();
