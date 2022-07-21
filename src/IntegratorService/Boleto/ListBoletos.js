import { subYears, addYears } from 'date-fns';
import Integrator from '~/API/Integrator';
import dateToBR from '~/util/dateToBR';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

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

      return list.map((fatura) => {
        const dueSplit = fatura.data_ven.split('/');
        const validDue = `${dueSplit[1]}/${dueSplit[0]}/${dueSplit[2]}`;

        const formattedDue = format(new Date(validDue), "d 'de' LLLL", { locale: ptBr });

        return {
          tipo: fatura.histo_fat,
          codfat: fatura.codfat,
          data_lancamento: fatura.data_lan,
          data_vencimento: fatura.data_ven,
          data_vencimento_valido: validDue,
          data_vencimento_formatado: formattedDue,
          dias_pos_vencimento: fatura.dias,
          valor: fatura.valor,
          pago: fatura.Saldo === '0.00',
        };
      });
    }
    return [];
  }
}

export default new ListBoletos();
