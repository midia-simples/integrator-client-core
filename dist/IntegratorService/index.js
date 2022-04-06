"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AttendenceListTypes = _interopRequireDefault(require("./Attendence/AttendenceListTypes"));

var _ChangePassword = _interopRequireDefault(require("./Customer/ChangePassword"));

var _GetCustomerEmail = _interopRequireDefault(require("./Customer/GetCustomerEmail"));

var _GetPasswordCustomer = _interopRequireDefault(require("./Customer/GetPasswordCustomer"));

var _GetCustomerWithStatus = _interopRequireDefault(require("./Customer/GetCustomerWithStatus"));

var _GetCustomerInfo = _interopRequireDefault(require("./Customer/GetCustomerInfo"));

var _ListContactData = _interopRequireDefault(require("./Contact/ListContactData"));

var _SaveContactData = _interopRequireDefault(require("./Contact/SaveContactData"));

var _RetrieveEmails = _interopRequireDefault(require("./Email/RetrieveEmails"));

var _ListBoletos = _interopRequireDefault(require("./Boleto/ListBoletos"));

var _GetBoletoData = _interopRequireDefault(require("./Boleto/GetBoletoData"));

var _GetBoletoPDF = _interopRequireDefault(require("./Boleto/GetBoletoPDF"));

var _ListNotaFiscal = _interopRequireDefault(require("./NotaFiscal/ListNotaFiscal"));

var _ImprimirNotaFiscal = _interopRequireDefault(require("./NotaFiscal/ImprimirNotaFiscal"));

var _ListActiveServices = _interopRequireDefault(require("./Service/ListActiveServices"));

var _ListLogins = _interopRequireDefault(require("./SAP/ListLogins"));

var _GetConnectionExtract = _interopRequireDefault(require("./SAP/GetConnectionExtract"));

var _PlanIsAvailable = _interopRequireDefault(require("./PlanProvisional/PlanIsAvailable"));

var _EnablePlanProvisional = _interopRequireDefault(require("./PlanProvisional/EnablePlanProvisional"));

var _OpenTicket = _interopRequireDefault(require("./Ticket/OpenTicket"));

var _ShowAllPlans = _interopRequireDefault(require("./Plan/ShowAllPlans"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  GetCustomerEmail: _GetCustomerEmail.default,
  GetCustomerInfo: _GetCustomerInfo.default,
  GetCustomerWithStatus: _GetCustomerWithStatus.default,
  GetPasswordCustomer: _GetPasswordCustomer.default,
  ChangePassword: _ChangePassword.default,
  ListContactData: _ListContactData.default,
  SaveContactData: _SaveContactData.default,
  ListBoletos: _ListBoletos.default,
  GetBoletoData: _GetBoletoData.default,
  GetBoletoPDF: _GetBoletoPDF.default,
  ListNotaFiscal: _ListNotaFiscal.default,
  ImprimirNotaFiscal: _ImprimirNotaFiscal.default,
  ListActiveServices: _ListActiveServices.default,
  ListLogins: _ListLogins.default,
  GetConnectionExtract: _GetConnectionExtract.default,
  PlanIsAvailable: _PlanIsAvailable.default,
  EnablePlanProvisional: _EnablePlanProvisional.default,
  OpenTicket: _OpenTicket.default,
  ShowAllPlans: _ShowAllPlans.default,
  RetrieveEmails: _RetrieveEmails.default,
  AttendenceListTypes: _AttendenceListTypes.default
};
exports.default = _default;