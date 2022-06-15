import Integrator from '~/API/Integrator';
import ServiceError from '~/util/ServiceError';

class AddAnexoOnTicket {
  async run({
    anexo_base64, codoco, description, fileName,
  }) {
    const { data } = await Integrator.Ged.addArquivo({
      obs: 'Arquivo enviado pelo usuário',
      descricao: description,
      codtarq: '01SW0MJ9VS',
      nome_arq: `${fileName}.png`,
      versao: '.png',
      codvin: 'OCORRENCIA',
      arquivo: anexo_base64,
      codigo_vin: codoco,
    });

    const { error } = data;

    if (error) {
      throw new ServiceError(400, 'Erro ao enviar anexo.');
    }

    return data?.data?.results[0];
  }
}

export default new AddAnexoOnTicket();
