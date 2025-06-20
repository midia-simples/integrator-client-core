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

class ListBoletos {
  async run({
    codcli,
    from,
    to
  }) {
    const toSelected = to || (0, _dateFns.addYears)(new Date(), 2);
    const fromSelected = from || (0, _dateFns.subYears)(new Date(), 2);
    const todayBR = (0, _dateToBR.default)(toSelected);
    const fromSelectedBR = (0, _dateToBR.default)(fromSelected);
    const {
      data
    } = await _Integrator.default.Bill.list({
      codcli,
      from: fromSelectedBR,
      to: todayBR
    });

    if (data.data) {
      const list = data.data.results;
      return list.map(fatura => {
        const dueSplit = fatura.data_ven.split('/');
        const validDue = `${dueSplit[1]}/${dueSplit[0]}/${dueSplit[2]}`;
        const formattedDue = (0, _dateFns.format)(new Date(validDue), "d 'de' LLLL", {
          locale: _ptBR.default
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
          referencia: fatura.referencia_plano
        };
      });
    }

    return [];
  }

}

var _default = new ListBoletos();

exports.default = _default;