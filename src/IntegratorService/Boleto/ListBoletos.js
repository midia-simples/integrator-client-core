import { subYears, addYears, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
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

      return list.map((fatura) => {
        const dueSplit = fatura.data_ven.split('/');
        const validDue = `${dueSplit[1]}/${dueSplit[0]}/${dueSplit[2]}`;

        const formattedDue = format(new Date(validDue), "d 'de' LLLL", {
          locale: ptBr,
        });

        const saldoFloat = parseFloat(fatura.Saldo || fatura.saldo);

        return {
          tipo: fatura.histo_fat,
          codfat: fatura.codfat,
          descri: fatura.descri_cob,
          data_baixa: fatura.data_bai,
          data_baixa_date: new Date(fatura.data_bai),
          data_lancamento: fatura.data_lan,
          data_vencimento: fatura.data_ven,
          data_vencimento_valido: validDue,
          data_vencimento_formatado: formattedDue,
          dias_pos_vencimento: fatura.dias,
          valor: fatura.valor,
          valor_final: fatura.valor_final,
          valor_com_juros: fatura.valor_com_juros,
          juros: fatura.juros,
          multa: fatura.multa,
          pago: saldoFloat <= 0,
          pix: fatura.usa_pix === 'S',
        };
      });
    }
    return [];
  }
}

export default new ListBoletos();
