import Integrator from '~/API/Integrator';

class ListLogins {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codcli }) {
    const { data } = await this.integrator.AuthorizationLogin.list({ codcli });
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
