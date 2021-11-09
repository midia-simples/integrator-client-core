import Resource from './Resource';

class Provisional extends Resource {
  details({ codcli }) {
    return this.request('services.details', { codcli, status: 'I' });
  }

  execute({ codsercli }) {
    return this.request('habilitacaoProvisoria.execute', { codsercli });
  }
}

export default Provisional;
