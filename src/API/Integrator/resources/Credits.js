import Resource from './Resource';

class Credits extends Resource {
  list(data) {
    return this.request('creditos.list', data);
  }

  add(data) {
    return this.execute('creditos.add', data);
  }
}

export default new Credits();
