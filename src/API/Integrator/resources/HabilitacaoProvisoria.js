import Resource from './Resource';

class HabilitacaoProvisoria extends Resource {
  execute({ codsercli, modulo = 'W' }) {
    return this.request('habilitacaoProvisoriaVelocidade.execute', {
      codsercli,
      modulo,
    });
  }
}

export default new HabilitacaoProvisoria();
