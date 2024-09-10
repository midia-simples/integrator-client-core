import Resource from './Resource';

class PhonePlan extends Resource {
  list(data) {
    return this.request('sap.planos', data);
  }
}

export default new PhonePlan();
