import Integrator from '~/API/Integrator';

class VerCadastro {
  async run({ codcli }) {
    const { data } = await Integrator.View.execute({
      _consulta: '01CLIENTE',
      codcli,
    });

    return data;
  }
}

export default new VerCadastro();
