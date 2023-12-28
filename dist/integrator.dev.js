"use strict";

var _index = require("./index");

require("dotenv/config");

var _ListContactData = _interopRequireDefault(require("./IntegratorService/Contact/ListContactData"));

var _EditContactData = _interopRequireDefault(require("./IntegratorService/Contact/EditContactData"));

var _ListBoletos = _interopRequireDefault(require("./IntegratorService/Boleto/ListBoletos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function dev() {
  _index.config.setConfig({
    host: process.env.API_INTEGRATOR_HOST_NAME,
    url: process.env.API_INTEGRATOR_URL,
    user: process.env.API_INTEGRATOR_USER,
    pass: process.env.API_INTEGRATOR_PASS,
    viewLogin: process.env.API_INTEGRATOR_VIEW_LOGIN_CENTRAL_ASSINANTE,
    viewStatus: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE
  }); // const dataList = await ListActiveServices.run({
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


  const data = await _ListBoletos.default.run({
    codcli: '61194'
  }); // const data = await ListContactData.categoryPhone();

  console.log('ListBoletos', data);
}

dev();