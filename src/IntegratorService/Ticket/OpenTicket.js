import Integrator from '~/API/Integrator';
import isJSON from '~/util/isJSON';
import ServiceError from '~/util/ServiceError';

class OpenTicket {
  async run({
    codcar, codusu_d, codcli, codsercli, descri_oco, codusu, codocop, codcatoco, asset_base64,
  }) {
    const { data } = await Integrator.Datasource.criarAtendimento({
      codcli,
      codsercli,
      ...(codcar && { codcar }),
      ...(codusu_d && { codusu_d }),
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

    if (asset_base64) {
      const response = await Integrator.Attendence.addAnexo({
        obs: 'Arquivo enviado pelo usuário',
        nome_anexo: 'arquivo_anexo.png',
        versao: '.png',
        codoca: '',
        anexo: asset_base64,
        codoco,
      });
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(response, null, 2));
    }

    return {
      codoco,
      numero_oco,
    };
  }
}

export default new OpenTicket();
