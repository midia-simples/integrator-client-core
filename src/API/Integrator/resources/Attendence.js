import Resource from './Resource';

class Attendence extends Resource {
  addAnexo(data) {
    return this.request('atendimento.addAnexo', data);
  }

  listTypes(data) {
    return this.request('atendimento.listTypes', data);
  }
}

export default new Attendence();
