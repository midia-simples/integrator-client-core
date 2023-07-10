import Integrator from '~/API/Integrator';
// import ServiceError from '~/util/ServiceError';

class GetSpeedServices {
  async run({ codsercli }) {
    const { data: response } = await Integrator.Service.speed({
      codsercli,
    });
    // if (response.error) {
    //   throw new ServiceError(
    //     500,
    //     response.data?.exception || 'Erro ao buscar a velocidade do plano',
    //   );
    // }
    return response?.data?.results?.[0] || {};
  }
}

export default new GetSpeedServices();
