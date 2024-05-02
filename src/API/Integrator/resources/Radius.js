import Resource from './Resource';

class Radius extends Resource {
  getLogin({ codcli }) {
    return this.request('services.details', { codcli, status: 'I' });
  }
}

export default new Radius();
