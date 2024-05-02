import Resource from './Resource';

class Datasource extends Resource {
  criarAtendimento(data) {
    return this.request('datasource.criarAtendimento', data);
  }

  getlogin(data) {
    return this.request('datasource.radius.getLogin', data);
  }

  getUserConfig(data) {
    return this.request('datasource.radius.getUserConfig', data);
  }

  ocorrenciaStatus(data) {
    return this.request('datasource.ocorrencia.status', data);
  }

  linhaDigitavel(data) {
    return this.request('datasource.linhaDigitavel', data);
  }

  verBoleto({ codfat }) {
    return this.request('datasource.verBoleto', { codfat });
  }

  listaEmails({ codcli }) {
    return this.request('datasource.lista_emails', { codcli });
  }

  salvarContatoCliente({
    codcli, codco_cl, e_mail, celular,
  }) {
    return this.request('datasource.salvar_contato_cliente', {
      codcli,
      codco_cl,
      e_mail,
      celular,
    });
  }
}

export default new Datasource();
