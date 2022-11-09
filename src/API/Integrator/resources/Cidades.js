import Resource from './Resource';

class Cidades extends Resource {
  list(data) {
    return this.request('cidades.list', data);
  }
}

export default new Cidades();
