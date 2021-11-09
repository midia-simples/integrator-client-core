import Resource from './Resource';

class Customer extends Resource {
  exists(data) {
    return this.request('client.exists', data);
  }

  changePassword(data) {
    return this.request('client.changePassword', data);
  }

  getInfo({ codcli }) {
    return this.request('client.getInfo', { codcli });
  }

  contacts({ codcli }) {
    return this.request('contacts.list', { codcli });
  }
}

export default Customer;
