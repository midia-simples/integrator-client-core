import Resource from './Resource';

class Ged extends Resource {
  addArquivo(data) {
    return this.request('ged.addArquivo', data);
  }
}

export default Ged;
