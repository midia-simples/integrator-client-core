import axios from 'axios';

import config from '~/config';

class Client {
  constructor() {
    this._api = async (data, additionalHeaders = {}) => {
      const { url } = config.getConfig();

      const request = await axios.post(url, data, {
        responseType: 'text',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip',
          ApplicationV: 'Integrator/6',
          ...additionalHeaders,
        },
      });
      return {
        status: request.status,
        data: request.data,
      };
    };

    this._createBody = (method = 'list', submethod, params) => {
      const { user, pass } = config.getConfig();

      const paramsWithCredentials = {
        ...params,
        _user: user,
        _passwd: pass,
      };

      return {
        request: {
          sendRequest: 'integrator.server',
          method,
          submethod,
          params: paramsWithCredentials,
        },
      };
    };
  }

  get api() {
    return this._api;
  }

  get createBody() {
    return this._createBody;
  }
}
export default Client;
