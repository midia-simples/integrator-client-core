"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Bill = _interopRequireDefault(require("./resources/Bill"));

var _NotaFiscal = _interopRequireDefault(require("./resources/NotaFiscal"));

var _Customer = _interopRequireDefault(require("./resources/Customer"));

var _Contact = _interopRequireDefault(require("./resources/Contact"));

var _Datasource = _interopRequireDefault(require("./resources/Datasource"));

var _Provisional = _interopRequireDefault(require("./resources/Provisional"));

var _View = _interopRequireDefault(require("./resources/View"));

var _DueDate = _interopRequireDefault(require("./resources/DueDate"));

var _PaymentMethods = _interopRequireDefault(require("./resources/PaymentMethods"));

var _Attendence = _interopRequireDefault(require("./resources/Attendence"));

var _Ged = _interopRequireDefault(require("./resources/Ged"));

var _AuthorizationLogin = _interopRequireDefault(require("./resources/AuthorizationLogin"));

var _ConnectionExtract = _interopRequireDefault(require("./resources/ConnectionExtract"));

var _Service = _interopRequireDefault(require("./resources/Service"));

var _Cidades = _interopRequireDefault(require("./resources/Cidades"));

var _Plan = _interopRequireDefault(require("./resources/Plan"));

var _Radius = _interopRequireDefault(require("./resources/Radius"));

var _PhonePlan = _interopRequireDefault(require("./resources/PhonePlan"));

var _PhoneExpiration = _interopRequireDefault(require("./resources/PhoneExpiration"));

var _PhoneExtract = _interopRequireDefault(require("./resources/PhoneExtract"));

var _Credits = _interopRequireDefault(require("./resources/Credits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Bill: _Bill.default,
  NotaFiscal: _NotaFiscal.default,
  Cidades: _Cidades.default,
  Customer: _Customer.default,
  Contact: _Contact.default,
  Provisional: _Provisional.default,
  Datasource: _Datasource.default,
  View: _View.default,
  DueDate: _DueDate.default,
  PaymentMethods: _PaymentMethods.default,
  Attendence: _Attendence.default,
  Ged: _Ged.default,
  AuthorizationLogin: _AuthorizationLogin.default,
  ConnectionExtract: _ConnectionExtract.default,
  Service: _Service.default,
  Plan: _Plan.default,
  Radius: _Radius.default,
  PhonePlan: _PhonePlan.default,
  PhoneExpiration: _PhoneExpiration.default,
  PhoneExtract: _PhoneExtract.default,
  Credits: _Credits.default
};
exports.default = _default;