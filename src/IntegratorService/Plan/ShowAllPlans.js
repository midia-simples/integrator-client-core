import Integrator from '~/API/Integrator';
import { removeNotNumbers } from '~/util/removeNotNumbers';

import { cpfMask, cnpjMask } from '~/util/documentMasks';

class ShowAllPlans {
  async run({ document }) {
    const documentHandle = removeNotNumbers(document);

    const documentIsCpf = documentHandle.length === 11;

    const data = {
      _consulta: '012I0L9WDV',
      [documentIsCpf ? 'cpf' : 'cnpj']: [
        documentIsCpf ? cpfMask(documentHandle) : cnpjMask(documentHandle),
      ],
    };
    const response = await Integrator.View.execute(data);

    const plans = this._getResponsePlans(response.list);

    return plans;
  }

  _getResponsePlans(plans) {
    const planos = plans.filter(
      (plano) => plano.status_150.trim() === 'Serviço Habilitado',
    );
    const planosFormat = planos.map((item) => ({
      nome_plano: item.nome_do_plano_200,
      codigo_plano: item.codigo_plano,
      status_plano: item.status_150.trim(),
      endereco_plano: item.endereco_instalacao_200.trim(),
    }));

    return planosFormat;
  }
}

export default new ShowAllPlans();
