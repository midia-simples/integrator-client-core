"use strict";

var _index = require("./index");

require("dotenv/config");

async function dev() {
  _index.config.setConfig({
    host: process.env.API_INTEGRATOR_HOST_NAME,
    url: process.env.API_INTEGRATOR_URL,
    user: process.env.API_INTEGRATOR_USER,
    pass: process.env.API_INTEGRATOR_PASS,
    viewLogin: process.env.API_INTEGRATOR_VIEW_LOGIN_CENTRAL_ASSINANTE,
    viewStatus: process.env.API_INTEGRATOR_VIEW_CIENTE_STATUS_ATIVIDADE
  });
  /*
  const { stream } = await IntegratorService.GetBoletoPDF.run({ codfat: 'E0TY0TY883' });
  console.log(stream);
  */


  console.log(await _index.IntegratorService.ListTypes.run());
  /*
  const { types } = await IntegratorService.ListTypes();
  console.log(types);
  */
}

dev();