import { config } from './index';
import 'dotenv/config';
import ListActiveServices from './IntegratorService/Service/ListActiveServices';
import ListPlans from './IntegratorService/Plan/ListPlans';

async function dev() {
  config.setConfig({
    host: process.env.API_INTEGRATOR_HOST_NAME,
    url: process.env.API_INTEGRATOR_URL,
    user: process.env.API_INTEGRATOR_USER,
    pass: process.env.API_INTEGRATOR_PASS,
    viewLogin: process.env.API_INTEGRATOR_VIEW_LOGIN_CENTRAL_ASSINANTE,
    viewStatus: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE,
  });

  // const dataList = await ListActiveServices.run({
  //   codcli: '50553',
  //   statusQuery: { getEqual: false, text: 'Cancelado' },
  // });
  // console.log('ListActiveServices', dataList);

  const data = await ListPlans.run({
    ibge_cidade: '5100250',
  });
  console.log('ListPlans', data);
}

dev();
