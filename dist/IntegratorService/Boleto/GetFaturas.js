"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFns = require("date-fns");

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _dateToBR = _interopRequireDefault(require("../../util/dateToBR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetFaturas {
  async run({
    codcli,
    codsercli,
    from,
    to
  }) {
    const toSelected = to || (0, _dateFns.addMonths)(new Date(), 6);
    const fromSelected = from || (0, _dateFns.subYears)(new Date(), 2);
    const todayBR = (0, _dateToBR.default)(toSelected);
    const fromSelectedBR = (0, _dateToBR.default)(fromSelected);
    const list = [];
    let listInvoices = [];
    let listExtracts = [];
    const {
      data: dataInvoices
    } = await _Integrator.default.Bill.list({
      codcli,
      from: fromSelectedBR,
      to: todayBR
    });
    const {
      data
    } = await _Integrator.default.Bill.extract({
      codcli,
      from: fromSelectedBR,
      to: todayBR
    });

    if (dataInvoices.data) {
      // Lista todas faturas do codcli
      listInvoices = dataInvoices.data.results;
    }

    if (data.data) {
      // Todos extrato financeiro do codcli
      const listData = data.data.results; // Somente as faturas do codsercli

      listExtracts = listData.filter(item => item.codsercli === codsercli);
    }

    if (listInvoices.length > 0) {
      listInvoices.map(invoice => {
        const extratosFatura = listExtracts.filter(item => item.codfat === invoice.codfat);

        if (extratosFatura.length) {
          const dueSplit = invoice.data_ven.split('/');
          const validDue = `${dueSplit[1]}/${dueSplit[0]}/${dueSplit[2]}`;
          const formattedDue = (0, _dateFns.format)(new Date(validDue), "d 'de' LLLL 'de' yyyy", {
            locale: _ptBR.default
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
            pix: invoice.usa_pix === 'S'
          });
        }
      });
      return list;
    }

    return [];
  }

}

var _default = new GetFaturas();

exports.default = _default;