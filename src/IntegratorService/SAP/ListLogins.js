import Integrator from '~/API/Integrator';

class ListLogins {
  async run({ codcli }) {
    const { data } = await Integrator.AuthorizationLogin.list({ codcli });
    if (data.data) {
      const list = data.data.results;

      return list.map((credenciais) => ({
        login: credenciais.login,
        codsercli: credenciais.codsercli,
      }));
    }
    return [];
  }
}

export default new ListLogins();
