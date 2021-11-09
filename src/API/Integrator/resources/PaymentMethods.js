import Resource from './Resource';

class PaymentMethods extends Resource {
  list(data) {
    return this.request('cobranca.list', data);
  }
}

export default PaymentMethods;
