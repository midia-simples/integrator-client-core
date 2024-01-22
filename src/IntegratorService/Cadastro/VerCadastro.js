import Integrator from '~/API/Integrator';

class VerCadastro {
  async run({ }) {
    const { data } = await Integrator.View.execute({
      _consulta: '01CLIENTE',
    });

    return data;
  }
}

export default new VerCadastro();
