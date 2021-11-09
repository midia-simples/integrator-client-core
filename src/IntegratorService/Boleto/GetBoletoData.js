import Integrator from '~/API/Integrator';

class GetBoletoData {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codfat }) {
    const responseDownload = await this.integrator.Datasource.verBoleto({
      codfat,
    });
    const linhaDigitavel = await this.integrator.Datasource.linhaDigitavel({
      codfat,
    });

    const resultsDownload = responseDownload.data.data.results;
    const resultsLinha = linhaDigitavel.data.data.results;

    return {
      linha: resultsLinha[0].codigo_barras,
      download: `${process.env.API_INTEGRATOR_HOST_NAME}/${resultsDownload[0].linkBoleto}`,
    };
  }
}

export default new GetBoletoData();
