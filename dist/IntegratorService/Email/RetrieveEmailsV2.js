"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GetCustomerWithStatus = _interopRequireDefault(require("../Customer/GetCustomerWithStatus"));

var _removeNotNumbers = require("../../util/removeNotNumbers");

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

var _ListContactData = _interopRequireDefault(require("../Contact/ListContactData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RetrieveEmailsV2 {
  emailsCensored(contacts) {
    function censor(email) {
      const [prefix, domain] = email.split('@');
      return `*******${prefix.slice(prefix.length - 3, prefix.length)}@${domain}`;
    }

    const filteredEmails = contacts.map(emailObject => emailObject.e_mail).filter(email => !!email).map(censor);
    return filteredEmails;
  }

  emailsRaw(contacts) {
    return contacts.map(emailObject => emailObject.e_mail).filter(email => !!email);
  }

  async run({
    document,
    censored
  }) {
    if (!document) {
      throw new _ServiceError.default(400, 'É necessário enviar o número do seu documento');
    }

    const documentNum = (0, _removeNotNumbers.removeNotNumbers)(document);
    const {
      codcli
    } = await _GetCustomerWithStatus.default.run({
      document: documentNum
    });
    const contacts = await _ListContactData.default.run({
      codcli
    });
    console.log(contacts);
    if (censored) return this.emailsCensored(contacts);
    return this.emailsRaw(contacts);
  }

}

var _default = new RetrieveEmailsV2();

exports.default = _default;