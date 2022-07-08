import Integrator from '~/API/Integrator';

import { cpfMask, cnpjMask } from '~/util/documentMasks';

class ShowAllPlans {
  async run({ codcli }) {
    const { data } = await Integrator.View.execute({
      _consulta: '012I0L9WDV',
      codcli,
    });

    return this._getResponsePlans(data.data?.results);
  }

  _getResponsePlans(plans) {
    return plans
      ?.filter(
        (plano) => plano.status_150.trim() === 'Serviço Habilitado',
      )?.map((item) => ({
        nome_plano: item.nome_do_plano_200,
        codigo_plano: item.codigo_plano,
        status_plano: item.status_150.trim(),
        endereco_plano: item.endereco_instalacao_200.trim(),
      }));
  }
}

export default new ShowAllPlans();
