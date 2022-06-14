import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class AddAnexoOnTicket {
  async run({ anexo_base64, codoco }) {
    const { data } = await Integrator.Attendence.addAnexo({
      obs: 'Arquivo enviado pelo usuário',
      nome_anexo: 'arquivo_anexo.png',
      versao: '.png',
      codoca: '',
      anexo: anexo_base64,
      codoco,
    });

    const { error } = data;

    if (error) {
      throw new ServiceError(400, 'Erro ao enviar anexo.');
    }

    return data?.data?.results[0];
  }
}

export default new AddAnexoOnTicket();
