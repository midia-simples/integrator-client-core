import dotenv from 'dotenv';
import { config } from './index';
// import ListContactData from './IntegratorService/Contact/ListContactData';
// import EditContactData from './IntegratorService/Contact/EditContactData';
// import ListBoletos from './IntegratorService/Boleto/ListBoletos';
// import RetrieveEmailsV2 from './IntegratorService/Email/RetrieveEmailsV2';
// import ShowAllPlans from './IntegratorService/Plan/ShowAllPlans';
// import FilterPlans from './IntegratorService/Plan/FilterPlans';
// import GetFaturas from './IntegratorService/Boleto/GetFaturas';
// import GetPhonePlans from './IntegratorService/SAP/GetPhonePlans';
// import GetPhoneExpiration from './IntegratorService/SAP/GetPhoneExpiration';
// import GetPhoneExtract from './IntegratorService/SAP/GetPhoneExtract';
// import GetBoletoData from './IntegratorService/Boleto/GetBoletoData';
// import ShowCustomer from './IntegratorService/Customer/ShowCustomer';
// import ListOs from './IntegratorService/Os/ListOs';

dotenv.config();

async function dev() {
  config.setConfig({
    host: process.env.API_INTEGRATOR_HOST_NAME,
    url: process.env.API_INTEGRATOR_URL,
    user: process.env.API_INTEGRATOR_USER,
    pass: process.env.API_INTEGRATOR_PASS,
    viewLogin: process.env.API_INTEGRATOR_VIEW_LOGIN_CENTRAL_ASSINANTE,
    viewStatus: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE,
  });

  // const phonePlans = await GetPhonePlans.run({
  //   codcli: '50553',
  // });
  // console.log(phonePlans, 'phonePlans');

  // const phoneExpiration = await GetPhoneExpiration.run({
  //   codsercli: 'BTYBCJ457S',
  // });
  // console.log(phoneExpiration, 'phoneExpiration');

  // const phoneExtract = await GetPhoneExtract.run({
  //   codsercli: 'BTYBCJ457S',
  //   data_ini: '01/01/2024',
  //   data_fim: '31/08/2024',
  //   data_venc: '31/08/2024',
  //   codflv: 'HBTK0T9WMK',
  // });
  // console.log(phoneExtract, 'phoneExtract');

  // const data = await GetFaturas.run({
  //   codcli: '50553',
  //   // codfat: '02V10WT5D4',
  //   codsercli: 'FN3D0T4XDU',
  // });
  // console.log(data);

  // const data = await GetBoletoData.run({
  //   codfat: 'HBTL0XPKF6',
  // });
  // console.log(data);

  // const filterPlans = await FilterPlans.run({
  //   codcli: '27158',
  //   // status: 'Serviço Habilitado',
  // });
  // console.log(filterPlans, 'filterPlans');

  // const dataList = await ListActiveServices.run({
  //   codcli: '50553',
  //   statusQuery: { getEqual: false, text: 'Cancelado' },
  // });
  // console.log('ListActiveServices', dataList);

  // const data = await ListPlans.run({
  //   ibge_cidade: '5100250',
  // });

  // const resp = await SaveContactData.run({
  //   codcli: '52854',
  //   celular: '66999570111',
  // });

  // console.log('SaveContactData', resp);

  // const resp = await EditContactData.run({
  //   codcli: '52854',
  //   codco_cl_p: '09XLXPHT2D',
  //   // e_mail: 'teste0001@gmail.com',
  //   celular: '',
  // });

  // console.log('EditContactData', resp);

  // const data = await ListContactData.categoryPhone();

  // const data = await ListBoletos.run({
  //   codcli: '50553',
  // });
  // console.log('ListBoletos', data);

  // const emails = await RetrieveEmailsV2.run({
  //   document: '',
  // });
  // console.log(emails);

  // const data = await ShowCustomer.run({
  //   document: '051.603.411-10',
  // });

  // console.log('User', data.data.data);

  // const data = await ListOs.run({
  //   codview: '01A20TL08D',
  //   codcli: '50553',
  // });
  // console.log('ListOs', data);
}

dev();
