import { config } from './index';
import 'dotenv/config';
// import GetBoletoData from './IntegratorService/Boleto/GetBoletoData';

async function dev() {
  config.setConfig({
    host: process.env.API_INTEGRATOR_HOST_NAME,
    url: process.env.API_INTEGRATOR_URL,
    user: process.env.API_INTEGRATOR_USER,
    pass: process.env.API_INTEGRATOR_PASS,
    viewLogin: process.env.API_INTEGRATOR_VIEW_LOGIN_CENTRAL_ASSINANTE,
    viewStatus: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE,
  });

  // const data = await GetBoletoData.run({ codfat: '' });
  // console.log(data);
}

dev();
