import Resource from './Resource';

class DueDate extends Resource {
  list(data) {
    return this.request('vencimentos.list', data);
  }
}

export default new DueDate();
