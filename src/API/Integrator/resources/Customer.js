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

  edit(data) {
    return this.execute('client.edit', data);
  }

  contacts({ codcli }) {
    return this.request('contacts.list', { codcli });
  }
}

export default new Customer();
