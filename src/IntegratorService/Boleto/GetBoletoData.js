import Integrator from '~/API/Integrator';
import config from '~/config';

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

    const { host } = config.getConfig();

    return {
      linha: resultsLinha[0].codigo_barras,
      download: `${host}/${resultsDownload[0].linkBoleto}`,
    };
  }
}

export default new GetBoletoData();
