import Integrator from '~/API/Integrator';

class EditCustomerName {
  async run({ codcli, nome_cli }) {
    const { data } = await Integrator.Customer.edit({
      codcli,
      nome_cli,
    });

    if (data.error) {
      return { msg: data.exception };
    }
    return { msg: 'Dados atualizados' };
  }
}

export default new EditCustomerName();
