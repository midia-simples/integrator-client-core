"use strict";

var _index = require("./index");

require("dotenv/config");

var _ListActiveServices = _interopRequireDefault(require("./IntegratorService/Service/ListActiveServices"));

var _ListPlans = _interopRequireDefault(require("./IntegratorService/Plan/ListPlans"));

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


  const data = await _ListPlans.default.run({
    ibge_cidade: '5100250'
  });
  console.log('ListPlans', data);
}

dev();