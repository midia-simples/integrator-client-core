const config = {};

function setConfig({ host, url, user, pass, viewLogin, viewStatus }) {
  config.url = url;
  config.host = host;
  config.user = user;
  config.pass = pass;
  config.viewLogin = viewLogin;
  config.viewStatus = viewStatus;
}

function getConfig() {
  return config;
}

export default {
  setConfig,
  getConfig,
};
