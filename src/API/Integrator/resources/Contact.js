import Resource from './Resource';

class Contacts extends Resource {
  list(data) {
    return this.request('contacts.list', data);
  }
}

export default new Contacts();
