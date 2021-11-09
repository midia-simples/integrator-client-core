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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Integrator {
  constructor() {
    this.Bill = new _Bill.default();
    this.NotaFiscal = new _NotaFiscal.default();
    this.Customer = new _Customer.default();
    this.Contact = new _Contact.default();
    this.Provisional = new _Provisional.default();
    this.Datasource = new _Datasource.default();
    this.View = new _View.default();
    this.DueDate = new _DueDate.default();
    this.PaymentMethods = new _PaymentMethods.default();
    this.Attendence = new _Attendence.default();
    this.Ged = new _Ged.default();
    this.AuthorizationLogin = new _AuthorizationLogin.default();
    this.ConnectionExtract = new _ConnectionExtract.default();
    this.Service = new _Service.default();
  }

}

var _default = Integrator;
exports.default = _default;