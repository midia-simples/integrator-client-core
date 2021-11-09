import Integrator from '~/API/Integrator';
import isJSON from '~/util/isJSON';
import ServiceError from '~/util/ServiceError';

class OpenTicket {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({
    codcli, codsercli, descri_oco, codusu, codocop, codcatoco,
  }) {
    const { data } = await this.integrator.Datasource.criarAtendimento({
      codcli,
      codsercli,
      codcar:
        process.env.NODE_ENV === 'development'
          ? process.env.API_INTEGRATOR_CODCAR_TESTE
          : process.env.API_INTEGRATOR_CODCAR_FINANCEIRO,
      codmvis: 'PROBLEMA',
      descri_oco,
      codusu,
      codocop,
      codcatoco,
    });

    const { error, exception } = data;

    if (error) {
      throw new ServiceError(400, exception);
    } else if (
      (typeof data === 'string' && !isJSON(data))
      || !data.data.results
    ) {
      throw new ServiceError(400, 'Não foi possível abrir um atendimento');
    }

    const { codoco, numero_oco } = data.data.results[0];

    return {
      codoco,
      numero_oco,
    };
  }
}

export default new OpenTicket();
