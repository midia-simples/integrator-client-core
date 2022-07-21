"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFns = require("date-fns");

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _dateToBR = _interopRequireDefault(require("../../util/dateToBR"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListBoletos {
  async run({
    codcli
  }) {
    const todayPlusYears = (0, _dateFns.addYears)(new Date(), 2);
    const twoYearAgo = (0, _dateFns.subYears)(new Date(), 2);
    const todayBR = (0, _dateToBR.default)(todayPlusYears);
    const twoYearAgoBR = (0, _dateToBR.default)(twoYearAgo);
    const {
      data
    } = await _Integrator.default.Bill.list({
      codcli,
      from: twoYearAgoBR,
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
        return {
          tipo: fatura.histo_fat,
          codfat: fatura.codfat,
          data_lancamento: fatura.data_lan,
          data_vencimento: fatura.data_ven,
          data_vencimento_valido: validDue,
          data_vencimento_formatado: formattedDue,
          dias_pos_vencimento: fatura.dias,
          valor: fatura.valor,
          pago: fatura.Saldo === '0.00'
        };
      });
    }

    return [];
  }

}

var _default = new ListBoletos();

exports.default = _default;