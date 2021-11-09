"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _GetCustomerWithStatus = _interopRequireDefault(require("../Customer/GetCustomerWithStatus"));

var _GetCustomerEmail = _interopRequireDefault(require("../Customer/GetCustomerEmail"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RetrieveEmails {
  constructor() {
    this.integrator = new _Integrator.default();
  }

  async emailsRaw(emails, mainEmail) {
    const filteredEmails = emails.map(emailObject => emailObject.e_mail).filter(email => email !== mainEmail);
    return [mainEmail, ...filteredEmails];
  }

  async emailsCensored(emails, mainEmail) {
    function censor(email) {
      const [prefix, domain] = email.split('@');
      return `*******${prefix.slice(prefix.length - 3, prefix.length)}@${domain}`;
    }

    const filteredEmails = emails.map(emailObject => emailObject.e_mail).filter(email => email !== mainEmail).map(email => censor(email));
    return [censor(mainEmail), ...filteredEmails];
  }

  async run({
    document,
    censored
  }) {
    var _data$data;

    if (!document) {
      throw new _ServiceError.default(400, 'É necessário enviar o número do seu documento');
    }

    const documentNum = (0, _removeNotNumbers.removeNotNumbers)(document);
    const mainEmail = await _GetCustomerEmail.default.run({
      document: documentNum
    });
    const {
      codcli
    } = await _GetCustomerWithStatus.default.run({
      document: documentNum
    });
    const {
      data
    } = await this.integrator.Datasource.listaEmails({
      codcli
    });

    if ((_data$data = data.data) !== null && _data$data !== void 0 && _data$data.results) {
      if (censored) return this.emailsCensored(data.data.results, mainEmail);
      return this.emailsRaw(data.data.results, mainEmail);
    }

    throw new _ServiceError.default(500, 'Não foi possível listar os emails do documento');
  }

}

var _default = new RetrieveEmails();

exports.default = _default;