import GetCustomerWithStatus from '../Customer/GetCustomerWithStatus';
import { removeNotNumbers } from '~/util/removeNotNumbers';
import ServiceError from '~/util/ServiceError';
import ListContactData from '../Contact/ListContactData';

class RetrieveEmailsV2 {
  emailsCensored(contacts) {
    function censor(email) {
      const [prefix, domain] = email.split('@');
      return `*******${prefix.slice(
        prefix.length - 3,
        prefix.length,
      )}@${domain}`;
    }
    const filteredEmails = contacts
      .filter((contact) => contact.ativo)
      .map((emailObject) => emailObject.e_mail)
      .filter((email) => !!email)
      .map(censor);

    return filteredEmails;
  }

  emailsRaw(contacts) {
    return contacts
      .filter((contact) => contact.ativo)
      .map((emailObject) => emailObject.e_mail)
      .filter((email) => !!email);
  }

  async run({ document, censored }) {
    if (!document) {
      throw new ServiceError(
        400,
        'É necessário enviar o número do seu documento',
      );
    }

    const documentNum = removeNotNumbers(document);
    const { codcli } = await GetCustomerWithStatus.run({
      document: documentNum,
    });
    const contacts = await ListContactData.run({ codcli });
    if (censored) return this.emailsCensored(contacts);
    return this.emailsRaw(contacts);
  }
}

export default new RetrieveEmailsV2();
