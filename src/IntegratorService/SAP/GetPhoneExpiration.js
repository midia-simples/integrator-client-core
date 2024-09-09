import Integrator from '~/API/Integrator';

class GetPhoneExpiration {
  async run({ codsercli }) {
    const { data } = await Integrator.PhoneExpiration.list({ codsercli });
    if (data.data) {
      const expirations = data.data.results;

      return expirations;
    }
    return [];
  }
}

export default new GetPhoneExpiration();
