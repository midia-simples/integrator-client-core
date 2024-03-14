import Integrator from '~/API/Integrator';
import isJSON from '~/util/isJSON';
import ServiceError from '~/util/ServiceError';

class OpenTicket {
  async run({
    codcar,
    codusu_d,
    codcli,
    codsercli,
    descri_oco,
    tipo_contato = 'Telefonico',
    celular,
    nome,
    email,
    codmvis = 'PROBLEMA',
    codusu,
    codocop,
    codcatoco,
  }) {
    const { data } = await Integrator.Datasource.criarAtendimento({
      codcli,
      codsercli,
      ...(codcar && { codcar }),
      ...(codusu_d && { codusu_d }),
      nome_contato: nome,
      celular_resposta: celular,
      email_resposta: email,
      tipo_contato,
      codmvis,
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
