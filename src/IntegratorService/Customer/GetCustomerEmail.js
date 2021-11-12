import GetCustomerWithStatus from './GetCustomerWithStatus';
import GetCustomerInfo from './GetCustomerInfo';

class GetCustomerEmail {
  async run({ document }) {
    const { codcli } = await GetCustomerWithStatus.run({ document });
    const { e_mail } = await GetCustomerInfo.run({ codcli });
    return e_mail;
  }
}

export default new GetCustomerEmail();
