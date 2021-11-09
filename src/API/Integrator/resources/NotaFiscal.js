import Resource from './Resource';

class NotaFiscal extends Resource {
  list({ codcli, desde, hasta }) {
    return this.request('notas_fiscais.list', { codcli, desde, hasta });
  }

  imprimirNf({ codnf, codtnf }) {
    return this.request('notas_fiscais.ImprimirNf', { codnf, codtnf });
  }
}

export default NotaFiscal;
