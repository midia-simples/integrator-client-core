import Integrator from '~/API/Integrator';

class ListTypes {
  async run() {
    const types = (await Integrator.Attendence.listTypes()).data?.data?.results;
    return types
        .filter(type => type.ativo === 'S')
        .map(type => ({
          codocop: type.codocop,
          name: type.nome_ocop,
        }));
  }
}

export default new ListTypes();

