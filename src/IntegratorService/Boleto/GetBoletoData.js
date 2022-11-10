import Integrator from '~/API/Integrator';
import config from '~/config';

class GetBoletoData {
  async run({ codfat }) {
    const responseDownload = await Integrator.Datasource.verBoleto({
      codfat,
    });
    const linhaDigitavel = await Integrator.Datasource.linhaDigitavel({
      codfat,
    });

    const resultsDownload = responseDownload.data?.data?.results;
    const resultsLinha = linhaDigitavel.data?.data?.results;

    if (!resultsDownload || !resultsLinha) throw new Error('Boleto não existe');

    const { host } = config.getConfig();

    const codigoBarrasItem = Array.isArray(resultsLinha) ? resultsLinha[0] : resultsLinha;

    return {
      linha: codigoBarrasItem.codigo_barras,
      download: `${host}/${resultsDownload[0].linkBoleto}`,
    };
  }
}

export default new GetBoletoData();
