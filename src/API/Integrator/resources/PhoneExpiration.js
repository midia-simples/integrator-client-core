import Resource from './Resource';

class PhoneExpiration extends Resource {
  list(data) {
    return this.request('sap.vencimentos', data);
  }
}

export default new PhoneExpiration();
