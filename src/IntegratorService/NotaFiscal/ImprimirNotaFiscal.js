import Integrator from '~/API/Integrator';
import renderPDF from '~/util/renderPDF';
import config from '~/config';

class ImprimirNotaFiscal {
  async run({ codnf, codtnf }) {
    const { data } = await Integrator.NotaFiscal.imprimirNf({
      codnf,
      codtnf,
    });

    if (data.data) {
      const { host } = config.getConfig();

      const url = `${host}/${data.data.results[0].link}`;
      return renderPDF(url);
    }

    return {};
  }
}

export default new ImprimirNotaFiscal();
