import Resource from './Resource';

class PhoneExtract extends Resource {
  list(data) {
    return this.request('sap.ligacoes_pdf', data);
  }
}

export default new PhoneExtract();
