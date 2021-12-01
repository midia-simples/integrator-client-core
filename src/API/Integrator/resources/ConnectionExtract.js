import Resource from './Resource';

class ConnectionExtract extends Resource {
  list(data) {
    return this.request('sap.extrato_conexao', data);
  }
}

export default new ConnectionExtract();
