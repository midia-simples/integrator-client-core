import Resource from './Resource';

class Bill extends Resource {
  list(data) {
    return this.request('faturas.cliente', data);
  }

  details(data) {
    return this.request('fatura.detalhe', data);
  }

  generatePix({ codfat }) {
    return this.request('fatura.getPix', { codfat });
  }

  extract(data) {
    return this.request('extrato.financeiro', data);
  }
}

export default new Bill();
