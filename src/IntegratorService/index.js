import AttendenceListTypes from './Attendence/AttendenceListTypes';

import ChangePassword from './Customer/ChangePassword';
import ChangePasswordWithPrevious from './Customer/ChangePasswordWithPrevious';
import GetCustomerEmail from './Customer/GetCustomerEmail';
import GetPasswordCustomer from './Customer/GetPasswordCustomer';
import GetCustomerWithStatus from './Customer/GetCustomerWithStatus';
import GetCustomerInfo from './Customer/GetCustomerInfo';
import GetSpeedServices from './Service/GetSpeedServices';
import EditCustomerName from './Customer/EditCustomerName';

import ListContactData from './Contact/ListContactData';
import SaveContactData from './Contact/SaveContactData';
import EditContactData from './Contact/EditContactData';

import RetrieveEmails from './Email/RetrieveEmails';

import ListBoletos from './Boleto/ListBoletos';
import GetBoletoData from './Boleto/GetBoletoData';
import GetBoletoPDF from './Boleto/GetBoletoPDF';

import ListNotaFiscal from './NotaFiscal/ListNotaFiscal';
import ImprimirNotaFiscal from './NotaFiscal/ImprimirNotaFiscal';

import ListActiveServices from './Service/ListActiveServices';

import ListLogins from './SAP/ListLogins';
import GetConnectionExtract from './SAP/GetConnectionExtract';

import PlanIsAvailable from './PlanProvisional/PlanIsAvailable';
import EnablePlanProvisional from './PlanProvisional/EnablePlanProvisional';

import OpenTicket from './Ticket/OpenTicket';
import AddAnexoOnTicket from './Ticket/AddAnexoOnTicket';

import FilterPlans from './Plan/FilterPlans';
import ShowAllPlans from './Plan/ShowAllPlans';

export default {
  GetCustomerEmail,
  GetCustomerInfo,
  GetCustomerWithStatus,
  GetPasswordCustomer,
  EditCustomerName,
  GetSpeedServices,
  ChangePassword,
  ChangePasswordWithPrevious,
  EditContactData,
  ListContactData,
  SaveContactData,
  ListBoletos,
  GetBoletoData,
  GetBoletoPDF,
  ListNotaFiscal,
  ImprimirNotaFiscal,
  ListActiveServices,
  ListLogins,
  GetConnectionExtract,
  PlanIsAvailable,
  EnablePlanProvisional,
  OpenTicket,
  FilterPlans,
  ShowAllPlans,
  RetrieveEmails,
  AttendenceListTypes,
  AddAnexoOnTicket,
};
