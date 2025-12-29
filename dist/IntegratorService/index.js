"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AttendenceListTypes = _interopRequireDefault(require("./Attendence/AttendenceListTypes"));

var _VerCadastro = _interopRequireDefault(require("./Cadastro/VerCadastro"));

var _ChangePassword = _interopRequireDefault(require("./Customer/ChangePassword"));

var _ChangePasswordWithPrevious = _interopRequireDefault(require("./Customer/ChangePasswordWithPrevious"));

var _GetCustomerEmail = _interopRequireDefault(require("./Customer/GetCustomerEmail"));

var _GetPasswordCustomer = _interopRequireDefault(require("./Customer/GetPasswordCustomer"));

var _GetCustomerWithStatus = _interopRequireDefault(require("./Customer/GetCustomerWithStatus"));

var _GetCustomerInfo = _interopRequireDefault(require("./Customer/GetCustomerInfo"));

var _GetSpeedServices = _interopRequireDefault(require("./Service/GetSpeedServices"));

var _EditCustomerName = _interopRequireDefault(require("./Customer/EditCustomerName"));

var _ListContactData = _interopRequireDefault(require("./Contact/ListContactData"));

var _SaveContactData = _interopRequireDefault(require("./Contact/SaveContactData"));

var _EditContactData = _interopRequireDefault(require("./Contact/EditContactData"));

var _RetrieveEmails = _interopRequireDefault(require("./Email/RetrieveEmails"));

var _RetrieveEmailsV = _interopRequireDefault(require("./Email/RetrieveEmailsV2"));

var _ListBoletos = _interopRequireDefault(require("./Boleto/ListBoletos"));

var _GeneratePix = _interopRequireDefault(require("./Boleto/GeneratePix"));

var _GetBoletoData = _interopRequireDefault(require("./Boleto/GetBoletoData"));

var _GetBoletoPDF = _interopRequireDefault(require("./Boleto/GetBoletoPDF"));

var _GetFaturas = _interopRequireDefault(require("./Boleto/GetFaturas"));

var _ListNotaFiscal = _interopRequireDefault(require("./NotaFiscal/ListNotaFiscal"));

var _ImprimirNotaFiscal = _interopRequireDefault(require("./NotaFiscal/ImprimirNotaFiscal"));

var _ListActiveServices = _interopRequireDefault(require("./Service/ListActiveServices"));

var _ListLogins = _interopRequireDefault(require("./SAP/ListLogins"));

var _GetConnectionExtract = _interopRequireDefault(require("./SAP/GetConnectionExtract"));

var _PlanIsAvailable = _interopRequireDefault(require("./PlanProvisional/PlanIsAvailable"));

var _EnablePlanProvisional = _interopRequireDefault(require("./PlanProvisional/EnablePlanProvisional"));

var _OpenTicket = _interopRequireDefault(require("./Ticket/OpenTicket"));

var _AddAnexoOnTicket = _interopRequireDefault(require("./Ticket/AddAnexoOnTicket"));

var _FilterPlans = _interopRequireDefault(require("./Plan/FilterPlans"));

var _ShowAllPlans = _interopRequireDefault(require("./Plan/ShowAllPlans"));

var _ListPlans = _interopRequireDefault(require("./Plan/ListPlans"));

var _GetPhonePlans = _interopRequireDefault(require("./SAP/GetPhonePlans"));

var _GetPhoneExpiration = _interopRequireDefault(require("./SAP/GetPhoneExpiration"));

var _GetPhoneExtract = _interopRequireDefault(require("./SAP/GetPhoneExtract"));

var _ListOs = _interopRequireDefault(require("./Os/ListOs"));

var _ListCredits = _interopRequireDefault(require("./MVNO/ListCredits"));

var _AddCredits = _interopRequireDefault(require("./MVNO/AddCredits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  GetCustomerEmail: _GetCustomerEmail.default,
  GetCustomerInfo: _GetCustomerInfo.default,
  GetCustomerWithStatus: _GetCustomerWithStatus.default,
  GetPasswordCustomer: _GetPasswordCustomer.default,
  EditCustomerName: _EditCustomerName.default,
  GetSpeedServices: _GetSpeedServices.default,
  ChangePassword: _ChangePassword.default,
  ChangePasswordWithPrevious: _ChangePasswordWithPrevious.default,
  EditContactData: _EditContactData.default,
  ListContactData: _ListContactData.default,
  SaveContactData: _SaveContactData.default,
  ListBoletos: _ListBoletos.default,
  GetFaturas: _GetFaturas.default,
  GeneratePix: _GeneratePix.default,
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
  FilterPlans: _FilterPlans.default,
  ShowAllPlans: _ShowAllPlans.default,
  RetrieveEmails: _RetrieveEmails.default,
  RetrieveEmailsV2: _RetrieveEmailsV.default,
  AttendenceListTypes: _AttendenceListTypes.default,
  AddAnexoOnTicket: _AddAnexoOnTicket.default,
  ListPlans: _ListPlans.default,
  VerCadastro: _VerCadastro.default,
  GetPhonePlans: _GetPhonePlans.default,
  GetPhoneExpiration: _GetPhoneExpiration.default,
  GetPhoneExtract: _GetPhoneExtract.default,
  ListOs: _ListOs.default,
  AddCredits: _AddCredits.default,
  ListCredits: _ListCredits.default
};
exports.default = _default;