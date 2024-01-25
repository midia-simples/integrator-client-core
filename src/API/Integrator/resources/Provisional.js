import Resource from './Resource';

class Provisional extends Resource {
  details({ codcli }) {
    return this.request('services.details', { codcli, status: 'I' });
  }

  execute({ codsercli, modulo }) {
    return this.request('habilitacaoProvisoria.execute', { codsercli, modulo });
  }

  executeVelocidade({ codsercli, modulo }) {
    return this.request('habilitacaoProvisoriaVelocidade.execute', { codsercli, modulo });
  }
}

export default new Provisional();
