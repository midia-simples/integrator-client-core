import Integrator from '~/API/Integrator';

class ListNotaFiscal {
  async run({ codcli, desde, hasta }) {
    const { data } = await Integrator.NotaFiscal.list({
      codcli,
      desde: `01/${desde}`,
      hasta: `31/${hasta}`,
    });

    if (data.data) {
      return data.data.results.map((notaFiscal) => ({
        modelo: notaFiscal.modelo,
        codnf: notaFiscal.codnf,
        codtnf: notaFiscal.codtnf,
        data_lancamento: notaFiscal.data_lan,
        valor: notaFiscal.valor_nf,
      }));
    }
    return [];
  }
}

export default new ListNotaFiscal();
