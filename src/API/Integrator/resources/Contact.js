import Resource from './Resource';

class Contacts extends Resource {
  list(data) {
    return this.request('contacts.list', data);
  }

  edit(data) {
    return this.execute('contact.edit', data);
  }
}

export default new Contacts();
