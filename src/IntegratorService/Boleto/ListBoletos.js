import { subYears, addYears } from 'date-fns';
import Integrator from '~/API/Integrator';
import dateToBR from '~/util/dateToBR';

class ListBoletos {
  async run({ codcli }) {
    const todayPlusYears = addYears(new Date(), 2);
    const twoYearAgo = subYears(new Date(), 2);

    const todayBR = dateToBR(todayPlusYears);
    const twoYearAgoBR = dateToBR(twoYearAgo);

    const { data } = await Integrator.Bill.list({
      codcli,
      from: twoYearAgoBR,
      to: todayBR,
    });
    if (data.data) {
      const list = data.data.results;

      return list.map((fatura) => ({
        tipo: fatura.histo_fat,
        codfat: fatura.codfat,
        data_lancamento: fatura.data_lan,
        data_vencimento: fatura.data_ven,
        dias_pos_vencimento: fatura.dias,
        valor: fatura.valor,
        pago: fatura.Saldo === '0.00',
      }));
    }
    return [];
  }
}

export default new ListBoletos();
