import Integrator from '~/API/Integrator';

class ListOs {
  async run({ codcli, codview }) {
    const { data } = await Integrator.View.execute({
      _consulta: codview,
      cliente: codcli,
    });

    if (data.data) {
      const list = data.data.results;

      return list.map((os) => ({
        id: os.codigo,
        os: os.numero_os,
        atendimento: os.numero_atendimento,
        tipo: os.tipo_atendimento,
        ocorrencia: os.numero_oco,
        data: os.DATA,
        descricao: os.descricao_os,
        status: os.STATUS,
        observacao: os.observacao,
        cliente: os.contato_cliente,
        tecnico: os.nome_tecnico,
        tecnico_matricula: os.matricula_tecnico,
        endereco: os.endereco,
        bairro: os.bairro,
        cidade: os.cidade,
        cep: os.cep,
        referencia: os.referencia,
        plano: os.Plano,
        email: os.e_mail,
        telefone: os.telefone,
        celular: os.celular,
        ponto_acesso: os.Ponto_acesso,
      }));
    }
    return [];
  }
}

export default new ListOs();
