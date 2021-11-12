import Resource from './Resource';

class Attendence extends Resource {
  addAnexo(data) {
    return this.request('atendimento.addAnexo', data);
  }
}

export default new Attendence();
