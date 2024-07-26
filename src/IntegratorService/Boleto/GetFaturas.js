import { subYears, addYears, format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import Integrator from '~/API/Integrator';
import dateToBR from '~/util/dateToBR';

class GetFaturas {
  async run({
    codcli, codsercli, from, to,
  }) {
    const toSelected = to || new Date();
    const fromSelected = from || subYears(new Date(), 2);

    const todayBR = dateToBR(toSelected);
    const fromSelectedBR = dateToBR(fromSelected);

    const list = [];
    let listInvoices = [];
    let listExtracts = [];

    const { data: dataInvoices } = await Integrator.Bill.list({
      codcli,
      from: fromSelectedBR,
      to: todayBR,
    });

    const { data } = await Integrator.Bill.extract({
      codcli,
      from: fromSelectedBR,
      to: todayBR,
    });

    if (dataInvoices.data) {
      // Lista todas faturas do codcli
      listInvoices = dataInvoices.data.results;
    }

    if (data.data) {
      // Todos extrato financeiro do codcli
      const listData = data.data.results;
      // Somente as faturas do codsercli
      listExtracts = listData.filter((item) => item.codsercli === codsercli);
    }

    if (listExtracts.length > 0) {
      listExtracts.map((extract) => {
        listInvoices.map((invoice) => {
          // Pega apenas as faturas que o codfat é igual do extrato
          if (invoice.codfat === extract.codfat) {
            const dueSplit = invoice.data_ven.split('/');
            const validDue = `${dueSplit[1]}/${dueSplit[0]}/${dueSplit[2]}`;

            const formattedDue = format(new Date(validDue), "d 'de' LLLL", {
              locale: ptBr,
            });

            const saldoFloat = parseFloat(invoice.Saldo || invoice.saldo);

            list.push({
              tipo: invoice.histo_fat,
              codfat: invoice.codfat,
              descri: invoice.descri_cob,
              data_baixa: invoice.data_bai,
              data_baixa_date: new Date(invoice.data_bai),
              data_lancamento: invoice.data_lan,
              data_vencimento: invoice.data_ven,
              data_vencimento_valido: validDue,
              data_vencimento_formatado: formattedDue,
              dias_pos_vencimento: invoice.dias,
              valor: invoice.valor,
              valor_final: invoice.valor_final,
              valor_com_juros: invoice.valor_com_juros,
              juros: invoice.juros,
              multa: invoice.multa,
              pago: saldoFloat <= 0,
              pix: invoice.usa_pix === 'S',
              codsercli: extract.codsercli,
            });
          }
        });
      });

      return list;
    }

    return [];
  }
}

export default new GetFaturas();
