import Integrator from '~/API/Integrator';
import renderPDF from '~/util/renderPDF';

class ImprimirNotaFiscal {
  constructor() {
    this.integrator = new Integrator();
  }

  async run({ codnf, codtnf }) {
    const { data } = await this.integrator.NotaFiscal.imprimirNf({
      codnf,
      codtnf,
    });

    if (data.data) {
      const url = `${process.env.API_INTEGRATOR_HOST_NAME}/${data.data.results[0].link}`;
      return renderPDF(url);
    }

    return {};
  }
}

export default new ImprimirNotaFiscal();
